# 🤖 Bot de Agendamento do WhatsApp Status - InfinityTech Services

Este projeto é um bot autônomo para **publicar a cada 2 dias** a imagem do seu site (`og-imagem.jpeg`) com o link (`https://infinitytechservices.com.br`) no **Status do seu WhatsApp**.

Ele é 100% gratuito e não consome recursos do seu site na Vercel.

---

## 🚀 Como Hospedar 100% Grátis no Render.com

### Passo 1: Subir a pasta no GitHub
1. Certifique-se de que a pasta `whatsapp-status-bot` esteja no seu repositório do GitHub (pode ser em um repositório separado ou junto com o site).

### Passo 2: Criar a aplicação no Render.com
1. Acesse **[Render.com](https://render.com)** e crie uma conta gratuita.
2. No painel, clique em **New +** -> **Web Service**.
3. Conecte sua conta do GitHub e selecione o repositório do projeto.
4. Preencha as configurações:
   - **Name**: `infinitytech-whatsapp-bot`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free` (R$ 0,00/mês para sempre)
5. Clique em **Create Web Service**.

### Passo 3: Conectar o WhatsApp no iPhone (QR Code)
1. Assim que a implantação for concluída, o Render gerará um link público para sua aplicação (ex: `https://infinitytech-whatsapp-bot.onrender.com`).
2. Abra essa URL no navegador e adicione `/qr` no final (ex: `https://infinitytech-whatsapp-bot.onrender.com/qr`).
3. No seu iPhone:
   - Abra o **WhatsApp** -> **Configurações** -> **Aparelhos Conectados** -> **Conectar um Aparelho**.
   - Aponte a câmera para a tela para ler o QR Code.
4. Pronto! O status mudará para **Conectado ✅**.

---

## ⏰ Passo 4: Manter o Render Online 24/7 (Manter Acordado Grátis)

O plano gratuito do Render entra em modo de espera após 15 minutos sem acessos. Para que o bot fique ligado 24 horas por dia postando de 2 em 2 dias:

1. Acesse **[UptimeRobot.com](https://uptimerobot.com)** (Plano 100% gratuito).
2. Clique em **Add New Monitor**:
   - **Monitor Type**: HTTP(s)
   - **Friendly Name**: Bot WhatsApp Keep Alive
   - **URL (or IP)**: `https://seu-bot.onrender.com/health`
   - **Monitoring Interval**: Every 5 minutes
3. Salve o monitor. O UptimeRobot enviará um sinal a cada 5 minutos para o seu bot, garantindo que ele fique **online 24 horas por dia, 365 dias por ano, sem gastar nada!**

---

## 🛠️ Testar Localmente no Mac

Caso queira testar ou rodar direto no seu computador:

```bash
cd whatsapp-status-bot
npm install
npm start
```

Acesse `http://localhost:3000/qr` no seu navegador para conectar pelo iPhone e testar o disparo manual pelo botão **Postar no Status Agora**.
