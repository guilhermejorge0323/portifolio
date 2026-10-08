import type { UseInViewOptions } from 'framer-motion';

// Configuração padrão para animar apenas 1 vez ao rolar a tela
export const defaultViewport: UseInViewOptions = {
  once: true,
  amount: 'some',
};

// 1. Animação de carregamento inicial (Header / Topo da página)
export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

// 2. Animação de baixo para cima ao rolar a página (Scroll)
export const fadeInUpOnScroll = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: defaultViewport,
  transition: { duration: 0.5 },
};

// 3. Animação vindo da esquerda para a direita ao rolar a página (Scroll)
export const fadeInLeftOnScroll = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: defaultViewport,
  transition: { duration: 0.5 },
};

// 4. Helper para efeito cascata/stagger em listas ao rolar a página
export const getStaggerFadeIn = (index: number, baseDelay = 0.08) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: defaultViewport,
  transition: { duration: 0.4, delay: index * baseDelay },
});
