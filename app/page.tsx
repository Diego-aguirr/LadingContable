import Hero from "@/app/components/sections/Hero";
import Benefits from "@/app/components/sections/Benefits";
import Process from "@/app/components/sections/Process";
import SocialProof from "@/app/components/sections/SocialProof";
import FAQ from "@/app/components/sections/FAQ";
import Contact from "@/app/components/sections/Contact";
import Footer from "@/app/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Process />
      <SocialProof />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
