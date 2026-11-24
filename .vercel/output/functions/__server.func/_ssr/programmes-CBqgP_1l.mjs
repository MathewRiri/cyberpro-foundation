import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SiteShell, g as photos, o as TextLink, r as PageBanner } from "./layout-BmJkm2nA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programmes-CBqgP_1l.js
var import_jsx_runtime = require_jsx_runtime();
function ProgrammesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {
		src: photos.lab.src,
		alt: photos.lab.alt,
		credit: photos.lab.credit,
		eyebrow: "Programmes",
		title: "Our Programmes",
		lede: "Our programmes focus on practical digital skills, safer online participation, and opportunities for communities that are often underrepresented in the digital space."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "wrap py-16 lg:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-3xl text-lg leading-relaxed",
				children: "The directory below lists only programmes the Foundation has named for publication. The impact figures refer to 5+ active programmes. Invented names are not used to fill the gap."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mt-10 grid border border-line lg:grid-cols-[18rem_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: photos.lab.src,
					alt: "",
					className: "h-64 w-full object-cover lg:h-full"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-brand text-crimson",
							children: "Active · named"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl font-extrabold text-navy",
							children: "CYBER-X Programme"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-semibold text-navy",
							children: "Women and girls in technology"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed",
							children: "More than 1,230 women and girls have been trained and empowered via the CYBER-X Programme. Delivery model, eligibility, locations, and dates have not been published."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
								to: "/programmes/cyber-x",
								children: "Programme detail"
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 border border-line bg-mist p-6 sm:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-bold text-navy",
					children: "Other active programmes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-3xl text-sm leading-relaxed text-slate",
					children: "The complete programme list and official descriptions have not been supplied. This directory will be updated when the Foundation approves those entries. Until then, no additional public programmes are shown."
				})]
			})
		]
	})] });
}
//#endregion
export { ProgrammesPage as component };
