'use client';

import * as motion from 'motion/react-client';
import { Badge } from '@/components/ui/badge';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

export const TechStack = () => {
   const badgeClass =
      'rounded-full border border-slate-700 bg-slate-900 text-slate-300 gap-2 px-3 py-1 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-500 hover:text-white cursor-pointer';

   return (
      <div className="flex flex-wrap gap-3">
         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
         >
            <Badge
               variant="secondary"
               className={`${badgeClass} 'border-sky-500/30 bg-sky-500/10 text-sky-300`}
            >
               <FaReact className="text-sky-400" />
               React
            </Badge>
         </motion.div>

         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
         >
            <Badge variant="secondary" className={`${badgeClass} border-white/20 bg-white/5`}>
               <SiNextdotjs />
               Next.js
            </Badge>
         </motion.div>

         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
         >
            <Badge
               variant="secondary"
               className={`${badgeClass} border-green-500/30 bg-green-500/10 text-green-300`}
            >
               <FaNodeJs className="text-green-500" />
               Node.js
            </Badge>
         </motion.div>
      </div>
   );
};
