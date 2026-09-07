export const about = {
  intro: "Product Designer focused on making complex things feel simple.",
  body: [
    "I'm a Product Designer with 4+ years of experience designing digital products across web, mobile, SaaS, enterprise platforms and internal tools.",
    "I work across the full product design process — from understanding the problem and structuring the experience to designing interfaces, building scalable design systems, prototyping and preparing work for development.",
    "I've designed products from the ground up that are now used by 1,000+ users. Working across complex products has taught me to think beyond individual screens and design experiences as systems that can scale.",
  ],
} as const;

export const whatIDo = [
  {
    title: "Product Design",
    description: "End-to-end product design from concept to production.",
    accent: "accent",
  },
  {
    title: "UX/UI",
    description: "User flows, information architecture, interaction design and visual design.",
    accent: "accent2",
  },
  {
    title: "Design Systems",
    description: "Reusable components and scalable foundations that keep products consistent as they grow.",
    accent: "accent",
  },
  {
    title: "Web & Mobile",
    description: "Responsive websites and mobile applications designed around real user needs.",
    accent: "accent2",
  },
  {
    title: "Enterprise & Back Office",
    description: "Complex operational tools, dashboards and data-heavy interfaces designed for people who use them every day.",
    accent: "accent",
  },
] as const;

export const howIThink = [
  {
    title: "Understanding the problem",
    description: "Starting from the problem, users and product context — before opening a design tool.",
    accent: "accent",
  },
  {
    title: "Simplifying complexity",
    description: "Taking dense, technical or data-heavy products and making them feel straightforward to use.",
    accent: "accent2",
  },
  {
    title: "Designing systems",
    description: "Thinking beyond individual screens, toward components and patterns that hold up at scale.",
    accent: "accent",
  },
  {
    title: "Collaborating with engineering",
    description: "Working closely with developers so designs translate cleanly into a production-ready product.",
    accent: "accent2",
  },
] as const;

export interface ExperienceEntry {
  company: string;
  title: string;
  period: string;
  summary: string;
}

// Sourced from CV_Yllka.pdf.
export const experience: ExperienceEntry[] = [
  {
    company: "Swifty Global",
    title: "Product Designer",
    period: "April 2022 — Present",
    summary:
      "Lead Product Designer working across sports, healthcare, wallet and internal platforms. I work across the full design process — from UX and information architecture to UI, prototyping, design systems and developer handoff — while also mentoring other designers.",
  },
  {
    company: "Freelance / AXON",
    title: "Product Designer & Graphic Designer",
    period: "October 2021 — Present",
    summary:
      "Working independently with clients across product, web and graphic design, translating business goals into clear digital experiences and visual identities.",
  },
  {
    company: "Nomos System AG",
    title: "UI Designer",
    period: "March 2022 — October 2022",
    summary:
      "7-month freelance engagement designing specific functionality within a Swiss smart home application, covering home automation, security and energy control.",
  },
  {
    company: "Nacew",
    title: "UI/UX Designer",
    period: "February 2022 — April 2022",
    summary:
      "Designed digital interfaces with a focus on clear navigation, accessible interactions, strong calls to action and readable visual hierarchy.",
  },
  {
    company: "Digital Line",
    title: "UI/UX & Graphic Designer",
    period: "May 2021 — September 2021",
    summary: "Worked across digital and graphic design, including web design, logos, brochures and social media content.",
  },
];

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
}

export const education: EducationEntry[] = [
  {
    institution: "UBT — University for Business and Technology",
    degree: "Bachelor of Computer Science and Engineering",
    period: "2019 — 2023",
  },
];
