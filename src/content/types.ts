export type Frame = "desktop" | "tablet" | "mobile" | "wide" | "square" | "plain";

/** A single screenshot/visual slot. Drop a file at `src` (under /public) and
 * it renders automatically — until then it shows a labelled placeholder frame. */
export interface VisualSpec {
  src: string;
  alt: string;
  frame: Frame;
  caption?: string;
}

export interface ProcessSection {
  title: string;
  body: string;
}

/** A heading + short paragraph pair — the recurring "label / large serif
 * heading / short paragraph" unit used throughout every case study section. */
export interface SectionCopy {
  heading: string;
  body: string;
}

export interface VisualGroup {
  heading?: string;
  intro: string;
  visuals: VisualSpec[];
}

export interface RoleGroup {
  label: string;
  items: string[];
}

export interface StatBlock {
  value: string;
  label: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  /** Set to false to keep a case study out of all public listings and routes
   * until its real screenshots exist — defaults to true when omitted. */
  published?: boolean;
  /** short card + hero description */
  description: string;
  /** Strong one-line headline shown in the hero, above the description */
  tagline?: string;
  role: string;
  /** Short phrase for the hero's compact metadata row, e.g. "End-to-end product design — web, mobile & back office" */
  focus: string;
  /** Engagement timeline shown in the hero metadata row — omit rather than guess when the real dates aren't known */
  timeline?: string;
  projectType: string[];
  /** Longer "My contribution" statement — shown in the My role section, not the hero */
  contribution: string;
  /** Live site URL, shown as a link in the hero when present */
  liveUrl?: string;
  hero: VisualSpec;
  cover: VisualSpec;
  context: SectionCopy;
  challenge: SectionCopy;
  roleDetails: string[];
  /** Grouped version of roleDetails for the "My role" section — falls back to a flat roleDetails tag cloud when absent */
  roleGroups?: RoleGroup[];
  process?: ProcessSection[];
  design: VisualSpec[];
  /** Optional heading + intro paragraph shown above the generic Design slideshow */
  designHeading?: string;
  designIntro?: string;
  /** Swifty-style platform split — when present, replaces the generic Design section with dedicated Web/CMS sections */
  webSection?: VisualGroup;
  backOfficeSection?: VisualGroup;
  mobileApp?: VisualGroup;
  designSystem?: VisualGroup;
  responsive?: {
    heading?: string;
    intro: string;
    desktop?: VisualSpec;
    tablet?: VisualSpec;
    mobile?: VisualSpec;
  };
  multiBrand?: VisualGroup;
  /** Outcome section heading — defaults to "My contribution" */
  outcomeHeading?: string;
  outcome: string;
  stats?: StatBlock[];
  /** Occasional large editorial pull-quotes, inserted after specific sections (see `statementAfter`) */
  statements?: { text: string; after: "challenge" | "process" | "design" }[];
}

export interface WebGalleryItem {
  slug: string;
  name: string;
  industry: string;
  description: string;
  /** Live site URL, shown as a link when present */
  url?: string;
  desktop: VisualSpec;
  mobile?: VisualSpec;
}
