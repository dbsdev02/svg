import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import designerAtWork from "@/assets/designer-at-work.jpg";
import teamCollab from "@/assets/team-collab.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nakoda Group of Companies" },
      {
        name: "description",
        content:
          "Established in 1978, Nakoda Group of Companies is a leading manufacturer of copper & copper alloy products — tubes, pipes, coils, rods, wires, anodes and more.",
      },
      { property: "og:title", content: "About — Nakoda Group of Companies" },
      {
        property: "og:description",
        content: "Trusted in excellence. A legacy of unparalleled quality since 1978.",
      },
      { property: "og:image", content: teamCollab },
      { name: "twitter:image", content: teamCollab },
    ],
  }),
  component: AboutPage,
});

const principles = [
  {
    n: "01",
    t: "Customer Service",
    c: "Guided by principles of customer service and commitment, we ensure every client receives timely delivery and responsive support.",
  },
  {
    n: "02",
    t: "Product Quality",
    c: "As an ISO 9001:2015 certified company, we maintain rigorous quality control at every stage — from raw material to finished product.",
  },
  {
    n: "03",
    t: "Innovation",
    c: "We continuously invest in technology and skilled manpower, using cutting-edge equipment to manufacture diverse copper and copper alloy products.",
  },
  {
    n: "04",
    t: "Competitive Pricing",
    c: "Our efficient manufacturing processes and strong raw material sourcing allow us to offer the best quality at competitive prices globally.",
  },
];

const team = [
  { name: "Mr. Pyarchand B. Jain", role: "Founder · Est. 1978", img: team1 },
  { name: "Mr. Manish P. Jain", role: "Director · SVG Metals Pvt Ltd", img: team2 },
  { name: "Mr. Pravin P. Jain", role: "Director · SVG Metals Pvt Ltd", img: team3 },
  { name: "Mr. Manish P. Jain", role: "Vice President · Bombay Metal Exchange Ltd", img: team4 },
];

const milestones = [
  ["1978", "Nakoda Group of Companies founded by Mr. Pyarchand B. Jain."],
  ["1985", "Commenced export of copper & copper alloy products internationally."],
  ["2000", "Expanded with new smelting, extrusion and upcasting facilities."],
  ["2015", "Achieved ISO 9001:2015 certification."],
  ["2024", "Registered on GeM (Government e-Marketplace) portal."],
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <SiteHeader tone="dark" />

      {/* Page header */}
      <section className="px-6 pt-36 pb-20 md:px-10 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">About the company</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 max-w-5xl font-serif text-5xl font-light leading-[1.05] tracking-tight md:text-7xl lg:text-[88px]">
              Trusted in excellence. A legacy of quality since 1978.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Intro split */}
      <section className="border-t border-foreground/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
          <Reveal as="div" className="md:col-span-5">
            <img
              src={teamCollab}
              alt="Designers reviewing material swatches in the studio"
              width={1200}
              height={800}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
          <Reveal as="div" className="md:col-span-7 md:pt-6" delay={120}>
            <p className="text-[11px] uppercase tracking-[0.3em] text-accent">Our story</p>
            <h2 className="mt-4 font-serif text-3xl font-light leading-[1.15] tracking-tight md:text-5xl">
              Founded in 1978, built on a strong legacy in metals.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                We are the leading manufacturers of copper and copper alloy products. We manufacture copper tubes, copper pipes, copper coils, brass tubes, copper flats, copper rods, copper anodes and nuggets, copper ingots and billets, copper wire, brass wire and brass tubes.
              </p>
              <p>
                Established in 1978, Nakoda Group of Companies has a strong background in the metals industry. Guided by principles of customer service, product quality, commitment and competitive pricing, the group has successfully navigated changing global economic conditions.
              </p>
              <p>
                We cater to industries including air conditioning &amp; refrigeration, plumbing, electrical, defence, general engineering, oil &amp; gas, and architectural &amp; furniture. Our state-of-the-art facilities are operated by experienced professionals ensuring high-quality production and timely delivery.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-foreground/10 bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <Reveal as="div" className="md:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Principles</p>
              <h3 className="mt-4 font-serif text-3xl font-light leading-tight tracking-tight md:text-5xl">
                Four values that guide every product we make.
              </h3>
            </Reveal>
            <Reveal as="p" className="md:col-span-5 text-sm leading-relaxed text-muted-foreground" delay={120}>
              These are the standards we hold ourselves to in every batch we manufacture and every order we ship.
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px bg-foreground/10 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.t} delay={i * 80}>
                <div className="h-full bg-surface p-10 transition-colors hover:bg-background">
                  <p className="font-mono text-[11px] tracking-[0.22em] text-accent">{p.n}</p>
                  <h4 className="mt-6 font-serif text-2xl font-light tracking-tight md:text-3xl">{p.t}</h4>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{p.c}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal as="div" className="md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">A short history</p>
            <h3 className="mt-4 font-serif text-3xl font-light leading-tight tracking-tight md:text-5xl">
              Key milestones since 1978.
            </h3>
          </Reveal>
          <div className="md:col-span-7">
            <dl className="divide-y divide-foreground/10 border-y border-foreground/10">
              {milestones.map(([year, note], i) => (
                <Reveal key={year} delay={i * 60}>
                  <div className="grid grid-cols-5 gap-6 py-6">
                    <dt className="col-span-1 font-mono text-[11px] tracking-[0.22em] text-accent">{year}</dt>
                    <dd className="col-span-4 font-serif text-xl font-light leading-snug tracking-tight md:text-2xl">{note}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-foreground/10 bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">The team</p>
            <h3 className="mt-4 max-w-2xl font-serif text-3xl font-light leading-tight tracking-tight md:text-5xl">
              The leadership behind Nakoda Group.
            </h3>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <div className="group">
                  <div className="overflow-hidden bg-background">
                    <img
                      src={m.img}
                      alt={m.name}
                      width={800}
                      height={960}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="mt-4 font-serif text-xl font-light tracking-tight">{m.name}</p>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere + CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <Reveal as="div" className="md:col-span-6">
            <img
              src={designerAtWork}
              alt="Designer sketching plans in the studio"
              width={1600}
              height={1088}
              loading="lazy"
              className="aspect-[5/6] w-full object-cover"
            />
          </Reveal>
          <Reveal as="div" className="md:col-span-6" delay={120}>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Work with us</p>
            <h3 className="mt-4 font-serif text-3xl font-light leading-tight tracking-tight md:text-5xl">
              We supply copper products across India and globally.
            </h3>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              If you're looking for a reliable manufacturer and exporter of copper &amp; copper alloy products, we'd love to hear from you. Share your requirements and we'll respond promptly.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 bg-foreground px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-background transition-colors hover:bg-accent"
            >
              Send an enquiry
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
