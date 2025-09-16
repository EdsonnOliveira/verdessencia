import React from 'react';

const PorQueSerSustentavel: React.FC = () => {
  const beneficios = [
    {
      icone: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      titulo: "Impacto ambiental positivo",
      descricao: "Redução de resíduos, economia de recursos naturais e preservação do planeta."
    },
    {
      icone: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
        </svg>
      ),
      titulo: "Eficiência e economia",
      descricao: "Otimização do uso de produtos e redução de custos operacionais."
    },
    {
      icone: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01.99L14 10.5l-1.99-1.51A2.5 2.5 0 0 0 10 8H8.46c-.8 0-1.54.37-2.01.99L4 10.5V22h2v-6h2.5l2.5 6h2l-2.5-6H14v6h2z"/>
        </svg>
      ),
      titulo: "Valorização da marca",
      descricao: "Diferenciação competitiva e fortalecimento da imagem junto a clientes e parceiros."
    },
    {
      icone: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      titulo: "Saúde e bem-estar",
      descricao: "Ambientes mais saudáveis e seguros para colaboradores e usuários."
    },
    {
      icone: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
        </svg>
      ),
      titulo: "Conformidade regulatória",
      descricao: "Atuação alinhada a normas ambientais e diretrizes ESG."
    },
    {
      icone: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      titulo: "Inovação e futuro",
      descricao: "Preparar sua empresa para as novas demandas do mercado, alinhando práticas sustentáveis às expectativas de clientes, investidores e sociedade."
    }
  ];

  return (
    <div id="por-que-sustentavel" className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Por que ser sustentável
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Adotar práticas sustentáveis não é apenas uma tendência, é uma necessidade estratégica para empresas que desejam crescer de forma consciente e responsável.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {beneficios.map((beneficio, index) => (
            <div key={index} className="bg-gray-50 rounded-[20px] p-6 sm:p-8 hover:bg-green-50 transition-colors duration-200 group">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="text-green-500 group-hover:scale-110 transition-transform duration-200">
                    {beneficio.icone}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                  {beneficio.titulo}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {beneficio.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PorQueSerSustentavel;
