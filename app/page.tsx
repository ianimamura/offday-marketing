import { CalendarCheck2, Clock3, Users, BellRing } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  PageCta,
  PageHeader,
  PageShell,
} from "@/components/site/page-shell";

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

      <section className="mx-auto mt-14 max-w-6xl">
        <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
          Why teams choose OffDay
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="h-full">
            <CalendarCheck2 className="h-8 w-8 text-[var(--color-action)]" />
            <h3 className="mt-4 text-xl font-semibold">Shared schedule</h3>
            <p className="mt-2 text-[var(--color-muted-foreground)]">
              One timeline for games, rest days, and changes so everyone stays
              aligned.
            </p>
          </Card>
          <Card className="h-full">
            <Users className="h-8 w-8 text-[var(--color-accent)]" />
            <h3 className="mt-4 text-xl font-semibold">Availability tracking</h3>
            <p className="mt-2 text-[var(--color-muted-foreground)]">
              Players quickly update status and organizers instantly see who is
              in.
            </p>
          </Card>
          <Card className="h-full">
            <BellRing className="h-8 w-8 text-[var(--color-action)]" />
            <h3 className="mt-4 text-xl font-semibold">Clear updates</h3>
            <p className="mt-2 text-[var(--color-muted-foreground)]">
              Announcements and reminders land in one place, not scattered
              across threads.
            </p>
          </Card>
          <Card className="h-full">
            <Clock3 className="h-8 w-8 text-[var(--color-accent)]" />
            <h3 className="mt-4 text-xl font-semibold">Less admin overhead</h3>
            <p className="mt-2 text-[var(--color-muted-foreground)]">
              Automate routine coordination so you can focus on the game, not
              logistics.
            </p>
          </Card>
        </div>
      </section>

      <PageCta
        title="Ready to stop chasing updates?"
        description="See how OffDay fits your workflow whether you run the group or just show up and play."
        buttonHref="/organizers"
        buttonText="Explore for Organizers"
      />
    </PageShell>
  );
}
