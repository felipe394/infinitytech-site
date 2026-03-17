import { Award, CheckCircle, Clock } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: 'Qualidade Garantida',
    description: 'Comprometidos com excelência em cada projeto que realizamos.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: CheckCircle,
    title: 'Soluções Personalizadas',
    description: 'Cada cliente recebe atendimento único e adaptado às suas necessidades.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Clock,
    title: 'Suporte Rápido',
    description: 'Respondemos rapidamente para resolver suas demandas de T.I.',
    color: 'from-green-500 to-emerald-500'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm uppercase tracking-wider">Por Que Escolher a InfinityTech</span>
          <h2 className="text-4xl lg:text-5xl mt-4 mb-6">
            Nosso Compromisso Com Você
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos iniciando nossa jornada com foco total na satisfação do cliente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Construindo Nossa Reputação Juntos
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Estamos começando nossa trajetória e cada cliente é especial para nós. 
            Seja um dos primeiros a experimentar nosso serviço dedicado e personalizado!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-left">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
              <div className="text-gray-600">Dedicação</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
              <div className="text-gray-600">Suporte</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-2xl font-bold text-blue-600 mb-1">2026</div>
              <div className="text-gray-600">Início</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}