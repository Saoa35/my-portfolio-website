import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/NavBar";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { EmailSection } from "./components/EmailSection";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <NavBar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  );
}
