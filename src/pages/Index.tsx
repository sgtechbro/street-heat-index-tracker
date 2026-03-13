import HeatGauge from "@/components/HeatGauge";
import PostCard from "@/components/PostCard";
import BottomNav from "@/components/BottomNav";
import DesktopSidebar from "@/components/DesktopSidebar";
import { Flame, Plus } from "lucide-react";

const samplePosts = [
  {
    author: "Marcus J.",
    location: "Downtown LA",
    time: "12 min ago",
    content: "Concrete is radiating crazy heat today. The bus stop on 5th has zero shade — someone needs to put up a canopy out there. Stay hydrated people.",
    heatIndex: 108,
    comments: 14,
    upvotes: 42,
  },
  {
    author: "Priya S.",
    location: "East Harlem, NYC",
    time: "34 min ago",
    content: "Opened hydrant on 116th is the move right now. Kids are out, block is alive. But real talk the asphalt temp has to be 140+.",
    heatIndex: 97,
    comments: 8,
    upvotes: 31,
  },
  {
    author: "DeShawn W.",
    location: "South Side, Chicago",
    time: "1 hr ago",
    content: "Third day over 95. AC in our building went out last night. Anyone know cooling centers still open past 8pm?",
    heatIndex: 101,
    comments: 23,
    upvotes: 67,
  },
  {
    author: "Ana R.",
    location: "Phoenix, AZ",
    time: "2 hr ago",
    content: "Measured the sidewalk temp outside my apartment: 162°F. Saw a dog with burned paws yesterday. Please keep your pets inside during peak hours.",
    heatIndex: 115,
    comments: 19,
    upvotes: 88,
  },
  {
    author: "Terrence K.",
    location: "Houston, TX",
    time: "3 hr ago",
    content: "Humidity is brutal. Heat index says 98 but it feels like you're breathing through a wet towel. Parks are empty.",
    heatIndex: 98,
    comments: 6,
    upvotes: 22,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DesktopSidebar />

      <main className="md:ml-56 pb-20 md:pb-8">
        {/* Mobile Header */}
        <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border px-4 py-3 md:hidden">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-primary" />
            <h1 className="font-display font-bold text-lg text-foreground">SHIT</h1>
          </div>
        </header>

        <div className="px-4 md:px-8 py-4 md:py-6 max-w-3xl">
          {/* Heat Gauge */}
          <HeatGauge value={103} location="New York City, NY" />

          {/* Feed Header */}
          <div className="flex items-center justify-between mt-6 mb-4">
            <h2 className="font-display font-semibold text-lg text-foreground">Community Reports</h2>
            <button className="flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-xs font-display font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
              <Plus className="h-3.5 w-3.5" />
              Report
            </button>
          </div>

          {/* Feed */}
          <div className="space-y-3">
            {samplePosts.map((post, i) => (
              <PostCard key={i} {...post} />
            ))}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;
