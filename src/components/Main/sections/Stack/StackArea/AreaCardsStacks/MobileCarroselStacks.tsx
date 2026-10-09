import useEmblaCarousel from 'embla-carousel-react';

import { backEndSkills, frontEndSkills } from '../Skills';

import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CardStack } from './CardStack';


type MobileCarroselStacksProps = {
  type: 'front' | 'back';
};

export function MobileCarroselStacks({ type }: MobileCarroselStacksProps) {
  const isFront = type === 'front';
  const skills = isFront ? frontEndSkills : backEndSkills;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);
  return (
    <div className='w-full sm:hidden'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex gap-4'>
          {skills.map(skill => (
            <div key={skill.id} className='flex-[0_0_100%] min-w-0'>
              <CardStack
                icon={skill.icon}
                title={skill.title}
                topics={skill.topics}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='flex items-center justify-between mt-4 px-1'>
        <div className='flex items-center gap-1.5'>
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-0.5 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'w-5 bg-emerald-400'
                  : 'w-2 bg-zinc-800'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        <div className='flex items-center gap-1.5'>
          <button
            onClick={scrollPrev}
            className='p-1.5 rounded border border-zinc-800/80 bg-zinc-900/60 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors'
            aria-label='Anterior'
          >
            <ChevronLeft className='w-4 h-4' />
          </button>
          <button
            onClick={scrollNext}
            className='p-1.5 rounded border border-zinc-800/80 bg-zinc-900/60 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors'
            aria-label='Próximo'
          >
            <ChevronRight className='w-4 h-4' />
          </button>
        </div>
      </div>
    </div>
  );
}
