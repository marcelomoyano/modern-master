import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-primary overflow-x-hidden pt-0">
      <Navigation />
      <Hero />
      <TrustBar />
      <BeforeAfter />
      <Services />
      <Gallery />
      <About />
      <ServiceAreas />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
