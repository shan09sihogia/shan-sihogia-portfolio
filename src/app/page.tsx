// src/app/page.tsx
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import AboutMeInteractive from '../components/AboutMeInteractive';
import TechStack from '../components/TechStack';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import ThemeToggle from '../components/ThemeToggle'; // New import

export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Hero />
      <Projects />
      <AboutMeInteractive />
      <TechStack />
      <Achievements />
      <Contact />
      <ThemeToggle /> {/* New component */}
    </main>
  );
}