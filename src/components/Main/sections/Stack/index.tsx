import { fadeInUpOnScroll } from '../../../../utils/motionConfig';
import { Container } from '../../../ui/Container';
import { SectionBody } from '../../../ui/Section/SectionBody';
import { TitleSection } from '../../../ui/Section/TitleSection';
import { motion } from 'framer-motion';
import { StackArea } from './StackArea';

export function Stacks() {
  return (
    <SectionBody>
      <Container>
        <motion.div
          className='mb-12'
          {...fadeInUpOnScroll}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <TitleSection
            number='02'
            sectionName='Stacks'
            title='Tecnologias'
            className='mb-4'
          />
          <p className='text-zinc-500 text-sm max-w-xl'>
            Stack completo para desenvolvimento Full Stack — do interface ao
            banco de dados.
          </p>
        </motion.div>

        <motion.div>
            <StackArea type='front'/>

            <StackArea type='back'/>
        </motion.div>
      </Container>
    </SectionBody>
  );
}
