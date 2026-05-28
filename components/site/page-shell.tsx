import { cn } from "@/lib/utils";

export function PageShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("px-4 py-14 sm:px-6 lg:px-8", className)}>{children}</div>
  );
}

export function PageHeader({
  label,
  title,
  description,
  children,
}: {
  label: string;
  title: React.ReactNode;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-5xl">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
        {label}
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-[var(--color-foreground)] sm:text-5xl">
        {title}
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-[var(--color-muted-foreground)]">
        {description}
      </p>
      {children ? <div className="mt-8">{children}</div> : null}
    </section>
  );
}

export function PageCta({
  title,
  description,
  buttonHref,
  buttonText,
  external = false,
}: {
  title: string;
  description: string;
  buttonHref: string;
  buttonText: string;
  external?: boolean;
}) {
  return (
    <section className="mx-auto mt-14 max-w-5xl rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 text-center">
      <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
        {title}
      </h2>
      <p className="mt-3 text-[var(--color-muted-foreground)]">{description}</p>
      <div className="mt-6 flex justify-center">
        <a
          href={buttonHref}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="inline-flex h-12 items-center justify-center rounded-lg bg-[var(--color-action)] px-6 text-lg font-medium text-[var(--color-action-foreground)] btn-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
