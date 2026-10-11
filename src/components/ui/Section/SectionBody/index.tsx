import type { ComponentProps, ReactNode } from 'react';

type SectionBodyProps = {
  children: ReactNode;
} & ComponentProps<'div'>;

export function SectionBody({ children, ...props }: SectionBodyProps) {
  return (
    <div className='px-6 py-24 border-t border-zinc-900' id='about' {...props}>
      {children}
    </div>
  );
}
