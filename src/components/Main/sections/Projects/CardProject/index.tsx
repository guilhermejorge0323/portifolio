import clsx from 'clsx';
import { ExternalLinkIcon } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

type Feature = {
  name: string;
  completed: boolean;
};

type CardProjectProps = {
  imgSrc: string;
  title: string;
  repositoryLink: string;
  projectLink: string;
  desc: string;
  stacks: Array<string>;
  features: Array<Feature>;
};

export function CardProject({
  imgSrc,
  title,
  repositoryLink,
  projectLink,
  desc,
  stacks,
  features,
}: CardProjectProps) {
  return (
    <div className='w-full rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden'>
      {/* Imagem */}
      <div className='relative h-48 sm:h-62 bg-zinc-800 overflow-hidden'>
        <img
          src={imgSrc}
          alt={`${title}-image`}
          className='w-full h-full object-cover opacity-80 object-top'
        />
        <div className='absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent' />
      </div>

      {/* Conteudo */}
      <div className='p-6 sm:p-8'>
        <div className='flex justify-between mb-3'>
          <h3 className='text-xl sm:text-2xl font-bold text-white'>{title}</h3>
          <div className='flex gap-2 shrink-0'>
            <a
              href={repositoryLink}
              className={clsx(
                'h-8 w-8',
                'flex items-center justify-center',
                'rounded-md border border-zinc-800 hover:border-zinc-600',
                'text-zinc-500 hover:text-white',
                'transition-all',
              )}
            >
              <SiGithub className='w-4 h-4' />
            </a>

            <a
              href={projectLink}
              className={clsx(
                'h-8 w-8',
                'bg-green-400 hover:bg-gray-300',
                'flex items-center justify-center',
                'rounded-md',
                'text-black',
                'transition-all',
              )}
            >
              <ExternalLinkIcon className='w-4 h-4' />
            </a>
          </div>
        </div>

        <p className='text-sm text-zinc-500 leading-relaxed mb-5'>{desc}</p>

        <div className='flex flex-wrap gap-1.5 mb-6'>
          {stacks.map(stack => (
            <span
              className={clsx(
                'px-2.5 py-0.5',
                'rounded',
                'text-xs font-mono text-zinc-400',
                'bg-zinc-800 border border-zinc-700',
              )}
            >
              {stack}
            </span>
          ))}
        </div>

        <div className='border-t border-zinc-800 pt-5 mb-8'>
          <p className='uppercase text-xs font-mono text-zinc-600 tracking-widest mb-3'>
            Features implementadas
          </p>

          <div className='grid grid-cols-2 gap-1.5'>
            {features.map(feature => (
              <div className='flex items-center gap-2.5'>
                <div
                  className={clsx(
                    'w-1.5 h-1.5 rounded-full shrink-0',
                    feature.completed ? 'bg-green-400' : 'bg-amber-400',
                  )}
                />
                <span
                  className={clsx(
                    'text-xs',
                    feature.completed ? 'text-green-400/70' : 'text-amber-400/70',
                  )}
                >
                  {feature.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className='flex gap-4 border-t pt-5 border-zinc-900'>
          <div className="flex items-center gap-2.5">
            <div className={'w-1.5 h-1.5 rounded-full shrink-0 bg-green-400'} />
            <span className='text-xs text-green-400/70'>Completo</span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className={'w-1.5 h-1.5 rounded-full shrink-0 bg-amber-400'} />
            <span className='text-xs text-amber-400/70'>Em desenvolvimento</span>
          </div>
        </div>
      </div>
    </div>
  );
}
