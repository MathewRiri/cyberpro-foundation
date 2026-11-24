import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SiteShell, g as photos, r as PageBanner } from "./layout-BmJkm2nA.mjs";
import { r as Route$9 } from "./router-CsonsLCK.mjs";
import { r as NewsletterForm, t as ContactForm } from "./forms-C3F8hwku.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BUWqucVD.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const { topic } = Route$9.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {
			src: photos.doorway.src,
			alt: photos.doorway.alt,
			credit: photos.doorway.credit,
			eyebrow: "Contact",
			title: "Contact Us",
			lede: "Have a question, programme enquiry, or partnership idea? Get in touch with the Foundation."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap grid gap-12 py-16 lg:grid-cols-2 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-extrabold leading-tight text-navy",
					children: "We’d be glad to hear from you."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-slate",
					children: "Contact us about our programmes, volunteering, partnerships, sponsorship, or general enquiries. Share a few details and the appropriate person can follow up once an official channel is confirmed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photos.mentoring.src,
						alt: photos.mentoring.alt,
						className: "aspect-video w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "mt-2 text-xs text-slate",
						children: ["Illustrative · ", photos.mentoring.credit]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 border-t border-line pt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold text-navy",
						children: "Direct details"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-slate",
						children: "Email, telephone, office address, office hours, and a map are hidden until the Foundation confirms them. Nothing on this page is a guessed location."
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border border-line bg-paper p-6 sm:p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, { defaultTopic: topic || "General enquiry" })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "newsletter",
			className: "bg-navy text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap grid gap-8 py-16 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-extrabold",
					children: "Keep up with our work."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-navy-soft",
					children: "Occasional updates about programmes, opportunities, events, and community initiatives."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterForm, {})]
			})
		})
	] });
}
//#endregion
export { ContactPage as component };
