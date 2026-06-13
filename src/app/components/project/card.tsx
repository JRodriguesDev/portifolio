import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';
import { IoIosArrowForward } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import type { Project } from '@/types/project';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

interface ProjectProps {
   data: Pick<Project, 'title' | 'status' | 'images' | 'shortDescription' | 'technologies'>;
}

export const ProjectCard = ({ data }: ProjectProps) => {
   return (
      <Card
         className="overflow-hidden rounded-2xl py-0 group
            overflow-hidden
            rounded-2xl
            py-0
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-slate-700
            hover:shadow-xl
            hover:shadow-blue-500/10"
      >
         <div className="relative aspect-video w-full">
            <Image src={data.images[0]} alt={data.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
         </div>
         <CardHeader>
            <Badge variant="secondary" className="w-fit rounded-full">
               {data.status}
            </Badge>
            <CardTitle className="text-2xl">{data.title}</CardTitle>
            <CardDescription className="leading-7">{data.shortDescription}</CardDescription>
         </CardHeader>
         <CardContent>
            <div className="flex flex-wrap gap-2">
               {data.technologies.slice(0, 6).map((tech) => (
                  <Badge
                     key={tech}
                     variant="secondary"
                     className="rounded-full
                        border
                        border-slate-700
                        bg-slate-900
                        hover:border-slate-500
                        transition-colors"
                  >
                     {tech}
                  </Badge>
               ))}
            </div>
         </CardContent>
         <CardFooter className="border-t border-slate-800 pt-5">
            <Button
               variant="ghost"
               className="group h-auto p-0 text-slate-400 transition-colors hover:bg-transparent hover:text-sky-400"
            >
               Ver detalhes
               <IoIosArrowForward
                  className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-sky-400"
               />
            </Button>
         </CardFooter>
      </Card>
   );
};
