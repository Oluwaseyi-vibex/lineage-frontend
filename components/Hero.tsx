"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";

const POSTER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%231a1510' width='1920' height='1080'/%3E%3C/svg%3E";

type HeroProps = {
  /** Optional mp4/webm URL; when set, footage shows behind letterforms when playable */
  videoSrc?: string;
};

export function Hero({ videoSrc }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const src = videoSrc?.trim();
  const [readySrc, setReadySrc] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);
  const hasVideo = Boolean(src) && readySrc === src;

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIsReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!src) {
      return;
    }

    const reveal = () => setReadySrc(src);
    const hide = () => setReadySrc((current) => (current === src ? null : current));

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      reveal();
    }

    video.addEventListener("loadeddata", reveal);
    video.addEventListener("canplay", reveal);
    video.addEventListener("playing", reveal);
    video.addEventListener("error", hide);
    video.muted = true;
    video.play().catch(() => { });

    return () => {
      video.removeEventListener("loadeddata", reveal);
      video.removeEventListener("canplay", reveal);
      video.removeEventListener("playing", reveal);
      video.removeEventListener("error", hide);
    };
  }, [src]);

  return (
    <section
      aria-labelledby="hero-tagline"
      className="relative flex min-h-[min(100vh,900px)] flex-col justify-between overflow-clip bg-[#17130f] pb-[clamp(3rem,8vh,5.5rem)] pt-[calc(4.25rem+clamp(2rem,6vh,4rem))]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="hero-aurora hero-aurora-left absolute left-[-14%] top-[8%] h-[26rem] w-[26rem] rounded-full" />
        <div className="hero-aurora hero-aurora-right absolute right-[-12%] top-[18%] h-[20rem] w-[20rem] rounded-full" />
        <video
          ref={videoRef}
          className={`absolute h-[110%] w-[110%] object-cover sepia-[0.25] [filter:sepia(0.25)_contrast(1.05)_saturate(0.85)] transition-[opacity,transform] duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${hasVideo ? "opacity-[0.58]" : "opacity-0"
            } ${isReady ? "scale-100" : "scale-[1.06]"} ${hasVideo ? "translate-y-0" : "translate-y-3"
            }`}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={POSTER}
        />
        <div
          className={`absolute inset-0 ${hasVideo
            ? "bg-[rgba(15,13,11,0.56)]"
            : "bg-[rgba(15,13,11,0.82)]"
            }`}
        />
        <div className="hero-vignette absolute inset-0" />
        <div className="hero-beam absolute inset-x-[8%] top-[14%] h-[34%]" />
        <div
          className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full  px-[clamp(1.25rem,4vw,3rem)]">
        <p
          className={`hero-kicker mb-5 text-center text-[0.75rem] uppercase tracking-[0.38em] text-[rgba(252,247,240,0.48)] ${isReady ? "hero-kicker-visible" : ""
            }`}
        >
          Memory, remastered for generations
        </p>
      </div>

      <div
        aria-hidden="true"
        className="relative z-10 mx-auto grid w-full max-w-[min(100vw,1440px)] grid-cols-7 items-end gap-[clamp(0.15rem,1.2vw,0.75rem)] px-[clamp(0.25rem,1vw,1rem)] max-[600px]:grid-cols-7"
      >
        {"LINEAGE".split("").map((letter, i) => (
          <span
            key={`${letter}-${i}`}
            className={`hero-letter select-none text-center font-[family-name:var(--font-serif)] text-[clamp(3.2rem,13.5vw,14.25rem)] leading-[0.78] font-semibold tracking-[-0.03em] text-[rgba(252,247,240,0.94)] max-[600px]:text-[clamp(2.4rem,11vw,4rem)] ${isReady ? "hero-letter-visible" : ""
              }`}
            style={{ "--hero-letter-delay": `${180 + i * 90}ms` } as CSSProperties}
          >
            {letter}
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-[clamp(1.25rem,4vw,3rem)] pt-[clamp(2rem,5vh,3.5rem)] text-center">
        <p
          id="hero-tagline"
          className={`hero-copy mx-auto mb-8 max-w-[38ch] font-[family-name:var(--font-serif)] text-[clamp(1.35rem,2.1vw,1.85rem)] leading-[1.45] font-normal tracking-[0.01em] text-[rgba(252,247,240,0.72)] ${isReady ? "hero-copy-visible" : ""
            }`}
        >
          Your family is more than a tree. It&apos;s a living story.
        </p>
        <div
          aria-hidden="true"
          className={`hero-divider mx-auto mb-8 h-px w-[min(12rem,35vw)] bg-[linear-gradient(90deg,transparent,rgba(201,164,58,0.85),transparent)] ${isReady ? "hero-divider-visible" : ""
            }`}
        />
        <a
          className={`hero-cta inline-flex items-center justify-center rounded-full bg-[#c9a43a] px-9 py-[0.85rem] text-sm font-medium tracking-[0.06em] text-[#0f0d0b] no-underline transition-[transform,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:bg-[color-mix(in_srgb,#c9a43a_88%,white)] hover:shadow-[0_14px_34px_rgba(0,0,0,0.28)] focus-visible:-translate-y-px focus-visible:bg-[color-mix(in_srgb,#c9a43a_88%,white)] focus-visible:shadow-[0_14px_34px_rgba(0,0,0,0.28)] active:translate-y-0 ${isReady ? "hero-cta-visible" : ""
            }`}
          href="#archive"
        >
          Start your family archive
        </a>
        <div
          aria-hidden="true"
          className={`hero-scroll mt-10 flex items-center justify-center gap-3 text-[0.72rem] uppercase tracking-[0.32em] text-[rgba(252,247,240,0.38)] ${isReady ? "hero-scroll-visible" : ""
            }`}
        >
          <span>Scroll for the story</span>
          <span className="hero-scroll-line h-px w-12 bg-[rgba(201,164,58,0.58)]" />
        </div>
      </div>
    </section>
  );
}
