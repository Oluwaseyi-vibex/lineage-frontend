import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { MotionReveal } from "@/components/MotionReveal";

const MARQUEE =
  "The Adeyemi Family · The Mensah Family · The Krishnamurthy Family · The Da Silva Family · The Okonkwo Family · The Nakamura Family · The Hassan Family · The Patel Family · The Reyes Family · The Andersson Family ·";

const JOURNAL_IMG = "/journal-story.jpg";

const shell =
  "mx-auto w-full max-w-[1440px] px-[clamp(1.25rem,4vw,3rem)]";
const shellWide =
  "mx-auto w-full max-w-[min(100vw,1440px)] px-[clamp(0.75rem,2.5vw,2rem)]";
const navLink =
  "inline-flex text-[0.8125rem] font-light uppercase tracking-[0.22em] text-[rgba(252,247,240,0.75)] no-underline transition-[color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:text-[rgba(252,247,240,0.92)] focus-visible:-translate-y-px focus-visible:text-[rgba(252,247,240,0.92)]";
const pillButton =
  "inline-flex items-center justify-center rounded-full px-[1.35rem] py-[0.62rem] text-[0.8125rem] font-medium tracking-[0.06em] no-underline transition-[transform,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:shadow-[0_12px_30px_rgba(0,0,0,0.24)] focus-visible:-translate-y-px focus-visible:shadow-[0_12px_30px_rgba(0,0,0,0.24)] active:translate-y-0";
const featureHeadline =
  "font-[family-name:var(--font-serif)] text-[clamp(2rem,3.5vw,3rem)] leading-[1.12] font-medium tracking-[-0.015em] text-[rgba(252,247,240,0.96)]";
const featureBody =
  "max-w-[52ch] text-[0.96875rem] font-light text-[rgba(252,247,240,0.58)]";
const textLink =
  "inline-flex w-fit items-center gap-2 text-[0.8125rem] font-medium uppercase tracking-[0.18em] text-[#c9a43a] no-underline transition-[color,transform,gap] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-1 hover:text-[rgba(252,247,240,0.92)] focus-visible:translate-x-1 focus-visible:text-[rgba(252,247,240,0.92)]";

export default function Home() {
  const heroVideo =
    process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim() || "/hero-video.mp4";

  return (
    <>
      <a
        className="sr-only absolute left-0 top-0 z-[1000] bg-[#c9a43a] px-4 py-3 font-medium text-[#0f0d0b] focus:not-sr-only"
        href="#main"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 h-[4.25rem] border-b border-[rgba(252,247,240,0.06)] bg-transparent isolate">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(15,13,11,0.72)_0%,rgba(15,13,11,0.48)_100%)] [backdrop-filter:blur(10px)_saturate(0.9)]" />
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
                <a className={navLink} href="#features">
                  Features
                </a>
              </li>
              <li>
                <a className={navLink} href="#how">
                  How it works
                </a>
              </li>
              <li>
                <a className={navLink} href="#stories">
                  Stories
                </a>
              </li>
              <li>
                <Link className={navLink} href="/waitlist">
                  Waitlist
                </Link>
              </li>
            </ul>
          </nav>
          <Link
            className={`${pillButton} justify-self-end bg-[#c9a43a] text-[#0f0d0b] hover:bg-[color-mix(in_srgb,#c9a43a_90%,white)] focus-visible:bg-[color-mix(in_srgb,#c9a43a_90%,white)] max-[960px]:col-start-2 max-[960px]:row-start-1`}
            href="/waitlist"
          >
            Join the waitlist
          </Link>
        </div>
      </header>

      <main id="main">
        <Hero videoSrc={heroVideo} />

        <section
          aria-labelledby="strip-heading"
          className="border-t border-[rgba(252,247,240,0.06)] bg-[#0f0d0b] py-[clamp(3rem,7vh,5rem)]"
        >
          <MotionReveal className={`${shell} mb-7 text-center`}>
            <p
              id="strip-heading"
              className="m-0 text-[0.8125rem] font-light uppercase tracking-[0.24em] text-[rgba(245,236,224,0.52)]"
            >
              Trusted by families across 40 countries
            </p>
          </MotionReveal>
          <MotionReveal className="overflow-hidden" role="presentation" delay={120}>
            <div className="marquee-track flex w-max animate-[marquee_48s_linear_infinite]">
              <span className="shrink-0 pr-12 font-[family-name:var(--font-serif)] text-[clamp(1.15rem,1.6vw,1.45rem)] italic text-[rgba(245,236,224,0.35)] whitespace-nowrap">
                {MARQUEE}
              </span>
              <span
                aria-hidden="true"
                className="shrink-0 pr-12 font-[family-name:var(--font-serif)] text-[clamp(1.15rem,1.6vw,1.45rem)] italic text-[rgba(245,236,224,0.35)] whitespace-nowrap"
              >
                {MARQUEE}
              </span>
            </div>
          </MotionReveal>
        </section>

        <section id="features" className="bg-[#17130f]">
          <div
            className={`${shellWide} grid grid-cols-2 items-center gap-[clamp(2rem,5vw,5rem)] border-t border-[rgba(252,247,240,0.05)] py-[clamp(4.5rem,12vh,7.5rem)] first:border-t-0 max-[960px]:grid-cols-1`}
          >
            <MotionReveal className="cinematic-panel lux-card rounded-[2px] border border-[rgba(252,247,240,0.1)] bg-[#14110e] p-[clamp(1.25rem,2vw,1.75rem)] shadow-[0_24px_48px_rgba(0,0,0,0.35)]">
              <div className="mb-6 flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[rgba(252,247,240,0.18)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[rgba(252,247,240,0.18)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[rgba(201,164,58,0.55)]" />
              </div>
              <div className="grid gap-5">
                <article className="grid gap-[0.35rem] pl-1">
                  <span className="font-[family-name:var(--font-serif)] text-lg text-[rgba(252,247,240,0.45)]">
                    1962
                  </span>
                  <span className="text-[0.9375rem] text-[rgba(252,247,240,0.78)]">
                    Lagos — first home
                  </span>
                </article>
                <article className="grid gap-[0.35rem] pl-1">
                  <span className="font-[family-name:var(--font-serif)] text-lg text-[#c9a43a]">
                    1988
                  </span>
                  <span className="text-[0.9375rem] text-[rgba(252,247,240,0.92)]">
                    Letters from Accra
                  </span>
                </article>
                <article className="grid gap-[0.35rem] pl-1">
                  <span className="font-[family-name:var(--font-serif)] text-lg text-[rgba(252,247,240,0.45)]">
                    2014
                  </span>
                  <span className="text-[0.9375rem] text-[rgba(252,247,240,0.78)]">
                    The gathering in Porto
                  </span>
                </article>
              </div>
            </MotionReveal>
            <MotionReveal delay={110}>
              <h2 className={featureHeadline}>
                Every moment your family has lived, in one place
              </h2>
              <p className={`${featureBody} mt-5`}>
                Gather photographs, letters, and milestones along a single,
                scrollable timeline. Zoom out to decades; lean in to a single
                afternoon—without losing the thread.
              </p>
              <Link className={`${textLink} mt-6`} href="/waitlist">
                Explore the timeline <span aria-hidden="true">↗</span>
              </Link>
            </MotionReveal>
          </div>

          <div
            id="how"
            className={`${shellWide} grid grid-cols-2 items-center gap-[clamp(2rem,5vw,5rem)] border-t border-[rgba(252,247,240,0.05)] py-[clamp(4.5rem,12vh,7.5rem)] max-[960px]:grid-cols-1`}
          >
            <MotionReveal className="max-[960px]:order-1">
              <h2 className={featureHeadline}>
                Stories told by the people who were there
              </h2>
              <p className={`${featureBody} mt-5`}>
                Record spoken memories beside the dates they belong to. Names,
                places, and quiet details stay attached to the voices that
                remember them best.
              </p>
              <Link className={`${textLink} mt-6`} href="/waitlist">
                Add a story <span aria-hidden="true">↗</span>
              </Link>
            </MotionReveal>
            <MotionReveal className="max-[960px]:order-2" delay={110}>
              <figure className="cinematic-panel story-image-shell lux-card m-0 border border-[rgba(252,247,240,0.12)] bg-[#0a0908] p-[clamp(0.75rem,2vw,1.25rem)] shadow-[0_28px_56px_rgba(0,0,0,0.45)]">
                <Image
                  src={JOURNAL_IMG}
                  alt=""
                  width={600}
                  height={420}
                  sizes="(max-width: 960px) 100vw, 50vw"
                  className="story-image aspect-[5/3.5] w-full object-cover [filter:sepia(0.35)_contrast(1.05)_brightness(0.92)]"
                />
                <figcaption className="sr-only">
                  Journal and pen — archival tone
                </figcaption>
              </figure>
            </MotionReveal>
          </div>

          <div
            id="stories"
            className={`${shellWide} grid grid-cols-2 items-center gap-[clamp(2rem,5vw,5rem)] border-t border-[rgba(252,247,240,0.05)] py-[clamp(4.5rem,12vh,7.5rem)] max-[960px]:grid-cols-1`}
          >
            <MotionReveal>
              <div className="cinematic-panel lux-card rounded-[2px] border border-[rgba(252,247,240,0.1)] bg-[#14110e] p-[1.5rem_1.75rem_1.75rem] shadow-[0_24px_48px_rgba(0,0,0,0.35)]">
                <header className="mb-6 flex items-baseline justify-between border-b border-[rgba(252,247,240,0.1)] pb-3">
                  <span className="font-[family-name:var(--font-serif)] text-lg uppercase tracking-[0.12em] text-[rgba(252,247,240,0.55)]">
                    Registry
                  </span>
                  <span className="text-xs uppercase tracking-[0.14em] text-[rgba(252,247,240,0.35)]">
                    No. 1847 — Volume II
                  </span>
                </header>
                <div className="mb-5 flex flex-col gap-[0.55rem]">
                  <span className="h-[2px] bg-[rgba(252,247,240,0.1)]" />
                  <span className="h-[2px] bg-[rgba(252,247,240,0.1)]" />
                  <span className="h-[2px] bg-[rgba(252,247,240,0.1)]" />
                  <span className="h-[2px] w-[72%] bg-[rgba(201,164,58,0.35)]" />
                  <span className="h-[2px] bg-[rgba(252,247,240,0.1)]" />
                </div>
                <p className="m-0 font-[family-name:var(--font-serif)] text-[1.0625rem] italic text-[rgba(252,247,240,0.55)]">
                  Birth record — Chennai · February 3, 1931
                </p>
              </div>
            </MotionReveal>
            <MotionReveal delay={110}>
              <h2 className={featureHeadline}>
                The records that prove you existed
              </h2>
              <p className={`${featureBody} mt-5`}>
                Certificates, registrations, and fragile pages become searchable
                anchors—handled gently, cited clearly, stored beside the stories
                they support.
              </p>
              <Link className={`${textLink} mt-6`} href="/waitlist">
                Preserve a record <span aria-hidden="true">↗</span>
              </Link>
            </MotionReveal>
          </div>
        </section>

        <section
          aria-labelledby="stats-heading"
          className="border-t border-[rgba(252,247,240,0.06)] bg-[#0f0d0b] py-[clamp(4.5rem,11vh,7rem)]"
        >
          <h2 id="stats-heading" className="sr-only">
            Impact at a glance
          </h2>
          <div
            className={`${shell} grid grid-cols-3 gap-8 text-center max-[960px]:grid-cols-1 max-[960px]:gap-10`}
          >
            <MotionReveal delay={0} className="cinematic-stat">
              <span className="block font-[family-name:var(--font-serif)] text-[clamp(3rem,6vw,5rem)] leading-none font-semibold tracking-[-0.02em] text-[#c9a43a]">
                12,000+
              </span>
              <span className="mt-4 block text-[0.8125rem] uppercase tracking-[0.14em] text-[rgba(252,247,240,0.48)]">
                Families archived
              </span>
            </MotionReveal>
            <MotionReveal delay={100} className="cinematic-stat">
              <span className="block font-[family-name:var(--font-serif)] text-[clamp(3rem,6vw,5rem)] leading-none font-semibold tracking-[-0.02em] text-[#c9a43a]">
                400,000+
              </span>
              <span className="mt-4 block text-[0.8125rem] uppercase tracking-[0.14em] text-[rgba(252,247,240,0.48)]">
                Stories recorded
              </span>
            </MotionReveal>
            <MotionReveal delay={200} className="cinematic-stat">
              <span className="block font-[family-name:var(--font-serif)] text-[clamp(3rem,6vw,5rem)] leading-none font-semibold tracking-[-0.02em] text-[#c9a43a]">
                40
              </span>
              <span className="mt-4 block text-[0.8125rem] uppercase tracking-[0.14em] text-[rgba(252,247,240,0.48)]">
                Countries represented
              </span>
            </MotionReveal>
          </div>
        </section>

        <section
          aria-labelledby="ai-heading"
          className="border-t border-[rgba(252,247,240,0.05)] bg-[#17130f] py-[clamp(4.5rem,11vh,7.5rem)]"
        >
          <div className={shell}>
            <MotionReveal
              as="h2"
              id="ai-heading"
              className="mx-auto mb-[clamp(2.5rem,5vw,3.75rem)] max-w-[28ch] text-center font-[family-name:var(--font-serif)] text-[clamp(2rem,3.5vw,3rem)] leading-[1.12] font-medium tracking-[-0.015em] text-[rgba(252,247,240,0.96)]"
            >
              A quiet intelligence behind every story
            </MotionReveal>
            <div className="grid grid-cols-2 gap-[clamp(1.25rem,2.5vw,2rem)] max-[960px]:grid-cols-1">
              {[
                [
                  "Story Expander",
                  "Gentle prompts that help a memory become a chapter—without rewriting your voice.",
                ],
                [
                  "Voice-to-Story",
                  "Speak naturally; we shape clean prose you can edit before it joins the archive.",
                ],
                [
                  "Family Biography",
                  "A coherent narrative woven from timelines, tags, and the threads you approve.",
                ],
                [
                  "This Day in History",
                  "Anniversaries surfaced from your archive—quiet reminders worth reopening each year.",
                ],
              ].map(([title, description], index) => (
                <MotionReveal
                  key={title}
                  as="article"
                  delay={index * 90}
                  className="cinematic-panel lux-card rounded border border-[rgba(201,164,58,0.35)] bg-[rgba(10,9,8,0.35)] p-[clamp(1.75rem,3vw,2.5rem)]"
                >
                  <h3 className="mb-3 font-[family-name:var(--font-serif)] text-[clamp(1.35rem,2vw,1.65rem)] font-semibold text-[rgba(252,247,240,0.94)]">
                    {title}
                  </h3>
                  <p className="m-0 max-w-[52ch] text-[0.96875rem] font-light text-[rgba(252,247,240,0.58)]">
                    {description}
                  </p>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="archive"
          className="border-t border-[rgba(252,247,240,0.08)] bg-[#231c16] py-[clamp(5rem,14vh,8.5rem)]"
        >
          <MotionReveal className={`section-glow ${shell} max-w-[44rem] text-center`}>
            <h2 className="mb-4 font-[family-name:var(--font-serif)] text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] font-medium text-[rgba(252,247,240,0.96)]">
              Start building your family&apos;s legacy
            </h2>
            <p className="mb-9 font-light text-[rgba(252,247,240,0.58)]">
              Free to start. Invite your whole family. No credit card required.
            </p>
            <form
              action="#"
              method="post"
              className="mb-8 flex flex-wrap justify-center gap-3"
            >
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@family.com"
                required
                className="max-w-[320px] flex-[1_1_220px] rounded-full border border-[rgba(252,247,240,0.12)] bg-[rgba(15,13,11,0.55)] px-[1.15rem] py-[0.85rem] text-[0.9375rem] text-[rgba(252,247,240,0.92)] outline-none transition-[border-color,background-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] placeholder:text-[rgba(252,247,240,0.35)] focus:-translate-y-px focus:border-[rgba(201,164,58,0.45)] focus:bg-[rgba(15,13,11,0.72)] focus:shadow-[0_10px_28px_rgba(0,0,0,0.2)] focus:outline-2 focus:outline-offset-2 focus:outline-[rgba(201,164,58,0.45)]"
              />
              <Link
                className={`${pillButton} bg-[#c9a43a] px-7 py-[0.85rem] text-[#0f0d0b] hover:bg-[color-mix(in_srgb,#c9a43a_88%,white)] focus-visible:bg-[color-mix(in_srgb,#c9a43a_88%,white)]`}
                href="/waitlist"
              >
                Join the waitlist
              </Link>
            </form>
            <ul className="m-0 flex list-none flex-wrap justify-center gap-[clamp(1rem,3vw,2.5rem)] p-0 text-[0.8125rem] font-light tracking-[0.06em] text-[rgba(252,247,240,0.45)]">
              <li>Private by default</li>
              <li>Invite the whole family</li>
              <li>Yours forever</li>
            </ul>
          </MotionReveal>
        </section>
      </main>

      <footer className="border-t border-[rgba(252,247,240,0.06)] bg-[#0f0d0b] pb-8 pt-12">
        <div
          className={`${shell} grid grid-cols-[1fr_auto_1fr] items-center gap-4 max-[960px]:grid-cols-1 max-[960px]:text-center`}
        >
          <Link
            className="justify-self-start font-[family-name:var(--font-serif)] text-lg font-semibold tracking-[0.02em] text-[#c9a43a] no-underline max-[960px]:justify-self-center"
            href="/"
          >
            Lineage
          </Link>
          <nav aria-label="Footer">
            <ul className="m-0 flex list-none flex-wrap justify-center gap-[clamp(1rem,2vw,1.75rem)] p-0">
              <li>
                <a className={navLink} href="#features">
                  Features
                </a>
              </li>
              <li>
                <a className={navLink} href="#how">
                  How it works
                </a>
              </li>
              <li>
                <a className={navLink} href="#stories">
                  Stories
                </a>
              </li>
              <li>
                <Link className={navLink} href="/waitlist">
                  Waitlist
                </Link>
              </li>
            </ul>
          </nav>
          <div
            aria-label="Social"
            className="flex justify-self-end gap-4 max-[960px]:justify-self-center"
          >
            <a
              href="#"
              className="inline-flex text-[rgba(252,247,240,0.45)] transition-[color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:text-[#c9a43a] focus-visible:-translate-y-px focus-visible:text-[#c9a43a]"
              aria-label="Instagram"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex text-[rgba(252,247,240,0.45)] transition-[color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:text-[#c9a43a] focus-visible:-translate-y-px focus-visible:text-[#c9a43a]"
              aria-label="YouTube"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                aria-hidden="true"
              >
                <path d="M22 12s0-4-1-5c-1-1-6-1-8-1s-7 0-8 1-1 5-1 5 0 4 1 5 6 1 8 1 7 0 8-1 1-5 1-5z" />
                <polygon
                  points="10 9 15 12 10 15 10 9"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className={`${shell} mt-10 border-t border-[rgba(252,247,240,0.06)] pt-6 text-center`}>
          <p className="m-0 text-[0.8125rem] font-light text-[rgba(252,247,240,0.38)]">
            © 2025 Lineage. Built for families everywhere.
          </p>
        </div>
      </footer>
    </>
  );
}
