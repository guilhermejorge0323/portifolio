import { fadeInUpOnScroll } from '../../../../utils/motionConfig';
import { motion } from 'framer-motion';
import { Container } from '../../../ui/Container';
import { SectionBody } from '../../../ui/Section/SectionBody';
import { TitleSection } from '../../../ui/Section/TitleSection';
import { MailIcon } from 'lucide-react';
import { ContactCard } from './ContactCard';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';


export function ContactMe() {
  return (
    <SectionBody id='contact'>
      <Container className='max-w-4xl'>
        <motion.div
          {...fadeInUpOnScroll}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='mb-12'
        >
          <TitleSection
            number='04'
            sectionName='Contato'
            title='Vamos Conversar?'
            className='mb-6'
          />
          <p className='text-zinc-500 text-sm max-w-lg leading-relaxed'>
            Estou aberto a oportunidades, colaborações e conversas sobre
            tecnologia. Escolha a melhor forma de entrar em contato.
          </p>
        </motion.div>

        <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/60 mb-10'>
          <div className='w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse' />
          <span className='text-zinc-400 text-xs font-mono'>
            Disponível para novas oportunidades
          </span>
        </div>

        <div className='grid sm:grid-cols-3 gap-4'>
          <ContactCard
            link='mailto:guilhermejorge272@gmail.com'
            icon={MailIcon}
            title='Email'
            content='guilhermejorge272@gmail.com'
            subContent='Respondo em até 24h'
          />

          <ContactCard
            link='https://www.linkedin.com/in/guilherme-jorge-oliveira-a28767347/'
            icon={FaLinkedinIn}
            title='Linkedin'
            content='Guilherme Jorge Oliveira'
            subContent='in/guilherme-jorge-oliveira'
          />

          <ContactCard
            link='https://github.com/guilhermejorge0323'
            icon={BsGithub}
            title='Git Hub'
            content='@guilhermejorge0323'
            subContent='github.com/guilhermejorge0323'
          />
        </div>
      </Container>
    </SectionBody>
  );
}
