import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import greenArch from "@/assets/green-arch.jpg";
import { SiteHeader, SiteFooter } from "@/components/site-header";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nakoda Group of Companies" },
      {
        name: "description",
        content: "Get in touch with Nakoda Group of Companies / SVG Metals Pvt Ltd. Share your copper product requirements and we'll respond promptly.",
      },
      { property: "og:title", content: "Contact — Nakoda Group of Companies" },
      {
        property: "og:description",
        content: "Contact Nakoda Group for copper & copper alloy product enquiries.",
      },
    ],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  address: z.string().trim().max(200).optional().or(z.literal("")),
  scope: z.array(z.string()).max(8),
  footage: z.string().trim().max(20).optional().or(z.literal("")),
  budget: z.string().trim().max(40).optional().or(z.literal("")),
  description: z.string().trim().max(1000).optional().or(z.literal("")),
});

const scopeOptions = ["Copper Tubes & Pipes", "Pancake Coils", "Rods & Busbars", "Brass Tubes", "Brass Wires", "Copper Anodes", "Copper Ingots & Billets", "Copper Wire"];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      address: String(fd.get("address") ?? ""),
      scope: fd.getAll("scope").map(String),
      footage: String(fd.get("footage") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      description: String(fd.get("description") ?? ""),
    };
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }
    setError(null);
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader tone="dark" />

      {/* Intro */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-7">
            <h1 className="font-sans text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl">
              Share your requirements and we'll get back to you promptly.
            </h1>
          </div>
          <div className="md:col-span-5 md:pt-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Get in touch</p>
            <div className="mt-5 space-y-3 text-base">
              <a href="mailto:info@nakodagroupofcompanies.com" className="block border-b border-foreground pb-1 w-fit hover:text-accent">
                info@nakodagroupofcompanies.com
              </a>
              <a href="mailto:svgmetalpvtltd@gmail.com" className="block border-b border-foreground pb-1 w-fit hover:text-accent">
                svgmetalpvtltd@gmail.com
              </a>
              <a href="tel:+919833474799" className="block border-b border-foreground pb-1 w-fit hover:text-accent">
                +91 98334 74799
              </a>
              <a href="tel:+919022052154" className="block border-b border-foreground pb-1 w-fit hover:text-accent">
                +91 90220 52154
              </a>
              <a href="tel:+918655411111" className="block border-b border-foreground pb-1 w-fit hover:text-accent">
                +91 86554 11111
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Green form panel */}
      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden">
            <img
              src={greenArch}
              alt=""
              width={1200}
              height={1600}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              aria-hidden
            />
            <div className="absolute inset-0 bg-accent/85" />
            <div className="relative grid gap-10 p-8 md:grid-cols-12 md:p-14 lg:p-20">
              <div className="md:col-span-5 lg:col-span-4">
                <p className="font-sans text-lg leading-relaxed text-accent-foreground/90 md:text-xl">
                  We look forward to hearing from you. Please share your product requirements and we'll get back to you promptly.
                </p>
              </div>

              <form onSubmit={onSubmit} className="md:col-span-7 lg:col-span-8">
                {submitted ? (
                  <div className="rounded-sm border border-accent-foreground/30 bg-accent-foreground/10 p-10 text-center text-accent-foreground">
                    <h2 className="font-sans text-2xl font-medium">Thank you.</h2>
                    <p className="mt-3 text-sm text-accent-foreground/80">
                      We've received your enquiry and will reply within two working days.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6 text-accent-foreground">
                    <div className="grid gap-6 md:grid-cols-2">
                      <Field label="Company / Name" name="name" placeholder="e.g. Acme Industries" required />
                      <Field label="Email address" name="email" type="email" placeholder="e.g. purchase@company.com" required />
                      <Field label="Phone number" name="phone" placeholder="e.g. +91 98000 00000" />
                      <Field label="City / Country" name="address" placeholder="e.g. Mumbai, India" />
                    </div>

                    <fieldset>
                      <legend className="text-[11px] uppercase tracking-[0.22em] text-accent-foreground/80">
                        Products of interest
                      </legend>
                      <div className="mt-3 flex flex-wrap gap-x-8 gap-y-3">
                        {scopeOptions.map((opt) => (
                          <label key={opt} className="flex cursor-pointer items-center gap-3 text-sm">
                            <input
                              type="checkbox"
                              name="scope"
                              value={opt}
                              className="h-4 w-4 appearance-none border border-accent-foreground/70 bg-transparent checked:bg-accent-foreground"
                            />
                            {opt}
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <div className="grid gap-6 md:grid-cols-2">
                      <Field label="Quantity required" name="footage" placeholder="e.g. 500 kg" />
                      <Field label="Target price / Budget" name="budget" placeholder="e.g. ₹ 2,00,000" />
                    </div>

                    <div>
                      <label htmlFor="description" className="text-[11px] uppercase tracking-[0.22em] text-accent-foreground/80">
                        Project / order description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={5}
                        maxLength={1000}
                        placeholder="Enter description"
                        className="mt-2 w-full border border-accent-foreground/40 bg-accent-foreground/5 px-4 py-3 text-sm text-accent-foreground placeholder:text-accent-foreground/50 focus:border-accent-foreground focus:outline-none"
                      />
                    </div>

                    {error && <p className="text-sm text-accent-foreground">⚠ {error}</p>}

                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 bg-accent-foreground px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent-foreground/90"
                    >
                      Send
                      <span aria-hidden>→</span>
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-[11px] uppercase tracking-[0.22em] text-accent-foreground/80">
        {label}{required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border border-accent-foreground/40 bg-accent-foreground/5 px-4 py-3 text-sm text-accent-foreground placeholder:text-accent-foreground/50 focus:border-accent-foreground focus:outline-none"
      />
    </div>
  );
}
