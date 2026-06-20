import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PiCertificateFill } from 'react-icons/pi';
import { IoIosArrowForward } from 'react-icons/io';

import type { Certificates } from '@/types/certificates';

interface CertificateCardProps {
   data: Certificates;
}

export const CertificateCard = ({ data }: CertificateCardProps) => {
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

         <CardHeader className="space-y-4">
            <div
               className={`
                  flex h-14 w-14 items-center justify-center rounded-xl
                  ${data.bgColor}
               `}
            >
               <PiCertificateFill className={`h-7 w-7 ${data.color}`} />
            </div>

            <div>
               <CardTitle className="text-xl">{data.title}</CardTitle>

               <p className={`mt-2 text-sm font-medium ${data.color}`}>{data.issuer}</p>
            </div>

            <p className="text-sm leading-7 text-slate-400">{data.description}</p>
         </CardHeader>

         <CardContent>
            <div className="flex flex-wrap gap-2">
               {data.skills.slice(0, 4).map((skill) => (
                  <Badge
                     key={skill}
                     variant="secondary"
                     className="
                        rounded-full
                        border
                        border-slate-700
                        bg-slate-900
                        transition-colors
                        hover:border-slate-500
                     "
                  >
                     {skill}
                  </Badge>
               ))}
            </div>
         </CardContent>

         <CardFooter className="mt-auto border-t border-slate-800 pt-5">
            <Button
               asChild
               variant="ghost"
               className="
                  group
                  h-auto
                  p-0
                  text-slate-400
                  hover:bg-transparent
                  hover:text-sky-400
               "
            >
               <a href={data.pdf} target="_blank" rel="noopener noreferrer">
                  Ver certificado
                  <IoIosArrowForward
                     className="
                        ml-2
                        h-4
                        w-4
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                     "
                  />
               </a>
            </Button>
         </CardFooter>
      </Card>
   );
};
