import { useState } from "react";
import { computeComposite } from "@/data/indicators";

const CompositeScore = () => {
  const [score] = useState(computeComposite());

  const angle = (score / 100) * 180 - 90;

  let verdict: string;
  let verdictClass: string;
  let desc: string;
  let statusText: string;
  let scoreColor: string;

  if (score >= 80) {
    verdict = 'The SHIT is hitting the fan!';
    verdictClass = 'composite__verdict composite__verdict--bad';
    desc = 'Every indicator is screaming. The strippers are broke, the freezers are full of DiGiorno, and urologists are booked solid. This is not a drill.';
    statusText = 'THE SHIT IS HITTING THE FAN';
    scoreColor = 'var(--color-red)';
  } else if (score >= 60) {
    verdict = 'Streets are sweating';
    verdictClass = 'composite__verdict composite__verdict--bad';
    desc = 'Multiple indicators are flashing red. The champagne has gone flat, the cardboard boxes have stopped moving, and everyone\'s wearing long skirts. Brace yourself.';
    statusText = 'STREETS ARE SWEATING';
    scoreColor = 'var(--color-red)';
  } else if (score >= 40) {
    verdict = 'Lukewarm out here';
    verdictClass = 'composite__verdict composite__verdict--mid';
    desc = 'Some indicators are flagging, others are fine. The economy is giving mixed signals — like a Magic 8-Ball that says "ask again later."';
    statusText = 'LUKEWARM OUT HERE';
    scoreColor = 'var(--color-yellow)';
  } else {
    verdict = 'Streets are cool';
    verdictClass = 'composite__verdict composite__verdict--good';
    desc = 'The strippers are thriving, the champagne is flowing, and nobody is Googling "recession." Carry on.';
    statusText = 'STREETS ARE COOL';
    scoreColor = 'var(--color-green)';
  }

  return (
    <section className="composite" id="score">
      <div className="container composite__inner">
        <div className="composite__label">SHIT-O-METER</div>
        <div className="composite__gauge-wrap">
          <svg className="gauge-svg" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SHIT-O-METER gauge">
            <defs>
              <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: 'var(--color-green)' }} />
                <stop offset="50%" style={{ stopColor: 'var(--color-yellow)' }} />
                <stop offset="100%" style={{ stopColor: 'var(--color-red)' }} />
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
            {/* Score text */}
            <text x="200" y="175" className="gauge-score" textAnchor="middle" style={{ fill: scoreColor }}>{score}</text>
            {/* Needle */}
            <g transform={`rotate(${angle}, 200, 190)`} style={{ transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)' }}>
              <line x1="200" y1="190" x2="200" y2="50" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="200" cy="190" r="10" fill="var(--color-accent)"/>
              <circle cx="200" cy="190" r="5" fill="var(--color-bg)"/>
            </g>
            {/* Status text removed — shown in verdict below */}
          </svg>
        </div>
        <div className="composite__meta">
          <h2 className={verdictClass}>{verdict}</h2>
          <p className="composite__desc">{desc}</p>
        </div>
      </div>
    </section>
  );
};

export default CompositeScore;
