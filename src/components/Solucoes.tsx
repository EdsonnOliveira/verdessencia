import React from 'react';

const Solucoes: React.FC = () => {
  const solucoes = [
    {
      icone: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      titulo: "Consultoria Sustentável",
      descricao: "Planejamento estratégico para substituir gradualmente produtos de limpeza convencionais por opções ecológicas."
    },
    {
      icone: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
        </svg>
      ),
      titulo: "Treinamentos Presenciais e Online",
      descricao: "Capacitação prática e contínua para equipes aplicarem técnicas de limpeza sustentável no dia a dia."
    },
    {
      icone: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      titulo: "Revenda de Produtos Sustentáveis",
      descricao: "Portfólio completo e validado de insumos ecológicos, fornecidos por parceiros certificados e confiáveis."
    },
    {
      icone: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      titulo: "Monitoramento e Relatórios ESG",
      descricao: "Indicadores claros de impacto ambiental, com dados de economia de água, redução de resíduos e métricas ESG."
    },
    {
      icone: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      titulo: "Planos de Acompanhamento Mensal",
      descricao: "Suporte recorrente com relatórios detalhados e evolução contínua das práticas de sustentabilidade."
    },
    {
      icone: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      titulo: "Certificação e Selo de Boas Práticas",
      descricao: "Reconhecimento oficial para empresas que integram soluções sustentáveis e reforçam sua credibilidade no mercado."
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
                <div className="flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6 mx-auto shadow-lg">
                  <div className="text-white">
                    {solucao.icone}
                  </div>
                </div>
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
