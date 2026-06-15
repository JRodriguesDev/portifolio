import { FaReact, FaNodeJs, FaDocker, FaPython, FaGitAlt } from 'react-icons/fa';

import {
   SiNextdotjs,
   SiTypescript,
   SiTailwindcss,
   SiPostgresql,
   SiMongodb,
   SiRedis,
   SiPrisma,
   SiFastify,
   SiStripe,
   SiJavascript,
   SiShadcnui,
   SiAuth0,
   SiZod,
} from 'react-icons/si';

export const techIcons = {
   React: {
      icon: FaReact,
      className: 'text-sky-400',
   },

   'Next.js': {
      icon: SiNextdotjs,
      className: 'text-white',
   },

   JavaScript: {
      icon: SiJavascript,
      className: 'text-yellow-400',
   },

   TypeScript: {
      icon: SiTypescript,
      className: 'text-blue-500',
   },

   'Tailwind CSS': {
      icon: SiTailwindcss,
      className: 'text-cyan-400',
   },

   'Node.js': {
      icon: FaNodeJs,
      className: 'text-green-500',
   },

   Fastify: {
      icon: SiFastify,
      className: 'text-white',
   },

   Prisma: {
      icon: SiPrisma,
      className: 'text-cyan-200',
   },

   PostgreSQL: {
      icon: SiPostgresql,
      className: 'text-sky-500',
   },

   MongoDB: {
      icon: SiMongodb,
      className: 'text-green-500',
   },

   Redis: {
      icon: SiRedis,
      className: 'text-red-500',
   },

   Docker: {
      icon: FaDocker,
      className: 'text-sky-500',
   },

   Stripe: {
      icon: SiStripe,
      className: 'text-violet-500',
   },

   Python: {
      icon: FaPython,
      className: 'text-yellow-400',
   },

   Git: {
      icon: FaGitAlt,
      className: 'text-orange-500',
   },

   'Shadcn/UI': {
      icon: SiShadcnui,
      className: 'text-white',
   },

   Zustand: {
      icon: '',
      className: 'text-amber-500',
   },

   'Auth.js': {
      icon: SiAuth0,
      className: 'text-orange-400',
   },

   Zod: {
      icon: SiZod,
      className: 'text-blue-400',
   },
} as const;
