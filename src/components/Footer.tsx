import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-white" style={{backgroundColor: '#363d35'}}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="mb-4">
                <img 
                  src="/logo-color.png" 
                  alt="Verdessência" 
                  className="h-10 sm:h-12 w-auto"
                />
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                A essência da limpeza sustentável para empresas conscientes. 
                Transformamos práticas de limpeza em estratégias de sustentabilidade.
              </p>
            </div>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="#56a263" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span className="text-gray-300">[telefone / WhatsApp]</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="#56a263" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="text-gray-300">contato@verdessencia.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="#56a263" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                <span className="text-gray-300">www.verdessencia.com</span>
              </div>
            </div>
          </div>
          
          {/* Redes Sociais */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="#56a263" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                <span className="text-gray-300">LinkedIn | Instagram | Facebook</span>
              </div>
              <div className="pt-4">
                <a href="#" className="text-gray-300 hover:text-[#56a263] transition-colors duration-200 text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="#56a263" viewBox="0 0 24 24">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                  </svg>
                  Política de Privacidade
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Linha divisória e copyright */}
        <div className="border-t border-white mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Verdessência. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
