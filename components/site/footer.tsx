import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)]">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-muted-foreground)]">
            <Link href="/" className="hover:text-[var(--color-foreground)]">
              Home
            </Link>
            <Link
              href="/organizers"
              className="hover:text-[var(--color-foreground)]"
            >
              Organizers
            </Link>
            <Link
              href="/players"
              className="hover:text-[var(--color-foreground)]"
            >
              Players
            </Link>
            <a
              href="mailto:hello@offday.games"
              className="hover:text-[var(--color-foreground)]"
            >
              Contact
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-muted-foreground)]">
            <Link
              href="/terms"
              className="hover:text-[var(--color-foreground)]"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/privacy"
              className="hover:text-[var(--color-foreground)]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-[var(--color-muted-foreground)] sm:text-left">
          Made with <span aria-label="love">❤️</span> in the USA @ FYI LLC 2026
        </p>
      </div>
    </footer>
  );
}
