import type { ComponentProps, ReactNode } from 'react';
import { cn } from '../../../utils/mergeTailwind';

type ContainerProps = {
  children: ReactNode;
} & ComponentProps<'div'>;

export function Container({ children, className }: ContainerProps) {
  return <div className={cn('max-w-6xl mx-auto', className)}>{children}</div>;
}
