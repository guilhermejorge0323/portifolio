export function HeaderContent() {
  return (
    <div className='max-w-3xl mx-auto w-full relative z-10 font-heading'>
      <div className='flex items-center gap-2 mb-8'>
        <div className='w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse' />
        <span className='text-zinc-500 text-sm font-mono tracking-wide'>
          Disponível para oportunidades
        </span>
      </div>

      <h1 className='text-6xl sm:text-7xl md:text-8xl font-black leading-none mb-4 text-white tracking-tight'>
        Guilherme <br />
        <span className='text-green-400'>Jorge</span>
      </h1>

      <div className='flex flex-wrap gap-x-4 items-center gap-y-2 mt-6 mb-6'>
        <span className='text-lg sm:text-xl text-zinc-300 font-extralight'>
          Desenvolvedor Full Stack
        </span>
        <span className='hidden sm:block w-px h-5 bg-zinc-700' />
        <span className='text-sm font-mono text-zinc-600 uppercase tracking-widest'>
          Junior · Brasil
        </span>
      </div>

      <p className='text-zinc-500 text-base leading-relaxed max-w-xl mb-10'>
        Focado em soluções modernas e inteligentes — do front-end ao back-end,
        combinando boas práticas e inteligência artificial para resolver
        problemas reais.
      </p>

      <div className="flex flex-wrap items-center gap-3 mb-12">

      </div>
    </div>
  );
}
