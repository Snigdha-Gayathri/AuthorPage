import { useEffect, useState } from "react";
import AtmosphereLayer from "./components/AtmosphereLayer";
import BookTrail from "./components/MangoTrail";
import StickyNav from "./components/StickyNav";
import BooksSection from "./sections/BooksSection";
import BookstagramSection from "./sections/BookstagramSection";
import HeroSection from "./sections/HeroSection";
import AboutAuthorSection from "./sections/AboutAuthorSection";
import SiteFooter from "./sections/SiteFooter";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative overflow-hidden bg-candle-base text-candle-text">
      <AtmosphereLayer />
      <BookTrail />
      <StickyNav
        scrolled={scrolled}
        onAboutClick={() => setShowAbout(true)}
      />
      <main>
        <HeroSection />
        <BooksSection />
        <BookstagramSection />
        {showAbout ? <AboutAuthorSection /> : null}
      </main>
      <SiteFooter />
    </div>
  );
}
