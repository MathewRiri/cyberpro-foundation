import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageBanner, Eyebrow, TextLink } from "@/components/site/layout";
import { approach, photos, values } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | CyberPro Global Foundation" },
      {
        name: "description",
        content:
          "CyberPro Global Foundation works for digital inclusion, safer online participation, and practical community programmes.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <PageBanner
        src={photos.doorway.src}
        alt={photos.doorway.alt}
        credit={photos.doorway.credit}
        eyebrow="About us"
        title="About CyberPro Global Foundation"
        lede="We are committed to a digital future in which more people can access opportunities, build relevant skills, and participate safely."
      />
      <section className="wrap grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <Eyebrow>Our story</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-navy">
            Why the Foundation’s work matters.
          </h2>
        </div>
        <div className="space-y-4 text-lg leading-relaxed lg:col-span-7">
          <p>
            Digital technology is changing how people learn, work, communicate, and access services.
            Yet the benefits are not shared equally. Access gaps, limited digital skills, and online
            risks can prevent individuals and communities from participating fully.
          </p>
          <p>
            CyberPro Global Foundation exists to help address these challenges. Through education,
            awareness, empowerment, and collaboration, we work to strengthen people’s ability to
            navigate the digital world and benefit from the opportunities it offers.
          </p>
          <p className="text-base text-slate">
            The Foundation’s work is centred on people: their access to knowledge, their safety
            online, and their ability to take part in an increasingly digital society. A founding
            date, founder biography, and registration history are not published on this site.
          </p>
        </div>
      </section>

      <section className="bg-mist">
        <div className="wrap grid gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <article>
            <Eyebrow>Mission</Eyebrow>
            <p className="mt-4 text-2xl font-bold leading-snug text-navy">
              To advance digital inclusion and safer digital participation through education,
              cybersecurity awareness, empowerment, and community-focused initiatives.
            </p>
          </article>
          <article>
            <Eyebrow>Vision</Eyebrow>
            <p className="mt-4 font-serif text-2xl italic leading-snug text-navy">
              A society in which individuals and communities can access digital opportunities and
              participate in the digital world safely, confidently, and meaningfully.
            </p>
          </article>
          <p className="text-sm leading-relaxed text-slate lg:col-span-2">
            The mission and vision above are editorial statements prepared for this website. They
            await the Foundation’s formal approval before they are treated as official wording.
          </p>
        </div>
      </section>

      <section className="wrap py-16 lg:py-24">
        <Eyebrow>Values</Eyebrow>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold text-navy">How we try to work.</h2>
        <dl className="mt-10 grid gap-x-12 sm:grid-cols-2">
          {values.map((item) => (
            <div key={item.title} className="border-t border-line py-5">
              <dt className="font-bold text-navy">{item.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate">{item.copy}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-navy text-paper">
        <div className="wrap grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-4">
            <Eyebrow tone="paper">Our approach</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight">Five ways the work is carried out.</h2>
          </div>
          <ol className="lg:col-span-8">
            {approach.map((item, index) => (
              <li key={item.title} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-paper/20 py-5">
                <span className="font-serif text-lg italic text-navy-soft">{index + 1}</span>
                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-navy-soft">{item.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <figure>
          <img
            src={photos.study.src}
            alt={photos.study.alt}
            className="aspect-video w-full object-cover"
            decoding="async"
          />
          <figcaption className="mt-2 text-xs text-slate">Illustrative · {photos.study.credit}</figcaption>
        </figure>
        <div>
          <Eyebrow>The wider ecosystem</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-navy">
            Part of CyberPro Global. Distinct in purpose.
          </h2>
          <p className="mt-4 leading-relaxed">
            CyberPro Global Foundation is part of the wider CyberPro Global ecosystem. This website
            describes the Foundation’s social-impact work. It does not describe commercial training
            or professional services that may exist elsewhere in that ecosystem.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Legal ownership, subsidiary status, and governance arrangements are not stated here,
            because they have not been confirmed for publication.
          </p>
          <p className="mt-6">
            <TextLink to="/programmes">See the programmes</TextLink>
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
