'use client';

import { motion } from 'motion/react';
import { certificates } from '@/data/certificates';
import { CertificateCard } from './card';

export const Certificates = () => {
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
                  Certificados
               </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
               Certificações que complementam minha formação em tecnologia.
            </h2>

            <p className="text-base md:text-lg leading-8 text-slate-400">
               Além dos estudos em desenvolvimento de software, busco ampliar minha base técnica por
               meio de certificações em TI e redes, fortalecendo conhecimentos sobre infraestrutura,
               conectividade, segurança e suporte a sistemas.
            </p>
         </motion.div>

         <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {certificates.map((certificate, i) => (
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
                  <CertificateCard data={certificate} />
               </motion.div>
            ))}
         </div>
      </section>
   );
};
