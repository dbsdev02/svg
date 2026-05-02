import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import copperTubes from "@/assets/copper-tubes.jpg";
import brassTubes from "@/assets/brass-tubes.jpg";
import copperRods from "@/assets/copper-rods.jpg";
import copperIngots from "@/assets/copper-ingots.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Products — Nakoda Group of Companies" },
      {
        name: "description",
        content: "Copper tubes, pipes, coils, brass tubes, copper rods, wires, anodes, ingots and billets — manufactured and exported by Nakoda Group of Companies.",
      },
      { property: "og:title", content: "Products — Nakoda Group of Companies" },
      {
        property: "og:description",
        content: "Copper & copper alloy products by Nakoda Group — SVG Metals Pvt Ltd.",
      },
      { property: "og:image", content: copperTubes },
      { name: "twitter:image", content: copperTubes },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    title: "Tubes, Pipes & Coils",
    img: copperTubes,
    summary: "Copper straight pipes, tubes and pancake coils for air conditioning, refrigeration, plumbing, medical gas and HVAC applications.",
    points: [
      "Straight pipes & tubes (2mm–250mm OD)",
      "Plumbing & medical gas tubes",
      "Pancake coils (1/8\"–1\", 50ft/100ft)",
      "Grades: ETP, DLP, OFC",
    ],
  },
  {
    n: "02",
    title: "Brass Tubes & Wires",
    img: brassTubes,
    summary: "Brass tubes and wires known for corrosion resistance and strength, used in furniture, automotive, marine and fluid transport applications.",
    points: [
      "Brass tubes (6mm–150mm, up to 10m)",
      "Brass wire for jewellery & fasteners",
      "Brass strip for electrical & automotive",
      "Custom alloy grades available",
    ],
  },
  {
    n: "03",
    title: "Rods, Flats & Busbars",
    img: copperRods,
    summary: "Copper rods, flats and busbars for electrical components, solar panels, railway electrification and general engineering.",
    points: [
      "Copper rods (6mm–150mm)",
      "Copper flats (up to 250mm wide)",
      "Busbars & sections",
      "High conductivity copper wire",
    ],
  },
  {
    n: "04",
    title: "Anodes, Ingots & Cathodes",
    img: copperIngots,
    summary: "Copper anodes, nuggets, ingots and billets for electroplating, refining and industrial manufacturing.",
    points: [
      "Phosphorous copper anodes (DXP)",
      "Electrolytic copper anodes (ETP)",
      "Oxygen free copper (OFC)",
      "Copper ingots & billets",
    ],
  },
];

const phases = [
  { n: "01", t: "Recycling", c: "We source copper scrap and alloys, ensuring sustainable and quality raw material supply for all manufacturing." },
  { n: "02", t: "Smelting", c: "Induction furnaces (450KW/1200KG) and gas-fired furnaces produce high-purity molten copper ready for casting." },
  { n: "03", t: "Refining & Extrusion", c: "A 1600-ton extrusion press and upcasting machines shape copper into rods, tubes, wires and profiles to exact specifications." },
  { n: "04", t: "Finishing & Testing", c: "Annealing, polishing and finishing are followed by chemical analysis and spectrometer testing before every shipment." },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <SiteHeader tone="dark" />

      {/* Page header */}
      <section className="px-6 pt-36 pb-20 md:px-10 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Products</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 max-w-5xl font-serif text-5xl font-light leading-[1.05] tracking-tight md:text-7xl lg:text-[88px]">
              Copper &amp; copper alloy products for every industry.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              From tubes and coils to rods, wires, anodes and ingots — manufactured to the highest quality standards and exported worldwide.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service blocks — alternating layout */}
      <section className="border-t border-foreground/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          {services.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={s.title}
                id={s.title.toLowerCase().replace(/\s+/g, "-")}
                className="grid gap-10 border-b border-foreground/10 py-20 md:grid-cols-12 md:gap-16 md:py-32"
              >
                <Reveal
                  as="div"
                  className={`md:col-span-6 ${reverse ? "md:order-2" : ""}`}
                >
                  <div className="overflow-hidden bg-surface">
                    <img
                      src={s.img}
                      alt={s.title}
                      width={1200}
                      height={1500}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal
                  as="div"
                  className={`md:col-span-6 md:pt-6 ${reverse ? "md:order-1" : ""}`}
                  delay={120}
                >
                  <p className="font-mono text-[11px] tracking-[0.22em] text-accent">{s.n} · Product</p>
                  <h2 className="mt-6 font-serif text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
                    {s.title}
                  </h2>
                  <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                    {s.summary}
                  </p>
                  <ul className="mt-10 divide-y divide-foreground/10 border-y border-foreground/10">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-baseline gap-4 py-4 text-sm"
                      >
                        <span className="text-muted-foreground">—</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-10 inline-flex items-center gap-3 border-b border-foreground pb-1 text-sm font-medium transition-colors hover:text-accent hover:border-accent"
                  >
                    Enquire about {s.title.toLowerCase()}
                    <span aria-hidden>→</span>
                  </Link>
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>

      {/* Phases */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <Reveal as="div" className="md:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">How we manufacture</p>
              <h3 className="mt-4 font-serif text-3xl font-light leading-tight tracking-tight md:text-5xl">
                Four stages, one continuous commitment to quality.
              </h3>
            </Reveal>
            <Reveal as="p" className="md:col-span-5 text-sm leading-relaxed text-muted-foreground" delay={120}>
              Every SVG Metals product moves through the same rigorous process — recycling, smelting, refining and fabrication.
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px bg-foreground/10 md:grid-cols-4">
            {phases.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <div className="h-full bg-surface p-8">
                  <p className="font-mono text-[11px] tracking-[0.22em] text-accent">{p.n}</p>
                  <h4 className="mt-6 font-serif text-2xl font-light tracking-tight">{p.t}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.c}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Enquire now</p>
              <h3 className="mt-4 font-serif text-4xl font-light leading-[1.05] tracking-tight md:text-7xl">
                Tell us about your<br />requirements.
              </h3>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-foreground px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-background transition-colors hover:bg-accent"
              >
                Send an enquiry
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
