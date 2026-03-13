import { Flame, MessageSquare, MapPin, User } from "lucide-react";
import { useState } from "react";

const tabs = [
  { id: "index", label: "Index", icon: Flame },
  { id: "talk", label: "Talk", icon: MessageSquare },
  { id: "map", label: "Map", icon: MapPin },
  { id: "profile", label: "Profile", icon: User },
];

const BottomNav = () => {
  const [active, setActive] = useState("index");

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-sm md:hidden">
      <div className="flex items-center justify-around py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-display font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
