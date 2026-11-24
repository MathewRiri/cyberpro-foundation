import { useEffect, useId, useState } from "react";
import { Link } from "@tanstack/react-router";
import { z } from "zod";
import { contactTopics, involveInterests } from "@/lib/site";

const emailField = z.string().trim().email("Enter a valid email address.");

const contactSchema = z.object({
  firstName: z.string().trim().min(2, "Enter your first name."),
  lastName: z.string().trim().min(2, "Enter your last name."),
  email: emailField,
  phone: z.string().trim(),
  organisation: z.string().trim(),
  topic: z.string().min(1, "Choose an enquiry type."),
  message: z.string().trim().min(12, "Add a short message so we know how to help."),
  consent: z.literal(true, { message: "Consent is required before we keep this message." }),
});

const involveSchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  email: emailField,
  phone: z.string().trim(),
  organisation: z.string().trim(),
  interest: z.string().min(1, "Choose an area of interest."),
  experience: z.string().trim(),
  message: z.string().trim().min(12, "Tell us a little about how you would like to help."),
  consent: z.literal(true, { message: "Consent is required before we keep this message." }),
});

const newsletterSchema = z.object({
  email: emailField,
  consent: z.literal(true, { message: "Tick the box to confirm you want updates." }),
});

type FieldErrors = Record<string, string | undefined>;

function issues(error: z.ZodError): FieldErrors {
  const next: FieldErrors = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!next[key]) next[key] = issue.message;
  }
  return next;
}

const inputClass =
  "h-12 w-full rounded-sm border border-line bg-paper px-3 text-base text-ink outline-none";
const areaClass =
  "min-h-36 w-full rounded-sm border border-line bg-paper px-3 py-3 text-base text-ink outline-none";
const labelClass = "mb-1.5 block text-sm font-semibold text-navy";

function ErrorText({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 text-sm text-crimson">
      {message}
    </p>
  );
}

function tooSoon(key: string) {
  const last = Number(sessionStorage.getItem(key) || 0);
  return Date.now() - last < 8000;
}

function markSent(key: string) {
  sessionStorage.setItem(key, String(Date.now()));
}

function saveLocal(bucket: string, record: Record<string, string>) {
  const current = JSON.parse(localStorage.getItem(bucket) || "[]") as unknown[];
  current.push({ ...record, savedAt: new Date().toISOString() });
  localStorage.setItem(bucket, JSON.stringify(current.slice(-20)));
}

function receipt(lines: string[]) {
  return lines.filter(Boolean).join("\n");
}

async function copyText(value: string) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    return false;
  }
}

function Success({
  title,
  body,
  text,
  onReset,
}: {
  title: string;
  body: string;
  text: string;
  onReset: () => void;
}) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="border border-line bg-mist p-6" role="status">
      <h3 className="text-xl font-bold text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink">{body}</p>
      <pre className="mt-4 overflow-x-auto whitespace-pre-wrap border border-line bg-paper p-4 text-sm text-ink">
        {text}
      </pre>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          className="inline-flex h-12 items-center bg-crimson px-5 text-sm font-semibold text-paper hover:bg-crimson-deep"
          onClick={async () => setCopied(await copyText(text))}
        >
          {copied ? "Copied" : "Copy message"}
        </button>
        <button
          type="button"
          className="inline-flex h-12 items-center border border-navy px-5 text-sm font-semibold text-navy hover:bg-navy hover:text-paper"
          onClick={onReset}
        >
          Write another
        </button>
      </div>
    </div>
  );
}

const keptNote =
  "Your message is saved in this browser so you have a copy. It has not been forwarded, because the Foundation has not yet published an official email address. When that inbox is confirmed, this form can deliver messages directly.";

export function ContactForm({ defaultTopic = "General enquiry" }: { defaultTopic?: string }) {
  const base = useId();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [done, setDone] = useState("");
  const [topic, setTopic] = useState(defaultTopic);

  useEffect(() => {
    setTopic(defaultTopic);
  }, [defaultTopic]);

  if (done) {
    return (
      <Success
        title="Thank you."
        body={keptNote}
        text={done}
        onReset={() => setDone("")}
      />
    );
  }

  return (
    <form
      className="relative space-y-4"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        if (String(form.get("company_website") || "").trim()) {
          setDone("Message noted.");
          return;
        }
        if (tooSoon("cpgf-contact-at")) {
          setErrors({ form: "Please wait a moment before sending another message." });
          return;
        }
        const parsed = contactSchema.safeParse({
          firstName: form.get("firstName"),
          lastName: form.get("lastName"),
          email: form.get("email"),
          phone: form.get("phone") || "",
          organisation: form.get("organisation") || "",
          topic: form.get("topic"),
          message: form.get("message"),
          consent: form.get("consent") === "on" ? true : false,
        });
        if (!parsed.success) {
          setErrors(issues(parsed.error));
          return;
        }
        const data = parsed.data;
        const text = receipt([
          `Name: ${data.firstName} ${data.lastName}`,
          `Email: ${data.email}`,
          data.phone ? `Phone: ${data.phone}` : "",
          data.organisation ? `Organisation: ${data.organisation}` : "",
          `Enquiry: ${data.topic}`,
          "",
          data.message,
        ]);
        saveLocal("cpgf-enquiries", {
          kind: "contact",
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          topic: data.topic,
          message: data.message,
        });
        markSent("cpgf-contact-at");
        setErrors({});
        setDone(text);
      }}
    >
      <div className="hp" aria-hidden="true">
        <label>
          Company website
          <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor={`${base}-first`}>
            First name <span className="text-crimson">*</span>
          </label>
          <input id={`${base}-first`} name="firstName" autoComplete="given-name" className={inputClass} aria-invalid={!!errors.firstName} aria-describedby={errors.firstName ? `${base}-first-err` : undefined} />
          <ErrorText id={`${base}-first-err`} message={errors.firstName} />
        </div>
        <div>
          <label className={labelClass} htmlFor={`${base}-last`}>
            Last name <span className="text-crimson">*</span>
          </label>
          <input id={`${base}-last`} name="lastName" autoComplete="family-name" className={inputClass} aria-invalid={!!errors.lastName} aria-describedby={errors.lastName ? `${base}-last-err` : undefined} />
          <ErrorText id={`${base}-last-err`} message={errors.lastName} />
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor={`${base}-email`}>
          Email address <span className="text-crimson">*</span>
        </label>
        <input id={`${base}-email`} name="email" type="email" autoComplete="email" className={inputClass} aria-invalid={!!errors.email} aria-describedby={errors.email ? `${base}-email-err` : undefined} />
        <ErrorText id={`${base}-email-err`} message={errors.email} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor={`${base}-phone`}>
            Phone number <span className="font-normal text-slate">(optional)</span>
          </label>
          <input id={`${base}-phone`} name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor={`${base}-org`}>
            Organisation <span className="font-normal text-slate">(optional)</span>
          </label>
          <input id={`${base}-org`} name="organisation" autoComplete="organization" className={inputClass} />
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor={`${base}-topic`}>
          Enquiry type <span className="text-crimson">*</span>
        </label>
        <select
          id={`${base}-topic`}
          name="topic"
          className={inputClass}
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
          aria-invalid={!!errors.topic}
        >
          {contactTopics.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <ErrorText id={`${base}-topic-err`} message={errors.topic} />
      </div>
      <div>
        <label className={labelClass} htmlFor={`${base}-message`}>
          Message <span className="text-crimson">*</span>
        </label>
        <textarea id={`${base}-message`} name="message" className={areaClass} aria-invalid={!!errors.message} aria-describedby={errors.message ? `${base}-message-err` : undefined} />
        <ErrorText id={`${base}-message-err`} message={errors.message} />
      </div>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-ink">
        <input name="consent" type="checkbox" className="mt-1 h-4 w-4 accent-crimson" />
        <span>
          I agree that this message may be kept so the Foundation can respond. Read the{" "}
          <Link to="/privacy" className="font-semibold text-crimson underline">
            Privacy Policy
          </Link>
          .
        </span>
      </label>
      <ErrorText id={`${base}-consent-err`} message={errors.consent} />
      {errors.form ? <p className="text-sm text-crimson">{errors.form}</p> : null}
      <button type="submit" className="inline-flex h-12 items-center bg-crimson px-5 text-sm font-semibold text-paper hover:bg-crimson-deep">
        Send Message
      </button>
    </form>
  );
}

export function InvolveForm({ defaultInterest = "Volunteering" }: { defaultInterest?: string }) {
  const base = useId();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [done, setDone] = useState("");
  const [interest, setInterest] = useState(defaultInterest);

  useEffect(() => {
    if (defaultInterest) setInterest(defaultInterest);
  }, [defaultInterest]);

  if (done) {
    return <Success title="Thank you for offering to take part." body={keptNote} text={done} onReset={() => setDone("")} />;
  }

  return (
    <form
      className="relative space-y-4"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        if (String(form.get("company_website") || "").trim()) {
          setDone("Message noted.");
          return;
        }
        if (tooSoon("cpgf-involve-at")) {
          setErrors({ form: "Please wait a moment before sending another message." });
          return;
        }
        const parsed = involveSchema.safeParse({
          name: form.get("name"),
          email: form.get("email"),
          phone: form.get("phone") || "",
          organisation: form.get("organisation") || "",
          interest: form.get("interest"),
          experience: form.get("experience") || "",
          message: form.get("message"),
          consent: form.get("consent") === "on" ? true : false,
        });
        if (!parsed.success) {
          setErrors(issues(parsed.error));
          return;
        }
        const data = parsed.data;
        const text = receipt([
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          data.phone ? `Phone: ${data.phone}` : "",
          data.organisation ? `Organisation: ${data.organisation}` : "",
          `Interest: ${data.interest}`,
          data.experience ? `Experience: ${data.experience}` : "",
          "",
          data.message,
        ]);
        saveLocal("cpgf-enquiries", {
          kind: "involve",
          name: data.name,
          email: data.email,
          topic: data.interest,
          message: data.message,
        });
        markSent("cpgf-involve-at");
        setErrors({});
        setDone(text);
      }}
    >
      <div className="hp" aria-hidden="true">
        <label>
          Company website
          <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div>
        <label className={labelClass} htmlFor={`${base}-name`}>
          Full name <span className="text-crimson">*</span>
        </label>
        <input id={`${base}-name`} name="name" autoComplete="name" className={inputClass} aria-invalid={!!errors.name} />
        <ErrorText id={`${base}-name-err`} message={errors.name} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor={`${base}-email`}>
            Email address <span className="text-crimson">*</span>
          </label>
          <input id={`${base}-email`} name="email" type="email" autoComplete="email" className={inputClass} />
          <ErrorText id={`${base}-email-err`} message={errors.email} />
        </div>
        <div>
          <label className={labelClass} htmlFor={`${base}-phone`}>
            Phone number <span className="font-normal text-slate">(optional)</span>
          </label>
          <input id={`${base}-phone`} name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor={`${base}-org`}>
          Organisation <span className="font-normal text-slate">(optional)</span>
        </label>
        <input id={`${base}-org`} name="organisation" className={inputClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor={`${base}-interest`}>
          Area of interest <span className="text-crimson">*</span>
        </label>
        <select id={`${base}-interest`} name="interest" className={inputClass} value={interest} onChange={(event) => setInterest(event.target.value)}>
          {involveInterests.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <ErrorText id={`${base}-interest-err`} message={errors.interest} />
      </div>
      <div>
        <label className={labelClass} htmlFor={`${base}-exp`}>
          Relevant experience or proposed contribution <span className="font-normal text-slate">(optional)</span>
        </label>
        <textarea id={`${base}-exp`} name="experience" className={areaClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor={`${base}-message`}>
          Message <span className="text-crimson">*</span>
        </label>
        <textarea id={`${base}-message`} name="message" className={areaClass} />
        <ErrorText id={`${base}-message-err`} message={errors.message} />
      </div>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-ink">
        <input name="consent" type="checkbox" className="mt-1 h-4 w-4 accent-crimson" />
        <span>
          I agree to be contacted about this enquiry and have read the{" "}
          <Link to="/privacy" className="font-semibold text-crimson underline">
            Privacy Policy
          </Link>
          .
        </span>
      </label>
      <ErrorText id={`${base}-consent`} message={errors.consent} />
      {errors.form ? <p className="text-sm text-crimson">{errors.form}</p> : null}
      <button type="submit" className="inline-flex h-12 items-center bg-crimson px-5 text-sm font-semibold text-paper hover:bg-crimson-deep">
        Express Interest
      </button>
    </form>
  );
}

export function NewsletterForm() {
  const base = useId();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="border border-paper/20 p-4 text-sm leading-relaxed text-paper" role="status">
        Thank you. A mailing list is not connected yet, so this address has not been added to one.
        It is stored only in this browser. You can clear it any time from your site data.
      </p>
    );
  }

  return (
    <form
      className="relative space-y-4"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        if (String(form.get("company_website") || "").trim()) {
          setDone(true);
          return;
        }
        const parsed = newsletterSchema.safeParse({
          email: form.get("email"),
          consent: form.get("consent") === "on" ? true : false,
        });
        if (!parsed.success) {
          setErrors(issues(parsed.error));
          return;
        }
        saveLocal("cpgf-newsletter", { email: parsed.data.email });
        setErrors({});
        setDone(true);
      }}
    >
      <div className="hp" aria-hidden="true">
        <label>
          Company website
          <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-semibold text-paper" htmlFor={`${base}-email`}>
          Email address
        </label>
        <input
          id={`${base}-email`}
          name="email"
          type="email"
          autoComplete="email"
          className={inputClass}
          aria-invalid={!!errors.email}
        />
        <ErrorText id={`${base}-email-err`} message={errors.email} />
      </div>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-navy-soft">
        <input name="consent" type="checkbox" className="mt-1 h-4 w-4 accent-crimson" />
        <span>
          Send me occasional updates about programmes, opportunities, and events. I can unsubscribe
          when a list is connected. See the{" "}
          <Link to="/privacy" className="font-semibold text-paper underline">
            Privacy Policy
          </Link>
          .
        </span>
      </label>
      <ErrorText id={`${base}-consent`} message={errors.consent} />
      <button type="submit" className="inline-flex h-12 items-center bg-crimson px-5 text-sm font-semibold text-paper hover:bg-crimson-deep">
        Subscribe
      </button>
    </form>
  );
}
