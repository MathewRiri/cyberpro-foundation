import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageBanner, ButtonLink } from "@/components/site/layout";
import { supportWays, photos } from "@/lib/site";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support Our Work | CyberPro Global Foundation" },
      {
        name: "description",
        content:
          "Support CyberPro Global Foundation’s digital education, cybersecurity awareness, and community programmes. Payment details are published only when confirmed.",
      },
    ],
  }),
  component: SupportPage,
});

function SupportPage() {
  return (
    <SiteShell>
      <PageBanner
        src={photos.hero.src}
        alt={photos.hero.alt}
        credit={photos.hero.credit}
        eyebrow="Support"
        title="Support Our Work"
        lede="Help more people participate safely in the digital world."
      />
      <section className="wrap grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <p className="text-lg leading-relaxed">
            Your support can help extend digital education, cybersecurity awareness, and community
            empowerment initiatives. We welcome individual contributions, institutional support,
            programme sponsorship, and in-kind contributions.
          </p>
          <div className="mt-8 border border-line bg-mist p-6">
            <h2 className="text-xl font-bold text-navy">No payment form on this page</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              The Foundation has not published a payment provider, bank details, currency, donation
              tiers, or a statement on tax deductibility. This site will not invent them. Contact
              the Foundation about supporting the work, and give only once an official method is
              confirmed.
            </p>
          </div>
        </div>
        <ol className="lg:col-span-7">
          {supportWays.map((item, index) => (
            <li key={item.title} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-5">
              <span className="font-serif text-lg italic text-crimson">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-lg font-bold text-navy">{item.title}</h2>
                <p className="mt-1 text-sm text-slate">{item.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="bg-navy text-paper">
        <div className="wrap flex flex-col items-start gap-6 py-14 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold">Contact us about supporting the Foundation.</h2>
            <p className="mt-3 max-w-xl text-navy-soft">
              Tell us whether you have in mind a personal contribution, sponsorship, equipment, or
              an institutional partnership.
            </p>
          </div>
          <ButtonLink to="/contact" search={{ topic: "Sponsorship or donations" }}>
            Contact us about support
          </ButtonLink>
        </div>
      </section>
    </SiteShell>
  );
}
