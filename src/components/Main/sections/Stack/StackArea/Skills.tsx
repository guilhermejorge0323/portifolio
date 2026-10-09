import type { ReactNode } from 'react';
import { DiCss3 } from 'react-icons/di';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiNestjs,
  SiApollographql,
  SiNextdotjs,
} from 'react-icons/si';

export type SkillItem = {
  id: string;
  title: string;
  icon: ReactNode;
  topics: string[];
};

export const frontEndSkills: SkillItem[] = [
  {
    id: 'react',
    title: 'React',
    icon: <SiReact className='w-5 h-5' />,
    topics: [
      'Gerenciamento de estado com Context API',
      'Componentes reutilizáveis',
      'Consumo de APIs REST',
    ],
  },
  {
    id: 'typescript-front',
    title: 'TypeScript',
    icon: <SiTypescript className='w-5 h-5' />,
    topics: [
      'Tipagem estática em React',
      'Interfaces e tipos customizados',
      'Maior manutenibilidade',
    ],
  },

  {
    id: 'javascript-front',
    title: 'JavaScript',
    icon: <SiJavascript className='w-5 h-5' />,
    topics: [
      'ES6+ e features modernas',
      'Programação assíncrona',
      'Manipulação do DOM',
    ],
  },
  {
    id: 'html5',
    title: 'HTML5',
    icon: <SiHtml5 className='w-5 h-5' />,
    topics: [
      'Semântica e acessibilidade',
      'Estruturação de conteúdo',
      'SEO otimizado',
    ],
  },

  {
    id: 'css3',
    title: 'CSS3',
    icon: <DiCss3 className='w-5 h-5' />,
    topics: [
      'Flexbox e CSS Grid',
      'Animações e transições',
      'Design responsivo',
    ],
  },

  {
    id: 'tailwindcss',
    title: 'Tailwind CSS',
    icon: <SiTailwindcss className='w-5 h-5' />,
    topics: [
      'Utility-first CSS',
      'Customização de temas',
      'Desenvolvimento ágil',
    ],
  },

  {
    id: 'next',
    title: 'Next.js',
    icon: <SiNextdotjs className='w-5 h-5' />,
    topics: [
      'Renderização SSR, SSG e ISR',
      'Roteamento com App Router',
      'Otimização de performance e SEO',
    ],
  },
];

export const backEndSkills: SkillItem[] = [
  {
    id: 'nodejs',
    title: 'Node.js',
    icon: <SiNodedotjs className='w-5 h-5' />,
    topics: [
      'Criação de APIs REST',
      'Integração com banco de dados',
      'Arquitetura backend',
    ],
  },
  {
    id: 'typescript-back',
    title: 'TypeScript',
    icon: <SiTypescript className='w-5 h-5' />,
    topics: [
      'Tipagem estática e type safety',
      'Interfaces e tipos customizados',
      'Code mais previsível',
    ],
  },
  {
    id: 'express',
    title: 'Express',
    icon: <SiExpress className='w-5 h-5' />,
    topics: [
      'Rotas e middlewares',
      'Validação de requisições',
      'Tratamento de erros',
    ],
  },
  {
    id: 'apollo-server',
    title: 'Apollo Server',
    icon: <SiApollographql className='w-5 h-5' />,
    topics: [
      'Servidor GraphQL',
      'Integração com databases',
      'Gerenciamento de cache',
    ],
  },
  {
    id: 'nestjs',
    title: 'NestJS',
    icon: <SiNestjs className='w-5 h-5' />,
    topics: [
      'Arquitetura modular e injetável',
      'Suporte nativo a TypeScript',
      'Desenvolvimento escalável',
    ],
  },
  {
    id: 'postgresql',
    title: 'PostgreSQL',
    icon: <SiPostgresql className='w-5 h-5' />,
    topics: ['Modelagem relacional', 'Queries avançadas', 'Escalabilidade'],
  },
  {
    id: 'prisma',
    title: 'Prisma ORM',
    icon: <SiPrisma className='w-5 h-5' />,
    topics: [
      'Mapeamento objeto-relacional',
      'Migrations automatizadas',
      'Consultas fortemente tipadas',
    ],
  },
];
