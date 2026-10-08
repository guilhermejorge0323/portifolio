import { motion } from 'framer-motion';
import { fadeInUpOnScroll } from '../../../../utils/motionConfig';
import type { ComponentProps } from 'react';
import { cn } from '../../../../utils/mergeTailwind';

type TitleSectionProps = {
  number: string;
  sectionName: string;
  title: string;
} & ComponentProps<'div'>;

export function TitleSection({
  number,
  sectionName,
  title,
  className,
}: TitleSectionProps) {
  return (
    <motion.div
      {...fadeInUpOnScroll}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={cn('mb-12', className)}
    >
      <span className='text-xs font-mono tracking-widest text-zinc-600 uppercase mb-2'>
        {number} - {sectionName}
      </span>
      <h2 className='text-3xl md:text-4xl font-bold text-white mb-4 font-heading'>
        {title}
      </h2>

      <div className='w-8 h-px bg-green-400' />
    </motion.div>
  );
}
