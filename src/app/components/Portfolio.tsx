import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'Sistema de Cloud Enterprise',
    category: 'Cloud Computing',
    image: 'https://images.unsplash.com/photo-1762163516269-3c143e04175c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnMlMjBkYXRhY2VudGVyfGVufDF8fHx8MTc3MzczNDUwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Migração completa de infraestrutura para AWS com 99.9% de uptime'
  },
  {
    title: 'Plataforma de E-commerce',
    category: 'Desenvolvimento Web',
    image: 'https://images.unsplash.com/photo-1649698145660-d30f91023b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nJTIwc2NyZWVufGVufDF8fHx8MTc3MzcxNTQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Sistema completo de vendas online com + 100k transações/mês'
  },
  {
    title: 'Site para Casamento',
    category: 'Sites para Casamentos',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Sites personalizados para casamentos com lista de presentes, confirmação de presença e galeria de fotos'
  },
  {
    title: 'Sistema de Segurança',
    category: 'Cibersegurança',
    image: 'https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHByb3RlY3Rpb258ZW58MXx8fHwxNzczNzE4NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Implementação de firewall avançado e proteção contra ameaças'
  },
  {
    title: 'App Mobile Corporativo',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc3MzY5Njk3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Aplicativo para gestão de equipes com + 50k downloads'
  },
  {
    title: 'Solução de IA',
    category: 'Inteligência Artificial',
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzM3MDQxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Sistema de Machine Learning para análise preditiva de vendas'
  },
  {
    title: 'Dashboard Analytics',
    category: 'Big Data',
    image: 'https://images.unsplash.com/photo-1646153114001-495dfb56506d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MzcxNTM1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Plataforma de visualização de dados em tempo real'
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm uppercase tracking-wider">Portfólio</span>
          <h2 className="text-4xl lg:text-5xl mt-4 mb-6">
            Projetos de Sucesso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos que transformaram negócios
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
