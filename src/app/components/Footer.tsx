import { Instagram, Phone } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo className="h-12 w-auto mb-4" variant="white" />
            <p className="text-gray-400 mb-4">
              Transformando negócios através da tecnologia.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/infinitytechservices" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Backups & Formatação</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Desenvolvimento Web</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Redes & Cabeamento</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Instalação de SO</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">WordPress & Hospedagem</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>(11) 94583-1201</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={16} />
                <span>@infinitytechservices</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 InfinityTech Services. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}