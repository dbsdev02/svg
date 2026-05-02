import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import heroHouse from "@/assets/hero-copper.jpg";
import work1 from "@/assets/copper-tubes.jpg";
import work2 from "@/assets/brass-tubes.jpg";
import work3 from "@/assets/copper-rods.jpg";
import featureBanner from "@/assets/feature-banner.jpg";
import blog1 from "@/assets/copper-cathodes.jpg";
import blog2 from "@/assets/copper-coils.jpg";
import blog3 from "@/assets/brass-tubes.jpg";
import copperCoils from "@/assets/copper-coils.jpg";
import copperAnodes from "@/assets/copper-anodes.jpg";
import { SiteHeader, SiteFooter } from "@/components/site-header";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nakoda Group of Companies — Copper & Copper Alloy Products" },
      {
        name: "description",
        content:
          "Nakoda Group of Companies — leading manufacturer & exporter of copper & copper alloy products since 1978. Tubes, pipes, coils, rods, wires, anodes, ingots and more. An ISO 9001:2015 company.",
      },
      { property: "og:title", content: "Nakoda Group of Companies — Copper & Copper Alloy Products" },
      {
        property: "og:description",
        content: "Trusted in excellence. Manufacturer & Exporter of Copper & Copper Alloy Products since 1978.",
      },
      { property: "og:image", content: heroHouse },
      { name: "twitter:image", content: heroHouse },    ],
  }),
  component: Index,
});

const services = [
  {
    n: "01",
    title: "Tubes & Coils",
    copy: "Copper straight pipes, tubes and pancake coils for air conditioning, refrigeration, plumbing, medical gas and HVAC applications.",
  },
  {
    n: "02",
    title: "Rods, Flats & Busbars",
    copy: "Copper rods, flats and busbars for electrical components, solar panels, railway electrification and general engineering.",
  },
  {
    n: "03",
    title: "Brass Tubes & Wires",
    copy: "Brass tubes and wires for furniture, automotive, marine, water purification and fluid transport applications.",
  },
  {
    n: "04",
    title: "Anodes & Ingots",
    copy: "Copper anodes, nuggets, ingots and billets for electroplating, refining and industrial manufacturing.",
  },
];

const work = [
  { title: "Copper Tubes & Pipes", location: "Mumbai, IN", img: work1 },
  { title: "Brass Tubes & Wires", location: "Mumbai, IN", img: work2 },
  { title: "Copper Rods & Coils", location: "Mumbai, IN", img: work3 },
];

const process = [
  { n: "01", title: "Recycling", copy: "We source and recycle copper scrap and alloys, ensuring sustainable raw material supply for all our manufacturing processes." },
  { n: "02", title: "Smelting", copy: "State-of-the-art smelting facilities convert raw copper into high-purity molten metal ready for casting and forming." },
  { n: "03", title: "Refining", copy: "Electrolytic and fire refining processes deliver copper of the highest purity grades for demanding industrial applications." },
  { n: "04", title: "Fabrication & Finishing", copy: "From extrusion to drawing and surface finishing, we produce tubes, rods, wires, busbars and anodes to precise specifications." },
];

const stats = [
  { v: "45+", l: "Years of experience" },
  { v: "ISO", l: "9001 : 2015 certified" },
  { v: "3", l: "Group companies" },
  { v: "1978", l: "Established since" },
];

const journal = [
  { tag: "Industry", title: "Copper in air conditioning & refrigeration", img: blog1 },
  { tag: "Products", title: "Pancake coils for HVAC applications", img: blog2 },
  { tag: "Export", title: "Supplying copper alloys to global markets", img: blog3 },
];

const team = [
  { name: "Mr. Pyarchand B. Jain", role: "Founder · Est. 1978", initials: "PJ", founder: true },
  { name: "Mr. Manish P. Jain", role: "Director · SVG Metals Pvt Ltd", initials: "MJ", founder: false },
  { name: "Mr. Pravin P. Jain", role: "Director · SVG Metals Pvt Ltd", initials: "PJ", founder: false },
  { name: "Mr. Manish P. Jain", role: "Vice President · Bombay Metal Exchange Ltd", initials: "MJ", founder: false },
];

function Index() {
  const [openStep, setOpenStep] = useState<string | null>("01");

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <SiteHeader tone="light" />

      {/* Hero */}
      <section className="relative h-[100vh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroHouse}
          alt="Copper tubes and pipes manufactured by Nakoda Group"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/10 to-primary/60" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 md:px-10 md:pb-28">
          <Reveal>
            <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-primary-foreground/80">
              Nakoda Group of Companies · Since 1978
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-serif text-6xl font-light leading-[1.02] text-primary-foreground md:text-8xl lg:text-[120px]">
              Trusted in Excellence
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <p className="max-w-md text-base text-primary-foreground/85 md:text-lg">
                Leading manufacturer &amp; exporter of copper &amp; copper alloy products. An ISO 9001:2015 company.
              </p>
              <a
                href="#work"
                className="inline-flex items-center gap-3 border-b border-primary-foreground/60 pb-1 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:border-primary-foreground"
              >
                View products
                <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-primary-foreground/70">
          Scroll
        </div>
      </section>

      {/* About / intro */}
      <section id="studio" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal as="div" className="md:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Company · Est. 1978</p>
            <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] tracking-tight md:text-6xl">
              A legacy of unparalleled quality in copper manufacturing.
            </h2>
          </Reveal>
          <Reveal as="div" className="md:col-span-5 md:pt-2" delay={120}>
            <p className="text-base leading-relaxed text-muted-foreground">
              We manufacture copper tubes, pipes, coils, brass tubes, copper flats, rods, anodes, ingots and wire. Catering to air conditioning, refrigeration, plumbing, electrical, defence, oil &amp; gas and general engineering industries.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 border-b border-foreground pb-1 text-sm font-medium transition-colors hover:text-accent hover:border-accent"
            >
              View profile
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-foreground/10 bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <Reveal as="div" className="md:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">What we produce</p>
              <h3 className="mt-4 font-serif text-3xl font-light leading-tight tracking-tight md:text-5xl">
                Copper products for every industrial need.
              </h3>
            </Reveal>
            <Reveal as="p" className="md:col-span-5 text-sm leading-relaxed text-muted-foreground" delay={120}>
              From tubes and coils to rods, wires, anodes and ingots — a complete range for air conditioning, plumbing, electrical, defence and more.
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px bg-foreground/10 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group h-full bg-surface p-8 transition-all duration-500 hover:bg-background hover:-translate-y-1">
                  <p className="font-mono text-[11px] tracking-[0.22em] text-accent">{s.n}</p>
                  <h4 className="mt-6 font-serif text-2xl font-light tracking-tight md:text-3xl">{s.title}</h4>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                  <span className="mt-8 inline-block text-[11px] uppercase tracking-[0.22em] text-foreground/70 transition-colors group-hover:text-accent">
                    Discover →
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section id="work" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Selected products</p>
            <h3 className="mt-4 font-serif text-3xl font-light leading-tight tracking-tight md:text-5xl">
              Our copper &amp; brass product range.
            </h3>
          </Reveal>
          <Reveal delay={120}>
            <a
              href="#work"
              className="inline-flex items-center gap-3 border-b border-foreground pb-1 text-sm transition-colors hover:text-accent hover:border-accent"
            >
              All products
              <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {work.map((w, i) => (
            <Reveal key={w.title} delay={i * 100}>
              <a href="#" className="group block">
                <div className="overflow-hidden bg-surface">
                  <img
                    src={w.img}
                    alt={w.title}
                    width={1200}
                    height={1500}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between">
                  <h4 className="font-serif text-2xl font-light tracking-tight">{w.title}</h4>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{w.location}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-foreground/10 bg-surface">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <div className="md:col-span-6">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Our process</p>
              <h3 className="mt-4 font-serif text-3xl font-light leading-tight tracking-tight md:text-5xl">
                Recycling. Smelting. Refining. Fabrication. Finishing.
              </h3>
            </Reveal>

            <div className="mt-12 divide-y divide-foreground/10 border-y border-foreground/10">
              {process.map((p) => {
                const open = openStep === p.n;
                return (
                  <div key={p.n}>
                    <button
                      type="button"
                      onClick={() => setOpenStep(open ? null : p.n)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-accent"
                      aria-expanded={open}
                    >
                      <span className="flex items-baseline gap-6">
                        <span className="font-mono text-[11px] tracking-[0.22em] text-muted-foreground">{p.n}</span>
                        <span className="font-serif text-2xl font-light tracking-tight md:text-3xl">{p.title}</span>
                      </span>
                      <span
                        aria-hidden
                        className={`text-2xl font-light leading-none transition-transform duration-500 ${open ? "rotate-45" : ""}`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid overflow-hidden transition-all duration-500 ease-out ${
                        open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0">
                        <p className="max-w-lg pl-12 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Reveal as="div" className="md:col-span-6" delay={120}>
            <div className="sticky top-28 bg-background p-10 md:p-14">
              <img
                src={copperCoils}
                alt="Copper pancake coils"
                width={1200}
                height={1200}
                loading="lazy"
                className="w-full object-cover rounded-sm"
              />
              <p className="mt-6 text-center text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                Copper manufacturing process
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Feature banner */}
      <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
        <img
          src={featureBanner}
          alt="Minimalist house glowing at dusk amongst pine trees"
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.18 0.04 165 / 0.55), oklch(0.10 0.03 165 / 0.85))" }} />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 md:px-10">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-primary-foreground/80">
              Our commitment
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h3 className="mt-6 max-w-3xl font-serif text-4xl font-light leading-[1.05] text-primary-foreground md:text-7xl">
              Quality copper products, delivered worldwide.
            </h3>
          </Reveal>
          <Reveal delay={240}>
            <Link
              to="/contact"
              className="mt-10 inline-flex w-fit items-center gap-3 border border-primary-foreground/60 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              Start a project
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-foreground/10 bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-6 py-20 md:grid-cols-4 md:gap-0 md:px-10 md:py-24">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 80}>
              <div className="md:border-l md:border-foreground/10 md:px-10 md:first:border-l-0">
                <p className="font-serif text-5xl font-light leading-none tracking-tight md:text-6xl">{s.v}</p>
                <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Journal / Media */}
      <section id="journal" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Journal</p>
            <h3 className="mt-4 font-serif text-3xl font-light leading-tight tracking-tight md:text-5xl">
              News from the industry.
            </h3>
          </Reveal>
          <Reveal delay={120}>
            <a
              href="#journal"
              className="inline-flex items-center gap-3 border-b border-foreground pb-1 text-sm transition-colors hover:text-accent hover:border-accent"
            >
              All articles
              <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {journal.map((j, i) => (
            <Reveal key={j.title} delay={i * 100}>
              <a href="#" className="group block">
                <div className="overflow-hidden bg-surface">
                  <img
                    src={j.img}
                    alt={j.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-accent">{j.tag}</p>
                <h4 className="mt-3 font-serif text-2xl font-light leading-snug tracking-tight">
                  {j.title}
                </h4>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="border-t border-foreground/10 bg-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <div className="md:col-span-4">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">The team</p>
              <h3 className="mt-4 font-serif text-3xl font-light leading-tight tracking-tight md:text-5xl">
                The leadership behind Nakoda Group.
              </h3>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Founded by Mr. Pyarchand B. Jain in 1978, Nakoda Group is led by experienced industry professionals committed to quality and customer satisfaction.
              </p>
              <img
                src={copperCoils}
                alt="Copper coils manufacturing"
                width={1200}
                height={800}
                loading="lazy"
                className="mt-10 hidden aspect-[4/3] w-full object-cover md:block"
              />
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-2">
              {team.map((m, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="group">
                    <div className={`flex aspect-[4/5] w-full items-center justify-center ${
                      m.founder ? "bg-accent/10 border border-accent/30" : "bg-surface border border-foreground/10"
                    }`}>
                      <div className="flex flex-col items-center gap-4">
                        <span className={`flex h-20 w-20 items-center justify-center rounded-full text-2xl font-serif font-light ${
                          m.founder ? "bg-accent text-background" : "bg-foreground/10 text-foreground"
                        }`}>
                          {m.initials}
                        </span>
                        {m.founder && (
                          <span className="text-[10px] uppercase tracking-[0.3em] text-accent">Founder</span>
                        )}
                      </div>
                    </div>
                    <p className="mt-4 font-serif text-xl font-light tracking-tight">{m.name}</p>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{m.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Designer at work — atmosphere */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <Reveal as="div" className="md:col-span-6">
            <img
              src={copperAnodes}
              alt="Copper anodes and products"
              width={1600}
              height={1088}
              loading="lazy"
              className="aspect-[5/6] w-full object-cover"
            />
          </Reveal>
          <Reveal as="div" className="md:col-span-6" delay={120}>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">In the factory</p>
            <h3 className="mt-4 font-serif text-3xl font-light leading-tight tracking-tight md:text-5xl">
              State-of-the-art facilities,<br />built for precision.
            </h3>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              Our facilities include a 1600-ton extrusion press, induction furnaces, upcasting machines, wire drawing lines and a full chemical analysis lab with spectrometer testing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Get in touch</p>
              <h3 className="mt-4 font-serif text-4xl font-light leading-[1.05] tracking-tight md:text-7xl">
                Need copper products?<br />Let's talk.
              </h3>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-foreground px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-background transition-colors hover:bg-accent"
              >
                Request a call back
                <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
