import {
  CodeIcon,
  FolderIcon,
  MessageSquareCodeIcon,
  RocketIcon,
  ServerIcon,
  SparklesIcon,
} from 'lucide-react';
import { Container } from '../../../ui/Container';
import { SectionBody } from '../../../ui/Section/SectionBody';
import { TitleSection } from '../../../ui/Section/TitleSection';
import { MainCard } from '../../../ui/Section/MainCard';
import { motion } from 'framer-motion';
import { fadeInUpOnScroll } from '../../../../utils/motionConfig';

export function Skills() {
  return (
    <SectionBody>
      <Container>
        <TitleSection
          number='01'
          sectionName='Habilidades'
          title='O que eu faço'
        />

        <motion.div
          {...fadeInUpOnScroll}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'
        >
          <MainCard
            icon={<CodeIcon className='w-4.5 h-4.5' />}
            title='Desenvolvimento de Sistemas'
            desc='Aplicações web completas e responsivas com foco em experiência do usuário'
            size='lg'
          />

          <MainCard
            icon={<ServerIcon className='w-4.5 h-4.5' />}
            title='Desenvolvimento de APIs'
            desc='APIs RESTful robustas e escaláveis para integração entre sistemas'
            size='lg'
          />

          <MainCard
            icon={<FolderIcon className='w-4.5 h-4.5' />}
            title='Arquitetura de Projetos'
            desc='Organização e estruturação de código seguindo padrões e boas práticas'
            size='lg'
          />

          <MainCard
            icon={<MessageSquareCodeIcon className='w-4.5 h-4.5' />}
            title='Prompts para IA'
            desc='Criação de prompts otimizados para obter melhores resultados com IA'
            size='lg'
          />

          <MainCard
            icon={<SparklesIcon className='w-4.5 h-4.5' />}
            title='Inteligência Artificial'
            desc='Uso estratégico de IA para automatizar processos e resolver problemas'
            size='lg'
          />

          <MainCard
            icon={<RocketIcon className='w-4.5 h-4.5' />}
            title='Novas Tecnologias'
            desc='Rápida adaptação e aprendizado de novas ferramentas e frameworks'
            size='lg'
          />
        </motion.div>
      </Container>
    </SectionBody>
  );
}
