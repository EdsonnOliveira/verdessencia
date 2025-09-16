import React from 'react';

const HistoriasImpacto: React.FC = () => {
  const depoimentos = [
    {
      texto: "Conseguimos reduzir em 30% o consumo de produtos de limpeza em apenas três meses, sem perder eficiência.",
      autor: "Síndico de Condomínio Comercial"
    },
    {
      texto: "A equipe da Verdessência nos ajudou a conquistar nossa primeira certificação ESG. O processo foi simples e muito eficaz.",
      autor: "Diretora de Hospital Privado"
    },
    {
      texto: "Nossos colaboradores receberam treinamento prático e hoje utilizam produtos sustentáveis com mais consciência e segurança.",
      autor: "Gerente de Rede de Restaurantes"
    }
  ];

  return (
    <div id="cases" className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Histórias de Impacto
          </h2>
          <p className="text-lg text-gray-600">
            Depoimentos reais de clientes que transformaram suas práticas de limpeza
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {depoimentos.map((depoimento, index) => (
            <div key={index} className="bg-white rounded-[20px] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                  </svg>
                </div>
                <blockquote className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 italic">
                  &ldquo;{depoimento.texto}&rdquo;
                </blockquote>
                <cite className="text-sm sm:text-base font-semibold text-gray-800">
                  — {depoimento.autor}
                </cite>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoriasImpacto;
