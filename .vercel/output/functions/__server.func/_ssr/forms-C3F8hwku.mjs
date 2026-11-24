import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as contactTopics, m as involveInterests } from "./layout-BmJkm2nA.mjs";
import { i as string, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forms-C3F8hwku.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var emailField = string().trim().email("Enter a valid email address.");
var contactSchema = object({
	firstName: string().trim().min(2, "Enter your first name."),
	lastName: string().trim().min(2, "Enter your last name."),
	email: emailField,
	phone: string().trim(),
	organisation: string().trim(),
	topic: string().min(1, "Choose an enquiry type."),
	message: string().trim().min(12, "Add a short message so we know how to help."),
	consent: literal(true, { message: "Consent is required before we keep this message." })
});
var involveSchema = object({
	name: string().trim().min(2, "Enter your name."),
	email: emailField,
	phone: string().trim(),
	organisation: string().trim(),
	interest: string().min(1, "Choose an area of interest."),
	experience: string().trim(),
	message: string().trim().min(12, "Tell us a little about how you would like to help."),
	consent: literal(true, { message: "Consent is required before we keep this message." })
});
var newsletterSchema = object({
	email: emailField,
	consent: literal(true, { message: "Tick the box to confirm you want updates." })
});
function issues(error) {
	const next = {};
	for (const issue of error.issues) {
		const key = String(issue.path[0] ?? "form");
		if (!next[key]) next[key] = issue.message;
	}
	return next;
}
var inputClass = "h-12 w-full rounded-sm border border-line bg-paper px-3 text-base text-ink outline-none";
var areaClass = "min-h-36 w-full rounded-sm border border-line bg-paper px-3 py-3 text-base text-ink outline-none";
var labelClass = "mb-1.5 block text-sm font-semibold text-navy";
function ErrorText({ id, message }) {
	if (!message) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		id,
		className: "mt-1 text-sm text-crimson",
		children: message
	});
}
function tooSoon(key) {
	const last = Number(sessionStorage.getItem(key) || 0);
	return Date.now() - last < 8e3;
}
function markSent(key) {
	sessionStorage.setItem(key, String(Date.now()));
}
function saveLocal(bucket, record) {
	const current = JSON.parse(localStorage.getItem(bucket) || "[]");
	current.push({
		...record,
		savedAt: (/* @__PURE__ */ new Date()).toISOString()
	});
	localStorage.setItem(bucket, JSON.stringify(current.slice(-20)));
}
function receipt(lines) {
	return lines.filter(Boolean).join("\n");
}
async function copyText(value) {
	try {
		await navigator.clipboard.writeText(value);
		return true;
	} catch {
		return false;
	}
}
function Success({ title, body, text, onReset }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-line bg-mist p-6",
		role: "status",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl font-bold text-navy",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-ink",
				children: body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "mt-4 overflow-x-auto whitespace-pre-wrap border border-line bg-paper p-4 text-sm text-ink",
				children: text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex h-12 items-center bg-crimson px-5 text-sm font-semibold text-paper hover:bg-crimson-deep",
					onClick: async () => setCopied(await copyText(text)),
					children: copied ? "Copied" : "Copy message"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex h-12 items-center border border-navy px-5 text-sm font-semibold text-navy hover:bg-navy hover:text-paper",
					onClick: onReset,
					children: "Write another"
				})]
			})
		]
	});
}
var keptNote = "Your message is saved in this browser so you have a copy. It has not been forwarded, because the Foundation has not yet published an official email address. When that inbox is confirmed, this form can deliver messages directly.";
function ContactForm({ defaultTopic = "General enquiry" }) {
	const base = (0, import_react.useId)();
	const [errors, setErrors] = (0, import_react.useState)({});
	const [done, setDone] = (0, import_react.useState)("");
	const [topic, setTopic] = (0, import_react.useState)(defaultTopic);
	(0, import_react.useEffect)(() => {
		setTopic(defaultTopic);
	}, [defaultTopic]);
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Success, {
		title: "Thank you.",
		body: keptNote,
		text: done,
		onReset: () => setDone("")
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "relative space-y-4",
		noValidate: true,
		onSubmit: (event) => {
			event.preventDefault();
			const form = new FormData(event.currentTarget);
			if (String(form.get("company_website") || "").trim()) {
				setDone("Message noted.");
				return;
			}
			if (tooSoon("cpgf-contact-at")) {
				setErrors({ form: "Please wait a moment before sending another message." });
				return;
			}
			const parsed = contactSchema.safeParse({
				firstName: form.get("firstName"),
				lastName: form.get("lastName"),
				email: form.get("email"),
				phone: form.get("phone") || "",
				organisation: form.get("organisation") || "",
				topic: form.get("topic"),
				message: form.get("message"),
				consent: form.get("consent") === "on" ? true : false
			});
			if (!parsed.success) {
				setErrors(issues(parsed.error));
				return;
			}
			const data = parsed.data;
			const text = receipt([
				`Name: ${data.firstName} ${data.lastName}`,
				`Email: ${data.email}`,
				data.phone ? `Phone: ${data.phone}` : "",
				data.organisation ? `Organisation: ${data.organisation}` : "",
				`Enquiry: ${data.topic}`,
				"",
				data.message
			]);
			saveLocal("cpgf-enquiries", {
				kind: "contact",
				name: `${data.firstName} ${data.lastName}`,
				email: data.email,
				topic: data.topic,
				message: data.message
			});
			markSent("cpgf-contact-at");
			setErrors({});
			setDone(text);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hp",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Company website", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "company_website",
					tabIndex: -1,
					autoComplete: "off"
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: labelClass,
						htmlFor: `${base}-first`,
						children: ["First name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-crimson",
							children: "*"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: `${base}-first`,
						name: "firstName",
						autoComplete: "given-name",
						className: inputClass,
						"aria-invalid": !!errors.firstName,
						"aria-describedby": errors.firstName ? `${base}-first-err` : void 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorText, {
						id: `${base}-first-err`,
						message: errors.firstName
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: labelClass,
						htmlFor: `${base}-last`,
						children: ["Last name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-crimson",
							children: "*"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: `${base}-last`,
						name: "lastName",
						autoComplete: "family-name",
						className: inputClass,
						"aria-invalid": !!errors.lastName,
						"aria-describedby": errors.lastName ? `${base}-last-err` : void 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorText, {
						id: `${base}-last-err`,
						message: errors.lastName
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: labelClass,
					htmlFor: `${base}-email`,
					children: ["Email address ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-crimson",
						children: "*"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: `${base}-email`,
					name: "email",
					type: "email",
					autoComplete: "email",
					className: inputClass,
					"aria-invalid": !!errors.email,
					"aria-describedby": errors.email ? `${base}-email-err` : void 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorText, {
					id: `${base}-email-err`,
					message: errors.email
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: labelClass,
					htmlFor: `${base}-phone`,
					children: ["Phone number ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-normal text-slate",
						children: "(optional)"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: `${base}-phone`,
					name: "phone",
					type: "tel",
					autoComplete: "tel",
					className: inputClass
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: labelClass,
					htmlFor: `${base}-org`,
					children: ["Organisation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-normal text-slate",
						children: "(optional)"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: `${base}-org`,
					name: "organisation",
					autoComplete: "organization",
					className: inputClass
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: labelClass,
					htmlFor: `${base}-topic`,
					children: ["Enquiry type ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-crimson",
						children: "*"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					id: `${base}-topic`,
					name: "topic",
					className: inputClass,
					value: topic,
					onChange: (event) => setTopic(event.target.value),
					"aria-invalid": !!errors.topic,
					children: contactTopics.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorText, {
					id: `${base}-topic-err`,
					message: errors.topic
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: labelClass,
					htmlFor: `${base}-message`,
					children: ["Message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-crimson",
						children: "*"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: `${base}-message`,
					name: "message",
					className: areaClass,
					"aria-invalid": !!errors.message,
					"aria-describedby": errors.message ? `${base}-message-err` : void 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorText, {
					id: `${base}-message-err`,
					message: errors.message
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-start gap-3 text-sm leading-relaxed text-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "consent",
					type: "checkbox",
					className: "mt-1 h-4 w-4 accent-crimson"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"I agree that this message may be kept so the Foundation can respond. Read the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "font-semibold text-crimson underline",
						children: "Privacy Policy"
					}),
					"."
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorText, {
				id: `${base}-consent-err`,
				message: errors.consent
			}),
			errors.form ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-crimson",
				children: errors.form
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "inline-flex h-12 items-center bg-crimson px-5 text-sm font-semibold text-paper hover:bg-crimson-deep",
				children: "Send Message"
			})
		]
	});
}
function InvolveForm({ defaultInterest = "Volunteering" }) {
	const base = (0, import_react.useId)();
	const [errors, setErrors] = (0, import_react.useState)({});
	const [done, setDone] = (0, import_react.useState)("");
	const [interest, setInterest] = (0, import_react.useState)(defaultInterest);
	(0, import_react.useEffect)(() => {
		if (defaultInterest) setInterest(defaultInterest);
	}, [defaultInterest]);
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Success, {
		title: "Thank you for offering to take part.",
		body: keptNote,
		text: done,
		onReset: () => setDone("")
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "relative space-y-4",
		noValidate: true,
		onSubmit: (event) => {
			event.preventDefault();
			const form = new FormData(event.currentTarget);
			if (String(form.get("company_website") || "").trim()) {
				setDone("Message noted.");
				return;
			}
			if (tooSoon("cpgf-involve-at")) {
				setErrors({ form: "Please wait a moment before sending another message." });
				return;
			}
			const parsed = involveSchema.safeParse({
				name: form.get("name"),
				email: form.get("email"),
				phone: form.get("phone") || "",
				organisation: form.get("organisation") || "",
				interest: form.get("interest"),
				experience: form.get("experience") || "",
				message: form.get("message"),
				consent: form.get("consent") === "on" ? true : false
			});
			if (!parsed.success) {
				setErrors(issues(parsed.error));
				return;
			}
			const data = parsed.data;
			const text = receipt([
				`Name: ${data.name}`,
				`Email: ${data.email}`,
				data.phone ? `Phone: ${data.phone}` : "",
				data.organisation ? `Organisation: ${data.organisation}` : "",
				`Interest: ${data.interest}`,
				data.experience ? `Experience: ${data.experience}` : "",
				"",
				data.message
			]);
			saveLocal("cpgf-enquiries", {
				kind: "involve",
				name: data.name,
				email: data.email,
				topic: data.interest,
				message: data.message
			});
			markSent("cpgf-involve-at");
			setErrors({});
			setDone(text);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hp",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Company website", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "company_website",
					tabIndex: -1,
					autoComplete: "off"
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: labelClass,
					htmlFor: `${base}-name`,
					children: ["Full name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-crimson",
						children: "*"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: `${base}-name`,
					name: "name",
					autoComplete: "name",
					className: inputClass,
					"aria-invalid": !!errors.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorText, {
					id: `${base}-name-err`,
					message: errors.name
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: labelClass,
						htmlFor: `${base}-email`,
						children: ["Email address ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-crimson",
							children: "*"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: `${base}-email`,
						name: "email",
						type: "email",
						autoComplete: "email",
						className: inputClass
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorText, {
						id: `${base}-email-err`,
						message: errors.email
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: labelClass,
					htmlFor: `${base}-phone`,
					children: ["Phone number ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-normal text-slate",
						children: "(optional)"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: `${base}-phone`,
					name: "phone",
					type: "tel",
					autoComplete: "tel",
					className: inputClass
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: labelClass,
				htmlFor: `${base}-org`,
				children: ["Organisation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-normal text-slate",
					children: "(optional)"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: `${base}-org`,
				name: "organisation",
				className: inputClass
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: labelClass,
					htmlFor: `${base}-interest`,
					children: ["Area of interest ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-crimson",
						children: "*"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					id: `${base}-interest`,
					name: "interest",
					className: inputClass,
					value: interest,
					onChange: (event) => setInterest(event.target.value),
					children: involveInterests.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorText, {
					id: `${base}-interest-err`,
					message: errors.interest
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: labelClass,
				htmlFor: `${base}-exp`,
				children: ["Relevant experience or proposed contribution ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-normal text-slate",
					children: "(optional)"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				id: `${base}-exp`,
				name: "experience",
				className: areaClass
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: labelClass,
					htmlFor: `${base}-message`,
					children: ["Message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-crimson",
						children: "*"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: `${base}-message`,
					name: "message",
					className: areaClass
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorText, {
					id: `${base}-message-err`,
					message: errors.message
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-start gap-3 text-sm leading-relaxed text-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "consent",
					type: "checkbox",
					className: "mt-1 h-4 w-4 accent-crimson"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"I agree to be contacted about this enquiry and have read the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "font-semibold text-crimson underline",
						children: "Privacy Policy"
					}),
					"."
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorText, {
				id: `${base}-consent`,
				message: errors.consent
			}),
			errors.form ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-crimson",
				children: errors.form
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "inline-flex h-12 items-center bg-crimson px-5 text-sm font-semibold text-paper hover:bg-crimson-deep",
				children: "Express Interest"
			})
		]
	});
}
function NewsletterForm() {
	const base = (0, import_react.useId)();
	const [errors, setErrors] = (0, import_react.useState)({});
	const [done, setDone] = (0, import_react.useState)(false);
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "border border-paper/20 p-4 text-sm leading-relaxed text-paper",
		role: "status",
		children: "Thank you. A mailing list is not connected yet, so this address has not been added to one. It is stored only in this browser. You can clear it any time from your site data."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "relative space-y-4",
		noValidate: true,
		onSubmit: (event) => {
			event.preventDefault();
			const form = new FormData(event.currentTarget);
			if (String(form.get("company_website") || "").trim()) {
				setDone(true);
				return;
			}
			const parsed = newsletterSchema.safeParse({
				email: form.get("email"),
				consent: form.get("consent") === "on" ? true : false
			});
			if (!parsed.success) {
				setErrors(issues(parsed.error));
				return;
			}
			saveLocal("cpgf-newsletter", { email: parsed.data.email });
			setErrors({});
			setDone(true);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hp",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Company website", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "company_website",
					tabIndex: -1,
					autoComplete: "off"
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "mb-1.5 block text-sm font-semibold text-paper",
					htmlFor: `${base}-email`,
					children: "Email address"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: `${base}-email`,
					name: "email",
					type: "email",
					autoComplete: "email",
					className: inputClass,
					"aria-invalid": !!errors.email
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorText, {
					id: `${base}-email-err`,
					message: errors.email
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-start gap-3 text-sm leading-relaxed text-navy-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "consent",
					type: "checkbox",
					className: "mt-1 h-4 w-4 accent-crimson"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"Send me occasional updates about programmes, opportunities, and events. I can unsubscribe when a list is connected. See the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "font-semibold text-paper underline",
						children: "Privacy Policy"
					}),
					"."
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorText, {
				id: `${base}-consent`,
				message: errors.consent
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "inline-flex h-12 items-center bg-crimson px-5 text-sm font-semibold text-paper hover:bg-crimson-deep",
				children: "Subscribe"
			})
		]
	});
}
//#endregion
export { InvolveForm as n, NewsletterForm as r, ContactForm as t };
