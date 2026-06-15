'use client';

import { motion } from 'motion/react';

import { ProjectCard } from './card';
import { projects } from '@/data/project';

export const Project = () => {
   return (
      <section className="w-full max-w-6xl mx-auto px-6 py-20">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-4"
         >
            <div className="flex items-center gap-3">
               <div className="h-px w-10 bg-blue-500" />

               <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                  Projetos
               </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
               Alguns projetos desenvolvidos durante minha jornada de aprendizado.
            </h2>

            <p className="text-base md:text-lg leading-8 text-slate-400">
               Utilizo projetos práticos para consolidar conhecimentos em desenvolvimento full
               stack, arquitetura de software, autenticação, integrações com APIs e boas práticas de
               desenvolvimento.
            </p>
         </motion.div>

         <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project, i) => (
               <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                     duration: 0.5,
                     delay: i * 0.15,
                  }}
               >
                  <ProjectCard data={project} />
               </motion.div>
            ))}
         </div>
      </section>
   );
};
