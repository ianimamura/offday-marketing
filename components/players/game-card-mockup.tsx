import { Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

export function GameCardMockup() {
  return (
    <article aria-label="Example game listing" className="w-full max-w-md">
      <Card className="card-hover">
        <header className="flex items-start justify-between gap-4 border-b border-[var(--color-border)] pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              Soccer
            </p>
            <h3 className="mt-1 text-lg font-semibold text-[var(--color-foreground)]">
              Competitive 7v7 Coed Pickup
            </h3>
          </div>
          <span className="shrink-0 rounded-full bg-[var(--color-muted)] px-3 py-1 text-xs font-semibold text-[var(--color-foreground)]">
            5 Spots Left
          </span>
        </header>

        <ul className="mt-4 space-y-3 text-sm text-[var(--color-muted-foreground)]">
          <li className="flex items-center gap-2">
            <Calendar className="h-4 w-4 shrink-0 text-[var(--color-action)]" aria-hidden />
            <span>Tuesday, May 12 at 7:00 PM</span>
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-[var(--color-action)]" aria-hidden />
            <span>Central Park Field 3</span>
          </li>
        </ul>

        <footer className="mt-5 space-y-1 border-t border-[var(--color-border)] pt-4 text-sm">
          <p className="font-semibold text-[var(--color-foreground)]">
            Cost: <span className="text-[var(--color-accent)]">$8.50</span>
          </p>
          <p className="text-[var(--color-muted-foreground)]">
            Minimum Players Required: 14
          </p>
        </footer>
      </Card>
    </article>
  );
}
