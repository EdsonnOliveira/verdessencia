import React from 'react';

const Onboarding: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
      {/* Container principal com padding e bordas arredondadas */}
        <div 
          className="relative w-full mx-auto rounded-[20px] sm:rounded-[40px] lg:rounded-[70px] overflow-hidden min-h-[400px] sm:min-h-[500px] lg:min-h-[700px] bg-[url('/image1.jpg')] bg-cover bg-no-repeat p-4 sm:p-6 lg:p-10 flex items-end"
        >
        {/* Painel de texto à esquerda */}
        <div className="w-full sm:w-4/5 lg:w-3/5 max-w-xl h-4/5 bg-gray-50 rounded-[20px] sm:rounded-[35px] lg:rounded-[50px] p-6 sm:p-10 lg:p-16 flex flex-col justify-center gap-2 sm:gap-3 lg:gap-4">
          {/* Título */}
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-regular text-gray-800 leading-tight mt-4 sm:mt-6 lg:mt-8">
            🌿 Verdessência: a essência da limpeza sustentável para empresas conscientes
          </h1>
          
          {/* Descrição */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-5 lg:mb-6 leading-relaxed">
            Transformamos práticas de limpeza em estratégias de sustentabilidade, reduzindo impactos ambientais e elevando a reputação da sua marca.
          </p>
          
          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 sm:mb-5 lg:mb-6">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 sm:px-6 rounded-full transition-colors duration-200 cursor-pointer text-sm sm:text-base">
              👋 Quero uma consultoria gratuita
            </button>
          </div>
          
          {/* Lista de características */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm">✓</span>
              </div>
              <span className="text-gray-800 font-medium text-sm sm:text-base">Sustentável</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm">✓</span>
              </div>
              <span className="text-gray-800 font-medium text-sm sm:text-base">ESG</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm">✓</span>
              </div>
              <span className="text-gray-800 font-medium text-sm sm:text-base">Responsável</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
