import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageBanner, TextLink } from "@/components/site/layout";
import { photos } from "@/lib/site";

export const Route = createFileRoute("/programmes/")({
  head: () => ({
    meta: [
      { title: "Our Programmes | CyberPro Global Foundation" },
      {
        name: "description",
        content:
          "Programmes of CyberPro Global Foundation, including the CYBER-X Programme for women and girls.",
      },
    ],
  }),
  component: ProgrammesPage,
});

function ProgrammesPage() {
  return (
    <SiteShell>
      <PageBanner
        src={photos.lab.src}
        alt={photos.lab.alt}
        credit={photos.lab.credit}
        eyebrow="Programmes"
        title="Our Programmes"
        lede="Our programmes focus on practical digital skills, safer online participation, and opportunities for communities that are often underrepresented in the digital space."
      />
      <section className="wrap py-16 lg:py-24">
        <p className="max-w-3xl text-lg leading-relaxed">
          The directory below lists only programmes the Foundation has named for publication. The
          impact figures refer to 5+ active programmes. Invented names are not used to fill the gap.
        </p>
        <article className="mt-10 grid border border-line lg:grid-cols-[18rem_1fr]">
          <img src={photos.lab.src} alt="" className="h-64 w-full object-cover lg:h-full" />
          <div className="p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-brand text-crimson">Active · named</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy">CYBER-X Programme</h2>
            <p className="mt-3 text-sm font-semibold text-navy">Women and girls in technology</p>
            <p className="mt-4 leading-relaxed">
              More than 1,230 women and girls have been trained and empowered via the CYBER-X
              Programme. Delivery model, eligibility, locations, and dates have not been published.
            </p>
            <p className="mt-6">
              <TextLink to="/programmes/cyber-x">Programme detail</TextLink>
            </p>
          </div>
        </article>
        <div className="mt-8 border border-line bg-mist p-6 sm:p-8">
          <h2 className="text-xl font-bold text-navy">Other active programmes</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate">
            The complete programme list and official descriptions have not been supplied. This
            directory will be updated when the Foundation approves those entries. Until then, no
            additional public programmes are shown.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
