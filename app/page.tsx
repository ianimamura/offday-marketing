import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  PageCta,
  PageHeader,
  PageShell,
} from "@/components/site/page-shell";

const organizerBenefits = [
  {
    title: "Easy Game Setup",
    body: "Quickly create games for your favorite sports that friends and people in the area can join.",
  },
  {
    title: "Complete Game Management",
    body: "Set your schedule, location, and player limits in one dashboard.",
  },
  {
    title: "Zero Cost Chasing",
    body: "Stop chasing people on chat apps for money. OffDay collects payments automatically.",
  },
  {
    title: "Cover Your Expenses",
    body: "Factor in the price of facilities, refs, scorekeepers, and supplies directly into the game setup.",
  },
] as const;

const playerBenefits = [
  {
    title: "Secure Your Spot",
    body: "Drop into competitive local pickup games without the commitment of joining a formal league.",
  },
  {
    title: "Quality Games",
    body: "Play with other serious people who are invested because they paid to secure their spot.",
  },
  {
    title: "No Flakes",
    body: "If a game does not get enough players, you get your money back automatically.",
  },
] as const;

export default function Home() {
  return (
    <PageShell>
      <PageHeader
        label="OffDay"
        title={
          <>
            Organize, Earn and Play on your{" "}
            <span className="text-[var(--color-accent)]">OffDay</span>
          </>
        }
        description="The all-in-one platform to host local pickup games, split costs automatically, and play with reliable local players."
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button href="/organizers" variant="default" size="lg">
            For Organizers
          </Button>
          <Button href="/players" variant="outline" size="lg">
            For Players
          </Button>
        </div>
      </PageHeader>

      <div className="mx-auto mt-14 max-w-6xl overflow-hidden rounded-xl border border-[var(--color-border)]">
        <Image
          src="/offday-hero-banner.png"
          alt="People playing basketball, pickleball, kickball, and soccer at local pickup games"
          width={1920}
          height={640}
          className="h-auto w-full object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 1152px"
        />
      </div>

      <section className="mx-auto mt-14 max-w-6xl">
        <h2 className="text-2xl font-semibold text-[var(--color-foreground)] sm:text-3xl">
          Why sports fans are loving OffDay
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card className="h-full">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
              For Organizers
            </p>
            <h3 className="mt-2 text-xl font-semibold text-[var(--color-foreground)]">
              Host &amp; Earn
            </h3>
            <ul className="mt-6 space-y-5">
              {organizerBenefits.map((item) => (
                <li key={item.title}>
                  <h4 className="font-semibold text-[var(--color-foreground)]">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="h-full">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-action)]">
              For Players
            </p>
            <h3 className="mt-2 text-xl font-semibold text-[var(--color-foreground)]">
              Join &amp; Play
            </h3>
            <ul className="mt-6 space-y-5">
              {playerBenefits.map((item) => (
                <li key={item.title}>
                  <h4 className="font-semibold text-[var(--color-foreground)]">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <PageCta
        title="Ready to join a local pickup game?"
        description="See available games on the OffDay app, join and play."
        buttonHref="https://app.offday.games"
        buttonText="Explore OffDay Games"
        external
      />
    </PageShell>
  );
}
