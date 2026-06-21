import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
   title: 'José Rodrigues | Full Stack Developer',
   description:
      'Portfólio com projetos Full Stack, certificações em TI e redes e experiência prática com desenvolvimento web.',
   openGraph: {
      title: 'José Rodrigues | Full Stack Developer',

      description: 'Projetos Full Stack, certificações e experiência prática em desenvolvimento.',

      images: ['@../public/images/og-image.png'],
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="pt-BR" className={'dark'}>
         <body className="min-h-full flex flex-col">
            {children}
            <Toaster />
         </body>
      </html>
   );
}
