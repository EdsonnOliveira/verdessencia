import React from 'react';

const QuemSomos: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Conteúdo de texto */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Quem Somos
            </h2>
            
            <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              <p>
                A Verdessência nasceu da convicção de que empresas podem unir eficiência operacional, 
                saúde coletiva e responsabilidade ambiental.
              </p>
              
              <p>
                Somos especialistas em soluções de limpeza sustentáveis, apoiando organizações que 
                desejam transformar seu consumo de recursos e alinhar-se às melhores práticas ESG.
              </p>
              
              <p className="font-semibold text-gray-800">
                Nossa missão é clara: capacitar empresas na transição consciente para produtos e 
                processos sustentáveis, sem abrir mão da performance.
              </p>
            </div>
          </div>
          
          {/* Imagem */}
          <div className="relative">
            <div 
              className="w-full h-64 sm:h-80 lg:h-96 rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] bg-[url('/image2.jpg')] bg-cover bg-center"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuemSomos;
