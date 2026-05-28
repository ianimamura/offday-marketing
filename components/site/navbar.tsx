import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const APP_URL = "https://app.offday.games";

export function Navbar() {
  return (
    <header className="sticky top-0 z-[var(--z-sticky)] border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-semibold text-[var(--color-foreground)] sm:text-lg"
        >
          <Image
            src="/offday-logo.png"
            alt="OffDay logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full border border-[var(--color-border)] object-cover"
            priority
          />
          OffDay
        </Link>

        <div className="flex items-center gap-3 sm:gap-5 md:gap-8">
          <Link
            href="/"
            className="text-xs font-medium text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-foreground)] sm:text-sm"
          >
            Home
          </Link>
          <Link
            href="/organizers"
            className="text-xs font-medium text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-foreground)] sm:text-sm"
          >
            Organizers
          </Link>
          <Link
            href="/players"
            className="text-xs font-medium text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-foreground)] sm:text-sm"
          >
            Players
          </Link>
        </div>

        <Button
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="gold"
          size="sm"
        >
          Launch App
        </Button>
      </nav>
    </header>
  );
}
