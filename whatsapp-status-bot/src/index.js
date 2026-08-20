import express from 'express';
import QRCode from 'qrcode';
import cron from 'node-cron';
import axios from 'axios';
import pino from 'pino';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import makeWASocket, {
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion
} from '@whiskeysockets/baileys';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const IMAGE_URL = process.env.IMAGE_URL || 'https://infinitytechservices.com.br/og-imagem.jpeg';
const CAPTION_TEXT = process.env.CAPTION_TEXT || 'InfinityTech Services | Soluções em T.I. e Desenvolvimento Web\n\n🔗 Acesse nosso site: https://infinitytechservices.com.br';
// Agendamento padrão: a cada 2 dias às 09:00 (cron: 0 9 */2 * *)
const CRON_SCHEDULE = process.env.CRON_SCHEDULE || '0 9 */2 * *';

let qrCodeDataUrl = null;
let connectionStatus = 'Desconectado';
let isConnecting = false;
let lastPostedAt = null;
let sock = null;

const logger = pino({ level: 'info' });

// Armazenamento em memória leve para contatos e sessões
const contacts = {};

async function startWhatsAppBot() {
  if (isConnecting) return;
  isConnecting = true;
  connectionStatus = 'Conectando...';

  const authFolder = path.join(__dirname, '../auth_info');
  if (!fs.existsSync(authFolder)) {
    fs.mkdirSync(authFolder, { recursive: true });
  }

  const { state, saveCreds } = await useMultiFileAuthState(authFolder);
  const { version } = await fetchLatestBaileysVersion();

  sock = makeWASocket({
    version,
    auth: state,
    logger: pino({ level: 'silent' }),
    browser: ['InfinityTech Bot', 'Chrome', '1.0.0']
  });

  sock.ev.on('contacts.upsert', (newContacts) => {
    for (const c of newContacts) {
      if (c.id) contacts[c.id] = c;
    }
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      qrCodeDataUrl = await QRCode.toDataURL(qr);
      logger.info('Novo QR Code gerado. Acesse a rota /qr no navegador para escanear.');
    }

    if (connection === 'close') {
      isConnecting = false;
      const shouldReconnect = (lastDisconnect?.error)?.output?.statusCode !== DisconnectReason.loggedOut;
      connectionStatus = shouldReconnect ? 'Reconectando...' : 'Desconectado (Sessão encerrada)';
      logger.warn(`Conexão fechada. Motivo: ${lastDisconnect?.error}. Reconectar: ${shouldReconnect}`);
      if (shouldReconnect) {
        setTimeout(startWhatsAppBot, 5000);
      } else {
        qrCodeDataUrl = null;
      }
    } else if (connection === 'open') {
      isConnecting = false;
      connectionStatus = 'Conectado ✅';
      qrCodeDataUrl = null;
      logger.info('WhatsApp conectado com sucesso!');
    }
  });
}

async function publishStatus() {
  if (connectionStatus !== 'Conectado ✅' || !sock) {
    logger.warn('Tentativa de postagem no Status falhou: WhatsApp não está conectado.');
    return { success: false, message: 'WhatsApp não está conectado' };
  }

  try {
    logger.info(`Baixando imagem do site: ${IMAGE_URL}`);
    const response = await axios.get(IMAGE_URL, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(response.data, 'binary');

    // Identificar contatos para enviar a permissão de visualização do Status
    let statusJidList = Object.keys(contacts).filter(jid => jid.endsWith('@s.whatsapp.net'));

    const selfJid = sock.user?.id ? sock.user.id.split(':')[0] + '@s.whatsapp.net' : null;
    if (selfJid && !statusJidList.includes(selfJid)) {
      statusJidList.push(selfJid);
    }

    logger.info(`Publicando imagem no Status do WhatsApp (status@broadcast) para ${statusJidList.length} destinatário(s)...`);
    
    const sendOptions = statusJidList.length > 0 ? { statusJidList } : {};

    await sock.sendMessage('status@broadcast', {
      image: imageBuffer,
      caption: CAPTION_TEXT
    }, sendOptions);

    lastPostedAt = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    logger.info(`Status publicado com sucesso em ${lastPostedAt}!`);
    return { success: true, timestamp: lastPostedAt };
  } catch (error) {
    logger.error('Erro ao publicar no Status:', error);
    return { success: false, error: error.message };
  }
}

// Configuração do Servidor Express
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>InfinityTech - Bot WhatsApp Status</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0f172a; color: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
          .card { background: #1e293b; padding: 2rem; border-radius: 12px; border: 1px solid #334155; text-align: center; max-width: 480px; width: 90%; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
          h1 { color: #38bdf8; font-size: 1.5rem; margin-bottom: 1rem; }
          .status { display: inline-block; padding: 0.5rem 1rem; border-radius: 20px; font-weight: bold; background: #334155; margin-bottom: 1.5rem; }
          .btn { display: inline-block; background: #2563eb; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: 600; margin: 0.5rem; border: none; cursor: pointer; }
          .btn:hover { background: #1d4ed8; }
          .btn-success { background: #16a34a; }
          .btn-success:hover { background: #15803d; }
          p { color: #94a3b8; font-size: 0.9rem; line-height: 1.5; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>🤖 InfinityTech Status Bot</h1>
          <div class="status">Status: ${connectionStatus}</div>
          <p><strong>Última Postagem:</strong> ${lastPostedAt || 'Nenhuma postagem realizada ainda'}</p>
          <p><strong>Frequência:</strong> A cada 2 dias (48h)</p>
          <div style="margin-top: 1.5rem;">
            ${connectionStatus !== 'Conectado ✅' ? '<a href="/qr" class="btn">📱 Escanear QR Code</a>' : ''}
            <a href="/post-now" class="btn btn-success">🚀 Postar no Status Agora</a>
          </div>
        </div>
      </body>
    </html>
  `);
});

app.get('/qr', (req, res) => {
  if (connectionStatus === 'Conectado ✅') {
    return res.send(`
      <script>window.location.href = '/';</script>
    `);
  }

  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="refresh" content="5">
        <title>Escanear QR Code - InfinityTech Bot</title>
        <style>
          body { font-family: system-ui, sans-serif; background: #0f172a; color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; margin: 0; }
          .box { background: #1e293b; padding: 2rem; border-radius: 12px; text-align: center; max-width: 400px; border: 1px solid #334155; }
          img { width: 260px; height: 260px; border-radius: 8px; background: white; padding: 10px; margin: 1rem 0; }
          ol { text-align: left; color: #94a3b8; line-height: 1.6; font-size: 0.9rem; }
        </style>
      </head>
      <body>
        <div class="box">
          <h2>📱 Conectar WhatsApp</h2>
          <p>Escaneie o QR Code abaixo com o seu iPhone:</p>
          ${qrCodeDataUrl ? `<img src="${qrCodeDataUrl}" alt="QR Code WhatsApp" />` : '<p style="color: #f59e0b;">Gerando QR Code... Aguarde alguns segundos.</p>'}
          <ol>
            <li>Abra o <strong>WhatsApp</strong> no iPhone</li>
            <li>Vá em <strong>Configurações</strong></li>
            <li>Toque em <strong>Aparelhos Conectados</strong></li>
            <li>Toque em <strong>Conectar um Aparelho</strong> e aponte para esta tela</li>
          </ol>
        </div>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', connectionStatus, lastPostedAt });
});

app.get('/post-now', async (req, res) => {
  const result = await publishStatus();
  if (result.success) {
    res.send(`
      <script>
        alert("Status publicado no WhatsApp com sucesso!");
        window.location.href = "/";
      </script>
    `);
  } else {
    res.send(`
      <script>
        alert("Falha ao publicar no Status: ${result.message || result.error}");
        window.location.href = "/";
      </script>
    `);
  }
});

// Inicia o servidor e a conexão
app.listen(PORT, () => {
  logger.info(`Servidor do Bot rodando na porta ${PORT}`);
  startWhatsAppBot();

  // Agendador de tarefas (Cron: a cada 2 dias às 09:00 BRT)
  cron.schedule(CRON_SCHEDULE, () => {
    logger.info('Executando tarefa agendada: Publicação no Status do WhatsApp...');
    publishStatus();
  });
});
