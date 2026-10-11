import clsx from 'clsx';
import { ArrowUpRightIcon } from 'lucide-react';
import type { ElementType } from 'react';
import { motion } from 'framer-motion';
import { fadeInUpOnScroll } from '../../../../../utils/motionConfig';

type ContactCardProps = {
  link: string;
  icon: ElementType;
  title: string;
  content: string;
  subContent: string;
};

export function ContactCard({
  link,
  icon: Icon,
  title,
  content,
  subContent,
}: ContactCardProps) {
  return (
    <motion.a
      {...fadeInUpOnScroll}
      transition={{ duration: 0.5, delay: 0.1 }}
      href={link}
      className={clsx(
        'flex flex-col gap-4 group',
        'p-6',
        'rounded-xl border border-zinc-800 hover:border-zinc-600',
        'bg-zinc-900/50 hover:bg-zinc-900',
        'transition-all duration-200 hover:-translate-y-2.5',
      )}
    >
      <div className='flex items-center justify-between'>
        <Icon className='group-hover:scale-110 text-green-400 w-5 h-5' />
        <ArrowUpRightIcon
          className={clsx(
            'w-3.5 h-3.5',
            'text-zinc-700 group-hover:text-zinc-400',
            'group-hover:-translate-y-0.5 group-hover:translate-x-0.5',
            'transition-all duration-200',
          )}
        />
      </div>

      <div className='flex flex-col gap-1'>
        <p className='uppercase text-xs font-mono text-zinc-600 tracking-widest'>
          {title}
        </p>
        <p className='text-sm text-white font-semibold'>{content}</p>
        <p className='text-xs text-zinc-600 truncate'>{subContent}</p>
      </div>
    </motion.a>
  );
}
