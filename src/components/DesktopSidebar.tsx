import { Flame, MessageSquare, MapPin, User, TrendingUp } from "lucide-react";
import { useState } from "react";

const navItems = [
  { id: "index", label: "Heat Index", icon: Flame },
  { id: "talk", label: "Community Talk", icon: MessageSquare },
  { id: "map", label: "Heat Map", icon: MapPin },
  { id: "trends", label: "Trends", icon: TrendingUp },
  { id: "profile", label: "Profile", icon: User },
];

const DesktopSidebar = () => {
  const [active, setActive] = useState("index");

  return (
    <aside className="hidden md:flex md:w-56 md:flex-col md:fixed md:inset-y-0 bg-secondary border-r border-sidebar-border">
      <div className="flex items-center gap-2 px-5 py-5">
        <Flame className="h-6 w-6 text-primary" />
        <span className="font-display font-bold text-lg text-secondary-foreground">SHIT</span>
      </div>

      <nav className="flex-1 px-3 space-y-1 mt-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-body transition-colors ${
                isActive
                  ? "bg-sidebar-accent text-primary"
                  : "text-secondary-foreground/70 hover:bg-sidebar-accent hover:text-secondary-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="px-5 py-4 border-t border-sidebar-border">
        <p className="text-xs text-secondary-foreground/40 font-body">Street Heat Index Talk</p>
      </div>
    </aside>
  );
};

export default DesktopSidebar;
