'use client';

import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { FaFilePdf } from 'react-icons/fa';

export const CVButton = () => {
   const handleDownloadCV = () => {
      toast.success('Download do currículo iniciado.');
   };

   return (
      <Button asChild variant="outline" className="cursor-pointer">
         <a href="/cv/CurriculoEst.docx" download onClick={handleDownloadCV}>
            <FaFilePdf />
            Baixar CV
         </a>
      </Button>
   );
};
