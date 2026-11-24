import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageBanner, ButtonLink } from "@/components/site/layout";
import { impactFigures, photos } from "@/lib/site";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact | CyberPro Global Foundation" },
      {
        name: "description",
        content:
          "CyberPro Global Foundation reports 5,000+ people reached, 3,800+ trained, 1,230+ women and girls through CYBER-X, and 5+ active programmes.",
      },
    ],
  }),
  component: ImpactPage,
});

const forthcoming = [
  "Beneficiary stories, published only with informed consent",
  "Programme highlights",
  "Photo essays from the Foundation’s own work",
  "Annual reports",
  "Impact reports",
  "Partner-supported initiatives",
];

function ImpactPage() {
  return (
    <SiteShell>
      <PageBanner
        src={photos.study.src}
        alt={photos.study.alt}
        credit={photos.study.credit}
        eyebrow="Our impact"
        title="Our Impact"
        lede="We look at impact through the people reached, the skills developed, and the opportunities supported by our programmes."
      />
      <section className="bg-navy text-paper">
        <div className="wrap py-16 lg:py-20">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {impactFigures.map((item) => (
              <li key={item.value} className="border-t border-paper/25 pt-4">
                <p className="text-4xl font-extrabold lg:text-5xl">{item.value}</p>
                <p className="mt-3 text-sm leading-relaxed text-navy-soft">{item.label}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-sm text-navy-soft">
            These four figures are shown exactly as supplied. They are not described as independently
            audited, and no further statistics are added.
          </p>
        </div>
      </section>
      <section className="wrap grid gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight text-navy">
            Numbers matter. The people behind them matter more.
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            Every person reached represents an opportunity to share knowledge, strengthen confidence,
            and improve access to the digital world. We aim to make our work practical, relevant, and
            responsive to the communities we serve.
          </p>
        </div>
        <figure>
          <img
            src={photos.collaborate.src}
            alt={photos.collaborate.alt}
            className="aspect-video w-full object-cover"
          />
          <figcaption className="mt-2 text-xs text-slate">
            Illustrative · {photos.collaborate.credit}
          </figcaption>
        </figure>
      </section>
      <section className="bg-mist">
        <div className="wrap py-16 lg:py-24">
          <h2 className="text-3xl font-extrabold text-navy">Stories and reports</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate">
            The Foundation has not released beneficiary stories, quotes, or report files for this
            website. Nothing fictional is published in their place.
          </p>
          <ul className="mt-8 max-w-2xl">
            {forthcoming.map((item) => (
              <li key={item} className="flex items-baseline justify-between gap-4 border-b border-line py-4">
                <span className="font-semibold text-navy">{item}</span>
                <span className="text-xs font-semibold uppercase tracking-brand text-slate">Forthcoming</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink to="/news">News & Insights</ButtonLink>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
