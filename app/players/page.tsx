import type { Metadata } from "next";
import {
  CalendarCheck,
  DollarSign,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GameCardMockup } from "@/components/players/game-card-mockup";
import { PageHeader, PageShell } from "@/components/site/page-shell";

const APP_URL = "https://app.offday.games";

export const metadata: Metadata = {
  title: "OffDay for Players | High-Quality Pickup Games",
  description:
    "Find local pickup games with serious players. Fair pricing, no-flake guarantee, and a 1-hour safety net if a game does not fill.",
};

const experienceCards = [
  {
    icon: CalendarCheck,
    iconClass: "text-[var(--color-action)]",
    title: "Drop-in Convenience",
    body: "Find open spots for your favorite sports in your local area, pick a time that fits your schedule, and join instantly.",
  },
  {
    icon: DollarSign,
    iconClass: "text-[var(--color-accent)]",
    title: "Fair Pricing",
    body: "You only pay your exact split of the venue and setup costs, plus a flat $1 OffDay service fee. No hidden platform markups.",
  },
  {
    icon: ShieldCheck,
    iconClass: "text-[var(--color-action)]",
    title: "Accountability",
    body: "Because every player pays to secure their spot, people actually show up. Play with people who care about the game.",
  },
] as const;

export default function PlayersPage() {
  return (
    <PageShell>
      <PageHeader
        label="For players"
        title="High-quality pickup games, no strings attached"
        description="Skip the long league commitments. Find local sports games filled with serious players who show up because they are invested."
      >
        <Button
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="default"
          size="lg"
        >
          Go to App
        </Button>
      </PageHeader>

      <section className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
        {experienceCards.map((card) => (
          <Card key={card.title} className="h-full">
            <card.icon className={`h-8 w-8 ${card.iconClass}`} />
            <h2 className="mt-4 text-xl font-semibold">{card.title}</h2>
            <p className="mt-2 text-[var(--color-muted-foreground)]">
              {card.body}
            </p>
          </Card>
        ))}
      </section>

      <section className="mx-auto mt-14 max-w-5xl rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-8">
        <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
          Never show up to an empty field
        </h2>
        <p className="mt-4 text-[var(--color-muted-foreground)]">
          We know how frustrating it is when people back out at the last minute.
          If a game does not reach its minimum required player count exactly 1
          hour before the start time, the session is called off and your money
          is sent straight back to you.
        </p>
      </section>

      <section className="mx-auto mt-14 flex max-w-6xl flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-lg">
          <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
            See what you are joining
          </h2>
          <p className="mt-3 text-[var(--color-muted-foreground)]">
            Every game shows spots left, cost, location, and minimum players
            before you commit—so you always know what you are signing up for.
          </p>
        </div>
        <GameCardMockup />
      </section>

      <section className="mx-auto mt-14 max-w-5xl rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 text-center">
        <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
          Ready to lock in your next game?
        </h2>
        <p className="mt-3 text-[var(--color-muted-foreground)]">
          Secure your spot in minutes and play with reliable locals.
        </p>
        <div className="mt-6 flex justify-center">
          <Button
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="default"
            size="lg"
          >
            Go to App
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
