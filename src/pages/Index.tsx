import Header from "@/components/vibes/Header";
import Hero from "@/components/vibes/Hero";
import IndicatorCard from "@/components/vibes/IndicatorCard";
import Methodology from "@/components/vibes/Methodology";
import Sources from "@/components/vibes/Sources";
import Footer from "@/components/vibes/Footer";
import { indicators } from "@/data/indicators";
import { useMemo } from "react";

const Index = () => {
  const latestUpdate = useMemo(() => {
    const dates = indicators.map(ind => ind.lastUpdated);
    // Sort by parsing month/year - find the most recent
    const parsed = dates.map(d => new Date(d));
    const latest = new Date(Math.max(...parsed.map(d => d.getTime())));
    return latest.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        

        {/* Disclaimer */}
        <div className="disclaimer">
          <div className="container">
            <p>Last update {latestUpdate}. Refreshes monthly.</p>
          </div>
        </div>

        {/* Indicators */}
        <section className="indicators-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-header__title">The Dirty Dozen</h2>
              <p className="section-header__desc">
                12 unconventional cultural indicators scored 0 to 100.<br />
                Based on real world data. Higher = worse conditions.
              </p>
            </div>
            <div className="indicators-grid">
              {indicators.map((ind) =>
              <IndicatorCard key={ind.id} indicator={ind} />
              )}
            </div>
          </div>
        </section>

        <Methodology />
        <Sources />
      </main>
      <Footer />
    </>);

};

export default Index;