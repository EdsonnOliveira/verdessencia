import React from 'react';

const HistoriasImpacto: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Histórias de Impacto
          </h2>
          <p className="text-lg text-gray-600">
            (Espaço para cases, depoimentos e números reais)
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] p-8 sm:p-12 lg:p-16 shadow-sm">
            <div className="text-center">
              <div className="text-6xl mb-6">📌</div>
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "Com a Verdessência, conseguimos reduzir em 30% nosso consumo de produtos de limpeza, 
                melhoramos a saúde da equipe e conquistamos reconhecimento em práticas ESG."
              </blockquote>
              <cite className="text-base sm:text-lg font-semibold text-gray-800">
                — Cliente XYZ
              </cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoriasImpacto;
