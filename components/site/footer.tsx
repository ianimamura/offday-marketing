import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-[var(--color-muted-foreground)] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} OffDay. All rights reserved.</p>
        <div className="flex items-center gap-4">
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
      </div>
    </footer>
  );
}
