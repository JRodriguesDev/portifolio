import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Skills } from '@/types/skills';
import { techIcons } from '@/lib/techIcons';

interface SkillCardProps {
   data: Skills;
   index: number;
}

export const SkillCard = ({ data, index }: SkillCardProps) => {
   const firstTech = data.technologies[0];
   const heroTech = techIcons[firstTech as keyof typeof techIcons];
   const HeroIcon = heroTech?.icon;

   return (
      <Card
         className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border-slate-800
            bg-slate-950/80
            backdrop-blur-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-slate-700
            hover:shadow-xl
            hover:shadow-sky-500/10
         "
      >
         {/* Linha superior */}
         <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

         {/* Glow */}
         <div className="absolute -top-16 right-0 h-40 w-40 rounded-full bg-sky-500/5 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-50" />

         {/* Ícone decorativo */}
         {HeroIcon && (
            <HeroIcon
               className={`
                  absolute
                  -right-6
                  -bottom-6
                  h-32
                  w-32
                  opacity-[0.05]
                  transition-transform
                  duration-500
                  group-hover:scale-110
                  ${heroTech.className}
               `}
            />
         )}

         <CardHeader className="relative space-y-5">
            {/* Número */}
            <span className="text-xs font-semibold tracking-[0.3em] text-slate-600">
               {String(index + 1).padStart(2, '0')}
            </span>

            <CardTitle className="text-2xl font-bold text-white">{data.title}</CardTitle>

            <p className="leading-7 text-slate-400">{data.description}</p>
         </CardHeader>

         <CardContent className="relative">
            <div className="flex flex-wrap gap-2">
               {data.technologies.map((tech) => {
                  const techData = techIcons[tech as keyof typeof techIcons];
                  const Icon = techData?.icon;

                  return (
                     <Badge
                        key={tech}
                        variant="secondary"
                        className="
                           rounded-full
                           border
                           border-slate-700
                           bg-slate-900/80
                           px-3
                           py-1
                           transition-all
                           duration-300
                           hover:-translate-y-0.5
                           hover:border-slate-500
                           hover:bg-slate-800
                           hover:text-white
                           flex
                           items-center
                           gap-2
                        "
                     >
                        {Icon && <Icon className={techData.className} />}
                        {tech}
                     </Badge>
                  );
               })}
            </div>
         </CardContent>
      </Card>
   );
};
