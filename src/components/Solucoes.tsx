import React from 'react';

const Solucoes: React.FC = () => {
  const solucoes = [
    {
      icone: "🌍",
      titulo: "Consultoria Sustentável",
      descricao: "Diagnóstico e planejamento de substituição gradual de produtos."
    },
    {
      icone: "🎓",
      titulo: "Treinamentos Presenciais e Online",
      descricao: "Capacitação prática para equipes de limpeza."
    },
    {
      icone: "♻️",
      titulo: "Revenda de Produtos Sustentáveis",
      descricao: "Portfólio selecionado com parceiros confiáveis."
    },
    {
      icone: "📊",
      titulo: "Monitoramento e Relatórios ESG",
      descricao: "Indicadores reais de impacto: redução de resíduos, economia de água e métricas ambientais."
    },
    {
      icone: "🔄",
      titulo: "Planos de Acompanhamento Mensal",
      descricao: "Evolução contínua com relatórios e suporte dedicado."
    }
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Soluções Verdessência
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solucoes.map((solucao, index) => (
            <div key={index} className="bg-white rounded-[20px] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-center mb-4">
                <div className="text-4xl sm:text-5xl mb-4">{solucao.icone}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                  {solucao.titulo}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {solucao.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solucoes;
