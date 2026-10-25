import type { Metadata } from "next";
import Link from "next/link";
import { MotionReveal } from "@/components/MotionReveal";

export const metadata: Metadata = {
  title: "Join the Waitlist — Lineage",
  description:
    "Reserve your place for early access to Lineage and help shape a more cinematic way to preserve family stories.",
};

const shell = "mx-auto w-full max-w-[1440px] px-[clamp(1.25rem,4vw,3rem)]";
const navLink =
  "inline-flex text-[0.8125rem] font-light uppercase tracking-[0.22em] text-[rgba(252,247,240,0.75)] no-underline transition-[color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:text-[rgba(252,247,240,0.92)] focus-visible:-translate-y-px focus-visible:text-[rgba(252,247,240,0.92)]";
const pillButton =
  "inline-flex items-center justify-center rounded-full px-[1.35rem] py-[0.8rem] text-[0.8125rem] font-medium uppercase tracking-[0.08em] no-underline transition-[transform,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:shadow-[0_12px_30px_rgba(0,0,0,0.24)] focus-visible:-translate-y-px focus-visible:shadow-[0_12px_30px_rgba(0,0,0,0.24)] active:translate-y-0";
const label =
  "text-[0.72rem] uppercase tracking-[0.22em] text-[rgba(252,247,240,0.5)]";
const input =
  "w-full rounded-[1.1rem] border border-[rgba(252,247,240,0.12)] bg-[rgba(16,13,11,0.68)] px-4 py-3.5 text-[0.95rem] text-[rgba(252,247,240,0.92)] outline-none transition-[border-color,background-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] placeholder:text-[rgba(252,247,240,0.32)] focus:-translate-y-px focus:border-[rgba(201,164,58,0.5)] focus:bg-[rgba(16,13,11,0.82)] focus:shadow-[0_18px_36px_rgba(0,0,0,0.24)]";

const reasons = [
  {
    title: "Cinematic archives",
    body: "Your first memories arrive in a guided, beautifully paced archive instead of a blank dashboard.",
  },
  {
    title: "Family-first onboarding",
    body: "Invite siblings, cousins, and elders into one shared origin story from day one.",
  },
  {
    title: "Early-shaper access",
    body: "Waitlist members help steer how stories, records, and timelines evolve before public launch.",
  },
];

const steps = [
  "Request access and tell us what kind of family story you want to preserve.",
  "We review waitlist notes to prioritize archivists, storytellers, and multi-generational families.",
  "Selected members receive a private invitation with guided setup and launch concierge access.",
];

export default function WaitlistPage() {
  return (
    <>
      <a
        className="sr-only absolute left-0 top-0 z-[1000] bg-[#c9a43a] px-4 py-3 font-medium text-[#0f0d0b] focus:not-sr-only"
        href="#main"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 h-[4.25rem] border-b border-[rgba(252,247,240,0.06)] bg-transparent isolate">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(15,13,11,0.78)_0%,rgba(15,13,11,0.52)_100%)] [backdrop-filter:blur(10px)_saturate(0.9)]" />
        <div
          className={`${shell} relative grid h-full grid-cols-[1fr_auto_1fr] items-center gap-4 max-[960px]:grid-cols-[1fr_auto] max-[960px]:grid-rows-[auto_auto]`}
        >
          <Link
            className="font-[family-name:var(--font-serif)] text-lg font-semibold tracking-[0.02em] text-[#c9a43a] no-underline transition-colors hover:text-[color-mix(in_srgb,#c9a43a_85%,white)] focus-visible:text-[color-mix(in_srgb,#c9a43a_85%,white)]"
            href="/"
          >
            Lineage
          </Link>
          <nav
            aria-label="Primary"
            className="max-[960px]:order-3 max-[960px]:col-span-2"
          >
            <ul className="m-0 flex list-none flex-wrap justify-center gap-[clamp(1.25rem,2.5vw,2.25rem)] p-0">
              <li>
                <Link className={navLink} href="/">
                  Home
                </Link>
              </li>
              <li>
                <a className={navLink} href="#benefits">
                  Benefits
                </a>
              </li>
              <li>
                <a className={navLink} href="#process">
                  Process
                </a>
              </li>
              <li>
                <a className={navLink} href="#join">
                  Join
                </a>
              </li>
            </ul>
          </nav>
          <Link
            className={`${pillButton} justify-self-end bg-[#c9a43a] text-[#0f0d0b] hover:bg-[color-mix(in_srgb,#c9a43a_90%,white)] focus-visible:bg-[color-mix(in_srgb,#c9a43a_90%,white)] max-[960px]:col-start-2 max-[960px]:row-start-1`}
            href="#join"
          >
            Request access
          </Link>
        </div>
      </header>

      <main
        id="main"
        className="waitlist-page relative overflow-clip bg-[#0f0d0b] pb-[clamp(4rem,8vw,6rem)] pt-[calc(4.25rem+clamp(2.5rem,8vh,5rem))]"
      >
        <div aria-hidden="true" className="waitlist-atmosphere absolute inset-0" />

        <section className="relative">
          <div
            className={`${shell} grid items-start gap-[clamp(2rem,5vw,5rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(24rem,0.95fr)]`}
          >
            <div className="relative z-10">
              <MotionReveal>
                <p className="mb-4 text-[0.74rem] uppercase tracking-[0.38em] text-[rgba(252,247,240,0.48)]">
                  Private beta • curated entry
                </p>
              </MotionReveal>
              <MotionReveal delay={90}>
                <h1 className="max-w-[11ch] font-[family-name:var(--font-serif)] text-[clamp(3.2rem,8vw,7rem)] leading-[0.92] font-medium tracking-[-0.04em] text-[rgba(252,247,240,0.96)]">
                  Join the waitlist for the family archive that feels like a film.
                </h1>
              </MotionReveal>
              <MotionReveal delay={180}>
                <p className="mt-7 max-w-[58ch] text-[1.02rem] font-light leading-[1.8] text-[rgba(252,247,240,0.62)]">
                  Lineage is opening slowly. We&apos;re inviting families,
                  documentarians, and memory-keepers who want a richer way to
                  preserve voice notes, heirlooms, photographs, and family
                  records in one living narrative.
                </p>
              </MotionReveal>
              <MotionReveal
                delay={260}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <a
                  className={`${pillButton} bg-[#c9a43a] text-[#0f0d0b] hover:bg-[color-mix(in_srgb,#c9a43a_90%,white)] focus-visible:bg-[color-mix(in_srgb,#c9a43a_90%,white)]`}
                  href="#join"
                >
                  Reserve my place
                </a>
                <Link
                  className="inline-flex items-center gap-2 text-[0.82rem] uppercase tracking-[0.22em] text-[rgba(252,247,240,0.72)] no-underline transition-[color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-1 hover:text-[#c9a43a] focus-visible:translate-x-1 focus-visible:text-[#c9a43a]"
                  href="/"
                >
                  Back to landing page <span aria-hidden="true">↗</span>
                </Link>
              </MotionReveal>

              <div
                id="benefits"
                className="mt-[clamp(3rem,8vw,5rem)] grid gap-4 md:grid-cols-3"
              >
                {reasons.map((reason, index) => (
                  <MotionReveal
                    key={reason.title}
                    delay={320 + index * 80}
                    className="cinematic-panel lux-card rounded-[1.5rem] border border-[rgba(252,247,240,0.1)] bg-[rgba(19,15,12,0.82)] p-6"
                  >
                    <p className="mb-3 text-[0.72rem] uppercase tracking-[0.26em] text-[#c9a43a]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="font-[family-name:var(--font-serif)] text-[1.5rem] leading-[1.05] text-[rgba(252,247,240,0.94)]">
                      {reason.title}
                    </h2>
                    <p className="mt-4 text-[0.95rem] leading-[1.7] text-[rgba(252,247,240,0.58)]">
                      {reason.body}
                    </p>
                  </MotionReveal>
                ))}
              </div>
            </div>

            <MotionReveal
              delay={170}
              className="waitlist-form-shell section-glow relative z-10 lg:sticky lg:top-[6.5rem]"
            >
              <section
                id="join"
                className="cinematic-panel lux-card rounded-[2rem] border border-[rgba(252,247,240,0.12)] bg-[rgba(16,13,11,0.86)] p-[clamp(1.4rem,3vw,2rem)] shadow-[0_28px_70px_rgba(0,0,0,0.45)]"
              >
                <p className="mb-3 text-[0.72rem] uppercase tracking-[0.28em] text-[rgba(252,247,240,0.46)]">
                  Early access application
                </p>
                <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,4vw,3rem)] leading-[1.02] text-[rgba(252,247,240,0.96)]">
                  Tell us about the family archive you want to build.
                </h2>
                <p className="mt-4 max-w-[46ch] text-[0.95rem] leading-[1.7] text-[rgba(252,247,240,0.58)]">
                  We use this to shape invitations and beta cohorts. Short
                  answers are enough.
                </p>

                <form action="#" method="post" className="mt-8 grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="grid gap-2">
                      <span className={label}>Your name</span>
                      <input
                        className={input}
                        name="name"
                        type="text"
                        placeholder="Ama Mensah"
                        autoComplete="name"
                        required
                      />
                    </label>
                    <label className="grid gap-2">
                      <span className={label}>Email</span>
                      <input
                        className={input}
                        name="email"
                        type="email"
                        placeholder="you@family.com"
                        autoComplete="email"
                        required
                      />
                    </label>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="grid gap-2">
                      <span className={label}>Family role</span>
                      <select className={input} name="role" defaultValue="Historian">
                        <option>Historian</option>
                        <option>Parent</option>
                        <option>Grandchild</option>
                        <option>Sibling</option>
                        <option>Archivist</option>
                      </select>
                    </label>
                    <label className="grid gap-2">
                      <span className={label}>Launch size</span>
                      <select className={input} name="size" defaultValue="6-20 people">
                        <option>Just me for now</option>
                        <option>2-5 people</option>
                        <option>6-20 people</option>
                        <option>20+ relatives</option>
                      </select>
                    </label>
                  </div>

                  <label className="grid gap-2">
                    <span className={label}>What do you most want to preserve?</span>
                    <textarea
                      className={`${input} min-h-32 resize-y`}
                      name="preserve"
                      placeholder="Voice notes from elders, scanned records, wedding photos, migration stories..."
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className={label}>What made you join now?</span>
                    <textarea
                      className={`${input} min-h-28 resize-y`}
                      name="reason"
                      placeholder="We’re gathering a scattered family archive and need one place that feels beautiful enough to keep returning to."
                    />
                  </label>

                  <button
                    type="submit"
                    className={`${pillButton} mt-2 w-full bg-[#c9a43a] text-[#0f0d0b] hover:bg-[color-mix(in_srgb,#c9a43a_90%,white)] focus-visible:bg-[color-mix(in_srgb,#c9a43a_90%,white)]`}
                  >
                    Join the waitlist
                  </button>
                </form>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[0.76rem] uppercase tracking-[0.16em] text-[rgba(252,247,240,0.42)]">
                  <span>Small rollout</span>
                  <span>Human-reviewed invites</span>
                  <span>No spam</span>
                </div>
              </section>
            </MotionReveal>
          </div>
        </section>

        <section
          id="process"
          className="relative mt-[clamp(4rem,9vw,7rem)] border-t border-[rgba(252,247,240,0.06)] pt-[clamp(3rem,7vw,5rem)]"
        >
          <div className={`${shell} grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]`}>
            <MotionReveal>
              <p className="mb-4 text-[0.74rem] uppercase tracking-[0.34em] text-[rgba(252,247,240,0.44)]">
                How entry works
              </p>
              <h2 className="max-w-[12ch] font-[family-name:var(--font-serif)] text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.96] tracking-[-0.03em] text-[rgba(252,247,240,0.95)]">
                A slower rollout, on purpose.
              </h2>
            </MotionReveal>

            <div className="grid gap-5">
              {steps.map((step, index) => (
                <MotionReveal
                  key={step}
                  delay={index * 110}
                  className="cinematic-panel lux-card rounded-[1.5rem] border border-[rgba(252,247,240,0.1)] bg-[rgba(18,14,12,0.76)] p-6"
                >
                  <div className="flex items-start gap-5 max-sm:flex-col">
                    <span className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-[rgba(201,164,58,0.45)] font-[family-name:var(--font-serif)] text-xl text-[#c9a43a]">
                      {index + 1}
                    </span>
                    <p className="m-0 max-w-[52ch] text-[1rem] leading-[1.75] text-[rgba(252,247,240,0.68)]">
                      {step}
                    </p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
