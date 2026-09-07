import type { WebGalleryItem } from "./types";
import { imageExists } from "@/lib/media";

/**
 * Curated web design gallery. Each entry needs exactly two screenshots —
 * one desktop, one mobile — dropped in at the paths below. An entry only
 * appears (in the index grid and at /work/websites/[slug]) once its desktop
 * screenshot exists — see CONTENT-GUIDE.md. Add more entries as you send
 * them; keep the list curated rather than exhaustive.
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
  },
  {
    slug: "say-studio",
    name: "Say Studio",
    industry: "Architecture & Design",
    description: "Dubai-based architecture and design consultancy across workplace, hospitality and residential.",
    url: "https://www.saystudio.com/",
    desktop: { src: "/images/websites/say-studio-desktop.jpg", alt: "Say Studio — desktop", frame: "desktop" },
    mobile: { src: "/images/websites/say-studio-mobile.jpg", alt: "Say Studio — mobile", frame: "mobile" },
  },
  {
    slug: "tentplanner",
    name: "TentPlanner",
    industry: "Events",
    description: "A web-based planning tool that lets marquee and tent-hire clients design their own event layout before requesting a quote.",
    url: "https://www.tentplanner.co.uk/",
    desktop: { src: "/images/websites/tentplanner-desktop.jpg", alt: "TentPlanner — desktop", frame: "desktop" },
    mobile: { src: "/images/websites/tentplanner-mobile.jpg", alt: "TentPlanner — mobile", frame: "mobile" },
  },
  {
    slug: "cyberheed",
    name: "CyberHeed",
    // TODO: couldn't fetch cyberheed.com to verify (server returned 403) — fill in the real industry/description.
    industry: "[Industry]",
    description: "[One line on the brief and what the design solves for.]",
    url: "https://cyberheed.com/",
    desktop: { src: "/images/websites/cyberheed-desktop.jpg", alt: "CyberHeed — desktop", frame: "desktop" },
    mobile: { src: "/images/websites/cyberheed-mobile.jpg", alt: "CyberHeed — mobile", frame: "mobile" },
  },
  {
    slug: "ilus",
    name: "ILUS",
    industry: "M&A / Investment",
    description: "Global M&A group that acquires and scales innovative businesses across technology, manufacturing and defense.",
    url: "https://ilus-group.com/",
    desktop: { src: "/images/websites/ilus-desktop.jpg", alt: "ILUS — desktop", frame: "desktop" },
    mobile: { src: "/images/websites/ilus-mobile.jpg", alt: "ILUS — mobile", frame: "mobile" },
  },
  {
    slug: "skylab",
    name: "SkyLab",
    industry: "Cloud Infrastructure",
    description: "FusionFlow — a unified cloud service platform for managing multi-tenant infrastructure, billing and delivery from one control plane.",
    url: "https://www.skylabteam.com/fusionflow-overview",
    desktop: { src: "/images/websites/skylab-desktop.jpg", alt: "SkyLab — desktop", frame: "desktop" },
    mobile: { src: "/images/websites/skylab-mobile.jpg", alt: "SkyLab — mobile", frame: "mobile" },
  },
  {
    slug: "devora",
    name: "Devora",
    industry: "PR & Media Tech",
    description: "An AI-powered platform for securing media coverage, amplifying credibility and tracking PR ROI.",
    url: "https://www.devora.io/en",
    desktop: { src: "/images/websites/devora-desktop.jpg", alt: "Devora — desktop", frame: "desktop" },
    mobile: { src: "/images/websites/devora-mobile.jpg", alt: "Devora — mobile", frame: "mobile" },
  },
  {
    slug: "vm-cars",
    name: "VM Cars",
    industry: "Automotive",
    description: "A Swiss dealership specialising in the purchase, sale and consignment of luxury vehicles.",
    url: "https://vmcars.ch/",
    desktop: { src: "/images/websites/vm-cars-desktop.jpg", alt: "VM Cars — desktop", frame: "desktop" },
    mobile: { src: "/images/websites/vm-cars-mobile.jpg", alt: "VM Cars — mobile", frame: "mobile" },
  },
  {
    slug: "webralo",
    name: "Webralo",
    industry: "IT Consulting",
    description: "A German IT consultancy delivering web design, custom software and digital strategy for SMEs.",
    url: "https://webralo.de/",
    desktop: { src: "/images/websites/webralo-desktop.jpg", alt: "Webralo — desktop", frame: "desktop" },
    mobile: { src: "/images/websites/webralo-mobile.jpg", alt: "Webralo — mobile", frame: "mobile" },
  },
  {
    slug: "ylb-concept",
    name: "YLB Concept",
    industry: "Fashion & Retail",
    description: "A Swiss e-commerce platform for authenticated sneakers and designer apparel.",
    url: "https://www.ylbconcept.ch/",
    desktop: { src: "/images/websites/ylb-concept-desktop.jpg", alt: "YLB Concept — desktop", frame: "desktop" },
    mobile: { src: "/images/websites/ylb-concept-mobile.jpg", alt: "YLB Concept — mobile", frame: "mobile" },
  },
  {
    slug: "tifera-solutions",
    name: "Tifera Solutions",
    industry: "Security Systems",
    description: "A Swiss security company designing, supplying and installing tailored video surveillance and alarm systems.",
    url: "https://tiferasolutions.ch/",
    desktop: { src: "/images/websites/tifera-solutions-desktop.jpg", alt: "Tifera Solutions — desktop", frame: "desktop" },
    mobile: { src: "/images/websites/tifera-solutions-mobile.jpg", alt: "Tifera Solutions — mobile", frame: "mobile" },
  },
];

export function getWebGalleryItem(slug: string) {
  return webGallery.find((item) => item.slug === slug);
}

/** An entry only "exists" publicly once its desktop screenshot has been dropped in. */
export function getPublishedWebGallery() {
  return webGallery.filter((item) => imageExists(item.desktop.src));
}
