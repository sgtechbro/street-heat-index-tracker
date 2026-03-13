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

        {/* Updated tag */}
        <div className="disclaimer updated-tag">
          <div className="container">
            <p><span className="header__pulse"></span> Updated Mar 2026</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="disclaimer">
          <div className="container">
            <p>⚠️ Satirical project. These are real (but mostly unreliable) indicators. Not financial advice. Please don't make investment decisions based on hemline lengths or vasectomy rates.</p>
          </div>
        </div>

        {/* Indicators */}
        <section className="indicators-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-header__title">The 12 Indicators</h2>
              <p className="section-header__desc">
                Each scored 0–100 based on real-world signals. Higher = more heat. The composite weights them into one Street Heat reading.
              </p>
            </div>
            <div className="indicators-grid">
              {indicators.map(ind => (
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
