import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, TextLink } from "@/components/site/layout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | CyberPro Global Foundation" },
      {
        name: "description",
        content:
          "Terms for using the CyberPro Global Foundation website, including limits on unpublished programme and donation information.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteShell>
      <article className="wrap max-w-3xl py-16 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-brand text-crimson">Terms</p>
        <h1 className="mt-3 text-4xl font-extrabold text-navy">Terms of Use</h1>
        <p className="mt-4 text-sm leading-relaxed text-slate">
          These terms describe how to use this website. They are a plain-language draft for review
          by the Foundation. They are not a certification and they do not create a donation contract.
        </p>
        <h2 className="mt-10 text-2xl font-bold text-navy">The information on this site</h2>
        <p className="mt-3 leading-relaxed">
          Content is published to explain the Foundation’s social-impact work. Impact figures are
          shown as supplied and are not described as audited. Programme pages omit details that have
          not been approved. Do not treat missing eligibility rules, dates, or locations as an
          invitation to assume them.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-navy">Support and payments</h2>
        <p className="mt-3 leading-relaxed">
          This website does not take payments. Any future donation method will be stated by the
          Foundation, with the recipient, currency, and terms made explicit. Do not send money to an
          account that is not published here.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-navy">The name and the seal</h2>
        <p className="mt-3 leading-relaxed">
          The CyberPro Global Foundation name and seal belong to the organisation. Do not redraw or
          reuse them in a way that suggests a commercial cybersecurity service, a partnership, or an
          endorsement that the Foundation has not confirmed.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-navy">Photographs</h2>
        <p className="mt-3 leading-relaxed">
          Photographs are used under the Pexels licence and credited on the page. They are
          illustrative. They are not evidence that a particular programme took place in the place
          shown.
        </p>
        <p className="mt-8">
          <TextLink to="/privacy">Privacy Policy</TextLink>
        </p>
      </article>
    </SiteShell>
  );
}
