import { Flame } from "lucide-react";

interface HeatGaugeProps {
  value: number;
  max?: number;
  label?: string;
  location?: string;
}

const getHeatLevel = (value: number) => {
  if (value >= 90) return { label: "EXTREME", color: "text-primary" };
  if (value >= 75) return { label: "HIGH", color: "text-primary" };
  if (value >= 60) return { label: "MODERATE", color: "text-accent-foreground" };
  return { label: "LOW", color: "text-muted-foreground" };
};

const HeatGauge = ({ value, max = 120, location = "Your Area" }: HeatGaugeProps) => {
  const heat = getHeatLevel(value);
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="relative overflow-hidden rounded-lg bg-secondary p-6 md:p-8">
      <div className="relative z-10 flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-secondary-foreground/70 font-body uppercase tracking-wider">
            Street Heat Index
          </p>
          <p className="text-secondary-foreground/60 font-body text-sm mt-1">{location}</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Flame className="h-10 w-10 text-primary animate-pulse-heat" />
          </div>
          <div className="text-center">
            <span className="text-6xl md:text-7xl font-display font-bold text-primary-foreground tabular-nums">
              {value}°
            </span>
            <p className={`text-sm font-display font-semibold tracking-widest mt-1 ${heat.color === "text-primary" ? "text-primary" : "text-accent"}`}>
              {heat.label}
            </p>
          </div>
        </div>

        <div className="w-full md:w-48">
          <div className="h-2 rounded-full bg-secondary-foreground/20 overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-700"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-secondary-foreground/50 font-body">0°</span>
            <span className="text-xs text-secondary-foreground/50 font-body">{max}°</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeatGauge;
