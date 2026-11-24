import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SiteShell, g as photos, h as newsTopics, o as TextLink, r as PageBanner } from "./layout-BmJkm2nA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news-DdwegKMu.js
var import_jsx_runtime = require_jsx_runtime();
function NewsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {
		src: photos.mentoring.src,
		alt: photos.mentoring.alt,
		credit: photos.mentoring.credit,
		eyebrow: "News",
		title: "News & Insights",
		lede: "Updates, perspectives, and stories from our work in digital inclusion, cybersecurity awareness, and community empowerment."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "wrap py-16 lg:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl italic leading-tight text-navy sm:text-4xl",
					children: "News and updates coming soon."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-slate",
					children: "Only reviewed articles will be published here. None have been released yet, so this page does not carry sample stories, invented dates, or attributed quotes."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-12 text-sm font-semibold uppercase tracking-brand text-crimson",
				children: "Topics we will cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 max-w-3xl",
				children: newsTopics.map((topic) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-baseline justify-between gap-4 border-b border-line py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-navy",
						children: topic
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-brand text-slate",
						children: "Forthcoming"
					})]
				}, topic))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-sm text-slate",
				children: [
					"When an article is published it will carry a title, summary, image, date, category, and author or publishing team only where those have been supplied.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
						to: "/contact",
						search: { topic: "Media enquiry" },
						children: "Media enquiries"
					})
				]
			})
		]
	})] });
}
//#endregion
export { NewsPage as component };
