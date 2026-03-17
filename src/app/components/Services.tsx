import { Cloud, Code, Shield, Smartphone, HardDrive, Network } from 'lucide-react';

const services = [
  {
    icon: HardDrive,
    title: 'Backups & Formatação',
    description: 'Backup completo de dados, formatação de computadores e reinstalação de sistemas operacionais.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Code,
    title: 'Desenvolvimento Web',
    description: 'Criação de sites profissionais, WordPress e soluções web personalizadas para seu negócio.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Network,
    title: 'Redes & Cabeamento',
    description: 'Instalação e configuração de redes, cabeamento estruturado e infraestrutura de T.I.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Shield,
    title: 'Instalação de Sistemas',
    description: 'Instalação profissional de sistemas operacionais Windows, Linux e configuração completa.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Smartphone,
    title: 'Suporte Técnico',
    description: 'Assistência técnica especializada para resolver problemas de hardware e software.',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Cloud,
    title: 'Hospedagem & WordPress',
    description: 'Hospedagem de sites, configuração de WordPress e gestão de domínios.',
    color: 'from-violet-500 to-purple-500'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm uppercase tracking-wider">Nossos Serviços</span>
          <h2 className="text-4xl lg:text-5xl mt-4 mb-6">
            Soluções Completas em Tecnologia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços de T.I. para levar sua empresa ao próximo nível
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}