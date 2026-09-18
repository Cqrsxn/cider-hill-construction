import { business } from "../data/site";
import { services } from "../data/services";
import PageHeader from "../components/ui/PageHeader";
import { usePageMeta } from "../hooks/usePageMeta";

/**
 * Netlify Forms, not mailto:.
 *
 * The old form set window.location.href to a mailto: URL, which silently does
 * nothing on a phone with no mail client configured. Netlify picks this form
 * up from the prerendered HTML at deploy time, so it needs no backend.
 *
 * Netlify must have form detection enabled for the site for this to receive
 * submissions.
 */
export default function Contact() {
  usePageMeta({
    title: "Contact | Cider Hill Construction",
    description:
      "Get a free estimate from Cider Hill Construction in Bluffton, South Carolina. Call (207) 337-3008 or send details of the job.",
    path: "/contact",
  });

  return (
    <>
      <PageHeader
        label="Contact"
        title="Tell us what needs doing"
        intro="The more detail you give, the closer the first number will be. Photographs help."
      />

      <div className="container-x grid gap-14 pb-24 lg:grid-cols-[1fr_18rem]">
        <form
          name="estimate"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/contact?sent=1"
          className="max-w-xl"
        >
          <input type="hidden" name="form-name" value="estimate" />
          <p className="hidden">
            <label>
              Leave this empty: <input name="bot-field" />
            </label>
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
          </div>

          <div className="mt-5">
            <Field label="Email" name="email" type="email" />
          </div>

          <div className="mt-5">
            <label
              htmlFor="service"
              className="type-label block text-ink-faint"
            >
              What kind of work
            </label>
            <select
              id="service"
              name="service"
              className="mt-2 w-full border-b border-ink/25 bg-transparent py-3 text-[0.9375rem] text-ink outline-none transition-colors focus:border-copper"
            >
              <option value="">Not sure yet</option>
              {services.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-5">
            <label htmlFor="details" className="type-label block text-ink-faint">
              Details
            </label>
            <textarea
              id="details"
              name="details"
              rows={5}
              required
              className="mt-2 w-full resize-y border-b border-ink/25 bg-transparent py-3 text-[0.9375rem] text-ink outline-none transition-colors focus:border-copper"
            />
          </div>

          <button
            type="submit"
            className="mt-9 bg-ink px-8 py-4 text-[0.875rem] font-bold text-paper transition-colors hover:bg-copper"
          >
            Send it
          </button>
        </form>

        <aside className="space-y-8">
          <div>
            <h2 className="type-label text-ink-faint">Call instead</h2>
            <a
              href={business.phoneHref}
              className="type-display mt-3 block text-[1.5rem] transition-colors hover:text-copper"
            >
              {business.phoneDisplay}
            </a>
          </div>
          <div>
            <h2 className="type-label text-ink-faint">Email</h2>
            <a
              href={business.emailHref}
              className="mt-3 block break-all text-[0.9375rem] text-ink-soft transition-colors hover:text-copper"
            >
              {business.email}
            </a>
          </div>
          <div>
            <h2 className="type-label text-ink-faint">Book online</h2>
            <a
              href={business.quoteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-[0.9375rem] text-ink-soft transition-colors hover:text-copper"
            >
              Pick a time
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="type-label block text-ink-faint">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-b border-ink/25 bg-transparent py-3 text-[0.9375rem] text-ink outline-none transition-colors focus:border-copper"
      />
    </div>
  );
}
