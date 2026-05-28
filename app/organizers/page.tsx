import { ClipboardCheck, CalendarRange, Users2, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHeader, PageShell } from "@/components/site/page-shell";

const APP_URL = "https://app.offday.games";

export default function OrganizersPage() {
  return (
    <PageShell>
      <PageHeader
        label="For organizers"
        title="Run schedules and game days with less admin work"
        description="OffDay helps you coordinate availability, keep your group informed, and handle changes fast so game day stays smooth."
      />

      <section className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2">
        <Card className="h-full">
          <CalendarRange className="h-8 w-8 text-[var(--color-action)]" />
          <h2 className="mt-4 text-xl font-semibold">Centralized scheduling</h2>
          <p className="mt-2 text-[var(--color-muted-foreground)]">
            Publish sessions, shifts, or match blocks in one place with no
            duplicate spreadsheets.
          </p>
        </Card>
        <Card className="h-full">
          <Users2 className="h-8 w-8 text-[var(--color-accent)]" />
          <h2 className="mt-4 text-xl font-semibold">Live availability view</h2>
          <p className="mt-2 text-[var(--color-muted-foreground)]">
            See who is available instantly and adjust plans before it becomes a
            last-minute scramble.
          </p>
        </Card>
        <Card className="h-full">
          <ClipboardCheck className="h-8 w-8 text-[var(--color-action)]" />
          <h2 className="mt-4 text-xl font-semibold">Fewer manual follow-ups</h2>
          <p className="mt-2 text-[var(--color-muted-foreground)]">
            Replace repetitive reminders and status checks with a consistent flow
            your group can trust.
          </p>
        </Card>
        <Card className="h-full">
          <Shield className="h-8 w-8 text-[var(--color-accent)]" />
          <h2 className="mt-4 text-xl font-semibold">Clear game-day visibility</h2>
          <p className="mt-2 text-[var(--color-muted-foreground)]">
            Everyone sees the same details, reducing confusion around location,
            timing, and readiness.
          </p>
        </Card>
      </section>

      <section className="mx-auto mt-14 max-w-5xl rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 text-center">
        <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
          Get started with OffDay
        </h2>
        <p className="mt-3 text-[var(--color-muted-foreground)]">
          Request access or launch the app to start organizing your group in
          minutes.
        </p>
        <div className="mt-6 flex justify-center">
          <Button
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="default"
            size="lg"
          >
            Request Access
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
