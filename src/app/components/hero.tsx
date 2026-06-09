import Image from 'next/image';
import profileImage from '../../../public/images/profile.jpg';
import { EmailButton } from './buttonClient';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const HeroSection = () => {
   return (
      <section className="w-full max-w-6xl mx-auto px-6 py-20">
         <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl space-y-6">
               <div className="inline-flex items-center gap-2 ...">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Disponível para oportunidades
               </div>

               <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight">José Rodrigues</h1>

                  <h2 className="text-xl md:text-2xl text-slate-300">
                     Full Stack Developer • React • Node.js
                  </h2>

                  <p className="text-slate-400 leading-relaxed max-w-xl">
                     Construindo aplicações web modernas com
                     <span className="text-white font-medium">
                        {' '}
                        React, Next.js, Node.js e TypeScript
                     </span>
                     . Sempre buscando aprender novas tecnologias e evoluir como desenvolvedor.
                  </p>
               </div>

               <div className="flex items-center gap-5 text-2xl text-slate-400 ">
                  <a
                     className="hover:-translate-y-1 hover:text-white transition-transform duration-300"
                     href="https://github.com/JRodriguesDev"
                     target="_blank"
                  >
                     <FaGithub />
                  </a>

                  <a
                     className="hover:-translate-y-1 hover:text-white transition-transform duration-300"
                     href="https://www.linkedin.com/in/joserodrigues-dev/"
                     target="_blank"
                  >
                     <FaLinkedin />
                  </a>
                  <EmailButton />
               </div>
            </div>

            <div className="relative">
               <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

               <div className="relative h-64 w-64 md:h-80 md:w-80 overflow-hidden rounded-full border border-slate-800">
                  <Image
                     src={profileImage}
                     alt="José Rodrigues"
                     fill
                     className="object-cover"
                     placeholder="blur"
                  />
               </div>
            </div>
         </div>
      </section>
   );
};
