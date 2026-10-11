import clsx from 'clsx';
import { Container } from '../ui/Container';

export function Footer() {
  return (
    <footer>
      <Container
        className={clsx(
          'max-w-4xl',
          'py-8',
          'border-t border-zinc-900',
          'flex flex-col sm:flex-row items-center justify-between gap-3',
        )}
      >
        <span className='text-zinc-700 text-xs font-mono'>© 2026 Guilherme Jorge</span>
        <span className='text-zinc-700 text-xs font-mono'>React · Tailwind</span>
      </Container>
    </footer>
  );
}
