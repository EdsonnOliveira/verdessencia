import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Fecha o menu mobile após clicar
  };

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 transition-shadow duration-300 ${
      isScrolled || isMobileMenuOpen ? 'shadow-lg' : 'shadow-none'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
              src="/logo.png" 
              alt="Verdessência" 
              className="h-8 sm:h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-primary font-medium hover:text-secondary transition-colors duration-200"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('quem-somos')}
              className="text-gray-800 hover:text-primary transition-colors duration-200"
            >
              Quem Somos
            </button>
            <button 
              onClick={() => scrollToSection('solucoes')}
              className="text-gray-800 hover:text-primary transition-colors duration-200"
            >
              Soluções
            </button>
            <button 
              onClick={() => scrollToSection('diferenciais')}
              className="text-gray-800 hover:text-primary transition-colors duration-200"
            >
              Diferenciais
            </button>
            <button 
              onClick={() => scrollToSection('cases')}
              className="text-gray-800 hover:text-primary transition-colors duration-200"
            >
              Cases
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-800 hover:text-primary transition-colors duration-200"
            >
              Contato
            </button>
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Free Quote Button */}
            <button 
              onClick={() => scrollToSection('chamado-final')}
              className="bg-primary hover:bg-secondary text-white font-bold py-2 px-6 rounded-full transition-colors duration-200"
            >
              Consultoria Grátis
            </button>
          </div>

          {/* Mobile/Tablet Right Section */}
          <div className="flex lg:hidden items-center space-x-3">
            {/* Mobile CTA Button */}
            <button 
              onClick={() => scrollToSection('chamado-final')}
              className="bg-primary hover:bg-secondary text-white font-bold py-2 px-3 sm:px-4 rounded-full transition-colors duration-200 text-xs sm:text-sm"
            >
              Consultoria
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-800 p-2"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <nav className="py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-4 py-2 text-primary font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('quem-somos')}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
              >
                Quem Somos
              </button>
              <button 
                onClick={() => scrollToSection('solucoes')}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
              >
                Soluções
              </button>
              <button 
                onClick={() => scrollToSection('diferenciais')}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
              >
                Diferenciais
              </button>
              <button 
                onClick={() => scrollToSection('cases')}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
              >
                Cases
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
