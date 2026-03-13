import { MessageCircle, ArrowUp, MapPin, Clock } from "lucide-react";

interface PostCardProps {
  author: string;
  location: string;
  time: string;
  content: string;
  heatIndex: number;
  comments: number;
  upvotes: number;
}

const PostCard = ({ author, location, time, content, heatIndex, comments, upvotes }: PostCardProps) => {
  return (
    <div className="rounded-lg bg-card border border-border p-4 hover:shadow-md transition-shadow animate-slide-up">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-display font-semibold text-sm text-foreground">{author}</span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              {location}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {time}
            </span>
          </div>
          <p className="mt-2 text-sm text-foreground font-body leading-relaxed">{content}</p>
        </div>
        <div className="shrink-0 flex flex-col items-center rounded-md bg-primary/10 px-2 py-1">
          <span className="text-lg font-display font-bold text-primary">{heatIndex}°</span>
          <span className="text-[10px] text-muted-foreground uppercase tracking-wide">heat</span>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-4 border-t border-border pt-3">
        <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-body">
          <ArrowUp className="h-3.5 w-3.5" />
          {upvotes}
        </button>
        <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-body">
          <MessageCircle className="h-3.5 w-3.5" />
          {comments}
        </button>
      </div>
    </div>
  );
};

export default PostCard;
