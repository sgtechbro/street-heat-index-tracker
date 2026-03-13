import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { indicators } from "@/data/indicators";

const Sources = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="sources-section">
      <div className="container">
        <button
          className="sources-section__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <h2 className="sources-section__title">Data Sources</h2>
          <ChevronDown
            size={24}
            className={`sources-section__chevron${isOpen ? " sources-section__chevron--open" : ""}`}
          />
        </button>
        <div
          className={`sources-section__content${isOpen ? " sources-section__content--open" : ""}`}
        >
          <div className="sources-grid">
            {indicators.map(ind => (
              <div key={ind.id} className="source-card">
                <div className="source-card__indicator">{ind.emoji} {ind.name}</div>
                <div className="source-card__details">
                  Source: <a href={ind.sourceUrl} target="_blank" rel="noopener noreferrer">{ind.source}</a><br/>
                  Last data: {ind.lastUpdated}
                </div>
                <span className="source-card__cadence">{ind.cadence}</span>
              </div>
            ))}
          </div>
          <div className="sources-links">
            <h3>Further Reading</h3>
            <ul className="sources-list" role="list">
              <li><a href="https://www.businessinsider.com/weird-recession-indicators" target="_blank" rel="noopener noreferrer">Business Insider — 9 Weird Recession Indicators</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Lipstick_effect" target="_blank" rel="noopener noreferrer">Wikipedia — The Lipstick Effect</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Recession_index" target="_blank" rel="noopener noreferrer">Wikipedia — The R-Word Index</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Skyscraper_Index" target="_blank" rel="noopener noreferrer">Wikipedia — The Skyscraper Index</a></li>
              <li><a href="https://nymag.com/news/intelligencer/58195/" target="_blank" rel="noopener noreferrer">NY Magazine — Hot Waitress Economic Index</a></li>
              <li><a href="https://fred.stlouisfed.org/series/PCU32221132221105" target="_blank" rel="noopener noreferrer">FRED — Corrugated Box PPI (Monthly)</a></li>
              <li><a href="https://fred.stlouisfed.org/series/USLAH" target="_blank" rel="noopener noreferrer">FRED — Leisure & Hospitality Employment (Monthly)</a></li>
              <li><a href="https://www.champagne.fr/en/find-out-more/mediaroom/champagne-press/champagne-2025-shipment-review-and-outlook" target="_blank" rel="noopener noreferrer">Comite Champagne — 2025 Shipment Review</a></li>
              <li><a href="https://stockanalysis.com/stocks/rick/revenue/" target="_blank" rel="noopener noreferrer">Stock Analysis — RCI Hospitality (RICK) Revenue</a></li>
              <li><a href="https://www.marketplace.org/story/2025/03/28/recession-indicators-internet-culture-trend" target="_blank" rel="noopener noreferrer">Marketplace — Recession Indicators Based on Culture</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sources;
