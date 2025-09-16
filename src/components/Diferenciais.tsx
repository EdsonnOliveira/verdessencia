import React from 'react';

const Diferenciais: React.FC = () => {
  const diferenciais = [
    "Expertise técnica e consultiva em sustentabilidade",
    "Rede de parcerias com fabricantes e certificadoras reconhecidas",
    "Relatórios claros, objetivos e auditáveis",
    "Selo exclusivo de Boas Práticas Verdessência",
    "Suporte próximo, humano e contínuo"
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Conteúdo de texto */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Diferenciais da Verdessência
            </h2>
            
            <div className="space-y-4">
              {diferenciais.map((diferencial, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm sm:text-base font-bold">✓</span>
                  </div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {diferencial}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Imagem */}
          <div className="relative">
            <div 
              className="w-full h-64 sm:h-80 lg:h-96 rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] bg-[url('/image4.jpg')] bg-cover bg-center"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diferenciais;
