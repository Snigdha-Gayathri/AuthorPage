import { lazy, Suspense, useMemo } from "react";
import SectionReveal from "../components/SectionReveal";
import FeaturedBookSection from "./FeaturedBookSection";

const CharactersSection = lazy(() => import("./CharactersSection"));
const BookArtSection = lazy(() => import("./BookArtSection"));
const BookMemesSection = lazy(() => import("./BookMemesSection"));
const QuotesSection = lazy(() => import("./QuotesSection"));

function PlaceholderSubsection({ title, description }) {
  return (
    <SectionReveal>
      <div className="mx-auto mt-10 max-w-4xl rounded-[2rem] border border-white/90 bg-white/38 px-6 py-10 text-center shadow-[0_0_34px_rgba(2,24,109,0.32)]">
        <h3 className="font-halimum text-3xl text-candle-text md:text-4xl">{title}</h3>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-candle-muted md:text-base">{description}</p>
      </div>
    </SectionReveal>
  );
}

export default function BooksSection({ activeBook }) {
  const bookSubsections = [
    { value: "ashes-and-algorithms", label: "Ashes and Algorithms" },
    { value: "blood-and-bullets", label: "Blood and Bullets" },
    { value: "crimes-and-calculations", label: "Crimes and Calculations" },
  ];

  const activeLabel = useMemo(() => {
    return bookSubsections.find((book) => book.value === activeBook)?.label ?? bookSubsections[0].label;
  }, [activeBook]);

  return (
    <section id="books" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="mt-2 font-halimum text-center text-4xl text-candle-text md:text-5xl">Books</h2>
        </SectionReveal>

        <SectionReveal delay={0.06}>
          <div className="mt-10 rounded-[2rem] border border-white/90 bg-gradient-to-br from-[#eff6ff]/92 via-[#dbeafe]/92 to-[#bfdbfe]/92 p-4 md:p-5">
            <p className="text-center text-[0.64rem] uppercase tracking-[0.26em] text-candle-gold md:text-[0.68rem]">{activeLabel}</p>

            {activeBook === "ashes-and-algorithms" ? (
              <div className="mt-8 space-y-16">
                <FeaturedBookSection />
                <Suspense
                  fallback={
                    <div className="space-y-12 rounded-[2rem] border border-white/70 bg-white/40 px-6 py-10 text-center text-sm text-candle-muted shadow-[0_0_24px_rgba(2,24,109,0.14)]">
                      Loading the rest of Ashes and Algorithms...
                    </div>
                  }
                >
                  <CharactersSection />
                  <BookArtSection />
                  <BookMemesSection />
                  <QuotesSection />
                </Suspense>
              </div>
            ) : activeBook === "blood-and-bullets" ? (
              <PlaceholderSubsection
                title="Blood and Bullets"
                description="Coming Soon"
              />
            ) : (
              <PlaceholderSubsection
                title="Crimes and Calculations"
                description="Coming Soon"
              />
            )}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}