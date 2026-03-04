import { useEffect, useState } from "react";
import AtmosphereLayer from "./components/AtmosphereLayer";
import StickyNav from "./components/StickyNav";
import FeaturedBookSection from "./sections/FeaturedBookSection";
import HeroSection from "./sections/HeroSection";
import CharactersSection from "./sections/CharactersSection";
import QuotesSection from "./sections/QuotesSection";
import AboutAuthorSection from "./sections/AboutAuthorSection";
import SiteFooter from "./sections/SiteFooter";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative overflow-hidden bg-candle-base text-candle-text">
      <AtmosphereLayer />
      <StickyNav scrolled={scrolled} />
      <main>
        <HeroSection />
        <FeaturedBookSection />
        <CharactersSection />
        <QuotesSection />
        <AboutAuthorSection />
      </main>
      <SiteFooter />
    </div>
  );
}
