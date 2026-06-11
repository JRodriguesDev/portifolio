'use client';

import Image from 'next/image';
import profileImage from '../../../public/images/profile.jpg';
import * as motion from 'motion/react-client';

export const ImageClient = () => {
   return (
      <motion.div
         className="relative"
         initial={{
            opacity: 0,
            scale: 0.9,
         }}
         animate={{
            opacity: 1,
            scale: 1,
         }}
         transition={{
            duration: 0.8,
         }}
      >
         <div className="absolute inset-0 rounded-full bg-blue-500/40 blur-[100px]" />
         <div className="relative h-64 w-64 md:h-80 md:w-80 overflow-hidden rounded-full border border-slate-800">
            <Image
               src={profileImage}
               alt="José Rodrigues"
               fill
               className="object-cover"
               placeholder="blur"
            />
         </div>
      </motion.div>
   );
};
