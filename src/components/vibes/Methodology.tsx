import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Methodology = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="methodology">
      <div className="container">
        <button className="methodology__toggle" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
          <h3 className="methodology__title">How Does This SHIT Work?</h3>
          <ChevronDown size={24} className={`methodology__chevron${isOpen ? " methodology__chevron--open" : ""}`} />
        </button>
        <div className={`methodology__content${isOpen ? " methodology__content--open" : ""}`}>
          <div className="methodology__grid">
            <div className="methodology__text">
              <p>
                Each indicator is scored 0 to 100 based on verifiable real world data. Sales figures, industry reports,
                construction activity, media mentions, etc. Then weighted by historical signal strength. Higher = more
                heat.
              </p>
              <p>
                The R-Word, Cardboard Box, and Stripper indices get the heaviest weights because they have the most
                direct, measurable connection to actual economic activity. The Hemline and Hot Waitress indices get the
                lightest because tbvh they're mostly vibes.
              </p>
              <div className="methodology__refresh">
                <h4>Monthly Refresh</h4>
                <p>
                  Data is refreshed on the 1st of each month. Some indicators update monthly (Cardboard Box via FRED,
                  labor data via BLS), others quarterly (Lipstick via Circana, Stripper via RICK earnings), and some
                  only annually (Champagne via Comite Champagne). Between updates, the most recent data point carries
                  forward.
                </p>
              </div>
            </div>
            <div className="formula-box">
              <div className="formula-box__title">Weighting Formula</div>
              <div className="formula-box__equation">
                SHIT-o-meter Score<br />= 100 - Σ(w<sub>i</sub> × s<sub>i</sub>) / Σ(w<sub>i</sub>)
              </div>
              <ul className="formula-box__items" role="list">
                <li>
                  <span className="weight">16%</span>
                  <span>R-Word Index</span>
                </li>
                <li>
                  <span className="weight">11%</span>
                  <span>Stripper Index</span>
                </li>
                <li>
                  <span className="weight">11%</span>
                  <span>Cardboard Box Index</span>
                </li>
                <li>
                  <span className="weight">9%</span>
                  <span>Skyscraper Index</span>
                </li>
                <li>
                  <span className="weight">8%</span>
                  <span>Champagne Index</span>
                </li>
                <li>
                  <span className="weight">8%</span>
                  <span>Diaper Rash Index</span>
                </li>
                <li>
                  <span className="weight">7%</span>
                  <span>Lipstick Index</span>
                </li>
                <li>
                  <span className="weight">7%</span>
                  <span>Frozen Pizza Index</span>
                </li>
                <li>
                  <span className="weight">7%</span>
                  <span>Vasectomy Index</span>
                </li>
                <li>
                  <span className="weight">6%</span>
                  <span>Underwear Index</span>
                </li>
                <li>
                  <span className="weight">5%</span>
                  <span>Hemline Index</span>
                </li>
                <li>
                  <span className="weight">5%</span>
                  <span>Hot Waitress Index</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
