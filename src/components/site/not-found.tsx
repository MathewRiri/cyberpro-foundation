import { SiteShell, ButtonLink } from "@/components/site/layout";

export function NotFound() {
  return (
    <SiteShell>
      <section className="wrap py-20">
        <p className="text-xs font-semibold uppercase tracking-brand text-crimson">404</p>
        <h1 className="mt-3 text-4xl font-extrabold text-navy">This page is not on the site.</h1>
        <p className="mt-4 max-w-xl text-lg text-slate">
          The address may be mistyped, or the page has not been published. Try the programmes, impact,
          or contact pages.
        </p>
        <div className="mt-8">
          <ButtonLink to="/">Back to home</ButtonLink>
        </div>
      </section>
    </SiteShell>
  );
}
