'use client';

import { motion } from 'motion/react';
import { AboutCard } from './card';
import { aboutHighlights } from '@/data/about';

export const About = () => {
   return (
      <section className="w-full max-w-6xl mx-auto px-6 py-20">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl space-y-6"
         >
            <div className="flex items-center gap-3">
               <div className="h-px w-10 bg-blue-500" />

               <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                  Sobre Mim
               </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
               Construindo experiência através de projetos, estudos e prática constante.
            </h2>

            <div className="space-y-6 text-base leading-8 text-slate-400 md:text-lg">
               <p>
                  Sou estudante de Análise e Desenvolvimento de Sistemas e utilizo projetos práticos
                  como principal forma de aprendizado, buscando transformar conceitos teóricos em
                  experiência real de desenvolvimento.
               </p>

               <p>
                  Tenho dedicado meus estudos principalmente ao desenvolvimento Full Stack,
                  trabalhando com tecnologias como React, Next.js, Node.js, TypeScript, PostgreSQL e
                  Docker, além de explorar temas como autenticação, arquitetura de software, APIs e
                  integrações com serviços externos.
               </p>

               <p>
                  Paralelamente, também busco expandir meus conhecimentos em TI, infraestrutura e
                  redes por meio de certificações e estudos complementares, desenvolvendo uma visão
                  mais ampla sobre o funcionamento de sistemas e ambientes corporativos.
               </p>

               <p>
                  Atualmente estou focado em continuar evoluindo tecnicamente e buscando
                  oportunidades de estágio.
               </p>
            </div>
         </motion.div>

         <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {aboutHighlights.map((item, i) => (
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
                  <AboutCard data={item} />
               </motion.div>
            ))}
         </div>
      </section>
   );
};
