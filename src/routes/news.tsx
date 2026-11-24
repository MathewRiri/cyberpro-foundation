import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageBanner, TextLink } from "@/components/site/layout";
import { newsTopics, photos } from "@/lib/site";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Insights | CyberPro Global Foundation" },
      {
        name: "description",
        content:
          "News and perspectives from CyberPro Global Foundation on digital inclusion, cybersecurity awareness, and community empowerment.",
      },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <SiteShell>
      <PageBanner
        src={photos.mentoring.src}
        alt={photos.mentoring.alt}
        credit={photos.mentoring.credit}
        eyebrow="News"
        title="News & Insights"
        lede="Updates, perspectives, and stories from our work in digital inclusion, cybersecurity awareness, and community empowerment."
      />
      <section className="wrap py-16 lg:py-24">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl italic leading-tight text-navy sm:text-4xl">
            News and updates coming soon.
          </h2>
          <p className="mt-4 leading-relaxed text-slate">
            Only reviewed articles will be published here. None have been released yet, so this page
            does not carry sample stories, invented dates, or attributed quotes.
          </p>
        </div>
        <h3 className="mt-12 text-sm font-semibold uppercase tracking-brand text-crimson">
          Topics we will cover
        </h3>
        <ul className="mt-4 max-w-3xl">
          {newsTopics.map((topic) => (
            <li key={topic} className="flex items-baseline justify-between gap-4 border-b border-line py-4">
              <span className="font-semibold text-navy">{topic}</span>
              <span className="text-xs font-semibold uppercase tracking-brand text-slate">Forthcoming</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-slate">
          When an article is published it will carry a title, summary, image, date, category, and
          author or publishing team only where those have been supplied.{" "}
          <TextLink to="/contact" search={{ topic: "Media enquiry" }}>
            Media enquiries
          </TextLink>
        </p>
      </section>
    </SiteShell>
  );
}
