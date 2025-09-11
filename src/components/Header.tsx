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
            <div className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl">🌿</span>
              <span className="text-lg sm:text-xl font-bold text-green-600">Verdessência</span>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-green-600 font-medium hover:text-green-700 transition-colors duration-200"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('quem-somos')}
              className="text-gray-800 hover:text-green-600 transition-colors duration-200"
            >
              Quem Somos
            </button>
            <button 
              onClick={() => scrollToSection('solucoes')}
              className="text-gray-800 hover:text-green-600 transition-colors duration-200"
            >
              Soluções
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-800 hover:text-green-600 transition-colors duration-200"
            >
              Contato
            </button>
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Phone Number */}
            <div className="flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-3 py-2">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-800">+55 (11) 99999-9999</span>
            </div>

            {/* Free Quote Button */}
            <button 
              onClick={() => scrollToSection('chamado-final')}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full transition-colors duration-200"
            >
              Consultoria Grátis
            </button>
          </div>

          {/* Mobile/Tablet Right Section */}
          <div className="flex lg:hidden items-center space-x-3">
            {/* Mobile CTA Button */}
            <button 
              onClick={() => scrollToSection('chamado-final')}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-3 sm:px-4 rounded-full transition-colors duration-200 text-xs sm:text-sm"
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
                className="block w-full text-left px-4 py-2 text-green-600 font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('quem-somos')}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-green-600 transition-colors duration-200"
              >
                Quem Somos
              </button>
              <button 
                onClick={() => scrollToSection('solucoes')}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-green-600 transition-colors duration-200"
              >
                Soluções
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-green-600 transition-colors duration-200"
              >
                Contato
              </button>
              
              {/* Mobile Phone Number */}
              <div className="px-4 py-2 border-t border-gray-200 mt-2">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-800">+55 (11) 99999-9999</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
