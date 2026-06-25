import SectionReveal from "../components/SectionReveal";
import FeaturedBookSection from "./FeaturedBookSection";
import CharactersSection from "./CharactersSection";
import BookArtSection from "./BookArtSection";
import BookMemesSection from "./BookMemesSection";
import QuotesSection from "./QuotesSection";

export default function BooksSection() {
  return (
    <section id="books" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="mt-2 font-halimum text-center text-4xl text-candle-text md:text-5xl">Arsenal of Ashkara</h2>
        </SectionReveal>

        <div className="mt-10 rounded-[2rem] border border-white/90 bg-gradient-to-br from-[#eff6ff]/92 via-[#dbeafe]/92 to-[#bfdbfe]/92 p-4 md:p-5">
          <div className="space-y-16">
            <FeaturedBookSection />
            <CharactersSection />
            <BookArtSection />
            <BookMemesSection />
            <QuotesSection />
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto items-stretch">
          <SectionReveal className="h-full">
            <div className="h-full flex flex-col justify-between rounded-[2rem] border border-white/90 bg-gradient-to-br from-[#eff6ff]/80 to-[#bfdbfe]/80 p-8 text-center shadow-candle transition-all duration-300 hover:shadow-glow">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-candle-gold/80 mb-2 font-serif">Dwitheeya</p>
                <h3 className="font-halimum text-3xl text-candle-text md:text-4xl">Blood and Bullets</h3>
                <div className="mx-auto mt-4 w-12 border-t border-candle-gold/20" />
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-[#1e90ff] font-bold">Coming Soon</p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.06} className="h-full">
            <div className="h-full flex flex-col justify-between rounded-[2rem] border border-white/90 bg-gradient-to-br from-[#eff6ff]/80 to-[#bfdbfe]/80 p-8 text-center shadow-candle transition-all duration-300 hover:shadow-glow">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-candle-gold/80 mb-2 font-serif">Thritheeya</p>
                <h3 className="font-halimum text-3xl text-candle-text md:text-4xl">Crimes and Calculations</h3>
                <div className="mx-auto mt-4 w-12 border-t border-candle-gold/20" />
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-[#1e90ff] font-bold">Coming Soon</p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}