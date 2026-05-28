import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Terms and Conditions | OffDay",
  description: "Terms and Conditions for using OffDay and offday.games.",
};

export default function TermsPage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl">
        <header>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[var(--color-foreground)]">
            Terms and Conditions for OffDay
          </h1>
          <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
            Last Updated: May 28, 2026
          </p>
        </header>

        <div className="mt-10 space-y-8 text-[var(--color-muted-foreground)]">
          <section>
            <p>
              Welcome to OffDay, a software platform operated by FYI LLC. These
              Terms and Conditions govern your use of the offday.games website
              and the OffDay platform. By accessing our platform, you agree to
              these rules.
            </p>
            <p className="mt-4">
              OffDay is strictly a technology platform that connects people
              organizing sports games with people who want to play. FYI LLC does
              not own the sports facilities, organize the physical games, or
              supervise the users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Age Requirements
            </h2>
            <p className="mt-3">
              To use OffDay, you must be at least 18 years old.
            </p>
            <p className="mt-3">
              We do not currently allow anyone under the age of 18 to create an
              account, organize games, or play in games listed on our platform.
              By creating an account, you confirm that you are at least 18 years
              old.
            </p>
            <p className="mt-3">
              If we discover that an account belongs to someone under the age of
              18, we will suspend the account immediately, remove them from any
              upcoming games, and block their access to the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              User Roles
            </h2>
            <p className="mt-3">
              There are two primary types of users on OffDay: Organizers and
              Players.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Rules for Organizers
            </h2>
            <p className="mt-3">
              Organizers are users who create, list, and manage games. As an
              Organizer, you take full legal and financial responsibility for the
              physical, in-person game.
            </p>
            <p className="mt-3">Your responsibilities include:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Starting the game on time.</li>
              <li>
                Securing the facility, which includes fields, courts, and arenas.
              </li>
              <li>
                Allocating payments to the facilities, supplying necessary
                equipment, and paying any facilitators like referees,
                timekeepers, or scorekeepers.
              </li>
            </ul>

            <h3 className="mt-6 text-lg font-semibold text-[var(--color-foreground)]">
              Fees and Payments
            </h3>
            <p className="mt-2">
              All payouts to Organizers are subject to a 5 percent fee. This
              covers taxes and software-related operational costs.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-[var(--color-foreground)]">
              Fraud and Failure to Fulfill
            </h3>
            <p className="mt-2">
              You must run real, legitimate games. If you list a fake game, you
              are required to refund OffDay in the full amount immediately. FYI
              LLC reserves the right to pursue full legal action against
              Organizers for fraudulent games. We will cooperate fully with
              Players and government officials by providing all Organizer
              information needed to resolve these issues.
            </p>
            <p className="mt-3">
              If you fail to fulfill a game for any reason, you must refund all
              Players and FYI LLC for the full amount paid during that game.
              Failing to fulfill a game will also result in your immediate
              suspension from using the OffDay platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Rules for Players
            </h2>
            <p className="mt-3">
              Players are users who join the games listed on OffDay. Sports are
              physically demanding and carry an inherent risk of physical injury.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-[var(--color-foreground)]">
              Assumption of Risk
            </h3>
            <p className="mt-2">
              By joining a game on OffDay, you assume all risks associated with
              playing. You are fully responsible for your own injuries, medical
              expenses, and all of your actions during any game joined through
              our platform. You agree to play safely, respect the facilities, and
              treat other users appropriately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Payments, Cancellations, and Refunds
            </h2>
            <p className="mt-3">
              OffDay handles the transaction process to keep games running
              smoothly.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-[var(--color-foreground)]">
                  Payment Collection:
                </strong>{" "}
                Payments are collected from Players at the moment they join a
                game.
              </li>
              <li>
                <strong className="text-[var(--color-foreground)]">
                  Payment Processing:
                </strong>{" "}
                The collected funds are officially processed at the exact start
                time of the game.
              </li>
              <li>
                <strong className="text-[var(--color-foreground)]">
                  Cancellation Policy:
                </strong>{" "}
                If a Player cancels their registration, or if the game is
                canceled by the Organizer, at least 1 hour before the scheduled
                start time, the Player will receive a full refund.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Media Release and Content Waiver
            </h2>
            <p className="mt-3">
              Sports games are public events, and other users or spectators may
              take photos or record videos during gameplay.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-[var(--color-foreground)]">
              Recordings by Other Users
            </h3>
            <p className="mt-2">
              By using OffDay and attending these games, you acknowledge that you
              may be photographed or recorded. FYI LLC and OffDay are not liable
              or responsible for any photos, videos, or audio recordings taken by
              Organizers, Players, or anyone else at the games. We do not control
              how other people use, share, or publish the media they capture, and
              we cannot force users to delete content they record on their
              personal devices.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-[var(--color-foreground)]">
              Media Uploaded to OffDay
            </h3>
            <p className="mt-2">
              If you choose to upload photos, videos, or other content directly to
              the OffDay platform, you remain the owner of your content. However,
              you grant FYI LLC permission to use, display, and share that media
              to operate the platform and promote OffDay, without any payment or
              compensation to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Limitation of Liability
            </h2>
            <p className="mt-3">
              FYI LLC and all OffDay employees are liable solely for software bugs
              and technical platform issues.
            </p>
            <p className="mt-3">
              We are not liable for any physical injuries, property damage, theft,
              or disputes that occur at the in-person games. We provide the
              software to connect users; we do not oversee the real-world
              execution of the events.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Protecting OffDay from Legal Claims
            </h2>
            <p className="mt-3">
              If your actions on the platform or at an in-person game result in
              FYI LLC getting sued, you are responsible for covering our costs. If
              you break the law, violate these rules, or cause harm that leads to
              a legal claim against us, you agree to pay for all of our legal
              fees, court costs, and any settlement amounts or damages we are
              ordered to pay. This is especially critical for Organizers
              managing facilities and player safety.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Dispute Resolution and Arbitration
            </h2>
            <p className="mt-3">
              Please read this section carefully because it limits how you can
              resolve disputes with FYI LLC.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-[var(--color-foreground)]">
              Binding Arbitration
            </h3>
            <p className="mt-2">
              By using OffDay, you and FYI LLC agree that any dispute, claim, or
              disagreement related to your use of the platform, the physical
              games, or these terms will be resolved exclusively by binding,
              individual arbitration, rather than in court. You are giving up your
              right to a trial by a judge or jury.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-[var(--color-foreground)]">
              Class Action Waiver
            </h3>
            <p className="mt-2">
              You agree to bring any claims against FYI LLC strictly in your
              individual capacity. You may not bring claims as a plaintiff or a
              class member in any class action, collective action, or
              representative lawsuit. Furthermore, an arbitrator cannot combine
              the claims of multiple people into a single case.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-[var(--color-foreground)]">
              Exceptions
            </h3>
            <p className="mt-2">
              You or FYI LLC can still take a dispute to small claims court if it
              qualifies. FYI LLC also retains the right to seek emergency legal
              action in a standard court to stop software theft, fraud, or severe
              abuse of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Account Suspensions and Deletions
            </h2>
            <p className="mt-3">
              We want OffDay to be a safe and reliable platform. To maintain
              this, FYI LLC has the full right to suspend, ban, or delete any user
              account at any time, for any reason, and without warning. If we
              remove your account for bad behavior, fraud, or breaking these
              rules, you do not have the right to claim a breach of contract
              against us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Our Platform and Property
            </h2>
            <p className="mt-3">
              FYI LLC owns everything related to the OffDay platform. This
              includes the website, the software code, the designs, the logos,
              and the brand name. You are allowed to use our platform to organize
              and play games, but you are not allowed to copy our software, steal
              our designs, or use our brand name to sell your own products or
              services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Governing Law
            </h2>
            <p className="mt-3">
              These terms and your use of OffDay are governed by the laws of the
              State of Florida. Any legal action that is not handled through
              arbitration must be filed in the state or federal courts located in
              Florida.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Keeping the Rules Intact
            </h2>
            <p className="mt-3">
              If a judge or arbitrator decides that one specific rule in this
              document is illegal or cannot be enforced, that specific rule will
              be removed or updated. However, the rest of the rules in this
              document will remain fully valid and legally binding.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Contact Information
            </h2>
            <p className="mt-3">
              If you have questions or need support, you can reach us at:
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <strong className="text-[var(--color-foreground)]">
                  Website:
                </strong>{" "}
                <a
                  href="https://offday.games"
                  className="text-[var(--color-action)] hover:underline"
                >
                  offday.games
                </a>
              </li>
              <li>
                <strong className="text-[var(--color-foreground)]">
                  Email:
                </strong>{" "}
                <a
                  href="mailto:ian@fyicrm.com"
                  className="text-[var(--color-action)] hover:underline"
                >
                  ian@fyicrm.com
                </a>
              </li>
              <li>
                <strong className="text-[var(--color-foreground)]">
                  Phone:
                </strong>{" "}
                <a
                  href="tel:+17192524047"
                  className="text-[var(--color-action)] hover:underline"
                >
                  719-252-4047
                </a>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </PageShell>
  );
}
