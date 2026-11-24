import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageBanner, ButtonLink, TextLink } from "@/components/site/layout";
import { photos } from "@/lib/site";

export const Route = createFileRoute("/programmes/cyber-x")({
  head: () => ({
    meta: [
      { title: "CYBER-X Programme | CyberPro Global Foundation" },
      {
        name: "description",
        content:
          "The CYBER-X Programme has trained and empowered more than 1,230 women and girls. Further delivery details await Foundation approval.",
      },
    ],
  }),
  component: CyberXPage,
});

const withheld = [
  "Whether CYBER-X is a fellowship, bootcamp, course, campaign, or another format",
  "Objectives beyond the published training and empowerment of women and girls",
  "Who can apply, and any age or location limits",
  "Delivery format, schedule, and places where sessions run",
  "Application dates and how to enrol",
  "Participant stories and photographs from the programme",
];

function CyberXPage() {
  return (
    <SiteShell>
      <PageBanner
        src={photos.mentoring.src}
        alt={photos.mentoring.alt}
        credit={photos.mentoring.credit}
        eyebrow="Programme"
        title="CYBER-X Programme"
        lede="More than 1,230 women and girls have been trained and empowered through the CYBER-X Programme."
      />
      <section className="wrap grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-extrabold text-navy">What is confirmed</h2>
          <p className="mt-4 text-lg leading-relaxed">
            CYBER-X is the programme named alongside the Foundation’s figure for women and girls.
            That figure is <strong className="text-navy">1,230+</strong> women and girls trained and
            empowered. It is not presented here as an audited total.
          </p>
          <p className="mt-4 leading-relaxed text-slate">
            The programme sits within the Foundation’s focus on women and girls in technology:
            skills, confidence, mentorship, and opportunities. A fuller official description has not
            been released for this website.
          </p>
          <div className="mt-8 bg-navy p-6 text-paper">
            <p className="font-serif text-3xl italic">1,230+</p>
            <p className="mt-2 text-sm text-navy-soft">
              Women and girls trained and empowered through the CYBER-X Programme.
            </p>
          </div>
        </div>
        <aside className="border border-line bg-mist p-6 lg:col-span-5">
          <h2 className="text-xl font-bold text-navy">Not yet published</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate">
            {withheld.map((item) => (
              <li key={item} className="border-t border-line pt-3">
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </section>
      <section className="border-t border-line">
        <div className="wrap flex flex-col gap-4 py-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-navy">
            Ask for programme information and the Foundation can follow up when an official channel
            is connected.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/contact" search={{ topic: "Programme information" }}>
              Ask about CYBER-X
            </ButtonLink>
            <ButtonLink to="/programmes" variant="secondary">
              All programmes
            </ButtonLink>
          </div>
        </div>
        <p className="wrap pb-12 text-sm">
          <TextLink to="/get-involved" search={{ interest: "mentor" }}>
            Offer to mentor
          </TextLink>
        </p>
      </section>
    </SiteShell>
  );
}
