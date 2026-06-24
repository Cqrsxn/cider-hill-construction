import { useState } from "react";
import { business } from "../data/site";
import SectionHeading from "./SectionHeading";
import { PhoneIcon, MailIcon, ArrowRight } from "./icons";

const projectTypes = [
  "Home Renovation",
  "Handyman Repair",
  "Kitchen / Bathroom",
  "Flooring",
  "Trim & Finish Work",
  "Siding / Exterior",
  "Fixture Installation",
  "Doors & Windows",
  "Laundry Room / Closet",
  "Commercial Project",
  "Deck / Outdoor",
  "Roofing Repair",
  "Other / Not sure",
];

const inputClass =
  "w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-charcoal shadow-sm outline-none transition-colors placeholder:text-charcoal-soft/60 focus:border-forest focus:ring-2 focus:ring-forest/20";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    location: "",
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Estimate request — ${form.name || "New inquiry"}`;
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Project type: ${form.projectType}`,
      `Project location: ${form.location}`,
      "",
      "Message:",
      form.message,
    ].join("\n");
    window.location.href = `${business.emailHref}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="bg-cream-dark/40 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Request a Free Estimate"
          intro="Tell us about your project and Cider Hill will get back to you as soon as possible. No obligation, no pressure."
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.4fr]">
          {/* Contact rail */}
          <div className="flex flex-col gap-4">
            {/* Booking link — primary */}
            <a
              href={business.quoteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl bg-copper p-5 text-white shadow-lift transition-colors hover:bg-copper-light"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
                <ArrowRight className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-white/70">
                  Fastest Option
                </span>
                <span className="block text-lg font-semibold">
                  Book Online — Free Quote
                </span>
              </span>
            </a>

            <a
              href={business.phoneHref}
              className="group flex items-center gap-4 rounded-2xl bg-navy p-5 text-cream shadow-soft transition-colors hover:bg-navy-soft"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest">
                <PhoneIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-cream/60">
                  Call or Text
                </span>
                <span className="block text-lg font-semibold">
                  {business.phoneDisplay}
                </span>
              </span>
            </a>

            <a
              href={business.emailHref}
              className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-soft transition-colors hover:bg-cream"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest text-cream">
                <MailIcon className="h-6 w-6" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wide text-charcoal-soft">
                  Email Us
                </span>
                <span className="block truncate text-[15px] font-semibold text-navy">
                  {business.email}
                </span>
              </span>
            </a>

            <div className="rounded-2xl border border-copper/30 bg-copper/5 p-5 text-sm leading-relaxed text-charcoal-soft">
              Prefer to talk it through? Call or text{" "}
              <a
                href={business.phoneHref}
                className="font-semibold text-copper underline-offset-2 hover:underline"
              >
                {business.phoneDisplay}
              </a>{" "}
              and we'll help you figure out next steps.
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-cream-dark bg-white p-6 shadow-soft md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-navy"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={update("name")}
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-medium text-navy"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  className={inputClass}
                  placeholder="(843) 000-0000"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-navy"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  className={inputClass}
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="projectType"
                  className="mb-1.5 block text-sm font-medium text-navy"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  value={form.projectType}
                  onChange={update("projectType")}
                  className={inputClass}
                >
                  <option value="">Select a type</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="location"
                  className="mb-1.5 block text-sm font-medium text-navy"
                >
                  Project Location
                </label>
                <input
                  id="location"
                  type="text"
                  value={form.location}
                  onChange={update("location")}
                  className={inputClass}
                  placeholder="Bluffton, Hilton Head, or nearby area"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-navy"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={update("message")}
                  className={inputClass}
                  placeholder="Tell us a little about the project…"
                />
              </div>
            </div>

            <p className="mt-3 text-xs text-charcoal-soft">
              Have photos? You can attach them to your email after you hit send.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-base font-semibold text-cream shadow-soft transition-colors hover:bg-navy-soft"
              >
                Send Message
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </button>
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 px-6 py-3.5 text-base font-semibold text-navy transition-colors hover:bg-navy/5"
              >
                <PhoneIcon className="h-5 w-5" />
                Call Now
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
