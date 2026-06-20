import { HeroSection } from './components/hero/hero';
import { Project } from './components/project/project';
import { Skills } from './components/skills/skills';
import { Certificates } from './components/certificates/certificates';
import {About} from './components/about/about'

export default function Home() {
   return (
      <main className="flex flex-col justify-center items-center min-h-screen px-4">
         <HeroSection />
         <Project />
         <Skills />
         <Certificates />
         <About />
      </main>
   );
}
