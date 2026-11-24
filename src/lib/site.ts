export const siteName = "CyberPro Global Foundation";

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/programmes", label: "Programmes" },
  { to: "/impact", label: "Our Impact" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/news", label: "News & Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export type NavTo = (typeof nav)[number]["to"];

export const impactFigures = [
  { value: "5,000+", label: "Individuals reached" },
  { value: "3,800+", label: "Individuals trained" },
  {
    value: "1,230+",
    label: "Women and girls trained and empowered through the CYBER-X Programme",
  },
  { value: "5+", label: "Active programmes" },
] as const;

export const focusAreas = [
  {
    title: "Digital education and literacy",
    copy: "Helping individuals build the knowledge and confidence to use digital tools, services, and information effectively.",
  },
  {
    title: "Cybersecurity awareness",
    copy: "Promoting safer online behaviour and helping people recognise common digital risks, scams, and threats.",
  },
  {
    title: "Women and girls in technology",
    copy: "Supporting pathways for women and girls to gain skills, confidence, mentorship, and opportunities in technology.",
  },
  {
    title: "Youth empowerment",
    copy: "Creating opportunities for young people to develop relevant digital capabilities and explore future pathways.",
  },
  {
    title: "Digital inclusion",
    copy: "Working to reduce barriers that prevent underserved communities from accessing and benefiting from digital opportunities.",
  },
  {
    title: "Responsible technology and advocacy",
    copy: "Encouraging informed, responsible, and inclusive approaches to technology and digital participation.",
  },
] as const;

export const audiences = [
  {
    title: "Children and young people",
    copy: "Digital learning and online-safety awareness shaped for younger participants and students.",
  },
  {
    title: "Women and girls",
    copy: "Skills, confidence, and mentorship, including through the CYBER-X Programme.",
  },
  {
    title: "Underserved communities",
    copy: "Practical attention to the access, skills, and safety barriers that limit digital participation.",
  },
  {
    title: "Educators and learning institutions",
    copy: "Collaboration with the places where people already learn.",
  },
  {
    title: "Community organisations",
    copy: "Shared work with groups that hold local trust and know local needs.",
  },
  {
    title: "Small businesses and local organisations",
    copy: "Support for local organisations that need safer, more confident use of digital tools.",
  },
] as const;

export const values = [
  {
    title: "Inclusion",
    copy: "We believe digital opportunity should be accessible to people from different backgrounds and circumstances.",
  },
  {
    title: "Empowerment",
    copy: "We support people with knowledge, skills, and opportunities that strengthen their independence and confidence.",
  },
  {
    title: "Integrity",
    copy: "We aim to act responsibly, transparently, and accountably.",
  },
  {
    title: "Collaboration",
    copy: "We value partnerships and community participation as essential to sustainable progress.",
  },
  {
    title: "Safety and responsibility",
    copy: "We encourage informed and responsible participation in digital spaces.",
  },
  {
    title: "Learning and innovation",
    copy: "We support continuous learning and practical responses to changing digital needs.",
  },
] as const;

export const approach = [
  { title: "Educate", copy: "Make digital knowledge and skills more accessible." },
  { title: "Raise awareness", copy: "Help people understand online risks and safer practices." },
  { title: "Empower", copy: "Support people to build confidence and pursue opportunities." },
  { title: "Collaborate", copy: "Work with institutions, communities, and partners." },
  { title: "Learn and improve", copy: "Use programme feedback and evidence to strengthen our work." },
] as const;

export const newsTopics = [
  "Foundation News",
  "Programme Updates",
  "Digital Skills",
  "Cybersecurity Awareness",
  "Women and Girls in Technology",
  "Youth Empowerment",
  "Community Stories",
  "Events and Partnerships",
] as const;

export const faqs = [
  {
    q: "What is CyberPro Global Foundation?",
    a: "CyberPro Global Foundation is a community and social-impact foundation. It advances digital inclusion, cybersecurity awareness, digital skills, and safer participation in the digital world. It is not a commercial cybersecurity consultancy.",
  },
  {
    q: "What communities does the Foundation work with?",
    a: "The published geographic emphasis is Africa, with Kenya noted as a relevant operating context where that has been confirmed. This site does not list country offices beyond that. The work is shaped around children and young people, women and girls, underserved communities, educators, community organisations, and local organisations. Not every programme serves every group.",
  },
  {
    q: "How can I participate in a programme?",
    a: "Eligibility, schedules, and application links have not been published yet. CYBER-X is the programme through which more than 1,230 women and girls have been trained and empowered. Use the contact form to ask for programme information.",
  },
  {
    q: "How can I volunteer or become a mentor?",
    a: "Volunteers may support programme activities, community engagement, communications, research, administration, or digital education, depending on current needs. Mentors help participants build confidence and explore pathways in technology. Start from Get Involved.",
  },
  {
    q: "How can my organisation partner with the Foundation?",
    a: "Institutions, companies, schools, community organisations, and development partners can open a conversation about digital inclusion and cybersecurity awareness. Partner names and logos are shown only when the Foundation supplies approved files.",
  },
  {
    q: "How can I support the Foundation’s work?",
    a: "Individual contributions, programme sponsorship, equipment, community outreach, training support, and institutional partnerships are welcome. Payment details are not published on this site. Use Support Our Work to contact the Foundation about a contribution.",
  },
] as const;

export const supportWays = [
  { title: "Make an individual contribution", copy: "Personal financial support for the Foundation’s programmes." },
  { title: "Sponsor a programme", copy: "Back a named area of work once the Foundation confirms the fit." },
  { title: "Provide equipment or learning resources", copy: "In-kind support such as devices or materials used in learning." },
  { title: "Support community outreach", copy: "Help the Foundation reach people who are not yet taking part." },
  { title: "Fund training opportunities", copy: "Resource the practical learning at the centre of the work." },
  { title: "Explore an institutional partnership", copy: "A longer collaboration with a school, company, or institution." },
] as const;

export const photos = {
  hero: {
    src: "/assets/images/hero-learning.webp",
    alt: "Young people working on laptops during a technology class in Accra",
    credit: "Zeal Creative Studios / Pexels",
  },
  mentoring: {
    src: "/assets/images/mentoring-laptop.webp",
    alt: "Two students working through a task on a laptop while a facilitator stands nearby",
    credit: "Kampus Production / Pexels",
  },
  lab: {
    src: "/assets/images/computer-lab.webp",
    alt: "A woman following a lesson at a computer in a training lab",
    credit: "Kenneth Chiamaka Ejiofor / Pexels",
  },
  study: {
    src: "/assets/images/students-study.webp",
    alt: "Students reading together at a classroom desk",
    credit: "Tosin Olowoleni / Pexels",
  },
  collaborate: {
    src: "/assets/images/students-collaborate.webp",
    alt: "Students gathered around a shared page during a lesson",
    credit: "Tosin Olowoleni / Pexels",
  },
  doorway: {
    src: "/assets/images/students-doorway.webp",
    alt: "Three students standing in a school doorway",
    credit: "Andy Coffie / Pexels",
  },
} as const;

export type PhotoKey = keyof typeof photos;

export const contactTopics = [
  "General enquiry",
  "Programme information",
  "Volunteering or mentorship",
  "Partnership",
  "Sponsorship or donations",
  "Media enquiry",
  "Other",
] as const;

export const involveInterests = [
  "Volunteering",
  "Mentorship",
  "Partnership",
  "Sponsorship or donations",
  "Programme information",
  "Other",
] as const;

export const interestFromQuery: Record<string, (typeof involveInterests)[number]> = {
  volunteer: "Volunteering",
  mentor: "Mentorship",
  partner: "Partnership",
  support: "Sponsorship or donations",
};
