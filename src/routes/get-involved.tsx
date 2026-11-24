import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageBanner, TextLink } from "@/components/site/layout";
import { InvolveForm } from "@/components/site/forms";
import { interestFromQuery, photos } from "@/lib/site";

const keys = ["volunteer", "mentor", "partner", "support"] as const;

export const Route = createFileRoute("/get-involved")({
  validateSearch: (search: Record<string, unknown>) => {
    const interest = typeof search.interest === "string" ? search.interest : "";
    if (!(keys as readonly string[]).includes(interest)) return {};
    return { interest };
  },
  head: () => ({
    meta: [
      { title: "Get Involved | CyberPro Global Foundation" },
      {
        name: "description",
        content:
          "Volunteer, mentor, partner, or support CyberPro Global Foundation’s work on digital inclusion and online safety.",
      },
    ],
  }),
  component: GetInvolvedPage,
});

const paths = [
  {
    id: "volunteer",
    title: "Give your time and skills.",
    copy: "Volunteers can support the Foundation’s work through programme activities, community engagement, communications, research, administration, and digital education, depending on current needs.",
    cta: "Express interest",
  },
  {
    id: "mentor",
    title: "Share what you know.",
    copy: "Mentors can help participants build confidence, explore learning pathways, and understand opportunities in technology and related fields.",
    cta: "Become a mentor",
  },
  {
    id: "partner",
    title: "Build impact through collaboration.",
    copy: "We welcome conversations with institutions, companies, schools, community organisations, and development partners interested in supporting digital inclusion and cybersecurity awareness.",
    cta: "Explore a partnership",
  },
  {
    id: "support",
    title: "Help extend the reach of our programmes.",
    copy: "Financial and in-kind support can help strengthen programme delivery, learning opportunities, community engagement, and access to resources.",
    cta: "Support our work",
  },
] as const;

function GetInvolvedPage() {
  const { interest } = Route.useSearch();
  const selected = interest ? interestFromQuery[interest] ?? "Volunteering" : "Volunteering";

  return (
    <SiteShell>
      <PageBanner
        src={photos.collaborate.src}
        alt={photos.collaborate.alt}
        credit={photos.collaborate.credit}
        eyebrow="Get involved"
        title="Get Involved"
        lede="Help make digital opportunity and safer online participation more accessible. Contribute your skills, time, experience, or resources."
      />
      <section className="wrap py-16 lg:py-24">
        <ol>
          {paths.map((item, index) => (
            <li key={item.id} id={item.id} className="grid gap-4 border-t border-line py-8 lg:grid-cols-[4rem_1fr_12rem] lg:items-start">
              <span className="font-serif text-3xl italic text-crimson">{index + 1}</span>
              <div>
                <h2 className="text-2xl font-extrabold text-navy">{item.title}</h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-slate">{item.copy}</p>
              </div>
              {item.id === "support" ? (
                <TextLink to="/support">{item.cta}</TextLink>
              ) : (
                <a href="#enquire" className="font-semibold text-crimson underline decoration-crimson/30 underline-offset-4">
                  {item.cta}
                </a>
              )}
            </li>
          ))}
        </ol>
      </section>
      <section id="enquire" className="bg-mist">
        <div className="wrap grid gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <h2 className="text-3xl font-extrabold text-navy">Tell us how you would like to help.</h2>
            <p className="mt-4 leading-relaxed text-slate">
              Share your name, the kind of contribution you have in mind, and any relevant
              experience. Do not include sensitive personal information that is not needed for the
              enquiry.
            </p>
          </div>
          <div className="border border-line bg-paper p-6 sm:p-8">
            <InvolveForm defaultInterest={selected} />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
