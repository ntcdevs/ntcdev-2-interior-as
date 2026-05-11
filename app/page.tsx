import config from "@/config.json";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const SECTION_COMPONENTS: Record<string, React.ComponentType> = {
  "trust-bar":    TrustBar,
  "services":     Services,
  "about":        About,
  "gallery":      Gallery,
  "testimonials": Testimonials,
  "contact":      Contact,
};

export default function Home() {
  const sections = config.sections.filter((s) => s !== "hero");
  return (
    <main>
      <Navbar />
      <Hero />
      {sections.map((key) => {
        const Component = SECTION_COMPONENTS[key];
        return Component ? <Component key={key} /> : null;
      })}
      <Footer />
    </main>
  );
}
