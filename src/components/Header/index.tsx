import clsx from 'clsx';
import { HeaderContent } from './HeaderContent';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';

export function Header() {
  return (
    <header
      className={clsx(
        'min-h-screen',
        'flex flex-col items-center justify-center',
        'px-6 py-20',
        'relative',
      )}
    >
      <div className='absolute inset-0 pointer-events-none opacity-[0.025] bg-grid' />

      <HeaderContent />

      <a
        href='#about'
        aria-label='Rolar para a seção Sobre mim'
        className='absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-700 hover:text-zinc-500 transition-colors'
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ChevronDownIcon size={24} className='lucide lucide-chevron-down' />
        </motion.div>
      </a>
    </header>
  );
}
