import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Benefits from "@/components/landing/Benefits";
import Experts from "@/components/landing/Experts";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import Team from "@/components/landing/Team";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Experts />
      <Pricing />
      <Testimonials />
      <Team />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
