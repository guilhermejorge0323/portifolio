import { motion } from 'framer-motion';
import { fadeInUpOnScroll } from '../../../../../utils/motionConfig';
import { GridStacks } from './AreaCardsStacks/gridFrontEnd';
import { MobileCarroselStacks } from './AreaCardsStacks/MobileCarroselStacks';

type StackAreaProps = {
  type: 'front' | 'back';
};

export function StackArea({ type }: StackAreaProps) {
  const isFront = type === 'front';

  return (
    <motion.div
      {...fadeInUpOnScroll}
      transition={{ duration: 0.5, delay: 0.1 }}
      className='mb-14 last:mb-0'
    >
      <div>
        <div className='flex items-center gap-3 mb-6'>
          <div className='w-1 h-6 bg-green-400' />
          <h3 className='text-base font-semibold text-white'>
            {isFront ? 'Front-end' : 'Back-end'}
          </h3>
          <span className='text-xs font-mono text-zinc-700 ml-1'>
            7 tecnologias
          </span>
        </div>

        <MobileCarroselStacks type={type} />
        <GridStacks type={type} />
      </div>
    </motion.div>
  );
}
