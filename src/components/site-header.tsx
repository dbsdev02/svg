import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import svgLogo from "@/assets/SVG Logo.png";

type Tone = "light" | "dark";

export function SiteHeader({ tone = "dark" }: { tone?: Tone }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Once scrolled, header gets a solid surface — always use dark tone for contrast.
  const isLight = tone === "light" && !scrolled;
  const text = isLight ? "text-primary-foreground" : "text-foreground";
  const textSoft = isLight ? "text-primary-foreground/80" : "text-foreground/70";
  const btnBorder = isLight
    ? "border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
    : "border-foreground/20 text-foreground hover:bg-foreground hover:text-background";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-foreground/5 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 transition-[padding] duration-500 ${
          scrolled ? "py-3.5" : "py-6 md:py-7"
        }`}
      >
        <Link to="/" className={`flex items-center gap-2 ${text}`}>
          <img
            src={svgLogo}
            alt="Nakoda Group of Companies"
            className={`h-10 w-auto object-contain transition-all duration-300 ${isLight ? "brightness-0 invert" : ""}`}
          />
        </Link>
        <ul className={`hidden items-center gap-9 text-[13px] font-medium md:flex ${textSoft}`}>
          <li><Link to="/" className={`transition-colors hover:${text}`}>Home</Link></li>
          <li><Link to="/about" className={`transition-colors hover:${text}`}>About</Link></li>
          <li><Link to="/services" className={`transition-colors hover:${text}`}>Products</Link></li>
          <li><Link to="/contact" className={`transition-colors hover:${text}`}>Contact</Link></li>
        </ul>
        <Link
          to="/contact"
          className={`rounded-sm border px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition-colors ${btnBorder}`}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2 text-foreground">
              <img
                src={svgLogo}
                alt="Nakoda Group of Companies"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Leading manufacturer &amp; exporter of copper &amp; copper alloy products since 1978. SVG Metals Pvt Ltd · PBJ Industries · Nakoda Copper Tubes.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Navigate</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Products</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Get in touch</p>
            <div className="mt-5 space-y-2 text-sm">
              <a href="mailto:info@nakodagroupofcompanies.com" className="block border-b border-foreground pb-1 hover:text-accent transition-colors">info@nakodagroupofcompanies.com</a>
              <a href="tel:+919833474799" className="block border-b border-foreground pb-1 hover:text-accent transition-colors">+91 98334 74799</a>
              <a href="tel:+919022052154" className="block border-b border-foreground pb-1 hover:text-accent transition-colors">+91 90220 52154</a>
              <p className="pt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                5, Atul Appartment, Nivetia Rd, Malad (E), Mumbai – 400097
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-foreground/10 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© 1978 – 2025 Nakoda Group of Companies</p>
          <div className="flex gap-6">
            <a href="https://www.nakodagroupofcompanies.com" className="hover:text-foreground transition-colors">Website</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
