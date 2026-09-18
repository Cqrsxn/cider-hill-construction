import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StickyMobileCTA from "../components/StickyMobileCTA";

/**
 * One shell for every route. Previously HomePage and ServicePage each
 * rendered their own Header, Footer, StickyMobileCTA and spacer div.
 */
export default function RootLayout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
