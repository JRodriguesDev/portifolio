// lib/tech-icons.ts

import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
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
} from 'react-icons/si';

export const techIcons = {
   React: FaReact,
   'Next.js': SiNextdotjs,
   TypeScript: SiTypescript,
   'Tailwind CSS': SiTailwindcss,

   'Node.js': FaNodeJs,
   Fastify: SiFastify,
   Prisma: SiPrisma,

   PostgreSQL: SiPostgresql,
   MongoDB: SiMongodb,
   Redis: SiRedis,

   Docker: FaDocker,
   Stripe: SiStripe,
};
