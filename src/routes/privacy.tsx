import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, TextLink } from "@/components/site/layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | CyberPro Global Foundation" },
      {
        name: "description",
        content:
          "How CyberPro Global Foundation’s website handles enquiry and newsletter details while an official data process is still being confirmed.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteShell>
      <article className="wrap max-w-3xl py-16 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-brand text-crimson">Privacy</p>
        <h1 className="mt-3 text-4xl font-extrabold text-navy">Privacy Policy</h1>
        <p className="mt-4 text-sm leading-relaxed text-slate">
          This is a working notice for the website as it operates today. It is not a legal opinion,
          and it does not claim a certification. The Foundation should replace it with a reviewed
          policy that names the data controller, jurisdiction, processors, and retention periods.
        </p>
        <h2 className="mt-10 text-2xl font-bold text-navy">What you can send us</h2>
        <p className="mt-3 leading-relaxed">
          Contact, involvement, support, and newsletter forms ask for details you choose to provide:
          name, email address, optional phone number, optional organisation, the subject of your
          enquiry, and your message. Please do not include sensitive information that is not needed
          to answer you.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-navy">Where that information goes</h2>
        <p className="mt-3 leading-relaxed">
          There is no official inbox connected to these forms yet. Submissions are saved in your own
          browser (local storage) so you can keep a copy. They are not sent to a server, a mailing
          provider, or the Foundation. Clearing this site’s data in your browser removes them.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-navy">Cookies and analytics</h2>
        <p className="mt-3 leading-relaxed">
          This website does not set analytics or advertising cookies, and it does not run a tracker.
          A consent box on a form is not pre-ticked. If that changes, this notice will be updated
          before tracking begins.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-navy">Photographs</h2>
        <p className="mt-3 leading-relaxed">
          Photographs are stock images used under the Pexels licence. They illustrate learning and
          community settings. They are not pictures of Foundation participants, and they should not
          be read as records of a named programme.
        </p>
        <p className="mt-8">
          <TextLink to="/contact">Questions about this notice</TextLink>
        </p>
      </article>
    </SiteShell>
  );
}
