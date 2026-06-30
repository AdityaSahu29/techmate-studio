import Hero from "@/components/Hero";
import Games from "@/components/Games";
import Apps from "@/components/Apps";
import About from "@/components/About";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <Games />
      <Apps />
      <About />
      <Features />
      <Stats />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}