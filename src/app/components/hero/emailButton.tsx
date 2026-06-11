'use client';

import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { FaEnvelope } from 'react-icons/fa';

export const EmailButton = () => {
   const handleCopyEmail = async () => {
      await navigator.clipboard.writeText('0joserodrigues0@gmail.com');
      toast.success('Email copiado para a área de transferência!');
   };

   return (
      <Button variant="outline" onClick={handleCopyEmail} className="cursor-pointer">
         <FaEnvelope />
         Copiar Email
      </Button>
   );
};
