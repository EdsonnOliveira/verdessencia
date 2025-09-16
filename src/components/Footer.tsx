import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-secondary text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="mb-4">
                <img 
                  src="/logo-white.png" 
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
                <span className="text-primary">📞</span>
                <span className="text-gray-300">[telefone / WhatsApp]</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">📧</span>
                <span className="text-gray-300">contato@verdessencia.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">🌐</span>
                <span className="text-gray-300">www.verdessencia.com</span>
              </div>
            </div>
          </div>
          
          {/* Redes Sociais */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <span className="text-primary">🌍</span>
                <span className="text-gray-300">LinkedIn | Instagram | Facebook</span>
              </div>
              <div className="pt-4">
                <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm">
                  🔒 Política de Privacidade
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Linha divisória e copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Verdessência. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
