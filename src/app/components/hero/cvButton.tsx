'use client';

import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { FaFilePdf } from 'react-icons/fa';

export const CVButton = () => {
   const handleDownloadCV = () => {
      toast.success('Download do currículo iniciado.');
   };

   return (
      <Button variant="outline" onClick={handleDownloadCV} className="cursor-pointer">
         <FaFilePdf />
         Baixar CV
      </Button>
   );
};
