export const projects = [
  {
    imgSrc: './weather.png',
    title: 'Weather',
    repositoryLink: 'https://github.com/guilhermejorge0323/weather-web-APP',
    projectLink: 'https://guilhermejorge0323.github.io/weather-web-APP/',
    desc: 'Uma aplicação web que retorna a previsão do tempo em tempo real, exibindo dados meteorológicos completos como sensações térmicas, qualidade do ar, índice UV e previsões detalhadas por hora e para os próximos dias.',
    stacks: ['React', 'Typescript', 'Consumo de API', 'Tailwind'],
    features: [
      { name: 'Busca por cidades', completed: true },
      { name: 'Previsão Horária e Diária', completed: true },
      { name: 'Métricas de UV e Qualidade do Ar', completed: true },
      { name: 'Tema Claro/Escuro', completed: true },
    ],
  },

  {
    imgSrc: './financeOs.png',
    title: 'Finance Os',
    repositoryLink: 'https://github.com/guilhermejorge0323/FinanceOS',
    projectLink: 'https://finance-os-khaki-beta.vercel.app/',
    desc: 'Uma aplicação web de gestão financeira completa, projetada para o controlo de receitas e despesas, com atualizações em tempo real via WebSockets, automação de tarefas em background e recursos inteligentes com integração de IA.',
    stacks: ['React', 'Typescript', 'Tailwind', 'PostGree SQl', 'NextJS'],
    features: [
      { name: 'Página de apresentação', completed: true },
      { name: 'Autenticação com JWT', completed: true },
      { name: 'Background Jobs', completed: true },
      { name: 'WebSockets', completed: true },
      { name: 'Cache', completed: true },
      { name: 'Autenticação com Google', completed: false },
      { name: 'Sistema de notificações', completed: false },
      { name: 'Integração com IA', completed: false },
    ],
  },
];
