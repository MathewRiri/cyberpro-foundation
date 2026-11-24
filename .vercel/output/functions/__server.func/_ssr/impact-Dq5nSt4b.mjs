import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SiteShell, f as impactFigures, g as photos, r as PageBanner, t as ButtonLink } from "./layout-BmJkm2nA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/impact-Dq5nSt4b.js
var import_jsx_runtime = require_jsx_runtime();
var forthcoming = [
	"Beneficiary stories, published only with informed consent",
	"Programme highlights",
	"Photo essays from the Foundation’s own work",
	"Annual reports",
	"Impact reports",
	"Partner-supported initiatives"
];
function ImpactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {
			src: photos.study.src,
			alt: photos.study.alt,
			credit: photos.study.credit,
			eyebrow: "Our impact",
			title: "Our Impact",
			lede: "We look at impact through the people reached, the skills developed, and the opportunities supported by our programmes."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-navy text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap py-16 lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
					children: impactFigures.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t border-paper/25 pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-4xl font-extrabold lg:text-5xl",
							children: item.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-navy-soft",
							children: item.label
						})]
					}, item.value))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-2xl text-sm text-navy-soft",
					children: "These four figures are shown exactly as supplied. They are not described as independently audited, and no further statistics are added."
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap grid gap-10 py-16 lg:grid-cols-2 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-extrabold leading-tight text-navy",
				children: "Numbers matter. The people behind them matter more."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg leading-relaxed",
				children: "Every person reached represents an opportunity to share knowledge, strengthen confidence, and improve access to the digital world. We aim to make our work practical, relevant, and responsive to the communities we serve."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: photos.collaborate.src,
				alt: photos.collaborate.alt,
				className: "aspect-video w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "mt-2 text-xs text-slate",
				children: ["Illustrative · ", photos.collaborate.credit]
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-mist",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap py-16 lg:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-extrabold text-navy",
						children: "Stories and reports"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl leading-relaxed text-slate",
						children: "The Foundation has not released beneficiary stories, quotes, or report files for this website. Nothing fictional is published in their place."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 max-w-2xl",
						children: forthcoming.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-baseline justify-between gap-4 border-b border-line py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-navy",
								children: item
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold uppercase tracking-brand text-slate",
								children: "Forthcoming"
							})]
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							to: "/news",
							children: "News & Insights"
						})
					})
				]
			})
		})
	] });
}
//#endregion
export { ImpactPage as component };
