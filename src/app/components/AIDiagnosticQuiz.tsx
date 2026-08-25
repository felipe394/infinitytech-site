import { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Send, Bot } from 'lucide-react';

export interface Question {
  id: string;
  category: string;
  question: string;
  options: string[];
}

export const diagnosticQuestions: Question[] = [
  // Categoria 1: Sobre sua Empresa & Momento
  {
    id: 'q1',
    category: 'Sobre sua empresa',
    question: 'Qual área você tem mais interesse em aplicar IA agora?',
    options: [
      'Marketing e Comunicação',
      'Vendas e Atendimento ao Cliente',
      'Operações e Processos Internos',
      'Recursos Humanos & Treinamento',
      'Financeiro e Gestão',
      'Visão geral da empresa (ainda não sei)',
    ],
  },
  {
    id: 'q2',
    category: 'Sobre sua empresa',
    question: 'Qual o tamanho atual da sua equipe ou empresa?',
    options: [
      'Profissional autônomo / Solo',
      '2 a 10 colaboradores',
      '11 a 50 colaboradores',
      'Mais de 50 colaboradores',
    ],
  },

  // Categoria 2: Atendimento e Vendas
  {
    id: 'q3',
    category: 'Atendimento & Vendas',
    question: 'Como funciona o atendimento ao cliente na sua empresa hoje?',
    options: [
      'Totalmente manual via WhatsApp / Email',
      'Possuímos respostas prontas, mas exige humanos 100% do tempo',
      'Já usamos chatbots simples (baseados em regras/menus)',
      'Possuímos equipe dedicada 24/7',
    ],
  },
  {
    id: 'q4',
    category: 'Atendimento & Vendas',
    question: 'Qual o principal desafio de vendas ou geração de leads?',
    options: [
      'Demora para responder novos contatos',
      'Falta de tempo para qualificar se o cliente tem perfil',
      'Produzir conteúdo de vendas persuasivo rapidamente',
      'Fazer follow-up e acompanhar propostas pendentes',
    ],
  },

  // Categoria 3: Operações & Documentos
  {
    id: 'q5',
    category: 'Operações & Processos',
    question: 'Sua empresa lida com grande volume de documentos, contratos ou relatórios?',
    options: [
      'Sim, gastamos muitas horas lendo e analisando documentos',
      'Moderado, mas gostaríamos de automatizar a extração de dados',
      'Pouco, nosso foco é mais em mensagens e tarefas diárias',
    ],
  },
  {
    id: 'q6',
    category: 'Operações & Processos',
    question: 'Qual tarefa repetitiva mais consome o tempo da sua equipe?',
    options: [
      'Digitação de dados e alimentação de planilhas/sistemas',
      'Criação de relatórios, resumos e apresentações',
      'Respostas a dúvidas frequentes de clientes ou funcionários',
      'Agendamento de reuniões e organização de tarefas',
    ],
  },

  // Categoria 4: Uso de Ferramentas de IA
  {
    id: 'q7',
    category: 'Uso Atual de IA',
    question: 'Sua empresa já utiliza alguma ferramenta de Inteligência Artificial?',
    options: [
      'Não utilizamos nenhuma ferramenta de IA ainda',
      'Utilizamos pontualmente (ex: ChatGPT gratuito para textos)',
      'Usamos ferramentas pagas sem integração nos nossos sistemas',
      'Já temos algumas automações com IA rodando',
    ],
  },
  {
    id: 'q8',
    category: 'Uso Atual de IA',
    question: 'Qual o nível de conhecimento da equipe sobre Inteligência Artificial?',
    options: [
      'Iniciante (pouco ou nenhum conhecimento prático)',
      'Intermediário (alguns funcionários usam por conta própria)',
      'Avançado (buscamos criar soluções personalizadas)',
    ],
  },

  // Categoria 5: Objetivos & Expectativas
  {
    id: 'q9',
    category: 'Objetivo Principal',
    question: 'Qual o principal resultado que você espera ao implementar IA?',
    options: [
      'Reduzir custos operacionais e tempo de trabalho',
      'Aumentar o faturamento e vendas com atendimento 24/7',
      'Melhorar a experiência e satisfação do cliente',
      'Inovar e sair na frente dos concorrentes do mercado',
    ],
  },
  {
    id: 'q10',
    category: 'Investimento & Prazo',
    question: 'Em quanto tempo você pretende iniciar a implementação?',
    options: [
      'Imediatamente (nas próximas semanas)',
      'Nos próximos 30 a 60 dias',
      'Apenas pesquisando para o futuro',
    ],
  },
];

export function AIDiagnosticQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const [leadData, setLeadData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });

  const currentQ = diagnosticQuestions[currentIndex];
  const totalQuestions = diagnosticQuestions.length;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  const handleSelectOption = (option: string) => {
    const updatedAnswers = { ...answers, [currentQ.id]: option };
    setAnswers(updatedAnswers);

    if (currentIndex < totalQuestions - 1) {
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 200);
    } else {
      setTimeout(() => {
        setIsCompleted(true);
      }, 200);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSubmitDiagnostic = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const destinationEmail = 'infinitytechservices10@gmail.com';

    const fullDiagnostic = diagnosticQuestions.map((q) => ({
      category: q.category,
      question: q.question,
      answer: answers[q.id] || 'Não respondida',
    }));

    // Respostas formatadas em texto limpo e legível
    const formattedDiagnosticText = fullDiagnostic
      .map((item, idx) => `PERGUNTA ${idx + 1}: ${item.question}\nRESPOSTA: ${item.answer}`)
      .join('\n\n----------------------------------------\n\n');

    // 1. Enviar via FormSubmit API com modelo HTML e Formatação Premium
    const formSubmitToken = 'df1cf6128f8240f0742413b74a7f0da4';
    
    fetch(`https://formsubmit.co/ajax/${formSubmitToken}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        _subject: `🤖 Novo Diagnóstico de IA: ${leadData.name} (${leadData.company || 'Empresa'})`,
        _template: 'table',
        _captcha: 'false',
        _autorespond: 'Obrigado por enviar seu Diagnóstico de IA para a InfinityTech Services! Em breve nossa equipe entrará em contato.',
        '1. NOME COMPLETO': leadData.name,
        '2. E-MAIL DO CLIENTE': leadData.email,
        '3. WHATSAPP / TELEFONE': leadData.phone,
        '4. EMPRESA': leadData.company || 'Não informada',
        '5. DIAGNÓSTICO DETALHADO': formattedDiagnosticText,
      }),
    })
      .then(() => {
        setIsSubmitting(false);
        setSubmittedSuccess(true);
      })
      .catch(() => {
        setIsSubmitting(false);
        setSubmittedSuccess(true);
      });
  };

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(0, 212, 255, 0.2)',
        borderRadius: '24px',
        padding: '36px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,212,255,0.1)',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {!isCompleted ? (
        <>
          {/* Header da pergunta */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#00d4ff',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                background: 'rgba(0, 212, 255, 0.1)',
                padding: '4px 14px',
                borderRadius: '100px',
                border: '1px solid rgba(0, 212, 255, 0.25)',
              }}
            >
              {currentQ.category}
            </span>
            <span style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)', fontWeight: 600 }}>
              Pergunta {currentIndex + 1} de {totalQuestions}
            </span>
          </div>

          {/* Barra de Progresso */}
          <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '100px', marginBottom: '32px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${progressPercent}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #00d4ff, #6366f1)',
                borderRadius: '100px',
                transition: 'width 0.3s ease',
              }}
            />
          </div>

          {/* Pergunta principal */}
          <h3
            style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)',
              fontWeight: 700,
              color: '#ffffff',
              fontFamily: 'Space Grotesk, sans-serif',
              marginBottom: '28px',
              lineHeight: 1.35,
            }}
          >
            {currentQ.question}
          </h3>

          {/* Lista de Opções */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
            {currentQ.options.map((option) => {
              const isSelected = answers[currentQ.id] === option;
              return (
                <button
                  key={option}
                  onClick={() => handleSelectOption(option)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    width: '100%',
                    padding: '16px 20px',
                    textAlign: 'left',
                    borderRadius: '14px',
                    background: isSelected
                      ? 'rgba(0, 212, 255, 0.15)'
                      : 'rgba(255, 255, 255, 0.04)',
                    border: isSelected
                      ? '1px solid #00d4ff'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                    color: '#ffffff',
                    fontSize: '15px',
                    fontWeight: isSelected ? 600 : 400,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? '0 0 15px rgba(0, 212, 255, 0.2)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    }
                  }}
                >
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      border: isSelected ? '6px solid #00d4ff' : '2px solid rgba(255, 255, 255, 0.4)',
                      background: isSelected ? '#ffffff' : 'transparent',
                      flexShrink: 0,
                      transition: 'all 0.2s ease',
                    }}
                  />
                  <span>{option}</span>
                </button>
              );
            })}
          </div>

          {/* Navegação Inferior */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                border: 'none',
                color: currentIndex === 0 ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.7)',
                fontSize: '14px',
                fontWeight: 600,
                cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
              }}
            >
              <ArrowLeft size={18} /> Voltar Pergunta
            </button>
            <span style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.4)' }}>
              Selecione uma opção para avançar
            </span>
          </div>
        </>
      ) : submittedSuccess ? (
        /* Tela de Sucesso */
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(37, 211, 102, 0.15)',
              border: '1px solid #25D366',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              color: '#25D366',
            }}
          >
            <CheckCircle2 size={36} />
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', fontFamily: 'Space Grotesk, sans-serif', marginBottom: '12px' }}>
            Diagnóstico Enviado com Sucesso!
          </h3>
          <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.7)', maxWidth: '500px', margin: '0 auto 28px', lineHeight: 1.6 }}>
            Obrigado, <strong>{leadData.name}</strong>! Recebemos suas respostas. Nossa equipe analisará seu perfil de IA e entrará em contato em breve para apresentar a solução ideal.
          </p>
          <button
            onClick={() => {
              setIsCompleted(false);
              setCurrentIndex(0);
              setAnswers({});
              setSubmittedSuccess(false);
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              padding: '12px 24px',
              borderRadius: '100px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Refazer Diagnóstico
          </button>
        </div>
      ) : (
        /* Form Final de Dados do Cliente */
        <div>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(99, 102, 241, 0.15)', border: '1px solid rgba(99, 102, 241, 0.3)', padding: '6px 16px', borderRadius: '100px', color: '#a855f7', fontSize: '13px', fontWeight: 600, marginBottom: '16px' }}>
              <Sparkles size={16} /> Diagnóstico Finalizado!
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', fontFamily: 'Space Grotesk, sans-serif', marginBottom: '8px' }}>
              Onde devemos enviar a análise da sua empresa?
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)' }}>
              Preencha seus dados abaixo para receber um plano personalizado de IA.
            </p>
          </div>

          <form onSubmit={handleSubmitDiagnostic} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '6px' }}>
                Seu Nome Completo *
              </label>
              <input
                type="text"
                required
                value={leadData.name}
                onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                placeholder="Ex: Roberto Silva"
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.05)',
                  color: '#ffffff',
                  fontSize: '15px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '6px' }}>
                  E-mail Profissional *
                </label>
                <input
                  type="email"
                  required
                  value={leadData.email}
                  onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                  placeholder="seu@empresa.com.br"
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(255,255,255,0.05)',
                    color: '#ffffff',
                    fontSize: '15px',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '6px' }}>
                  WhatsApp / Telefone *
                </label>
                <input
                  type="tel"
                  required
                  value={leadData.phone}
                  onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                  placeholder="(11) 99999-9999"
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(255,255,255,0.05)',
                    color: '#ffffff',
                    fontSize: '15px',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '6px' }}>
                Nome da Empresa (Opcional)
              </label>
              <input
                type="text"
                value={leadData.company}
                onChange={(e) => setLeadData({ ...leadData, company: e.target.value })}
                placeholder="Ex: Minha Empresa Tech"
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.05)',
                  color: '#ffffff',
                  fontSize: '15px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="shimmer-btn"
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '100px',
                border: 'none',
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '10px',
              }}
            >
              {isSubmitting ? 'Enviando Diagnóstico...' : 'Receber Diagnóstico Gratuito'} <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
