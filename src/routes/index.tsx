import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, Eyebrow, ButtonLink, TextLink, PhotoCredit } from "@/components/site/layout";
import { NewsletterForm } from "@/components/site/forms";
import { audiences, faqs, focusAreas, impactFigures, newsTopics, photos } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CyberPro Global Foundation | Digital Inclusion & Cybersecurity Awareness" },
      {
        name: "description",
        content:
          "CyberPro Global Foundation advances digital inclusion, cybersecurity awareness, and community empowerment through education, programmes, and partnerships.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <Intro />
      <Focus />
      <Programmes />
      <Impact />
      <Audiences />
      <Partnership />
      <News />
      <Involve />
      <Faq />
      <Newsletter />
    </SiteShell>
  );
}

function Hero() {
  return (
    <section className="bg-navy text-paper">
      <div className="grid lg:min-h-[40rem] lg:grid-cols-12">
        <div className="order-2 flex flex-col justify-center px-5 py-12 sm:px-10 lg:order-1 lg:col-span-5 lg:px-12 lg:py-16">
          <Eyebrow tone="paper">CyberPro Global Foundation</Eyebrow>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            Building a safer, more inclusive digital future.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-soft">
            We work to expand digital opportunities and strengthen online safety through education,
            cybersecurity awareness, and community-led programmes. Our focus is simple: help more
            people access, understand, and participate in the digital world with confidence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/programmes">Explore Our Programmes</ButtonLink>
            <ButtonLink to="/support" variant="inverse">
              Support Our Work
            </ButtonLink>
          </div>
        </div>
        <div className="order-1 flex flex-col lg:order-2 lg:col-span-7">
          <img
            src={photos.hero.src}
            alt={photos.hero.alt}
            className="h-72 w-full flex-1 object-cover sm:h-96 lg:h-auto lg:min-h-[36rem]"
            decoding="async"
          />
          <PhotoCredit credit={photos.hero.credit} />
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="bg-paper">
      <div className="wrap grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <Eyebrow>Who we are</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            Technology should create opportunity, not leave people behind.
          </h2>
          <p className="mt-5 text-lg leading-relaxed">
            Digital access alone is not enough. People also need the skills to use technology, the
            knowledge to recognise online risks, and the confidence to take part in a changing
            digital society.
          </p>
          <p className="mt-4 leading-relaxed text-slate">
            CyberPro Global Foundation works with communities and partners to address these needs
            through digital education, cybersecurity awareness, empowerment initiatives, and
            practical programmes.
          </p>
          <p className="mt-6">
            <TextLink to="/about">About the Foundation</TextLink>
          </p>
        </div>
        <figure>
          <img
            src={photos.mentoring.src}
            alt={photos.mentoring.alt}
            className="aspect-video w-full object-cover"
            decoding="async"
          />
          <figcaption className="mt-2 text-xs text-slate">
            Illustrative · {photos.mentoring.credit}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Focus() {
  return (
    <section className="bg-mist">
      <div className="wrap grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-4">
          <Eyebrow>What we focus on</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            Our work responds to real digital challenges.
          </h2>
          <p className="mt-4 leading-relaxed text-slate">
            We concentrate on practical areas where education, access, and awareness can make a
            meaningful difference.
          </p>
        </div>
        <ol className="lg:col-span-8">
          {focusAreas.map((area, index) => (
            <li key={area.title} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-5">
              <span className="font-serif text-lg italic text-crimson">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-bold text-navy">{area.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate">{area.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Programmes() {
  return (
    <section className="bg-paper">
      <div className="wrap py-16 lg:py-24">
        <Eyebrow>Our programmes</Eyebrow>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
          Practical programmes. Meaningful opportunities.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-slate">
          Our programmes turn the mission into action. Through learning, awareness, and community
          engagement, we work to make digital participation safer and more accessible.
        </p>
        <article className="mt-10 grid border border-line lg:grid-cols-2">
          <img
            src={photos.lab.src}
            alt={photos.lab.alt}
            className="aspect-portrait w-full object-cover sm:aspect-video lg:aspect-auto lg:h-full"
            decoding="async"
          />
          <div className="flex flex-col justify-center p-6 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-brand text-crimson">Confirmed programme</p>
            <h3 className="mt-3 text-3xl font-extrabold text-navy">CYBER-X Programme</h3>
            <p className="mt-4 leading-relaxed">
              More than <strong className="font-extrabold text-navy">1,230 women and girls</strong>{" "}
              have been trained and empowered through the CYBER-X Programme.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Official objectives, eligibility, locations, and application details will be published
              when the Foundation approves them. This photograph is illustrative and is not a record
              of a CYBER-X session.
            </p>
            <p className="mt-6">
              <TextLink to="/programmes/cyber-x">Read about CYBER-X</TextLink>
            </p>
          </div>
        </article>
        <p className="mt-6 text-sm leading-relaxed text-slate">
          The Foundation reports 5+ active programmes. Only CYBER-X is named in the published impact
          figures, so other programmes are not listed until their official names are supplied.
        </p>
        <p className="mt-4">
          <TextLink to="/programmes">View all programmes</TextLink>
        </p>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section className="bg-navy text-paper">
      <div className="wrap py-16 lg:py-24">
        <Eyebrow tone="paper">Our impact</Eyebrow>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
          Progress you can see. People at the centre.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-navy-soft">
          Behind every number is a person gaining knowledge, building confidence, or accessing a new
          opportunity. These figures reflect the reach of our work and the communities we seek to
          serve.
        </p>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {impactFigures.map((item) => (
            <li key={item.value} className="border-t border-paper/25 pt-4">
              <p className="text-4xl font-extrabold lg:text-5xl">{item.value}</p>
              <p className="mt-3 text-sm leading-relaxed text-navy-soft">{item.label}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10">
          <ButtonLink to="/impact" variant="inverse">
            How we describe impact
          </ButtonLink>
        </p>
      </div>
    </section>
  );
}

function Audiences() {
  return (
    <section className="bg-paper">
      <div className="wrap grid items-start gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <figure>
          <img
            src={photos.collaborate.src}
            alt={photos.collaborate.alt}
            className="aspect-video w-full object-cover"
            decoding="async"
          />
          <figcaption className="mt-2 text-xs text-slate">
            Illustrative · {photos.collaborate.credit}
          </figcaption>
        </figure>
        <div>
          <h2 className="text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            Working with people and communities.
          </h2>
          <p className="mt-4 leading-relaxed text-slate">
            Our work is shaped around the needs of people who face barriers to digital access,
            skills, and safety. Not every group is served by every programme.
          </p>
          <dl className="mt-8">
            {audiences.map((item) => (
              <div key={item.title} className="border-t border-line py-4">
                <dt className="font-bold text-navy">{item.title}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-slate">{item.copy}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Partnership() {
  return (
    <section className="bg-mist">
      <div className="wrap py-16 lg:py-24">
        <div className="max-w-3xl border-l-4 border-crimson pl-6">
          <h2 className="font-serif text-3xl font-medium italic leading-tight text-navy sm:text-5xl">
            Change is stronger when we work together.
          </h2>
          <p className="mt-6 text-lg leading-relaxed">
            We welcome collaboration with organisations, institutions, educators, technology
            professionals, and community leaders who share our commitment to digital inclusion and
            safer online participation.
          </p>
          <p className="mt-4 text-sm text-slate">
            Partner logos are not shown here. None have been supplied for publication.
          </p>
          <div className="mt-8">
            <ButtonLink to="/get-involved" search={{ interest: "partner" }}>
              Discuss a Partnership
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function News() {
  return (
    <section className="bg-paper">
      <div className="wrap grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-extrabold leading-tight text-navy">Updates from our work.</h2>
          <p className="mt-4 leading-relaxed text-slate">
            Programme updates, community stories, and perspectives on digital inclusion and online
            safety will be published here. No articles have been released for this site yet.
          </p>
          <p className="mt-6">
            <TextLink to="/news">View News & Insights</TextLink>
          </p>
        </div>
        <ul className="lg:col-span-8">
          {newsTopics.slice(0, 4).map((topic) => (
            <li key={topic} className="flex items-baseline justify-between gap-4 border-b border-line py-4">
              <span className="font-semibold text-navy">{topic}</span>
              <span className="text-xs font-semibold uppercase tracking-brand text-slate">Forthcoming</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Involve() {
  const paths = [
    {
      title: "Volunteer with us",
      copy: "Give time to programme activities, communications, research, or community engagement.",
      to: "/get-involved" as const,
      search: { interest: "volunteer" },
    },
    {
      title: "Partner with us",
      copy: "Bring an institution, school, company, or community organisation into the work.",
      to: "/get-involved" as const,
      search: { interest: "partner" },
    },
    {
      title: "Support our work",
      copy: "Contribute funds, equipment, or sponsorship once payment details are confirmed.",
      to: "/support" as const,
      search: undefined,
    },
  ];
  return (
    <section className="border-t border-line bg-paper">
      <div className="wrap py-16 lg:py-24">
        <h2 className="max-w-2xl text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
          There is a place for you in this work.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-slate">
          Whether you can contribute expertise, time, resources, or partnership, your involvement
          can help extend opportunities to more people.
        </p>
        <ol className="mt-10">
          {paths.map((item, index) => (
            <li key={item.title} className="grid gap-3 border-t border-line py-6 md:grid-cols-[4rem_1fr_auto] md:items-center">
              <span className="font-serif text-2xl italic text-crimson">{index + 1}</span>
              <div>
                <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-1 text-sm text-slate">{item.copy}</p>
              </div>
              <ButtonLink to={item.to} search={item.search} variant={index === 2 ? "primary" : "secondary"}>
                {item.title}
              </ButtonLink>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-mist">
      <div className="wrap grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-4">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-navy">
            Straight answers from what we have published.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            These replies use only information on this site. They are not a substitute for a formal
            statement from the Foundation.
          </p>
        </div>
        <div className="lg:col-span-8">
          {faqs.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-4 py-4 text-left font-semibold text-navy">
                {item.q}
                <span aria-hidden="true" className="text-xl text-crimson group-open:hidden">
                  +
                </span>
                <span aria-hidden="true" className="hidden text-xl text-crimson group-open:inline">
                  –
                </span>
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-slate">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="bg-navy text-paper" id="newsletter">
      <div className="wrap grid gap-8 py-16 lg:grid-cols-2 lg:items-start lg:py-20">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight">Keep up with our work.</h2>
          <p className="mt-4 max-w-md leading-relaxed text-navy-soft">
            Receive occasional updates about our programmes, opportunities, events, and community
            initiatives.
          </p>
        </div>
        <NewsletterForm />
      </div>
    </section>
  );
}
