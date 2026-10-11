import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../../../ui/Container';
import { SectionBody } from '../../../ui/Section/SectionBody';
import { TitleSection } from '../../../ui/Section/TitleSection';
import { CardProject } from './CardProject';
import { motion } from 'framer-motion';
import { fadeInUpOnScroll } from '../../../../utils/motionConfig';
import { projects } from './CardProject/projects';
import { SiGithub } from 'react-icons/si';

export function Projects() {
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
    emblaApi.on('reInit', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <SectionBody id='projects'>
      <Container className='max-w-4xl'>
        <TitleSection
          number='03'
          sectionName='Projetos'
          title='Principais projetos'
        />

        <motion.div
          {...fadeInUpOnScroll}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='w-full mt-8'
        >
          {/* Carrossel */}
          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex gap-6'>
              {projects.map(project => (
                <div className='flex-[0_0_100%] min-w-0'>
                  <CardProject
                    imgSrc={project.imgSrc}
                    title={project.title}
                    repositoryLink={project.repositoryLink}
                    projectLink={project.projectLink}
                    desc={project.desc}
                    stacks={project.stacks}
                    features={project.features}
                  />
                </div>
              ))}
              <div className='flex-[0_0_100%] min-w-0'>
                <div className='w-full h-full bg-zinc-900/50 rounded-xl flex items-center justify-center'>
                    <div className='flex flex-col items-center gap-5'>
                        <SiGithub className='text-white w-20 h-20'/>
                        <p className='text-white'>Conheca mais projetos no <a href="https://github.com/guilhermejorge0323" className='underline'>GitHub</a></p>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controles de Navegação (Barrinhas + Setas) */}
          <div className='flex items-center justify-between mt-6 px-1'>
            <div className='flex items-center gap-1.5'>
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-0.5 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? 'w-6 bg-emerald-400'
                      : 'w-3 bg-zinc-800'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Setas Esquerda/Direita */}
            <div className='flex items-center gap-2'>
              <button
                onClick={scrollPrev}
                className='p-2 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors'
                aria-label='Anterior'
              >
                <ChevronLeft className='w-4 h-4' />
              </button>
              <button
                onClick={scrollNext}
                className='p-2 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors'
                aria-label='Próximo'
              >
                <ChevronRight className='w-4 h-4' />
              </button>
            </div>
          </div>
        </motion.div>
      </Container>
    </SectionBody>
  );
}
