import { Card, CardContent } from '@/components/ui/card';
import type { AboutHighlight } from '@/types/about';

interface AboutCardProps {
   data: AboutHighlight;
}

export const AboutCard = ({ data }: AboutCardProps) => {
   return (
      <Card
         className="
            relative
            overflow-hidden
            rounded-2xl
            border-slate-800
            bg-slate-950
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-slate-700
            hover:shadow-lg
            hover:shadow-blue-500/10
         "
      >
         <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

         <CardContent className="p-6 space-y-4">
            <span className="text-sm uppercase tracking-[0.2em] text-sky-400">{data.title}</span>

            <h3 className="text-2xl font-bold text-white">{data.value}</h3>

            <p className="leading-7 text-slate-400">{data.description}</p>
         </CardContent>
      </Card>
   );
};
