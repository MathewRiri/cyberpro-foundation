import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageBanner } from "@/components/site/layout";
import { ContactForm, NewsletterForm } from "@/components/site/forms";
import { contactTopics, photos } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => {
    const topic = typeof search.topic === "string" ? search.topic : "";
    if (!(contactTopics as readonly string[]).includes(topic)) return {};
    return { topic };
  },
  head: () => ({
    meta: [
      { title: "Contact Us | CyberPro Global Foundation" },
      {
        name: "description",
        content:
          "Contact CyberPro Global Foundation about programmes, volunteering, partnerships, sponsorship, or general enquiries.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { topic } = Route.useSearch();
  return (
    <SiteShell>
      <PageBanner
        src={photos.doorway.src}
        alt={photos.doorway.alt}
        credit={photos.doorway.credit}
        eyebrow="Contact"
        title="Contact Us"
        lede="Have a question, programme enquiry, or partnership idea? Get in touch with the Foundation."
      />
      <section className="wrap grid gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight text-navy">We’d be glad to hear from you.</h2>
          <p className="mt-4 leading-relaxed text-slate">
            Contact us about our programmes, volunteering, partnerships, sponsorship, or general
            enquiries. Share a few details and the appropriate person can follow up once an official
            channel is confirmed.
          </p>
          <figure className="mt-8">
            <img
              src={photos.mentoring.src}
              alt={photos.mentoring.alt}
              className="aspect-video w-full object-cover"
            />
            <figcaption className="mt-2 text-xs text-slate">
              Illustrative · {photos.mentoring.credit}
            </figcaption>
          </figure>
          <div className="mt-8 border-t border-line pt-6">
            <h3 className="text-lg font-bold text-navy">Direct details</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Email, telephone, office address, office hours, and a map are hidden until the
              Foundation confirms them. Nothing on this page is a guessed location.
            </p>
          </div>
        </div>
        <div className="border border-line bg-paper p-6 sm:p-8">
          <ContactForm defaultTopic={topic || "General enquiry"} />
        </div>
      </section>
      <section id="newsletter" className="bg-navy text-paper">
        <div className="wrap grid gap-8 py-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold">Keep up with our work.</h2>
            <p className="mt-4 text-navy-soft">
              Occasional updates about programmes, opportunities, events, and community initiatives.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </SiteShell>
  );
}
