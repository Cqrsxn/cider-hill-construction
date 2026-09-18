/**
 * One shared scroll/resize listener that reveals elements as they reach the
 * viewport, instead of an IntersectionObserver per element.
 *
 * IntersectionObserver was the obvious choice here and it proved unreliable:
 * elements that entered and left between observer ticks could end up never
 * revealed, which left whole sections permanently invisible. A rect check
 * against a registry of a dozen elements is a rounding error in cost and is
 * deterministic, which matters more than elegance for content visibility.
 */

type Entry = { el: Element; onShow: () => void };

const entries = new Set<Entry>();
let frame = 0;
let listening = false;

/**
 * Reveal once the top of the element has risen past 88% of the viewport
 * height. Deliberately has no lower bound: an element already scrolled
 * past counts as reached. Requiring `bottom > 0` meant a component that
 * mounted late, while the page was already scrolled below it, would
 * register and then wait for a scroll event that never came.
 */
function isReached(el: Element) {
  return el.getBoundingClientRect().top < window.innerHeight * 0.88;
}

function flush() {
  frame = 0;
  for (const entry of [...entries]) {
    if (isReached(entry.el)) {
      entry.onShow();
      entries.delete(entry);
    }
  }
  if (entries.size === 0) stop();
}

function schedule() {
  if (frame) return;
  frame = requestAnimationFrame(flush);
}

function start() {
  if (listening) return;
  listening = true;
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
}

function stop() {
  if (!listening) return;
  listening = false;
  window.removeEventListener("scroll", schedule);
  window.removeEventListener("resize", schedule);
}

export function observeReveal(el: Element, onShow: () => void) {
  // Already in view at mount, so skip the machinery entirely.
  if (isReached(el)) {
    onShow();
    return () => {};
  }

  const entry: Entry = { el, onShow };
  entries.add(entry);
  start();
  schedule();
  // Safety net for late layout: images and fonts can move an element up past
  // the fold after registration, with no scroll event to trigger a re-check.
  setTimeout(schedule, 300);

  return () => {
    entries.delete(entry);
    if (entries.size === 0) stop();
  };
}
