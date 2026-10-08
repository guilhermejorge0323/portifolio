import type { ReactNode } from 'react';
import { Card } from '../../Card';
import clsx from 'clsx';

type CardAboutProps = {
  icon: ReactNode;
  title: string;
  desc: string;
  size: 'sm' | 'lg';
};

export function MainCard({ icon, title, desc, size }: CardAboutProps) {
  return (
    <Card
      className={clsx('group w-full', {
        'hover:-translate-y-0.5': size === 'lg',
      })}
    >
      <div className='text-green-400 mb-3 group-hover:scale-110 transition-transform duration-200 w-fit'>
        {icon}
      </div>

      <h3 className='text-sm font-semibold text-white mb-1'>{title}</h3>

      <p className='text-zinc-500 text-xs leading-relaxed'>{desc}</p>
    </Card>
  );
}
