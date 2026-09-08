import type { WebGalleryItem } from "./types";
import { imageExists } from "@/lib/media";

/**
 * Curated web design gallery. Each entry needs a desktop and/or a mobile
 * screenshot dropped in at the paths below (a mobile-only product, like
 * Lifecard, omits `desktop` and shows a mobile-mockup card instead) — see
 * CONTENT-GUIDE.md. Add more entries as you send them; keep the list
 * curated rather than exhaustive.
 */
export const webGallery: WebGalleryItem[] = [
  {
    slug: "swifty-global",
    name: "Swifty Global",
    industry: "iGaming",
    description: "Corporate site for the Swifty Global betting and gaming group.",
    url: "https://www.swiftyglobal.com/",
    desktop: { src: "/images/websites/swifty-global-desktop.jpg", alt: "Swifty Global — desktop", frame: "desktop" },
    mobile: { src: "/images/websites/swifty-global-mobile.jpg", alt: "Swifty Global — mobile", frame: "mobile" },
    scope: ["UX/UI", "Responsive Web", "Visual Design"],
    designFocus: [
      "Clear content hierarchy",
      "Responsive layouts",
      "Consistent visual language",
      "Conversion-focused calls to action",
    ],
  },
  {
    slug: "say-studio",
    name: "Say Studio",
    industry: "Architecture & Design",
    description: "Dubai-based architecture and design consultancy across workplace, hospitality and residential.",
    url: "https://www.saystudio.com/",
    desktop: { src: "/images/websites/say-studio-desktop.jpg", alt: "Say Studio — desktop", frame: "desktop" },
    mobile: { src: "/images/websites/say-studio-mobile.jpg", alt: "Say Studio — mobile", frame: "mobile" },
    scope: ["UX/UI", "Responsive Web", "Visual Design"],
    designFocus: [
      "Editorial project layouts",
      "Clear content hierarchy",
      "Responsive project galleries",
      "Consistent visual language",
    ],
  },
  {
    slug: "tentplanner",
    name: "TentPlanner",
    industry: "Events",
    description: "A web-based planning tool that lets marquee and tent-hire clients design their own event layout before requesting a quote.",
    url: "https://www.tentplanner.co.uk/",
    desktop: { src: "/images/websites/tentplanner-desktop.jpg", alt: "TentPlanner — desktop", frame: "desktop" },
    mobile: { src: "/images/websites/tentplanner-mobile.jpg", alt: "TentPlanner — mobile", frame: "mobile" },
    scope: ["Product Design", "UX/UI", "Interaction Design"],
    designFocus: [
      "Guided step-by-step flow",
      "Clear interactive controls",
      "Intuitive navigation",
      "Consistent visual language",
    ],
  },
  {
    slug: "skylab",
    name: "SkyLab",
    industry: "Cloud Infrastructure",
    description: "FusionFlow — a unified cloud service platform for managing multi-tenant infrastructure, billing and delivery from one control plane.",
    url: "https://www.skylabteam.com/fusionflow-overview",
    desktop: { src: "/images/websites/skylab-desktop.jpg", alt: "SkyLab — desktop", frame: "desktop" },
    mobile: { src: "/images/websites/skylab-mobile.jpg", alt: "SkyLab — mobile", frame: "mobile" },
    scope: ["UX/UI", "Responsive Web", "Visual Design"],
    designFocus: [
      "Clear content hierarchy",
      "Technical content made approachable",
      "Responsive layouts",
      "Consistent visual language",
    ],
  },
  {
    slug: "vm-cars",
    name: "VM Cars",
    industry: "Automotive",
    description: "A Swiss dealership specialising in the purchase, sale and consignment of luxury vehicles.",
    url: "https://vmcars.ch/",
    desktop: { src: "/images/websites/vm-cars-desktop.jpg", alt: "VM Cars — desktop", frame: "desktop" },
    mobile: { src: "/images/websites/vm-cars-mobile.jpg", alt: "VM Cars — mobile", frame: "mobile" },
    scope: ["UX/UI", "Responsive Web", "Visual Design"],
    designFocus: [
      "Premium visual direction",
      "Clear content hierarchy",
      "Responsive layouts",
      "Intuitive navigation",
    ],
  },
  {
    slug: "webralo",
    name: "Webralo",
    industry: "IT Consulting",
    description: "A German IT consultancy delivering web design, custom software and digital strategy for SMEs.",
    url: "https://webralo.de/",
    desktop: { src: "/images/websites/webralo-desktop.jpg", alt: "Webralo — desktop", frame: "desktop" },
    mobile: { src: "/images/websites/webralo-mobile.jpg", alt: "Webralo — mobile", frame: "mobile" },
    scope: ["UX/UI", "Responsive Web", "Visual Design"],
    designFocus: [
      "Clear content hierarchy",
      "Responsive layouts",
      "Consistent visual language",
      "Intuitive navigation",
    ],
  },
  {
    slug: "ylb-concept",
    name: "YLB Concept",
    industry: "Fashion & Retail",
    description: "A Swiss e-commerce platform for authenticated sneakers and designer apparel.",
    url: "https://www.ylbconcept.ch/",
    desktop: { src: "/images/websites/ylb-concept-desktop.jpg", alt: "YLB Concept — desktop", frame: "desktop" },
    mobile: { src: "/images/websites/ylb-concept-mobile.jpg", alt: "YLB Concept — mobile", frame: "mobile" },
    scope: ["UX/UI", "Responsive Web", "Visual Design"],
    designFocus: [
      "Product-focused layout",
      "Clear content hierarchy",
      "Responsive layouts",
      "Conversion-focused calls to action",
    ],
  },
  {
    slug: "tifera-solutions",
    name: "Tifera Solutions",
    industry: "Security Systems",
    description: "A Swiss security company designing, supplying and installing tailored video surveillance and alarm systems.",
    url: "https://tiferasolutions.ch/",
    desktop: { src: "/images/websites/tifera-solutions-desktop.jpg", alt: "Tifera Solutions — desktop", frame: "desktop" },
    mobile: { src: "/images/websites/tifera-solutions-mobile.jpg", alt: "Tifera Solutions — mobile", frame: "mobile" },
    scope: ["UX/UI", "Responsive Web", "Visual Design"],
    designFocus: [
      "Clear content hierarchy",
      "Trust-building visual direction",
      "Responsive layouts",
      "Intuitive navigation",
    ],
  },
  {
    slug: "lifecard",
    name: "Lifecard",
    industry: "Healthcare / Mobile App",
    description:
      "A healthcare mobile app designed to give users a simple, accessible way to manage and interact with their health information.",
    // Mobile-only product — no desktop site to show, so `desktop` is omitted
    // on purpose (see the WebGalleryItem comment in content/types.ts).
    mobile: { src: "/images/websites/lifecard-mobile.jpg", alt: "Lifecard — mobile", frame: "mobile" },
    scope: ["Product Design", "UX/UI", "Mobile App Design"],
    designFocus: [
      "Simple, accessible interactions",
      "Clear information hierarchy",
      "Consistent visual language",
      "Mobile-first design",
    ],
  },
];

export function getWebGalleryItem(slug: string) {
  return webGallery.find((item) => item.slug === slug);
}

/** An entry only "exists" publicly once its cover screenshot (desktop, or
 * mobile for a mobile-only product) has been dropped in. */
export function getPublishedWebGallery() {
  return webGallery.filter((item) => imageExists((item.desktop ?? item.mobile)!.src));
}
