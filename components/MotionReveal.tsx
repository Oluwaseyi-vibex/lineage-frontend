"use client";

import {
  type CSSProperties,
  type ElementType,
  type HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";

type MotionRevealProps<T extends ElementType> = {
  as?: T;
  delay?: number;
  threshold?: number;
  className?: string;
  children: React.ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "children" | "className">;

export function MotionReveal<T extends ElementType = "div">({
  as,
  delay = 0,
  threshold = 0.24,
  className,
  children,
  ...rest
}: MotionRevealProps<T>) {
  const Component = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Component
      ref={ref}
      className={[
        "motion-reveal",
        isVisible ? "motion-reveal-visible" : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={
        {
          "--reveal-delay": `${delay}ms`,
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </Component>
  );
}
