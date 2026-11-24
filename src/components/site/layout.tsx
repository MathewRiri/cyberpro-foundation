import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { nav, type NavTo } from "@/lib/site";

const buttonStyles = {
  primary: "bg-crimson text-paper hover:bg-crimson-deep",
  secondary: "border border-navy bg-transparent text-navy hover:bg-navy hover:text-paper",
  inverse: "border border-paper bg-transparent text-paper hover:bg-paper hover:text-navy",
} as const;

export function ButtonLink({
  to,
  search,
  hash,
  children,
  variant = "primary",
}: {
  to: NavTo | "/support" | "/programmes/cyber-x" | "/privacy" | "/terms";
  search?: Record<string, string>;
  hash?: string;
  children: ReactNode;
  variant?: keyof typeof buttonStyles;
}) {
  return (
    <Link
      to={to}
      search={search}
      hash={hash}
      className={`inline-flex h-12 items-center justify-center rounded-sm px-5 text-center text-sm font-semibold transition-colors duration-200 ${buttonStyles[variant]}`}
    >
      {children}
    </Link>
  );
}

export function TextLink({
  to,
  children,
  search,
  hash,
}: {
  to: NavTo | "/support" | "/programmes/cyber-x" | "/privacy" | "/terms";
  children: ReactNode;
  search?: Record<string, string>;
  hash?: string;
}) {
  return (
    <Link
      to={to}
      search={search}
      hash={hash}
      className="font-semibold text-crimson underline decoration-crimson/30 underline-offset-4 hover:decoration-crimson"
    >
      {children}
    </Link>
  );
}

export function Eyebrow({
  children,
  tone = "crimson",
}: {
  children: ReactNode;
  tone?: "crimson" | "paper";
}) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-brand ${tone === "paper" ? "text-navy-soft" : "text-crimson"}`}
    >
      {children}
    </p>
  );
}

export function PhotoCredit({ credit }: { credit: string }) {
  return (
    <p className="bg-navy px-3 py-2 text-xs text-navy-soft">
      Illustrative photograph · {credit}. Not a record of a Foundation programme.
    </p>
  );
}

export function PageBanner({
  src,
  alt,
  credit,
  eyebrow,
  title,
  lede,
}: {
  src: string;
  alt: string;
  credit: string;
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <header>
      <div className="relative h-56 sm:h-72 lg:h-80">
        <img src={src} alt={alt} className="h-full w-full object-cover" decoding="async" />
      </div>
      <PhotoCredit credit={credit} />
      <div className="bg-navy text-paper">
        <div className="wrap py-10 lg:py-14">
          <Eyebrow tone="paper">{eyebrow}</Eyebrow>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy-soft">{lede}</p>
        </div>
      </div>
    </header>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <div className="h-1 bg-crimson" />
      <div className="wrap flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/images/cyberpro-seal.png"
            alt=""
            width={56}
            height={56}
            className="h-14 w-14"
          />
          <span className="sr-only">CyberPro Global Foundation</span>
          <span aria-hidden="true" className="hidden leading-tight sm:block">
            <span className="block text-sm font-extrabold text-navy">CyberPro Global</span>
            <span className="block text-xs font-semibold uppercase tracking-brand text-crimson">
              Foundation
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-x-4 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to !== "/programmes" }}
              className="text-sm font-medium text-navy hover:text-crimson data-[status=active]:text-crimson"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink to="/support">
            <span className="sm:hidden">Support</span>
            <span className="hidden sm:inline">Support Our Work</span>
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center border border-line text-navy xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
              <span className="block h-0.5 bg-navy" />
              <span className="block h-0.5 bg-navy" />
              <span className="block h-0.5 bg-navy" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto border-t border-line bg-paper xl:hidden"
        >
          <div className="wrap flex items-center justify-between py-4">
            <p className="text-sm font-semibold text-navy">Menu</p>
            <button
              ref={closeRef}
              type="button"
              className="inline-flex h-11 items-center px-3 text-sm font-semibold text-crimson"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
          <ul className="wrap pb-10">
            {nav.map((item) => (
              <li key={item.to} className="border-t border-line">
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to !== "/programmes" }}
                  className="flex min-h-12 items-center text-lg font-semibold text-navy data-[status=active]:text-crimson"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-paper">
      <div className="wrap grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src="/assets/images/cyberpro-seal.png"
            alt=""
            width={64}
            height={64}
            className="h-16 w-16"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-soft">
            CyberPro Global Foundation works to expand digital opportunity and promote safer
            participation in the digital world.
          </p>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-brand text-navy-soft">Explore</h2>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-paper hover:text-navy-soft">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-brand text-navy-soft">Take part</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/programmes/cyber-x" className="hover:text-navy-soft">
                CYBER-X Programme
              </Link>
            </li>
            <li>
              <Link to="/get-involved" search={{ interest: "volunteer" }} className="hover:text-navy-soft">
                Volunteer
              </Link>
            </li>
            <li>
              <Link to="/get-involved" search={{ interest: "mentor" }} className="hover:text-navy-soft">
                Mentor
              </Link>
            </li>
            <li>
              <Link to="/get-involved" search={{ interest: "partner" }} className="hover:text-navy-soft">
                Partner
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-navy-soft">
                Support Our Work
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-brand text-navy-soft">Notice</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/privacy" className="hover:text-navy-soft">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-navy-soft">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/contact" hash="newsletter" className="hover:text-navy-soft">
                Newsletter
              </Link>
            </li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-navy-soft">
            Official email, telephone, address, and social channels will be published when the
            Foundation confirms them.
          </p>
        </div>
      </div>
      <div className="border-t border-paper/15">
        <div className="wrap flex flex-col gap-2 py-5 text-xs text-navy-soft sm:flex-row sm:justify-between">
          <p>
            © {year} CyberPro Global Foundation. Empowering communities. Building a safer digital
            future.
          </p>
          <p>Photography via Pexels. Illustrative only.</p>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-4 focus:py-3 focus:text-navy"
      >
        Skip to content
      </a>
      <Header />
      <main id="content">{children}</main>
      <Footer />
    </>
  );
}
