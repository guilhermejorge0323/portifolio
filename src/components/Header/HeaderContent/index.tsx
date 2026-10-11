import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FileTextIcon, MailIcon } from 'lucide-react';
import { BsLinkedin } from 'react-icons/bs';
import { SiGithub } from 'react-icons/si';
import { fadeInUp } from '../../../utils/motionConfig';

export function HeaderContent() {
  return (
    <div className='max-w-3xl mx-auto w-full relative z-10 font-heading'>
      <motion.div
        {...fadeInUp}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='flex items-center gap-2 mb-8'
      >
        <div className='w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse' />
        <span className='text-zinc-500 text-sm font-mono tracking-wide'>
          Disponível para oportunidades
        </span>
      </motion.div>

      <motion.h1
        {...fadeInUp}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='text-6xl sm:text-7xl md:text-8xl font-black leading-none mb-4 text-white tracking-tight'
      >
        Guilherme <br />
        <span className='text-green-400'>Jorge</span>
      </motion.h1>

      <motion.div
        {...fadeInUp}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='flex flex-wrap gap-x-4 items-center gap-y-2 mt-6 mb-6'
      >
        <span className='text-lg sm:text-xl text-zinc-300 font-light'>
          Desenvolvedor Full Stack
        </span>
        <span className='hidden sm:block w-px h-5 bg-zinc-700' />
        <span className='text-sm font-mono text-zinc-600 uppercase tracking-widest'>
          Junior · Brasil
        </span>
      </motion.div>

      <motion.p
        {...fadeInUp}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='text-zinc-500 text-base leading-relaxed max-w-xl mb-10'
      >
        Focado em soluções modernas e inteligentes — do front-end ao back-end,
        combinando boas práticas e inteligência artificial para resolver
        problemas reais.
      </motion.p>

      <motion.div
        {...fadeInUp}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='flex flex-wrap items-center gap-3 mb-12'
      >
        <a
          href='#projects'
          className={clsx(
            'px-6 py-2.5',
            'rounded-md',
            'bg-green-400 hover:bg-green-300',
            'text-black font-semibold text-sm',
            'hover:scale-[1.03] transition-all ease-in',
          )}
        >
          Ver projetos
        </a>

        <a
          href='#contact'
          className={clsx(
            'px-6 py-2.5',
            'rounded-md',
            'border border-zinc-700 hover:border-zinc-600',
            'text-zinc-300 hover:text-white text-sm',
            'hover:scale-[1.03] transition-all ease-in',
          )}
        >
          Contato
        </a>

        <a
          href=''
          className={clsx(
            'flex items-center gap-2',
            'px-6 py-2.5',
            'rounded-md',
            'border border-zinc-800 hover:border-zinc-600',
            'text-sm font-medium text-zinc-500 hover:text-zinc-300',
            'hover:scale-[1.03] transition-all ease-in',
          )}
        >
          <FileTextIcon className='w-3.5 h-3.5' />
          Currículo
        </a>
      </motion.div>

      <motion.div
        {...fadeInUp}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='flex items-center gap-5'
      >
        <a
          href='https://github.com/guilhermejorge0323'
          className='inline-block transition-transform duration-200 hover:-translate-y-1'
        >
          <SiGithub className='w-4.5 h-4.5 text-zinc-600 hover:text-white transition-colors' />
        </a>

        <a
          href='https://www.linkedin.com/in/guilherme-jorge-oliveira-a28767347/'
          className='inline-block transition-transform duration-200 hover:-translate-y-1'
        >
          <BsLinkedin className='w-4.5 h-4.5 text-zinc-600 hover:text-white transition-colors' />
        </a>

        <a
          href='mailto:guilhermejorge272@gmail.com'
          className='inline-block transition-transform duration-200 hover:-translate-y-1'
        >
          <MailIcon className='w-4.5 h-4.5 text-zinc-600 hover:text-white transition-colors' />
        </a>
      </motion.div>
    </div>
  );
}
