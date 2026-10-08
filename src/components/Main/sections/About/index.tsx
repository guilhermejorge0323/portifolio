import {
  fadeInLeftOnScroll,
  fadeInUpOnScroll,
} from '../../../../utils/motionConfig';
import { Container } from '../../../ui/Container';
import { motion } from 'framer-motion';
import { TitleSection } from '../TitleSection';
import { CardAbout } from './CardAbout';
import { LightbulbIcon, MessageSquareIcon, TargetIcon, UserIcon } from 'lucide-react';

export function About() {
  return (
    <div className='px-6 py-24 border-t border-zinc-900' id='about'>
      <Container>
        <TitleSection number='00' sectionName='sobre mim' title='Quem sou eu' />

        <div className='grid md:grid-cols-2 gap-12 items-start'>
          {/* Area textos  */}
          <motion.div
            {...fadeInLeftOnScroll}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className='text-zinc-400 text-sm leading-relaxed mb-4'>
              Sou um desenvolvedor Junior apaixonado por tecnologia e sempre em
              busca de novos desafios. Tenho facilidade para aprender e
              trabalhar com várias tecnologias, desde front-end até back-end.
            </p>

            <p className='text-zinc-400 text-sm leading-relaxed mb-4'>
              Busco sempre aplicar as melhores práticas de programação e criar
              código limpo, organizado e de fácil manutenção. Valorizo a
              comunicação clara e o trabalho em equipe.
            </p>

            <p className='text-zinc-400 text-sm leading-relaxed'>
              Tenho grande interesse em explorar novas ferramentas e frameworks,
              além de aplicar Inteligência Artificial para criar soluções
              inovadoras.
            </p>

            <div className='mt-10 pt-8 border-t border-zinc-900 grid grid-cols-3 gap-6'>
              <div className='flex flex-col'>
                <span className='text-2xl font-black text-white'>3+</span>
                <span className='text-zinc-600 font-mono text-xs mt-0.5'>
                  Projetos
                </span>
              </div>

              <div className='flex flex-col'>
                <span className='text-2xl font-black text-white'>14+</span>
                <span className='text-zinc-600 font-mono text-xs mt-0.5'>
                  Tecnologias
                </span>
              </div>

              <div className='flex flex-col'>
                <span className='text-2xl font-black text-white'>100%</span>
                <span className='text-zinc-600 font-mono text-xs mt-0.5'>
                  Clean code
                </span>
              </div>
            </div>
          </motion.div>

          {/* Area Cards */}
          <motion.div
            {...fadeInUpOnScroll}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='grid grid-cols-1 sm:grid-cols-2 gap-3'
          >
            <CardAbout
              icon={<UserIcon className='w-4.5 h-4.5' />}
              title='Facilidade com Tecnologia'
              desc='Rápida adaptação a novas ferramentas e frameworks'
            />

            <CardAbout
              icon={<TargetIcon className='w-4.5 h-4.5' />}
              title='Organização'
              desc='Código limpo e arquitetura bem estruturada'
            />

            <CardAbout
              icon={<MessageSquareIcon className='w-4.5 h-4.5' />}
              title='Comunicação'
              desc='Clareza na documentação e trabalho em equipe'
            />

            <CardAbout
              icon={<LightbulbIcon className='w-4.5 h-4.5' />}
              title='Resolução de Problemas'
              desc='Foco em soluções práticas e inovadoras'
            />
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
