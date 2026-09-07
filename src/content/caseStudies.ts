import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "swifty-sports",
    name: "Swifty Sports",
    tagline: "Designing a complete sports betting ecosystem from zero to production.",
    description:
      "A multi-platform sports betting product spanning customer web, mobile app and CMS/back-office — designed from the ground up and built on a scalable design system that was later adapted across eight additional brands.",
    role: "Product Designer — independent, end to end",
    focus: "UX · UI · Design Systems · Prototyping",
    timeline: "2022 — Present",
    projectType: ["Product Design", "Web", "Mobile", "CMS / Back Office", "Design Systems"],
    contribution:
      "I was responsible for the product design across the entire ecosystem — web, mobile and CMS/back office — from the initial structure through to final UI, design system and developer handoff. It's now used by 1,000+ users, with the design system later re-skinned across eight additional brands.",
    liveUrl: "https://www.swiftysports.co.uk/en/",
    hero: {
      src: "/images/swifty-sports/hero.jpg",
      alt: "Swifty Sports product ecosystem — website, app and back office",
      frame: "wide",
    },
    cover: {
      src: "/images/swifty-sports/cover.jpg",
      alt: "Swifty Sports overview",
      frame: "plain",
    },
    context: {
      heading: "One product, three very different experiences.",
      body: "Swifty Sports needed a connected ecosystem: customer web for browsing sports and markets, a mobile app for betting on the go, and a CMS/back office for managing markets, users and operations. The challenge was designing these as one coherent system, while keeping each interface appropriate for its users.",
    },
    challenge: {
      heading: "Designing for complexity without making it feel complicated.",
      body: "Sports betting is information-heavy — users need to scan live odds and markets quickly, while operators work with large datasets, filters and permissions where every action needs to be predictable. On top of that, the system had to be built for scale from day one, ready to become the foundation for additional betting brands.",
    },
    statements: [
      {
        text: "Every screen had to hold a lot of live, changing information — and still feel calm enough to make a fast decision on.",
        after: "challenge",
      },
      {
        text: "A good component doesn't just work once. It has to work for a brand nobody's designed yet.",
        after: "design",
      },
    ],
    roleDetails: [
      "UX/UI Design",
      "Information Architecture",
      "User Flows",
      "Web Design",
      "Mobile App Design",
      "CMS / Back Office",
      "Responsive Design",
      "Design System",
      "Prototyping",
      "Developer Handoff",
    ],
    roleGroups: [
      { label: "Product Design", items: ["UX/UI Design", "Information Architecture", "User Flows"] },
      { label: "Platforms", items: ["Web", "Mobile", "CMS / Back Office"] },
      { label: "Systems", items: ["Design System", "Responsive Design", "Prototyping"] },
      { label: "Delivery", items: ["Developer Handoff"] },
    ],
    process: [
      {
        title: "Information architecture",
        body: "I structured the product around the different needs of customers and internal operators — sports, competitions, events, markets and the bet slip on one side; users, transactions, content and operational controls on the other, both built from the same component system.",
      },
      {
        title: "User flows",
        body: "I mapped the core journeys before detailed UI design: sport → competition → event → market → selection → bet slip on the customer side, and information review and operational tasks for the CMS/back office.",
      },
      {
        title: "Component system",
        body: "I built the core component system from the ground up — buttons, inputs, cards, tables, navigation, tabs, filters, statuses and forms — designed to be reusable and themeable across the original product and future brand rollouts.",
      },
    ],
    design: [
      {
        src: "/images/swifty-sports/website-desktop.jpg",
        alt: "Swifty Sports website — sports and market view, desktop",
        frame: "desktop",
        caption: "Sports, events & markets",
      },
      {
        src: "/images/swifty-sports/backoffice-dashboard.jpg",
        alt: "Swifty Sports back office — live trading and risk dashboard",
        frame: "desktop",
        caption: "Back office — live trading & risk dashboard",
      },
      {
        src: "/images/swifty-sports/backoffice-player.jpg",
        alt: "Swifty Sports back office — compliance and player activity log",
        frame: "desktop",
        caption: "Back office — compliance & player activity",
      },
    ],
    webSection: {
      heading: "Designing the customer betting experience.",
      intro:
        "The web platform needed to make a large amount of constantly changing information easy to scan. I designed clear hierarchy between sports, events, markets, odds and the bet slip — prioritising quick navigation and consistent interaction patterns.",
      visuals: [
        {
          src: "/images/swifty-sports/home-desktop.jpg",
          alt: "Swifty Sports website — home page, desktop",
          frame: "desktop",
          caption: "Home — sports, events & markets",
        },
        {
          src: "/images/swifty-sports/website-desktop.jpg",
          alt: "Swifty Sports website — sports and market view, desktop",
          frame: "desktop",
          caption: "Event & market detail with bet slip",
        },
        {
          src: "/images/swifty-sports/horse-racing-desktop.jpg",
          alt: "Swifty Sports website — horse racing event detail, desktop",
          frame: "desktop",
          caption: "Horse racing — event detail",
        },
        {
          src: "/images/swifty-sports/account-withdraw.jpg",
          alt: "Swifty Sports website — account settings and withdraw",
          frame: "desktop",
          caption: "Account — settings & withdraw",
        },
      ],
    },
    backOfficeSection: {
      heading: "The system behind the experience.",
      intro:
        "The CMS/back office was designed for internal users working with large amounts of operational information — tables, filters, forms, user management and configuration — prioritising density, efficiency and control without hiding complexity.",
      visuals: [
        {
          src: "/images/swifty-sports/backoffice-dashboard.jpg",
          alt: "Swifty Sports back office — live trading and risk dashboard",
          frame: "desktop",
          caption: "Live trading & risk dashboard",
        },
        {
          src: "/images/swifty-sports/backoffice-player.jpg",
          alt: "Swifty Sports back office — compliance and player activity log",
          frame: "desktop",
          caption: "Compliance & player activity",
        },
      ],
    },
    mobileApp: {
      heading: "Bringing the same system to mobile.",
      intro:
        "The mobile app uses the same underlying logic and design system as the web experience, adapted for touch. I designed the experience across home, sports navigation, match markets, live/InPlay, casino and bet-related interactions.",
      visuals: [
        { src: "/images/swifty-sports/mobile-hub.jpg", alt: "Swifty Sports mobile app — hub home screen", frame: "mobile", caption: "Hub" },
        { src: "/images/swifty-sports/home-mobile.jpg", alt: "Swifty Sports mobile app — home screen", frame: "mobile", caption: "Home" },
        { src: "/images/swifty-sports/app-mobile.jpg", alt: "Swifty Sports mobile app — match markets", frame: "mobile", caption: "Match markets" },
        { src: "/images/swifty-sports/football-mobile.jpg", alt: "Swifty Sports mobile app — football, live events", frame: "mobile", caption: "Football — live events" },
        { src: "/images/swifty-sports/mobile-nav.jpg", alt: "Swifty Sports mobile app — sports navigation", frame: "mobile", caption: "Sports navigation" },
        { src: "/images/swifty-sports/mobile-inplay.jpg", alt: "Swifty Sports mobile app — InPlay live events", frame: "mobile", caption: "InPlay — live events" },
        { src: "/images/swifty-sports/mobile-casino.jpg", alt: "Swifty Sports mobile app — casino", frame: "mobile", caption: "Casino" },
        { src: "/images/swifty-sports/bet-history-mobile.jpg", alt: "Swifty Sports mobile app — bet history", frame: "mobile", caption: "Bet history" },
        { src: "/images/swifty-sports/live-chat-mobile.jpg", alt: "Swifty Sports mobile app — live chat support", frame: "mobile", caption: "Live chat — support" },
      ],
    },
    designSystem: {
      heading: "One system. Multiple products.",
      intro:
        "I created a shared design system — typography, colour, buttons, inputs, cards, tables, navigation, status badges and data components — built to be reusable and themeable rather than tied to a single screen or brand.",
      visuals: [],
    },
    multiBrand: {
      heading: "From one product to eight additional brands.",
      intro:
        "The underlying structure and components stayed consistent while each brand introduced its own colour palette, typography and identity — re-skinned across roughly eight additional betting brands, including TigerBet, BetVickers, MetaBetting and BrillBet.",
      visuals: [
        { src: "/images/swifty-sports/brand-tigerbet.jpg", alt: "TigerBet brand theme", frame: "desktop", caption: "TigerBet" },
        { src: "/images/swifty-sports/brand-betvickers.jpg", alt: "BetVickers brand theme", frame: "desktop", caption: "BetVickers" },
        { src: "/images/swifty-sports/brand-metabetting.jpg", alt: "MetaBetting brand theme", frame: "desktop", caption: "MetaBetting" },
        { src: "/images/swifty-sports/brand-brillbet.jpg", alt: "BrillBet brand theme", frame: "desktop", caption: "BrillBet" },
      ],
    },
    responsive: {
      heading: "One experience, every screen size.",
      intro:
        "I designed the customer-facing experience to hold up from desktop to mobile, keeping the same navigation, market hierarchy and betting interactions at every size.",
      desktop: { src: "/images/swifty-sports/responsive-desktop.jpg", alt: "Swifty Sports website on desktop", frame: "desktop" },
      mobile: { src: "/images/swifty-sports/responsive-mobile.jpg", alt: "Swifty Sports app on mobile", frame: "mobile" },
    },
    outcomeHeading: "From zero to a scalable product ecosystem.",
    outcome:
      "I designed Swifty Sports from the ground up across web, mobile and CMS/back office, owning the product design process end to end. The product went from an initial concept to a production-ready ecosystem now used by 1,000+ users, and the design system became a foundation for eight additional betting brands, allowing new products to be created by reusing the same underlying structure and components.",
    stats: [
      { value: "3", label: "Platforms", description: "Web · Mobile · CMS / Back Office" },
      { value: "1,000+", label: "Users", description: "Using the products I've designed" },
      { value: "8", label: "Additional brands", description: "Built on the same design foundation" },
    ],
  },
  {
    slug: "nomos",
    name: "Nomos",
    tagline: "Designing clear mobile interfaces for smart home automation, security and energy control.",
    description:
      "UI design for specific functionality within Nomos System AG's Swiss smart home application, translating technically complex systems into clear, understandable mobile experiences.",
    role: "UI Designer — freelance, 7-month engagement",
    focus: "UI Design · User Flows · Interaction Design",
    timeline: "Mar — Oct 2022",
    projectType: ["Product Design", "Mobile / App", "Smart Home"],
    contribution:
      "I designed the UI for specific functionality within the Nomos app, working within the existing product and visual language — covering UI design, user flows, information architecture and interaction design across home automation, security and energy-related functionality.",
    liveUrl: "https://nomos-system.com/en/",
    hero: {
      src: "/images/nomos/hero.jpg",
      alt: "Nomos smart home application",
      frame: "wide",
    },
    cover: {
      src: "/images/nomos/cover.jpg",
      alt: "Nomos application overview",
      frame: "plain",
    },
    context: {
      heading: "Complex technology, made understandable.",
      body: "Nomos System AG builds a smart home platform for the Swiss market, bringing together home automation, security and energy management in one app. I joined as a freelance UI Designer for a 7-month engagement, contributing to specific functionality within the existing product.",
    },
    challenge: {
      heading: "Making invisible complexity feel simple to control.",
      body: "Smart home products carry a lot of technical complexity underneath — devices, automation, security states and energy data — but users shouldn't need to understand any of it to control their home. The challenge was turning these systems into flows that felt simple and predictable.",
    },
    roleDetails: ["UI Design", "User Flows", "Information Architecture", "Interaction Design"],
    process: [
      {
        title: "Information architecture",
        body: "I structured the functionality around clear areas such as security, energy and automation, making it easier for users to understand where different controls and information belonged.",
      },
      {
        title: "User flows",
        body: "I mapped the interaction paths for the functionality I worked on, reducing unnecessary steps and keeping actions straightforward.",
      },
      {
        title: "UI design",
        body: "I designed the final interfaces within Nomos's established product and visual language, focusing on hierarchy and clarity rather than unnecessary visual complexity.",
      },
    ],
    design: [
      { src: "/images/nomos/rooms-areas.jpg", alt: "Nomos — rooms and areas visualization", frame: "wide", caption: "Rooms & areas visualization" },
      { src: "/images/nomos/functions-devices.jpg", alt: "Nomos — functions and device control", frame: "wide", caption: "Functions & device control" },
    ],
    designHeading: "Functions, at a glance.",
    designIntro:
      "Designed mobile interfaces for interacting with smart home functions and connected devices, keeping controls and system information easy to understand at a glance.",
    outcomeHeading: "Clearer interfaces for complex smart home functionality",
    outcome:
      "My contribution helped translate complex home automation, security and energy functionality into clear mobile interfaces and predictable user flows, while maintaining consistency with the existing Nomos product language.",
  },
  {
    slug: "nixxe-gateway",
    name: "NIXXE Gateway",
    tagline: "Designing a complex enterprise back-office platform around the way operators actually work.",
    description:
      "An enterprise back-office platform built around dense administrative workflows — tables, filters, permissions and operational tools — designed to make complex day-to-day work clearer and more manageable.",
    role: "Product Designer — UX/UI",
    focus: "UX · UI · Information Architecture · Design Systems",
    projectType: ["Product Design", "Web", "Back Office", "Enterprise"],
    contribution:
      "I designed the UX/UI for NIXXE Gateway — information architecture, user flows, data-heavy interfaces and a reusable component system — turning complex administrative workflows into a structure that could scale.",
    liveUrl: "https://www.nixxe.io/",
    hero: {
      src: "/images/nixxe-gateway/settings-limits.jpg",
      alt: "NIXXE Gateway back-office platform — settings and client limits",
      frame: "wide",
    },
    cover: {
      src: "/images/nixxe-gateway/cover.jpg",
      alt: "NIXXE Gateway overview",
      frame: "plain",
    },
    context: {
      heading: "A tool people live in all day.",
      body: "NIXXE Gateway is an enterprise back-office platform used by internal teams to manage day-to-day administrative operations. Unlike consumer products, it's used continuously by operators processing large amounts of information and repetitive tasks.",
    },
    challenge: {
      heading: "Supporting complexity without overwhelming the operator.",
      body: "The platform needed large data tables, filtering, permissions and multi-step workflows to stay predictable and consistent — and to scale, with new sections addable without reinventing the interface each time.",
    },
    statements: [
      {
        text: "Density isn't the enemy. An unpredictable interface is.",
        after: "challenge",
      },
    ],
    roleDetails: ["Product Design", "UX/UI Design", "Information Architecture", "Design Systems", "Prototyping"],
    process: [
      {
        title: "Information architecture",
        body: "I structured the platform around how administrative teams work, grouping related workflows together and making frequently used tools easy to access, so it could support a growing number of sections.",
      },
      {
        title: "Data & workflows",
        body: "I designed the core patterns for working with large amounts of information — tables, filtering, sorting, bulk actions, forms and system states — around the actual workflow rather than isolated screens.",
      },
      {
        title: "UI system",
        body: "I built a reusable component system covering navigation, tables, filters, form controls and status indicators, creating a consistent language across the platform.",
      },
    ],
    design: [
      { src: "/images/nixxe-gateway/dashboard.jpg", alt: "NIXXE Gateway — dashboard overview", frame: "desktop", caption: "Dashboard overview" },
      { src: "/images/nixxe-gateway/table-filters.jpg", alt: "NIXXE Gateway — data table with filters", frame: "desktop", caption: "Data table & filters" },
      { src: "/images/nixxe-gateway/settings-limits.jpg", alt: "NIXXE Gateway — settings and client limits", frame: "desktop", caption: "Settings — client limits" },
    ],
    designHeading: "An entry point into dense operational data.",
    designIntro:
      "Designed the dashboard as an entry point into the platform, giving operators a structured overview of the information and tools they need to access.",
    designSystem: {
      heading: "Patterns, not one-off screens.",
      intro:
        "Navigation, tables, filters, forms and status indicators were built as reusable patterns — so new sections of the back office could be added without redesigning the underlying interaction each time.",
      visuals: [],
    },
    outcomeHeading: "A scalable foundation for complex administrative workflows",
    outcome:
      "I designed the end-to-end UX/UI foundation of NIXXE Gateway, from information architecture and workflow structure to the interface and reusable component system — a back-office experience built to handle dense information without sacrificing clarity or consistency.",
  },
  {
    slug: "lifecard",
    name: "LifeCard",
    // Not published yet — no real screenshots exist for this project (see
    // CONTENT-GUIDE.md). Flip to true once real files land in public/images/lifecard/.
    published: false,
    tagline: "Designing a healthcare appointment experience from scratch — from the first user flow to the final interface.",
    description:
      "A healthcare appointment-booking mobile app designed around one core task: helping people find the right specialist and book an appointment with as little friction as possible.",
    role: "Product Designer — UX/UI",
    focus: "UX · UI · User Flows · Prototyping",
    projectType: ["Product Design", "Mobile", "Healthcare"],
    contribution:
      "I designed LifeCard from scratch, owning the process from UX structure and user flows through to the final UI — across specialist discovery, profiles, availability, booking, payment and appointment management.",
    hero: {
      src: "/images/lifecard/hero.jpg",
      alt: "LifeCard healthcare appointment-booking mobile app",
      frame: "wide",
    },
    cover: {
      src: "/images/lifecard/cover.jpg",
      alt: "LifeCard app overview",
      frame: "plain",
    },
    context: {
      heading: "One task, done with confidence.",
      body: "LifeCard is a mobile healthcare platform for finding and booking appointments — searching specialists, viewing profiles and availability, choosing in-person or video visits, and managing upcoming and past appointments in one place.",
    },
    challenge: {
      heading: "Making a big decision feel simple.",
      body: "Booking a healthcare appointment involves a lot of information and decisions. The challenge was designing the journey so it felt simple, clear and trustworthy — with availability, pricing and cancellation policy visible before the user ever confirmed a booking.",
    },
    roleDetails: ["Product Design", "UX/UI Design", "User Flows", "Information Architecture", "Interaction Design", "Prototyping"],
    process: [
      {
        title: "User flows",
        body: "I designed the appointment journey end to end — from discovering a specialty and selecting a doctor to choosing availability, appointment type, payment and confirmation — removing unnecessary decisions.",
      },
      {
        title: "Information architecture",
        body: "I structured the app around the main tasks users come to complete: specialty discovery and search prioritised on the home experience, upcoming and past appointments in their own dedicated areas.",
      },
      {
        title: "UX & interaction design",
        body: "I designed the interaction patterns for specialist discovery, doctor profiles, availability and appointment management, each step giving users the information they needed before moving forward.",
      },
      {
        title: "UI design",
        body: "I created the final visual interface with a focus on clarity, legibility and trust — typography, spacing, hierarchy and states designed to make medical information easy to scan.",
      },
    ],
    design: [
      { src: "/images/lifecard/home.jpg", alt: "LifeCard — home screen with specialties and upcoming appointment", frame: "mobile", caption: "Home — search & specialties" },
      { src: "/images/lifecard/doctor-profile.jpg", alt: "LifeCard — specialist profile with timings and tele/video option", frame: "mobile", caption: "Specialist profiles" },
      { src: "/images/lifecard/confirm-pay.jpg", alt: "LifeCard — appointment booking with cancellation policy", frame: "mobile", caption: "Appointment booking" },
      { src: "/images/lifecard/appointments.jpg", alt: "LifeCard — appointment management, upcoming and past", frame: "mobile", caption: "Appointment management" },
    ],
    designHeading: "Four screens, one clear task.",
    designIntro:
      "Each screen was designed around the next decision the user needs to make — from finding a specialist to confirming a booking with confidence.",
    outcomeHeading: "From scratch to a complete healthcare booking experience",
    outcome:
      "I designed LifeCard from the ground up, covering the UX, information architecture, user flows, interaction design and UI across the core appointment-booking experience — a mobile product structured around one clear goal: helping users find the right specialist and book with confidence and minimal friction.",
  },
];

export const publishedCaseStudies = caseStudies.filter((c) => c.published !== false);

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
