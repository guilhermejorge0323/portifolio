import clsx from 'clsx';
import { HeaderContent } from './HeaderContent';

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
    </header>
  );
}
