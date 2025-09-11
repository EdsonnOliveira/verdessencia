import React from 'react';

const ChamadoFinal: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Imagem */}
          <div className="relative order-2 lg:order-1">
            <div 
              className="w-full h-64 sm:h-80 lg:h-96 rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] bg-[url('/image5.jpg')] bg-cover bg-center"
            ></div>
          </div>
          
          {/* Conteúdo de texto */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Chamado Final
            </h2>
            
            <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
              <p className="text-xl sm:text-2xl font-semibold text-gray-800">
                Verdessência é mais que limpeza. É transformação sustentável.
              </p>
              
              <p>
                Sua empresa pode ser protagonista de um futuro mais responsável, eficiente e valorizado.
              </p>
            </div>
            
            <div className="pt-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 sm:px-8 rounded-full transition-colors duration-200 cursor-pointer text-base sm:text-lg">
                👋 Solicite sua consultoria gratuita
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChamadoFinal;
