import { useState, useRef, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { type Indicator, getStatus } from "@/data/indicators";

const IndicatorCard = ({ indicator }: { indicator: Indicator }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [barAnimated, setBarAnimated] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const status = getStatus(indicator.score);

  const toggle = useCallback(() => {
    setIsOpen(prev => {
      if (!prev) setBarAnimated(true);
      return !prev;
    });
  }, []);

  return (
    <div className={`indicator-card${isOpen ? ' indicator-card--open' : ''}`}>
      <button className="indicator-card__toggle" aria-expanded={isOpen} onClick={toggle}>
        <div className="indicator-card__header">
          <div className="indicator-card__emoji">{indicator.emoji}</div>
          <div className="indicator-card__titles">
            <div className="indicator-card__top-row">
              <div className="indicator-card__name">{indicator.name}</div>
              <span className={`indicator-card__score-badge indicator-card__score-badge--${status.level}`}>{indicator.score}</span>
            </div>
            <div className="indicator-card__aka">{indicator.aka}</div>
          </div>
          <ChevronDown size={16} className="indicator-card__chevron" />
        </div>
      </button>
      <div
        className="indicator-card__body"
        ref={bodyRef}
        style={{
          height: isOpen ? bodyRef.current?.scrollHeight : 0,
          overflow: 'hidden',
          transition: 'height 300ms cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div className="indicator-card__body-inner">
          <div className="indicator-card__desc">{indicator.desc}</div>
          <div className="indicator-card__rationale">{indicator.rationale}</div>
          <div className="indicator-card__bar-area">
            <div className="indicator-card__bar-labels">
              <span>{indicator.leftLabel}</span>
              <span>{indicator.rightLabel}</span>
            </div>
            <div className="indicator-bar">
              <div
                className={`indicator-bar__fill indicator-bar__fill--${status.level}`}
                style={{ width: barAnimated ? `${indicator.score}%` : '0%' }}
              />
              <div className="indicator-bar__marker" style={{ left: `${indicator.score}%` }}>
                <span className="indicator-bar__value">{indicator.score}</span>
              </div>
            </div>
          </div>
          <div className="indicator-card__source">
            <a href={indicator.sourceUrl} target="_blank" rel="noopener noreferrer" className="indicator-card__source-text">{indicator.source}</a>
            <span className="indicator-card__cadence">{indicator.cadence}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndicatorCard;
