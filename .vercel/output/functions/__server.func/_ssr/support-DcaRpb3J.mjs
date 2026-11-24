import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as supportWays, a as SiteShell, g as photos, r as PageBanner, t as ButtonLink } from "./layout-BmJkm2nA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/support-DcaRpb3J.js
var import_jsx_runtime = require_jsx_runtime();
function SupportPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {
			src: photos.hero.src,
			alt: photos.hero.alt,
			credit: photos.hero.credit,
			eyebrow: "Support",
			title: "Support Our Work",
			lede: "Help more people participate safely in the digital world."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap grid gap-12 py-16 lg:grid-cols-12 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg leading-relaxed",
					children: "Your support can help extend digital education, cybersecurity awareness, and community empowerment initiatives. We welcome individual contributions, institutional support, programme sponsorship, and in-kind contributions."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 border border-line bg-mist p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-bold text-navy",
						children: "No payment form on this page"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-slate",
						children: "The Foundation has not published a payment provider, bank details, currency, donation tiers, or a statement on tax deductibility. This site will not invent them. Contact the Foundation about supporting the work, and give only once an official method is confirmed."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "lg:col-span-7",
				children: supportWays.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-serif text-lg italic text-crimson",
						children: String(index + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-bold text-navy",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-slate",
						children: item.copy
					})] })]
				}, item.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-navy text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap flex flex-col items-start gap-6 py-14 lg:flex-row lg:items-center lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-extrabold",
					children: "Contact us about supporting the Foundation."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-navy-soft",
					children: "Tell us whether you have in mind a personal contribution, sponsorship, equipment, or an institutional partnership."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
					to: "/contact",
					search: { topic: "Sponsorship or donations" },
					children: "Contact us about support"
				})]
			})
		})
	] });
}
//#endregion
export { SupportPage as component };
