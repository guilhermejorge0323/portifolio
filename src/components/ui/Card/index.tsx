import type { ComponentProps, ReactNode } from 'react';
import { cn } from '../../../utils/mergeTailwind';

type CardProps = {
  children: ReactNode;
} & ComponentProps<'div'>;

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'p-5 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors',
        className,
      )}
    >
      {children}
    </div>
  );
}
