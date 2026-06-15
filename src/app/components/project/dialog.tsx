import {
   Dialog,
   DialogClose,
   DialogContent,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

import { IoIosArrowForward } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';

import type { Project } from '@/types/project';

interface DialogProps {
   data: Project;
}

export const ProjectDialog = ({ data }: DialogProps) => {
   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button
               variant="ghost"
               className="group h-auto cursor-pointer p-0 text-slate-400 transition-colors hover:bg-transparent hover:text-sky-400"
            >
               Ver detalhes
               <IoIosArrowForward className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
            </Button>
         </DialogTrigger>

         <DialogContent className="max-h-[90vh] overflow-y-auto no-scrollbar border-slate-800 bg-slate-950 sm:max-w-3xl">
            <DialogHeader className="space-y-5">
               <Badge className="w-fit rounded-full border border-green-500/20 bg-green-500/10 text-green-300 hover:bg-green-500/10">
                  {data.status}
               </Badge>

               <DialogTitle className="text-3xl font-bold tracking-tight">{data.title}</DialogTitle>

               <p className="max-w-2xl leading-7 text-slate-400">{data.shortDescription}</p>
            </DialogHeader>

            {/* Futuramente coloque o carrossel de imagens aqui */}

            <Separator className="my-2 bg-slate-800" />

            <section className="space-y-4">
               <h3 className="text-lg font-semibold text-white">Principais destaques</h3>

               <div className="flex flex-wrap gap-2">
                  {data.highlights.map((highlight) => (
                     <Badge
                        key={highlight}
                        className="
                           rounded-full
                           border
                           border-sky-500/20
                           bg-sky-500/10
                           text-sky-300
                           hover:bg-sky-500/20
                        "
                     >
                        {highlight}
                     </Badge>
                  ))}
               </div>
            </section>

            <Separator className="my-2 bg-slate-800" />

            <section className="space-y-4">
               <h3 className="text-lg font-semibold text-white">Tecnologias utilizadas</h3>

               <div className="flex flex-wrap gap-2">
                  {data.technologies.map((tech) => (
                     <Badge
                        key={tech}
                        className="
                           rounded-full
                           border
                           border-violet-500/20
                           bg-violet-500/10
                           text-violet-300
                           hover:bg-violet-500/20
                        "
                     >
                        {tech}
                     </Badge>
                  ))}
               </div>
            </section>

            <Separator className="my-2 bg-slate-800" />

            <section className="space-y-4">
               <h3 className="text-lg font-semibold text-white">Foco de aprendizado</h3>

               <div className="flex flex-wrap gap-2">
                  {data.learningFocus.map((item) => (
                     <Badge
                        key={item}
                        className="
                           rounded-full
                           border
                           border-amber-500/20
                           bg-amber-500/10
                           text-amber-300
                           hover:bg-amber-500/20
                        "
                     >
                        {item}
                     </Badge>
                  ))}
               </div>
            </section>

            <DialogFooter className="mt-6 flex-col gap-3 sm:flex-row sm:justify-between">
               <Button
                  asChild
                  className="
                     rounded-full
                     bg-sky-500
                     transition-all
                     duration-300
                     hover:bg-sky-400
                  "
               >
                  <a href={data.github} target="_blank" rel="noopener noreferrer">
                     <FaGithub className="mr-2" />
                     Ver no GitHub
                  </a>
               </Button>

               <DialogClose asChild>
                  <Button
                     variant="outline"
                     className="
                        rounded-full
                        border-slate-700
                        bg-transparent
                        hover:bg-slate-900
                     "
                  >
                     Fechar
                  </Button>
               </DialogClose>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};
