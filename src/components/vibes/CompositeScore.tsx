import { useEffect, useState } from "react";
import { computeComposite } from "@/data/indicators";

const CompositeScore = () => {
  const [score] = useState(computeComposite());

  const angle = (score / 100) * 180 - 90;

  let verdict: string;
  let verdictClass: string;
  let desc: string;
  let statusText: string;
  let scoreColor: string;

  if (score >= 70) {
    verdict = 'Vibes are immaculate';
    verdictClass = 'composite__verdict composite__verdict--good';
    desc = 'The strippers are thriving, the champagne is flowing, and nobody is Googling "recession." Carry on.';
    statusText = 'VIBES: IMMACULATE';
    scoreColor = 'var(--color-green)';
  } else if (score >= 45) {
    verdict = 'Vibes are mid';
    verdictClass = 'composite__verdict composite__verdict--mid';
    desc = 'Some indicators are flagging, others are fine. The economy is giving mixed signals — like a Magic 8-Ball that says "ask again later."';
    statusText = 'VIBES: MID';
    scoreColor = 'var(--color-yellow)';
  } else {
    verdict = 'Vibes are NOT it';
    verdictClass = 'composite__verdict composite__verdict--bad';
    desc = 'Multiple indicators are flashing red. The strippers are leaving the industry, champagne sales have cratered, and everyone\'s wearing long skirts. Brace yourself.';
    statusText = 'VIBES: NOT IT';
    scoreColor = 'var(--color-red)';
  }

  return (
    <section className="composite" id="score">
      <div className="container composite__inner">
        <div className="composite__gauge-wrap">
          <svg className="gauge-svg" viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Composite vibes gauge">
            <defs>
              <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: 'var(--color-red)' }} />
                <stop offset="50%" style={{ stopColor: 'var(--color-yellow)' }} />
                <stop offset="100%" style={{ stopColor: 'var(--color-green)' }} />
              </linearGradient>
            </defs>
            {/* Track background */}
            <path d="M 40 190 A 160 160 0 0 1 360 190"
                  fill="none" stroke="var(--color-surface-offset)" strokeWidth="24" strokeLinecap="round"/>
            {/* Gradient overlay */}
            <path d="M 40 190 A 160 160 0 0 1 360 190"
                  fill="none" stroke="url(#gaugeGrad)" strokeWidth="24" strokeLinecap="round" opacity="0.25"/>
            {/* Tick labels */}
            <text x="30" y="210" className="gauge-tick" textAnchor="middle">0</text>
            <text x="200" y="28" className="gauge-tick" textAnchor="middle">50</text>
            <text x="370" y="210" className="gauge-tick" textAnchor="middle">100</text>
            {/* Score text — rendered before needle so needle draws on top */}
            <text x="200" y="175" className="gauge-score" textAnchor="middle" style={{ fill: scoreColor }}>{score}</text>
            {/* Needle */}
            <g transform={`rotate(${angle}, 200, 190)`} style={{ transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)' }}>
              <line x1="200" y1="190" x2="200" y2="55" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="200" cy="190" r="8" fill="var(--color-accent)"/>
              <circle cx="200" cy="190" r="4" fill="var(--color-bg)"/>
            </g>
            {/* Status text below */}
            <text x="200" y="250" className="gauge-status" textAnchor="middle">{statusText}</text>
          </svg>
        </div>
        <div className="composite__update-tag">
          <span className="header__pulse"></span>
          Updated Mar 2026
        </div>
        <div className="composite__meta">
          <div className="composite__label">Composite Vibes Score</div>
          <h2 className={verdictClass}>{verdict}</h2>
          <p className="composite__desc">{desc}</p>
        </div>
      </div>
    </section>
  );
};

export default CompositeScore;
