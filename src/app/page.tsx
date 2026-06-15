import { HeroSection } from './components/hero/hero';
import { Project } from './components/project/project';
import { Skills } from './components/skills/skills';

export default function Home() {
   return (
      <main className="flex flex-col justify-center items-center min-h-screen px-4">
         <HeroSection />
         <Project />
         <Skills />
      </main>
   );
}
