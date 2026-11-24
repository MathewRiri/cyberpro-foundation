import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SiteShell, g as photos, o as TextLink, p as interestFromQuery, r as PageBanner } from "./layout-BmJkm2nA.mjs";
import { n as Route$8 } from "./router-CsonsLCK.mjs";
import { n as InvolveForm } from "./forms-C3F8hwku.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/get-involved-CQtTtfh9.js
var import_jsx_runtime = require_jsx_runtime();
var paths = [
	{
		id: "volunteer",
		title: "Give your time and skills.",
		copy: "Volunteers can support the Foundation’s work through programme activities, community engagement, communications, research, administration, and digital education, depending on current needs.",
		cta: "Express interest"
	},
	{
		id: "mentor",
		title: "Share what you know.",
		copy: "Mentors can help participants build confidence, explore learning pathways, and understand opportunities in technology and related fields.",
		cta: "Become a mentor"
	},
	{
		id: "partner",
		title: "Build impact through collaboration.",
		copy: "We welcome conversations with institutions, companies, schools, community organisations, and development partners interested in supporting digital inclusion and cybersecurity awareness.",
		cta: "Explore a partnership"
	},
	{
		id: "support",
		title: "Help extend the reach of our programmes.",
		copy: "Financial and in-kind support can help strengthen programme delivery, learning opportunities, community engagement, and access to resources.",
		cta: "Support our work"
	}
];
function GetInvolvedPage() {
	const { interest } = Route$8.useSearch();
	const selected = interest ? interestFromQuery[interest] ?? "Volunteering" : "Volunteering";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {
			src: photos.collaborate.src,
			alt: photos.collaborate.alt,
			credit: photos.collaborate.credit,
			eyebrow: "Get involved",
			title: "Get Involved",
			lede: "Help make digital opportunity and safer online participation more accessible. Contribute your skills, time, experience, or resources."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap py-16 lg:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children: paths.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				id: item.id,
				className: "grid gap-4 border-t border-line py-8 lg:grid-cols-[4rem_1fr_12rem] lg:items-start",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-serif text-3xl italic text-crimson",
						children: index + 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-extrabold text-navy",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl leading-relaxed text-slate",
						children: item.copy
					})] }),
					item.id === "support" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
						to: "/support",
						children: item.cta
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#enquire",
						className: "font-semibold text-crimson underline decoration-crimson/30 underline-offset-4",
						children: item.cta
					})
				]
			}, item.id)) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "enquire",
			className: "bg-mist",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap grid gap-10 py-16 lg:grid-cols-2 lg:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-extrabold text-navy",
					children: "Tell us how you would like to help."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-slate",
					children: "Share your name, the kind of contribution you have in mind, and any relevant experience. Do not include sensitive personal information that is not needed for the enquiry."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border border-line bg-paper p-6 sm:p-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InvolveForm, { defaultInterest: selected })
				})]
			})
		})
	] });
}
//#endregion
export { GetInvolvedPage as component };
