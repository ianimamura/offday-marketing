import Link from "next/link";
import {
  List,
  DollarSign,
  ShieldCheck,
  Calendar,
  CircleDot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const APP_URL = "https://app.offdaygames.com";

function Navbar() {
  return (
    <header
      className="sticky top-0 z-[var(--z-sticky)] border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-md"
      style={{ zIndex: 100 }}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold text-[var(--color-foreground)]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-accent)]">
            <Calendar className="h-4 w-4" aria-hidden />
          </span>
          OffDay
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-foreground)]"
          >
            Features
          </a>
          <a
            href="#for-organizers"
            className="text-sm font-medium text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-foreground)]"
          >
            For Organizers
          </a>
          <a
            href="#safety"
            className="text-sm font-medium text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-foreground)]"
          >
            Safety
          </a>
        </div>
        <Button
          href={APP_URL}
          variant="gold"
          size="default"
          className="shrink-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Launch App
        </Button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8"
      style={{
        background:
          "linear-gradient(135deg, var(--color-primary) 0%, #0f172a 50%, #020617 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, var(--color-accent) 0%, transparent 40%), radial-gradient(circle at 80% 20%, var(--color-action) 0%, transparent 35%)`,
        }}
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--color-foreground)] sm:text-5xl lg:text-6xl">
          Organize Sports. Collect Payments. Play More.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-muted-foreground)] sm:text-xl">
          The all-in-one tool for pickup games. Invite players, set a price (min
          $1), and automate your payouts. No more Venmo chasing.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href={APP_URL}
            variant="default"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Host a Game
          </Button>
          <Button
            href="#for-organizers"
            variant="outline"
            size="lg"
            className="border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-foreground)]"
          >
            How it Works
          </Button>
        </div>
      </div>
    </section>
  );
}

function ValueProp() {
  return (
    <section
      id="for-organizers"
      className="scroll-mt-20 border-b border-[var(--color-border)] bg-[var(--color-background)] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]">
                <CircleDot className="h-5 w-5 text-[var(--color-accent)]" />
              </span>
              <h2 className="text-lg font-semibold text-[var(--color-foreground)]">
                Your Game, on Autopilot
              </h2>
            </div>
            <p className="mt-4 text-[var(--color-muted-foreground)]">
              We handle RSVPs, waitlists, and payments. Money lands in your
              account instantly.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]">
                <ShieldCheck className="h-5 w-5 text-[var(--color-accent)]" />
              </span>
              <h2 className="text-lg font-semibold text-[var(--color-foreground)]">
                Guaranteed Spots
              </h2>
            </div>
            <p className="mt-4 text-[var(--color-muted-foreground)]">
              No cash on the field. Just pay, show up, and play.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section
      id="features"
      className="px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="features-heading"
          className="text-center text-3xl font-bold text-[var(--color-foreground)]"
        >
          Built for Organizers
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <Card className="flex flex-col">
            <List className="h-10 w-10 text-[var(--color-action)]" />
            <h3 className="mt-4 text-xl font-semibold text-[var(--color-foreground)]">
              Automated Waitlists
            </h3>
            <p className="mt-2 flex-1 text-[var(--color-muted-foreground)]">
              Fill spots automatically when someone drops. No more manual
              check-ins.
            </p>
          </Card>
          <Card className="flex flex-col">
            <DollarSign className="h-10 w-10 text-[var(--color-accent)]" />
            <h3 className="mt-4 text-xl font-semibold text-[var(--color-foreground)]">
              Instant Payouts
            </h3>
            <p className="mt-2 flex-1 text-[var(--color-muted-foreground)]">
              Money goes straight to your account. Set your price, we handle the
              rest.
            </p>
          </Card>
          <Card className="flex flex-col">
            <ShieldCheck className="h-10 w-10 text-[var(--color-action)]" />
            <h3 className="mt-4 text-xl font-semibold text-[var(--color-foreground)]">
              No-Flake Guarantee
            </h3>
            <p className="mt-2 flex-1 text-[var(--color-muted-foreground)]">
              Players pay upfront. Guaranteed spots, no no-shows.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Safety() {
  return (
    <section
      id="safety"
      className="scroll-mt-20 border-b border-[var(--color-border)] bg-[var(--color-card)] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
          Safe & Simple Payments
        </h2>
        <p className="mt-4 text-[var(--color-muted-foreground)]">
          Players pay upfront through the app. No cash on the field, no chasing
          payments. You get paid when the game fills—every time.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)]">
          <span className="font-semibold text-[var(--color-foreground)]">
            OffDay
          </span>
          <span>·</span>
          <a
            href={APP_URL}
            className="hover:text-[var(--color-foreground)]"
          >
            App
          </a>
        </div>
        <p className="text-sm text-[var(--color-muted-foreground)]">
          © {new Date().getFullYear()} OffDay. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <FeatureGrid />
        <Safety />
      </main>
      <Footer />
    </div>
  );
}
