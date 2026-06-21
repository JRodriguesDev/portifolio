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
      <Button
         variant="ghost"
         onClick={handleCopyEmail}
         className="cursor-pointer hover:-translate-y-1 hover:text-white transition-transform duration-300"
      >
         <FaEnvelope />
      </Button>
   );
};
