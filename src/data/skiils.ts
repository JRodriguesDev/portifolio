import { Skills } from '@/types/skills';

export const skills: Skills[] = [
   {
      title: 'Frontend',
      description: 'Desenvolvimento de interfaces modernas e responsivas.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand'],
   },
   {
      title: 'Backend',
      description: 'APIs, autenticação e arquitetura de aplicações.',
      technologies: ['Node.js', 'Fastify', 'Prisma', 'Zod'],
   },
   {
      title: 'Banco de Dados',
      description: 'Modelagem e persistência de dados.',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis'],
   },
   {
      title: 'Ferramentas & Serviços',
      description: 'Tecnologias utilizadas durante o desenvolvimento.',
      technologies: ['Docker', 'Git', 'Stripe', 'Auth.js', 'React Email', 'Resend'],
   },
];
