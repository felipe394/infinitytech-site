import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero-it.png';

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
                🚀 Tecnologia • Suporte • Desenvolvimento Web
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-gray-900">Soluções em T.I.</span>
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Para Seu Negócio
              </span>
              <span className="block text-gray-900 text-3xl lg:text-4xl mt-2 font-semibold">
                Crescer Sem Limites
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Oferecemos soluções completas em tecnologia: desde backups e formatação até desenvolvimento web, 
              infraestrutura de rede e muito mais. Seu parceiro ideal em T.I.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Solicitar Orçamento
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-3xl transform rotate-3"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage}
                alt="Ambiente profissional de T.I. com servidores e monitores"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}