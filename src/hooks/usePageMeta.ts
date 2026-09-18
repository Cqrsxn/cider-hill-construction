import { useEffect } from "react";

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [key, val] = selector.replace(/^meta\[|\]$/g, "").split("=");
    el.setAttribute(key, val.replace(/"/g, ""));
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

/**
 * Sets per-route title/description/canonical. The prerender step snapshots the
 * settled DOM, so whatever this writes at runtime is what ships in the static
 * HTML. That is why no helmet library is needed.
 */
export function usePageMeta(opts: {
  title: string;
  description?: string;
  path?: string;
  scrollTop?: boolean;
}) {
  const { title, description, path, scrollTop = true } = opts;

  useEffect(() => {
    document.title = title;
    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
    }
    setMeta('meta[property="og:title"]', "content", title);

    if (path) {
      const href = `https://ciderhillconstruction.com${path}`;
      let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = href;
      setMeta('meta[property="og:url"]', "content", href);
    }

    if (scrollTop) window.scrollTo(0, 0);
  }, [title, description, path, scrollTop]);
}
