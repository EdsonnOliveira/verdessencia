import React from 'react';

const ParaQuem: React.FC = () => {
  const segmentos = [
    "Empresas de serviços de limpeza terceirizada",
    "Condomínios, shoppings e estabelecimentos comerciais",
    "Hospitais e clínicas",
    "Franquias e restaurantes",
    "Órgãos públicos e escolas",
    "Hotéis, clubes, festivais e associações"
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Imagem */}
          <div className="relative order-2 lg:order-1">
            <div 
              className="w-full aspect-[5/4] rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] bg-[url('/image3.jpg')] bg-cover bg-center"
            ></div>
          </div>
          
          {/* Conteúdo de texto */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Para Quem é a Verdessência?
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Nossa atuação é voltada para empresas e instituições que buscam eficiência, economia e responsabilidade ambiental:
            </p>
            
            <div className="space-y-3">
              {segmentos.map((segmento, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 text-base sm:text-lg">{segmento}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParaQuem;
