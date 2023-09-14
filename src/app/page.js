"use client";

import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/NavBar";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { EmailSection } from "./components/EmailSection";
import { Footer } from "./components/Footer";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactsRef={contactsRef}
      />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
