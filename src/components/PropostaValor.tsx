import React from 'react';

const PropostaValor: React.FC = () => {
  const beneficios = [
    "Transição inteligente de produtos convencionais para soluções sustentáveis",
    "Redução de impactos ambientais e riscos à saúde",
    "Otimização no consumo de materiais de limpeza",
    "Conformidade com legislações ambientais e normas ESG",
    "Fortalecimento da imagem sustentável da sua empresa",
    "Transferência de conhecimento e treinamentos práticos"
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Nossa Proposta de Valor
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Na Verdessência, acreditamos que pequenas mudanças geram grandes impactos. Por isso, oferecemos:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficios.map((beneficio, index) => (
            <div key={index} className="bg-white rounded-[20px] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm sm:text-base font-bold">✓</span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {beneficio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropostaValor;
