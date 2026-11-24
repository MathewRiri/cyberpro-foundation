import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SiteShell, g as photos, o as TextLink, r as PageBanner, t as ButtonLink } from "./layout-BmJkm2nA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cyber-x-Don_4XPZ.js
var import_jsx_runtime = require_jsx_runtime();
var withheld = [
	"Whether CYBER-X is a fellowship, bootcamp, course, campaign, or another format",
	"Objectives beyond the published training and empowerment of women and girls",
	"Who can apply, and any age or location limits",
	"Delivery format, schedule, and places where sessions run",
	"Application dates and how to enrol",
	"Participant stories and photographs from the programme"
];
function CyberXPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {
			src: photos.mentoring.src,
			alt: photos.mentoring.alt,
			credit: photos.mentoring.credit,
			eyebrow: "Programme",
			title: "CYBER-X Programme",
			lede: "More than 1,230 women and girls have been trained and empowered through the CYBER-X Programme."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap grid gap-12 py-16 lg:grid-cols-12 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-extrabold text-navy",
						children: "What is confirmed"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-lg leading-relaxed",
						children: [
							"CYBER-X is the programme named alongside the Foundation’s figure for women and girls. That figure is ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-navy",
								children: "1,230+"
							}),
							" women and girls trained and empowered. It is not presented here as an audited total."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-slate",
						children: "The programme sits within the Foundation’s focus on women and girls in technology: skills, confidence, mentorship, and opportunities. A fuller official description has not been released for this website."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 bg-navy p-6 text-paper",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-3xl italic",
							children: "1,230+"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-navy-soft",
							children: "Women and girls trained and empowered through the CYBER-X Programme."
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "border border-line bg-mist p-6 lg:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-bold text-navy",
					children: "Not yet published"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3 text-sm leading-relaxed text-slate",
					children: withheld.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-t border-line pt-3",
						children: item
					}, item))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-t border-line",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap flex flex-col gap-4 py-12 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-xl text-navy",
					children: "Ask for programme information and the Foundation can follow up when an official channel is connected."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
						to: "/contact",
						search: { topic: "Programme information" },
						children: "Ask about CYBER-X"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
						to: "/programmes",
						variant: "secondary",
						children: "All programmes"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "wrap pb-12 text-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
					to: "/get-involved",
					search: { interest: "mentor" },
					children: "Offer to mentor"
				})
			})]
		})
	] });
}
//#endregion
export { CyberXPage as component };
