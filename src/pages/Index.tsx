import Header from "@/components/vibes/Header";
import Hero from "@/components/vibes/Hero";
import CompositeScore from "@/components/vibes/CompositeScore";
import IndicatorCard from "@/components/vibes/IndicatorCard";
import Methodology from "@/components/vibes/Methodology";
import Sources from "@/components/vibes/Sources";
import Footer from "@/components/vibes/Footer";
import { indicators } from "@/data/indicators";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CompositeScore />

        {/* Disclaimer */}
        <div className="disclaimer">
          <div className="container">
            <p className="text-base">Last update Mar 2026. Refreshes monthly.</p>
          </div>
        </div>

        {/* Indicators */}
        <section className="indicators-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-header__title">The Dirty Dozen</h2>
            <p className="section-header__desc text-base">
              12 unconventional cultural indicators scored 0 to 100 based on real data. Higher = worse conditions.
            </p>
            </div>
            <div className="indicators-grid">
              {indicators.map((ind) => (
                <IndicatorCard key={ind.id} indicator={ind} />
              ))}
            </div>
          </div>
        </section>

        <Methodology />
        <Sources />
      </main>
      <Footer />
    </>
  );
};

export default Index;
