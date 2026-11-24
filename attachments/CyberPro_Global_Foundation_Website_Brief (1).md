# CyberPro Global Foundation --- Website Content & AI Build Brief

> **Purpose:** This document is the single source of truth for an AI
> website-building agent. Use it to plan, design, write, and implement
> the CyberPro Global Foundation website. Preserve the organisation's
> identity, the confirmed impact figures, the supplied visual direction,
> and the design constraints in this brief.

------------------------------------------------------------------------

## 1. Project overview

**Organisation:** CyberPro Global Foundation\
**Website type:** Non-profit / social-impact foundation website\
**Primary audience:** Communities, young people, women and girls,
volunteers, mentors, donors, sponsors, institutional partners,
educators, and organisations.\
**Geographic emphasis:** Africa, with Kenya as a relevant operating
context where confirmed. Do not invent country offices or claim
operations in countries that have not been confirmed.\
**Core positioning:** A foundation advancing digital inclusion,
cybersecurity awareness, digital skills, and safer participation in the
digital world.

### Recommended brand statement

**Empowering communities. Building a safer digital future.**

CyberPro Global Foundation works to make digital opportunities more
accessible and digital participation safer. Through education,
awareness, empowerment, advocacy, and partnerships, the Foundation seeks
to help individuals and communities participate confidently in an
increasingly connected world.

### Brand themes

-   Digital inclusion and access
-   Digital literacy and skills development
-   Cybersecurity awareness and online safety
-   Women and girls in technology
-   Youth empowerment
-   Community resilience
-   Responsible and inclusive technology

Do not present the Foundation as a commercial cybersecurity consultancy
or a generic technology company. Its primary identity is a community and
social-impact foundation.

------------------------------------------------------------------------

## 2. Supplied files and visual references

The AI agent must use the supplied assets as the source of truth for
visual direction.

### Brand logo

Use the supplied CyberPro Global Foundation logo as the primary brand
asset.

-   Original uploaded asset: `Asset 3.webp`
-   Recommended project copy:
    `public/assets/images/cyberpro-global-foundation-logo.webp`
-   Markdown preview:

![CyberPro Global Foundation
logo](./public/assets/images/cyberpro-global-foundation-logo.webp)

If the project uses a different asset directory, update the path
consistently. Do not redraw, reinterpret, distort, crop, recolour, or
replace the logo. Preserve its aspect ratio. Create separate logo
variants only if the organisation supplies approved files.

### Homepage layout reference

The supplied `Home Page.pdf` is a full-page visual reference. It shows a
long-form homepage with:

1.  A navigation header over a large photographic hero.
2.  A prominent headline and primary call to action.
3.  An introductory/about section with supporting image.
4.  A focus-areas or services card section.
5.  A mission/impact-style photographic section.
6.  Community or programme highlights.
7.  Feature or benefit cards.
8.  Stories, testimonials, or editorial cards.
9.  A support/donation section.
10. An FAQ section.
11. A newsletter and multi-column footer.

**Use the information architecture and varied section rhythm as
inspiration. Do not copy the reference website's green palette,
branding, wording, or environmental subject matter.** Reinterpret the
layout for CyberPro Global Foundation using the logo palette and the
content in this brief.

Reference file: `Home Page.pdf` (provided in the conversation; one-page
full-page screenshot).

### Contact page layout reference

The supplied `contact us page.pdf` shows:

1.  A photographic page banner with a clear page title.
2.  A two-column contact area with an image on one side and a form on
    the other.
3.  A location/map section.
4.  A newsletter area and detailed footer.

Use this structure as a reference for the CyberPro Global Foundation
contact page. Replace the reference's green visual language and
renewable-energy imagery with the Foundation's brand palette and
relevant community/technology photography.

Reference file: `contact us page.pdf` (provided in the conversation;
one-page full-page screenshot).

### Image sourcing links

Use these links to find suitable, properly licensed images. Prefer
original Foundation photography wherever available. Check each image's
licence and attribution requirements before use. Do not hotlink random
images without permission; download approved assets into the project and
use local paths.

**Unsplash search collections** - [African youth learning digital
skills](https://unsplash.com/s/photos/african-youth-computer-training) -
[Women in technology
Africa](https://unsplash.com/s/photos/african-women-technology) -
[Students using
computers](https://unsplash.com/s/photos/students-computer-learning) -
[Community education
workshop](https://unsplash.com/s/photos/community-education-workshop) -
[Technology training
classroom](https://unsplash.com/s/photos/computer-training-classroom) -
[People collaborating with
laptops](https://unsplash.com/s/photos/people-collaborating-laptop) -
[African community and
youth](https://unsplash.com/s/photos/african-community-youth) -
[Cybersecurity and technology concept
photography](https://unsplash.com/s/photos/cybersecurity-technology)

**Pexels search collections** - [African youth
technology](https://www.pexels.com/search/african%20youth%20technology/) -
[Women technology
training](https://www.pexels.com/search/women%20technology%20training/) -
[Computer
classroom](https://www.pexels.com/search/computer%20classroom/) -
[Community
workshop](https://www.pexels.com/search/community%20workshop/) -
[Digital education](https://www.pexels.com/search/digital%20education/)

These are search links, not pre-approved individual photographs. The
implementing agent must select images that are authentic, relevant,
diverse, respectful, and properly licensed.

------------------------------------------------------------------------

## 3. Brand identity and design system

### 3.1 Colour palette

Derive the visual system from the supplied logo. Use the following
palette as the implementation starting point, checking the final values
against the original logo file where possible.

  ------------------------------------------------------------------------
  Role             Colour                 Suggested value Usage
  ---------------- ---------------- --------------------- ----------------
  Primary navy     Deep navy blue               `#14294A` Header, footer,
                                                          dark panels,
                                                          headings

  Primary crimson  Foundation red               `#A51F2B` Primary brand
                                                          accent, selected
                                                          highlights

  Deep crimson     Dark burgundy                `#74151F` Hover states and
                                                          deeper red
                                                          surfaces

  White            White                        `#FFFFFF` Main backgrounds
                                                          and contrast

  Soft neutral     Cool off-white               `#F5F6F8` Alternating
                                                          section
                                                          backgrounds

  Body text        Charcoal                     `#252A32` Paragraphs and
                                                          labels

  Muted text       Slate grey                   `#687384` Supporting text
                                                          and metadata

  Borders          Light grey                   `#E2E6EC` Dividers, card
                                                          outlines, form
                                                          borders
  ------------------------------------------------------------------------

**Colour rules** - Navy and white should form the main visual
foundation. - Crimson is an accent, not a colour to flood across every
section. - Use crimson for important buttons, small highlights, active
states, and selected graphic details. - Use navy for strong contrast,
navigation, footer, and selected feature sections. - Maintain accessible
contrast for text and controls. - Avoid introducing unrelated green,
neon, purple, or gradient-heavy palettes. - Do not use gradients as a
substitute for a considered layout.

### 3.2 Typography

**Main font: Manrope**\
Use Manrope for navigation, headings, body text, buttons, labels, forms,
cards, and interface elements.

**Accent font: Newsreader**\
Use Newsreader sparingly for editorial emphasis: selected subheadings,
short pull quotes, occasional highlighted phrases, or a refined serif
accent. Do not use it for long body paragraphs or every heading.

Suggested implementation: - Load Manrope in weights 400, 500, 600, 700
and 800. - Load Newsreader in weights 400 and 500, including italic if
required. - Use a consistent typographic scale and comfortable
line-height. - Avoid excessively tight letter spacing, distorted
typography, and all-caps paragraphs.

### 3.3 Visual style

The website should feel: - Credible and established - Human and
community-centred - Contemporary but not trend-chasing - Professional
and editorial - Purposeful, calm, and accessible - Clearly African in
its context without relying on stereotypes

Use real people and real environments where possible. Photography should
show people learning, teaching, collaborating, mentoring, and using
technology in believable settings.

### 3.4 Layout principles

-   Use a consistent maximum content width and a clear grid.
-   Give sections generous but controlled spacing.
-   Alternate light sections with occasional navy feature sections.
-   Use a mix of full-width photography, split layouts, compact cards,
    and editorial text sections.
-   Keep card radii restrained and consistent.
-   Use subtle borders and restrained shadows only where they improve
    hierarchy.
-   Keep buttons consistent in height, radius, typography, and
    interaction states.
-   Use a clear mobile layout; do not merely shrink the desktop design.
-   Avoid excessive pill-shaped elements, floating blobs, decorative
    circles, and unnecessary icon containers.

------------------------------------------------------------------------

## 4. Design direction: avoid generic AI-generated design

The final result must not look like a generic AI-generated landing page
or a template populated with interchangeable cards.

### Do not use

-   Generic phrases such as "In today's fast-paced digital world",
    "Unlock your potential", "Empowering tomorrow's leaders", "Where
    innovation meets impact", or "Together, we can change the world"
    unless there is a specific, meaningful reason.
-   Repeated three-card sections for every topic.
-   A hero with a random stock photo, oversized gradient text, and
    floating glassmorphism cards.
-   Decorative blobs, glowing orbs, random abstract shapes, or excessive
    gradients.
-   Fake dashboards, invented statistics, fake partner logos, or
    fabricated testimonials.
-   Repetitive AI-style copy that says the same thing in multiple
    sections.
-   Unnecessary animation, scroll-jacking, parallax, or constant motion.
-   Generic technology imagery that has no connection to the
    Foundation's actual work.
-   Overly rounded cards and buttons everywhere.
-   Placeholder text left in the production interface.

### Do instead

-   Give every section a clear purpose and a distinct layout.
-   Write concise, specific copy in a natural institutional voice.
-   Use editorial hierarchy, considered spacing, strong photography, and
    meaningful visual contrast.
-   Use the Foundation's real logo and exact brand palette.
-   Make the impact figures prominent and easy to scan.
-   Use authentic programme names and only publish programme
    descriptions that have been verified.
-   Make calls to action direct and specific.
-   Keep interactions purposeful and restrained.
-   Make the site feel art-directed by a human designer rather than
    assembled from a generic AI template.

------------------------------------------------------------------------

## 5. Confirmed impact figures

These figures were explicitly supplied for the website and should be
displayed exactly as follows.

  ------------------------------------------------------------------------
  Metric                               Display value Supporting label
  --------------------- ---------------------------- ---------------------
  Individuals reached                     **5,000+** Individuals

  Trained                                 **3,800+** Individuals trained

  Women and girls                         **1,230+** Women and girls
                                                     trained/empowered via
                                                     the CYBER-X Programme

  Active programmes                           **5+** Active programmes
  ------------------------------------------------------------------------

### Impact section copy

**Section eyebrow:** OUR IMPACT

**Headline:** Real people. Practical skills. Stronger communities.

**Introductory copy:** Our work is measured by the people reached, the
skills developed, and the opportunities created through our programmes.
We continue to work towards a safer and more inclusive digital future.

**Impact cards:** 1. **5,000+** --- Individuals reached 2. **3,800+**
--- Individuals trained 3. **1,230+** --- Women and girls trained and
empowered through the CYBER-X Programme 4. **5+** --- Active programmes

Do not change these values, calculate new totals from them, or imply
that the metrics are independently audited. Do not add extra impact
figures unless the Foundation supplies and approves them.

------------------------------------------------------------------------

## 6. Website sitemap

Build the following primary pages:

1.  Home
2.  About Us
3.  Programmes
4.  Our Impact
5.  Get Involved
6.  Donate / Support Us
7.  News & Insights
8.  Contact Us

Recommended utility pages: - Privacy Policy - Terms of Use - Cookie
Notice, if cookies or tracking tools require it

The navigation should remain concise. Use a clear primary CTA such as
**Support Our Work** or **Get Involved**.

------------------------------------------------------------------------

# 7. Page-by-page website content

## 7.1 Home page

### Header / navigation

Logo: supplied CyberPro Global Foundation logo.

Navigation: - Home - About Us - Programmes - Our Impact - Get Involved -
News & Insights - Contact

Primary navigation CTA: **Support Our Work**

On mobile, use a simple accessible menu with a visible close control and
clear focus states.

### Hero section

**Eyebrow:** CYBERPRO GLOBAL FOUNDATION

**Headline:** Building a safer, more inclusive digital future.

**Body copy:** We work to expand digital opportunities and strengthen
online safety through education, cybersecurity awareness, and
community-led programmes. Our focus is simple: help more people access,
understand, and participate in the digital world with confidence.

**Primary CTA:** Explore Our Programmes\
**Secondary CTA:** Support Our Work

**Hero image direction:** Use an authentic, high-quality photograph of
African young people or a mixed-age community learning or working with
technology. Avoid cliché hooded-hacker imagery, random circuit-board
backgrounds, and staged corporate boardroom photography.

Image search: - [African youth digital learning ---
Unsplash](https://unsplash.com/s/photos/african-youth-computer-training) -
[Digital education workshop ---
Pexels](https://www.pexels.com/search/digital%20education/)

### Introductory section

**Eyebrow:** WHO WE ARE

**Headline:** Technology should create opportunity, not leave people
behind.

**Copy:** Digital access alone is not enough. People also need the
skills to use technology, the knowledge to recognise online risks, and
the confidence to take part in a changing digital society.

CyberPro Global Foundation works with communities and partners to
address these needs through digital education, cybersecurity awareness,
empowerment initiatives, and practical programmes.

**CTA:** About the Foundation

Suggested layout: text and image in a balanced two-column composition.
Use a real programme or community image rather than an abstract stock
illustration.

### Focus areas section

**Eyebrow:** WHAT WE FOCUS ON

**Headline:** Our work responds to real digital challenges.

**Intro:** We concentrate on practical areas where education, access,
and awareness can make a meaningful difference.

**Focus area 1 --- Digital education and literacy**\
Helping individuals build the knowledge and confidence to use digital
tools, services, and information effectively.

**Focus area 2 --- Cybersecurity awareness**\
Promoting safer online behaviour and helping people recognise common
digital risks, scams, and threats.

**Focus area 3 --- Women and girls in technology**\
Supporting pathways for women and girls to gain skills, confidence,
mentorship, and opportunities in technology.

**Focus area 4 --- Youth empowerment**\
Creating opportunities for young people to develop relevant digital
capabilities and explore future pathways.

**Focus area 5 --- Digital inclusion**\
Working to reduce barriers that prevent underserved communities from
accessing and benefiting from digital opportunities.

**Focus area 6 --- Responsible technology and advocacy**\
Encouraging informed, responsible, and inclusive approaches to
technology and digital participation.

### Programmes preview

**Eyebrow:** OUR PROGRAMMES

**Headline:** Practical programmes. Meaningful opportunities.

**Copy:** Our programmes turn our mission into action. Through learning,
awareness, and community engagement, we work to make digital
participation safer and more accessible.

Show programme cards using only confirmed programme names and approved
descriptions. The CYBER-X Programme must be represented accurately as
the programme through which the stated 1,230+ women and girls have been
trained/empowered.

**CTA:** View All Programmes

Do not invent programme names, dates, eligibility requirements,
application deadlines, or programme outcomes. If the organisation has
more than five active programmes, obtain the approved list from the
Foundation before publishing the full programme directory.

### Impact section

Use the exact figures in Section 5.

**Eyebrow:** OUR IMPACT

**Headline:** Progress you can see. People at the centre.

**Copy:** Behind every number is a person gaining knowledge, building
confidence, or accessing a new opportunity. These figures reflect the
reach of our work and the communities we seek to serve.

Display: - **5,000+** Individuals reached - **3,800+** Individuals
trained - **1,230+** Women and girls trained/empowered via the CYBER-X
Programme - **5+** Active programmes

Suggested visual treatment: a clean horizontal statistics band or a
structured four-column grid on desktop, stacked or two-column on mobile.
Do not turn the metrics into fake analytics charts.

### Who we serve section

**Headline:** Working with people and communities.

**Copy:** Our work is shaped around the needs of people who face
barriers to digital access, skills, and safety.

Audience groups: - Children and young people - Women and girls -
Underserved communities - Educators and learning institutions -
Community organisations - Small businesses and local organisations

Use authentic photographs and short explanatory text. Do not imply that
every group is currently served by every programme.

### Partnership section

**Headline:** Change is stronger when we work together.

**Copy:** We welcome collaboration with organisations, institutions,
educators, technology professionals, and community leaders who share our
commitment to digital inclusion and safer online participation.

**CTA:** Discuss a Partnership

Do not add partner logos unless the Foundation provides approved logo
files and permission to display them.

### Stories / news preview

**Headline:** Updates from our work.

**Copy:** Read the latest programme updates, community stories,
announcements, and perspectives on digital inclusion and online safety.

Display actual published articles only. If no articles exist at launch,
use a restrained "News and updates coming soon" state rather than
fabricating stories.

**CTA:** View News & Insights

### Get involved CTA

**Headline:** There is a place for you in this work.

**Copy:** Whether you can contribute expertise, time, resources, or
partnership, your involvement can help extend opportunities to more
people.

Buttons: - Volunteer With Us - Partner With Us - Support Our Work

### FAQ preview

Use only questions the Foundation can answer accurately. Suggested
questions for approval: 1. What is CyberPro Global Foundation? 2. What
communities does the Foundation work with? 3. How can I participate in a
programme? 4. How can I volunteer or become a mentor? 5. How can my
organisation partner with the Foundation? 6. How can I support the
Foundation's work?

Answers must be confirmed by the Foundation before publication.

### Newsletter section

**Headline:** Keep up with our work.

**Copy:** Receive occasional updates about our programmes,
opportunities, events, and community initiatives.

Field: Email address\
Button: Subscribe

Include consent wording and a privacy link. Do not pre-tick consent
boxes.

### Footer

Include: - Approved Foundation logo - Short mission statement - Main
navigation links - Programme links - Get involved links - Official
contact details (to be supplied) - Approved social media links - Privacy
Policy - Terms of Use - Copyright notice

Suggested footer statement:\
**CyberPro Global Foundation works to expand digital opportunity and
promote safer participation in the digital world.**

Do not invent a physical address, telephone number, email address,
registration number, or social media account.

------------------------------------------------------------------------

## 7.2 About Us page

### Page hero

**Title:** About CyberPro Global Foundation

**Intro:** We are committed to a digital future in which more people can
access opportunities, build relevant skills, and participate safely.

### Our story

**Headline:** Why the Foundation's work matters.

**Copy:** Digital technology is changing how people learn, work,
communicate, and access services. Yet the benefits are not shared
equally. Access gaps, limited digital skills, and online risks can
prevent individuals and communities from participating fully.

CyberPro Global Foundation exists to help address these challenges.
Through education, awareness, empowerment, and collaboration, we work to
strengthen people's ability to navigate the digital world and benefit
from the opportunities it offers.

The Foundation's work is centred on people: their access to knowledge,
their safety online, and their ability to take part in an increasingly
digital society.

Do not add a founding date, founder biography, registration history, or
origin story unless the Foundation provides verified details.

### Mission

To advance digital inclusion and safer digital participation through
education, cybersecurity awareness, empowerment, and community-focused
initiatives.

### Vision

A society in which individuals and communities can access digital
opportunities and participate in the digital world safely, confidently,
and meaningfully.

These are proposed editorial statements. The Foundation should approve
the final legal/official mission and vision wording before publication.

### Values

**Inclusion** --- We believe digital opportunity should be accessible to
people from different backgrounds and circumstances.

**Empowerment** --- We support people with knowledge, skills, and
opportunities that strengthen their independence and confidence.

**Integrity** --- We aim to act responsibly, transparently, and
accountably.

**Collaboration** --- We value partnerships and community participation
as essential to sustainable progress.

**Safety and responsibility** --- We encourage informed and responsible
participation in digital spaces.

**Learning and innovation** --- We support continuous learning and
practical responses to changing digital needs.

### Our approach

1.  **Educate:** Make digital knowledge and skills more accessible.
2.  **Raise awareness:** Help people understand online risks and safer
    practices.
3.  **Empower:** Support people to build confidence and pursue
    opportunities.
4.  **Collaborate:** Work with institutions, communities, and partners.
5.  **Learn and improve:** Use programme feedback and evidence to
    strengthen our work.

### Relationship to CyberPro Global

CyberPro Global Foundation is part of the wider CyberPro Global
ecosystem. The Foundation's website should clearly distinguish the
Foundation's social-impact work from the wider organisation's
commercial, training, or professional activities.

Use a concise relationship statement approved by the organisation. Do
not imply legal ownership, subsidiary status, or governance arrangements
that have not been confirmed.

------------------------------------------------------------------------

## 7.3 Programmes page

### Page hero

**Title:** Our Programmes

**Intro:** Our programmes focus on practical digital skills, safer
online participation, and opportunities for communities that are often
underrepresented in the digital space.

### Programme directory

Create a flexible programme listing that can be updated by the website
administrator. Each programme entry should include: - Official programme
name - Short approved description - Programme focus - Intended
participants - Status (active, completed, upcoming) only where
confirmed - Approved image - Link to programme detail page, if available

### CYBER-X Programme

**Name:** CYBER-X Programme

**Impact statement:** More than **1,230 women and girls** have been
trained/empowered via the CYBER-X Programme.

Use the programme's official description, objectives, delivery model,
eligibility, locations, dates, and application details only after they
have been supplied and approved by the Foundation.

Do not invent whether CYBER-X is a fellowship, bootcamp, scholarship,
course, campaign, or multi-year initiative.

### Other programmes

The Foundation has confirmed **5+ active programmes** as an impact
figure. The complete programme list and official descriptions have not
been supplied in this brief. The AI agent must not fabricate the
remaining programme names.

Until the approved programme list is supplied, build the programme
directory as a CMS-driven section with clearly labelled draft content in
the admin environment, not fabricated public-facing entries.

### Programme detail page template

For every approved programme, use this structure: 1. Programme name and
short summary 2. Programme overview 3. Why the programme exists 4.
Objectives 5. Who it is for 6. What participants can expect 7. Delivery
format and locations, if confirmed 8. Programme outcomes and impact, if
verified 9. Photos and participant stories with consent 10.
Participation/application information 11. Frequently asked questions 12.
Related programmes 13. Contact or participation CTA

------------------------------------------------------------------------

## 7.4 Our Impact page

### Page hero

**Title:** Our Impact

**Intro:** We look at impact through the people reached, the skills
developed, and the opportunities supported by our programmes.

### Impact figures

Display the four confirmed figures: - **5,000+** Individuals reached -
**3,800+** Individuals trained - **1,230+** Women and girls
trained/empowered via the CYBER-X Programme - **5+** Active programmes

### Impact narrative

**Headline:** Numbers matter. The people behind them matter more.

**Copy:** Every person reached represents an opportunity to share
knowledge, strengthen confidence, and improve access to the digital
world. We aim to make our work practical, relevant, and responsive to
the communities we serve.

### Stories and reports

Create CMS sections for: - Beneficiary stories (published only with
informed consent) - Programme highlights - Photo essays - Annual
reports - Impact reports - Partner-supported initiatives

Do not create fictional beneficiaries, quotes, testimonials, case
studies, or report downloads.

------------------------------------------------------------------------

## 7.5 Get Involved page

### Page hero

**Title:** Get Involved

**Intro:** Help make digital opportunity and safer online participation
more accessible. Contribute your skills, time, experience, or resources.

### Volunteer

**Headline:** Give your time and skills.

**Copy:** Volunteers can support the Foundation's work through programme
activities, community engagement, communications, research,
administration, and digital education, depending on current needs.

CTA: Express Interest

### Mentor

**Headline:** Share what you know.

**Copy:** Mentors can help participants build confidence, explore
learning pathways, and understand opportunities in technology and
related fields.

CTA: Become a Mentor

### Partner

**Headline:** Build impact through collaboration.

**Copy:** We welcome conversations with institutions, companies,
schools, community organisations, and development partners interested in
supporting digital inclusion and cybersecurity awareness.

CTA: Explore a Partnership

### Support / sponsor

**Headline:** Help extend the reach of our programmes.

**Copy:** Financial and in-kind support can help strengthen programme
delivery, learning opportunities, community engagement, and access to
resources.

CTA: Support Our Work

### Application/enquiry form fields

-   Full name
-   Email address
-   Phone number (optional unless needed)
-   Organisation (optional)
-   Area of interest
-   Relevant experience or proposed contribution
-   Message
-   Consent to be contacted / privacy notice

Do not request sensitive personal data that is not necessary for the
enquiry.

------------------------------------------------------------------------

## 7.6 Donate / Support Us page

### Page hero

**Title:** Support Our Work

**Headline:** Help more people participate safely in the digital world.

**Copy:** Your support can help extend digital education, cybersecurity
awareness, and community empowerment initiatives. We welcome individual
contributions, institutional support, programme sponsorship, and in-kind
contributions.

### Ways to support

-   Make an individual contribution
-   Sponsor a programme
-   Provide equipment or learning resources
-   Support community outreach
-   Fund training opportunities
-   Explore an institutional partnership

### Donation implementation requirements

Do not invent payment providers, account details, paybill numbers, bank
details, currencies, donation tiers, tax deductibility, or claims about
how a specific amount will be spent.

The Foundation must supply: - Approved payment method(s) - Supported
currencies - Legal donation recipient details - Donation terms and
refund policy - Whether recurring donations are supported - Approved
donation categories/campaigns - Financial accountability wording

Until those details are available, use a **Contact Us About Supporting
the Foundation** CTA rather than a non-functional payment form.

------------------------------------------------------------------------

## 7.7 News & Insights page

### Page hero

**Title:** News & Insights

**Intro:** Updates, perspectives, and stories from our work in digital
inclusion, cybersecurity awareness, and community empowerment.

### Categories

-   Foundation News
-   Programme Updates
-   Digital Skills
-   Cybersecurity Awareness
-   Women and Girls in Technology
-   Youth Empowerment
-   Community Stories
-   Events and Partnerships

### Article template

Each article should support: - Title - Short summary - Main image -
Author or publishing team, if supplied - Publication date - Category -
Article body - Image captions and credits - Related articles - Social
sharing

Only publish real, reviewed content. Do not generate fake announcements
or attribute articles to people who have not authored or approved them.

------------------------------------------------------------------------

## 7.8 Contact Us page

Follow the supplied `contact us page.pdf` layout reference: a
photographic page banner, a two-column contact section with image and
form, a location/map area where appropriate, and the common footer.

### Page banner

**Title:** Contact Us

**Intro:** Have a question, programme enquiry, or partnership idea? Get
in touch with the Foundation.

### Contact section

**Headline:** We'd be glad to hear from you.

**Copy:** Contact us about our programmes, volunteering, partnerships,
sponsorship, or general enquiries. Share a few details and the
appropriate team member can follow up.

### Contact form

Fields: - First name - Last name - Email address - Phone number
(optional) - Organisation (optional) - Enquiry type - Message

Enquiry type options: - General enquiry - Programme information -
Volunteering or mentorship - Partnership - Sponsorship or donations -
Media enquiry - Other

Button: **Send Message**

Include: - Clear required-field indicators - Inline validation -
Accessible error messages - Success confirmation - Spam protection -
Privacy notice and consent where applicable

### Contact details

Use only official details supplied by the Foundation: - Email:
**\[OFFICIAL EMAIL TO BE PROVIDED\]** - Telephone: **\[OFFICIAL PHONE TO
BE PROVIDED\]** - Address: **\[OFFICIAL ADDRESS TO BE PROVIDED\]** -
Office hours: **\[TO BE CONFIRMED\]**

Do not publish these bracketed placeholders. Hide any detail that has
not been confirmed.

### Map

Only show a map when the Foundation confirms its public office location
and wants it displayed. Do not use a guessed address or map pin.

------------------------------------------------------------------------

## 7.9 Privacy Policy and legal pages

Create a Privacy Policy page before collecting personal information
through forms or newsletters. The final policy must be reviewed and
approved by the Foundation and should reflect the actual jurisdiction,
data controller, data processors, retention periods, and services used.

Do not generate legal claims or compliance certifications without
review.

------------------------------------------------------------------------

# 8. Image and media direction

## Photography principles

Use documentary-style, authentic photography: - People should look
engaged in a real activity, not posed as generic corporate models. -
Show a range of ages and backgrounds where relevant. - Prefer African
contexts that are believable and respectful. - Show real devices,
classrooms, community spaces, mentoring, and learning. - Avoid
exaggerated cybercrime imagery, hooded figures, green code rain, glowing
brains, robots, and generic AI-generated circuit backgrounds. - Do not
use photographs that imply a specific programme took place unless the
image is from that programme or clearly labelled illustrative.

## Recommended image placement

  ---------------------------------------------------------------------------------------------------------------------------
  Page / section          Image subject           Search link
  ----------------------- ----------------------- ---------------------------------------------------------------------------
  Home hero               African youth or        [Unsplash](https://unsplash.com/s/photos/african-youth-computer-training)
                          community digital       
                          learning                

  About                   Community training or   [Unsplash](https://unsplash.com/s/photos/community-education-workshop)
                          collaborative learning  

  Digital skills          Learners using          [Pexels](https://www.pexels.com/search/computer%20classroom/)
                          computers               

  CYBER-X                 Women learning or       [Unsplash](https://unsplash.com/s/photos/african-women-technology)
                          working in technology   

  Cybersecurity awareness Facilitator teaching    [Pexels](https://www.pexels.com/search/digital%20education/)
                          online safety or        
                          digital skills          

  Youth empowerment       Young people            [Unsplash](https://unsplash.com/s/photos/people-collaborating-laptop)
                          collaborating with      
                          laptops                 

  Get involved            Volunteers or mentors   [Pexels](https://www.pexels.com/search/community%20workshop/)
                          in a workshop           

  Contact                 Professional but        [Unsplash](https://unsplash.com/s/photos/community-organization)
                          welcoming               
                          community/office image  
  ---------------------------------------------------------------------------------------------------------------------------

## Asset handling

-   Store approved assets in a clear directory,
    e.g. `public/assets/images/`.
-   Use descriptive, lowercase, hyphenated filenames.
-   Compress images and use WebP or AVIF where appropriate.
-   Provide meaningful alt text for informative images.
-   Use empty alt text for purely decorative images.
-   Keep image crops consistent within each component.
-   Do not use the Foundation logo as a substitute for photography.

------------------------------------------------------------------------

# 9. Functional and technical requirements

The AI implementation agent should build a complete, responsive,
maintainable website.

### Core requirements

-   Responsive desktop, tablet, and mobile layouts.
-   Accessible navigation and keyboard interactions.
-   Semantic HTML and appropriate heading hierarchy.
-   Fast page loading and optimised images.
-   Search-engine-friendly page titles and descriptions.
-   Open Graph metadata for social sharing.
-   Functional contact form with secure processing.
-   Newsletter form only if a real mailing-list destination is
    configured.
-   CMS or admin-managed content for programmes, articles, impact
    stories, and reports if the chosen stack supports it.
-   Clear loading, empty, error, and success states.
-   Form validation and spam protection.
-   Privacy-conscious analytics and tracking.
-   Secure handling of submitted personal information.
-   No exposed API keys or secrets in frontend code.

### Content management

The Foundation should be able to update: - Programme names and
descriptions - Programme status - News and articles - Impact stories -
Impact statistics - Reports and downloadable documents - Gallery
images - Contact details - Social media links - Homepage calls to action

### SEO baseline

Suggested homepage title:

`CyberPro Global Foundation | Digital Inclusion & Cybersecurity Awareness`

Suggested homepage description:

`CyberPro Global Foundation advances digital inclusion, cybersecurity awareness, and community empowerment through education, programmes, and partnerships.`

Use unique metadata for every page. Do not keyword-stuff or make
unsupported claims about rankings, certifications, or geographic reach.

### Accessibility

Target WCAG 2.2 AA practices where feasible: - Sufficient text and
interface contrast - Keyboard-operable menus and forms - Visible focus
states - Form labels and accessible error messages - Proper heading
structure - Meaningful alt text - Reduced-motion support - No
information conveyed by colour alone

------------------------------------------------------------------------

# 10. Suggested homepage section order

Use this sequence as the starting point, then refine spacing and
composition using the supplied homepage PDF:

1.  Header and navigation
2.  Hero with headline, concise supporting copy, and two CTAs
3.  Foundation introduction / who we are
4.  Focus areas
5.  Programmes preview
6.  Impact statistics --- 5,000+, 3,800+, 1,230+, 5+
7.  Who we serve
8.  Partnership feature
9.  News / stories preview
10. Get involved CTA
11. Optional approved FAQ
12. Newsletter signup
13. Footer

Do not force every section into the same card layout. Vary the
composition while maintaining a consistent grid and visual language.

------------------------------------------------------------------------

# 11. Content governance and facts that must be confirmed

The following information is not established by this brief and must be
requested from the Foundation before it is published:

-   Official registered/legal name and registration details
-   Official mission and vision wording
-   Founding date and organisational history
-   Headquarters and countries of operation
-   Board members, leadership, and biographies
-   Complete list of the 5+ active programmes
-   Official CYBER-X Programme description and delivery details
-   Programme eligibility, application links, and schedules
-   Approved partner and sponsor names/logos
-   Official email, phone number, address, and office hours
-   Social media URLs
-   Donation recipient and approved payment methods
-   Annual reports and audited or approved financial information
-   Approved beneficiary stories, testimonials, and photography
-   Data protection contact and privacy policy details

### Non-negotiable factual rules

1.  Keep the four impact figures exactly as supplied.
2.  Do not invent programme names to fill the programme directory.
3.  Do not invent partners, donors, testimonials, staff, board members,
    or beneficiaries.
4.  Do not invent addresses, phone numbers, emails, payment details, or
    registration information.
5.  Do not claim that the Foundation is certified, accredited,
    registered, or government-affiliated unless verified.
6.  Clearly distinguish proposed editorial copy from official statements
    pending approval.
7.  Use consented photographs and stories, especially where children or
    programme beneficiaries appear.

------------------------------------------------------------------------

# 12. Final instructions to the AI website-building agent

Build the CyberPro Global Foundation website using this brief as the
content and design specification.

**Priority order:** 1. Preserve the supplied logo and derive the palette
from it. 2. Use Manrope as the main font and Newsreader as a restrained
accent font. 3. Follow the layout principles shown in the supplied
homepage and contact-page PDFs without copying their original branding.
4. Use the confirmed impact figures exactly. 5. Write natural, specific,
concise copy. Remove generic AI-sounding language. 6. Do not invent
organisational facts, programme names, partners, testimonials, or
contact details. 7. Create a coherent visual system across every page.
8. Make the site responsive, accessible, fast, and easy to maintain. 9.
Use real, relevant, properly licensed photography. 10. Ensure every
visible button and form has a defined, working behaviour. Do not leave
fake links or non-functional controls.

**Design acceptance test:** The result should look like a carefully
art-directed foundation website, not a generic AI template. It should be
recognisably CyberPro Global Foundation through its logo,
navy-and-crimson palette, typography, photography, content hierarchy,
and restrained design language.

**Content acceptance test:** A visitor should quickly understand what
the Foundation does, whom it serves, what programmes it runs, what
impact it has achieved, and how to participate or support its work.
