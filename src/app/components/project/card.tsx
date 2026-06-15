import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';
import type { Project } from '@/types/project';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ProjectDialog } from './dialog';
import { techIcons } from '@/lib/techIcons';

interface ProjectProps {
   data: Project;
}

export const ProjectCard = ({ data }: ProjectProps) => {
   return (
      <Card
         className="overflow-hidden rounded-2xl py-0 group
            flex
            flex-col
            h-full
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
               {data.technologies.slice(0, 6).map((tech) => {
                  const techData = techIcons[tech as keyof typeof techIcons];
                  const Icon = techData?.icon;

                  return (
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
                        {Icon && <Icon className={techData.className} />}
                        {tech}
                     </Badge>
                  );
               })}
            </div>
         </CardContent>
         <CardFooter className="border-t border-slate-800 pt-5 mt-auto">
            <ProjectDialog data={data} />
         </CardFooter>
      </Card>
   );
};
