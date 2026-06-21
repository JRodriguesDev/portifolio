import { CVButton } from './cvButton';
import { ImageClient } from './profileImage';
import { TechStack } from './techBadge';
import { EmailButton } from './emailButton';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const HeroSection = () => {
   return (
      <section className="w-full max-w-6xl mx-auto px-6 py-20">
         <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl space-y-6">
               <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-sm text-green-300">
                  <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  Disponível para oportunidades
               </div>

               <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                     José{' '}
                     <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Rodrigues
                     </span>
                  </h1>

                  <h2 className="text-xl md:text-2xl text-slate-300">Desenvolvedor Full Stack</h2>

                  <p className="text-slate-400 leading-relaxed max-w-xl">
                     Construindo aplicações web modernas. Sempre buscando aprender novas tecnologias
                     e evoluir como desenvolvedor.
                  </p>
               </div>

               <TechStack />

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
                  <CVButton />
               </div>
            </div>

            <ImageClient />
         </div>
      </section>
   );
};
