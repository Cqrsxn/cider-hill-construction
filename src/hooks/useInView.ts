import { useEffect, useRef, useState } from "react";
import { observeReveal } from "../lib/reveal";

/**
 * Fires once when the element reaches the viewport, and stays fired.
 * Backed by a single shared scroll listener; see lib/reveal.ts for why
 * that is preferred over IntersectionObserver here.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    return observeReveal(el, () => setInView(true));
  }, []);

  return { ref, inView };
}
