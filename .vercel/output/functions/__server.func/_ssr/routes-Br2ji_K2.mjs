import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SiteShell, c as audiences, d as focusAreas, f as impactFigures, g as photos, h as newsTopics, i as PhotoCredit, n as Eyebrow, o as TextLink, t as ButtonLink, u as faqs } from "./layout-BmJkm2nA.mjs";
import { r as NewsletterForm } from "./forms-C3F8hwku.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Br2ji_K2.js
var import_jsx_runtime = require_jsx_runtime();
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Intro, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Focus, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Programmes, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Impact, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Audiences, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Partnership, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(News, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Involve, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newsletter, {})
	] });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-navy text-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:min-h-[40rem] lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-2 flex flex-col justify-center px-5 py-12 sm:px-10 lg:order-1 lg:col-span-5 lg:px-12 lg:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
						tone: "paper",
						children: "CyberPro Global Foundation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-4xl font-extrabold leading-tight sm:text-5xl",
						children: "Building a safer, more inclusive digital future."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-lg leading-relaxed text-navy-soft",
						children: "We work to expand digital opportunities and strengthen online safety through education, cybersecurity awareness, and community-led programmes. Our focus is simple: help more people access, understand, and participate in the digital world with confidence."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							to: "/programmes",
							children: "Explore Our Programmes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							to: "/support",
							variant: "inverse",
							children: "Support Our Work"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-1 flex flex-col lg:order-2 lg:col-span-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: photos.hero.src,
					alt: photos.hero.alt,
					className: "h-72 w-full flex-1 object-cover sm:h-96 lg:h-auto lg:min-h-[36rem]",
					decoding: "async"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoCredit, { credit: photos.hero.credit })]
			})]
		})
	});
}
function Intro() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Who we are" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl font-extrabold leading-tight text-navy sm:text-4xl",
					children: "Technology should create opportunity, not leave people behind."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg leading-relaxed",
					children: "Digital access alone is not enough. People also need the skills to use technology, the knowledge to recognise online risks, and the confidence to take part in a changing digital society."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-slate",
					children: "CyberPro Global Foundation works with communities and partners to address these needs through digital education, cybersecurity awareness, empowerment initiatives, and practical programmes."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
						to: "/about",
						children: "About the Foundation"
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: photos.mentoring.src,
				alt: photos.mentoring.alt,
				className: "aspect-video w-full object-cover",
				decoding: "async"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "mt-2 text-xs text-slate",
				children: ["Illustrative · ", photos.mentoring.credit]
			})] })]
		})
	});
}
function Focus() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-mist",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap grid gap-12 py-16 lg:grid-cols-12 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "What we focus on" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl font-extrabold leading-tight text-navy sm:text-4xl",
						children: "Our work responds to real digital challenges."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-slate",
						children: "We concentrate on practical areas where education, access, and awareness can make a meaningful difference."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "lg:col-span-8",
				children: focusAreas.map((area, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-serif text-lg italic text-crimson",
						children: String(index + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold text-navy",
						children: area.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-relaxed text-slate",
						children: area.copy
					})] })]
				}, area.title))
			})]
		})
	});
}
function Programmes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap py-16 lg:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Our programmes" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-navy sm:text-4xl",
					children: "Practical programmes. Meaningful opportunities."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl leading-relaxed text-slate",
					children: "Our programmes turn the mission into action. Through learning, awareness, and community engagement, we work to make digital participation safer and more accessible."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "mt-10 grid border border-line lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photos.lab.src,
						alt: photos.lab.alt,
						className: "aspect-portrait w-full object-cover sm:aspect-video lg:aspect-auto lg:h-full",
						decoding: "async"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center p-6 sm:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-brand text-crimson",
								children: "Confirmed programme"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-3xl font-extrabold text-navy",
								children: "CYBER-X Programme"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 leading-relaxed",
								children: [
									"More than ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "font-extrabold text-navy",
										children: "1,230 women and girls"
									}),
									" ",
									"have been trained and empowered through the CYBER-X Programme."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-slate",
								children: "Official objectives, eligibility, locations, and application details will be published when the Foundation approves them. This photograph is illustrative and is not a record of a CYBER-X session."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
									to: "/programmes/cyber-x",
									children: "Read about CYBER-X"
								})
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm leading-relaxed text-slate",
					children: "The Foundation reports 5+ active programmes. Only CYBER-X is named in the published impact figures, so other programmes are not listed until their official names are supplied."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
						to: "/programmes",
						children: "View all programmes"
					})
				})
			]
		})
	});
}
function Impact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-navy text-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap py-16 lg:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
					tone: "paper",
					children: "Our impact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl",
					children: "Progress you can see. People at the centre."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl leading-relaxed text-navy-soft",
					children: "Behind every number is a person gaining knowledge, building confidence, or accessing a new opportunity. These figures reflect the reach of our work and the communities we seek to serve."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
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
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
						to: "/impact",
						variant: "inverse",
						children: "How we describe impact"
					})
				})
			]
		})
	});
}
function Audiences() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap grid items-start gap-10 py-16 lg:grid-cols-2 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: photos.collaborate.src,
				alt: photos.collaborate.alt,
				className: "aspect-video w-full object-cover",
				decoding: "async"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "mt-2 text-xs text-slate",
				children: ["Illustrative · ", photos.collaborate.credit]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-extrabold leading-tight text-navy sm:text-4xl",
					children: "Working with people and communities."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-slate",
					children: "Our work is shaped around the needs of people who face barriers to digital access, skills, and safety. Not every group is served by every programme."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-8",
					children: audiences.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-line py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-bold text-navy",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-sm leading-relaxed text-slate",
							children: item.copy
						})]
					}, item.title))
				})
			] })]
		})
	});
}
function Partnership() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-mist",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "wrap py-16 lg:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl border-l-4 border-crimson pl-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl font-medium italic leading-tight text-navy sm:text-5xl",
						children: "Change is stronger when we work together."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg leading-relaxed",
						children: "We welcome collaboration with organisations, institutions, educators, technology professionals, and community leaders who share our commitment to digital inclusion and safer online participation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-slate",
						children: "Partner logos are not shown here. None have been supplied for publication."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							to: "/get-involved",
							search: { interest: "partner" },
							children: "Discuss a Partnership"
						})
					})
				]
			})
		})
	});
}
function News() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap grid gap-10 py-16 lg:grid-cols-12 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-extrabold leading-tight text-navy",
						children: "Updates from our work."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-slate",
						children: "Programme updates, community stories, and perspectives on digital inclusion and online safety will be published here. No articles have been released for this site yet."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
							to: "/news",
							children: "View News & Insights"
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "lg:col-span-8",
				children: newsTopics.slice(0, 4).map((topic) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-baseline justify-between gap-4 border-b border-line py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-navy",
						children: topic
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-brand text-slate",
						children: "Forthcoming"
					})]
				}, topic))
			})]
		})
	});
}
function Involve() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line bg-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap py-16 lg:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "max-w-2xl text-3xl font-extrabold leading-tight text-navy sm:text-4xl",
					children: "There is a place for you in this work."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl leading-relaxed text-slate",
					children: "Whether you can contribute expertise, time, resources, or partnership, your involvement can help extend opportunities to more people."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10",
					children: [
						{
							title: "Volunteer with us",
							copy: "Give time to programme activities, communications, research, or community engagement.",
							to: "/get-involved",
							search: { interest: "volunteer" }
						},
						{
							title: "Partner with us",
							copy: "Bring an institution, school, company, or community organisation into the work.",
							to: "/get-involved",
							search: { interest: "partner" }
						},
						{
							title: "Support our work",
							copy: "Contribute funds, equipment, or sponsorship once payment details are confirmed.",
							to: "/support",
							search: void 0
						}
					].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid gap-3 border-t border-line py-6 md:grid-cols-[4rem_1fr_auto] md:items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-2xl italic text-crimson",
								children: index + 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold text-navy",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-slate",
								children: item.copy
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								to: item.to,
								search: item.search,
								variant: index === 2 ? "primary" : "secondary",
								children: item.title
							})
						]
					}, item.title))
				})
			]
		})
	});
}
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-mist",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap grid gap-10 py-16 lg:grid-cols-12 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Questions" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl font-extrabold leading-tight text-navy",
						children: "Straight answers from what we have published."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-slate",
						children: "These replies use only information on this site. They are not a substitute for a formal statement from the Foundation."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-8",
				children: faqs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "group border-b border-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
						className: "flex min-h-14 cursor-pointer items-center justify-between gap-4 py-4 text-left font-semibold text-navy",
						children: [
							item.q,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: "text-xl text-crimson group-open:hidden",
								children: "+"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: "hidden text-xl text-crimson group-open:inline",
								children: "–"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pb-5 text-sm leading-relaxed text-slate",
						children: item.a
					})]
				}, item.q))
			})]
		})
	});
}
function Newsletter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-navy text-paper",
		id: "newsletter",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap grid gap-8 py-16 lg:grid-cols-2 lg:items-start lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-extrabold leading-tight",
				children: "Keep up with our work."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-md leading-relaxed text-navy-soft",
				children: "Receive occasional updates about our programmes, opportunities, events, and community initiatives."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterForm, {})]
		})
	});
}
//#endregion
export { HomePage as component };
