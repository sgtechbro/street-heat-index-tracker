const Methodology = () => (
  <section className="methodology">
    <div className="container">
      <div className="methodology__grid">
        <div className="methodology__text">
          <h3>How the Vibes Score Works</h3>
          <p>
            Each indicator is scored 0–100 based on verifiable real-world data — sales figures, industry reports, construction activity, media mentions — then weighted by historical signal strength.
          </p>
          <p>
            The R-Word, Cardboard Box, and Stripper indices get the heaviest weights because they have the most direct, measurable connection to actual economic activity. The Hemline and Hot Waitress indices get the lightest because, let's be honest, they're mostly vibes.
          </p>
          <div className="methodology__refresh">
            <h4>Monthly Refresh</h4>
            <p>Data is refreshed on the 1st of each month. Some indicators update monthly (Cardboard Box via FRED, labor data via BLS), others quarterly (Lipstick via Circana, Stripper via RICK earnings), and some annually (Champagne via Comite Champagne). Between updates, the most recent data point carries forward.</p>
          </div>
        </div>
        <div className="formula-box">
          <div className="formula-box__title">Weighting Formula</div>
          <div className="formula-box__equation">
            Vibes = 100 - Σ(w<sub>i</sub> × s<sub>i</sub>) / Σ(w<sub>i</sub>)
          </div>
          <ul className="formula-box__items" role="list">
            <li><span className="weight">18%</span><span>R-Word Index</span></li>
            <li><span className="weight">12%</span><span>Stripper Index</span></li>
            <li><span className="weight">12%</span><span>Cardboard Box Index</span></li>
            <li><span className="weight">10%</span><span>Skyscraper Curse</span></li>
            <li><span className="weight">10%</span><span>Champagne Index</span></li>
            <li><span className="weight">10%</span><span>Diaper Rash Index</span></li>
            <li><span className="weight">8%</span><span>Lipstick Index</span></li>
            <li><span className="weight">8%</span><span>Underwear Index</span></li>
            <li><span className="weight">6%</span><span>Hemline Index</span></li>
            <li><span className="weight">6%</span><span>Hot Waitress Index</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Methodology;
