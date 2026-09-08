# Content guide

Everything on this site is data-driven. You should never need to touch a
component to update copy or swap in a screenshot — just edit the files
below.

## Adding real screenshots

Every image slot on the site (`VisualSpec` in `src/content/types.ts`) points
at a path like `/images/swifty-sports/hero.jpg`. Until a file exists at that
path under `public/`, the site automatically renders a labelled placeholder
frame instead — nothing breaks, and nothing needs to be wired up. The moment
you drop a real file at the exact path, it swaps in automatically on the next
build/refresh. This is handled by `src/lib/media.ts` + `src/components/Visual.tsx`.

**So the whole workflow is: export a screenshot, save it with the exact
filename the content file expects, done.**

To find the exact filenames expected for a project, open its entry in
`src/content/caseStudies.ts` (or `src/content/webGallery.ts` for the web
gallery) and look at the `src` field of each `VisualSpec`.

**Swifty Sports, Nomos and NIXXE Gateway are now populated with real
screenshots** (exported from `01_Swifty_Sports.pdf`/`SwiftySports.pdf`,
`SwiftyCMS.pdf`, `NomosSystem.pdf`, `Nixxe.pdf` and the four brand PNGs on
your Desktop). `lifecard/` and `websites/` are still placeholders —
same workflow applies once those PDFs are reviewed.

Two screens were deliberately left out because they showed your personal
contact details (a back-office account page with your phone/address/DOB,
and an account/wallet page with your name) — nothing else in the source
material needed redacting.

### Exporting screenshots from the source PDFs

1. Export each screen you want to use from the PDF/Figma at **2x resolution**
   (retina), as JPG (photographic UI shots) or PNG (screens with a lot of flat
   colour/text — smaller file size, crisper edges).
2. Crop tightly to the screen itself — no PDF page margin, no browser chrome
   from your own screenshot tool (the site already draws its own browser/phone
   frame around `desktop`/`tablet`/`mobile` visuals, so a raw crop of just the
   screen content looks best).
3. Match the aspect ratio implied by the visual's `frame` where you can:
   - `desktop` → landscape, ~16:10
   - `tablet` → portrait, ~3:4
   - `mobile` → tall portrait, ~9:19.5
   - `wide` → very wide banner, ~21:9 (used for case-study hero shots)
   - `square` / `plain` → flexible, used for component crops and card covers
   A close-but-not-exact match is fine — images are shown with `object-cover`,
   so they'll crop to fill the frame rather than distort.
4. Keep file sizes reasonable (a few hundred KB per image, not multiple MB) —
   `next/image` will still optimize them further at build time, but starting
   smaller keeps local dev fast.

### Adding a brand-new visual slot

If you want to show a screen that isn't in the data yet, add a new
`VisualSpec` object to the relevant array in `caseStudies.ts` (e.g. push
another item into `design`) and drop the matching file in `public/images/...`.
No component changes needed.

## Editing copy

| What | File |
|---|---|
| Name, tagline, nav, email, LinkedIn | `src/content/site.ts` |
| Case studies (Swifty Sports, Nomos, NIXXE Gateway, LifeCard) | `src/content/caseStudies.ts` |
| Web & Digital Experiences gallery | `src/content/webGallery.ts` |
| About intro, skills, experience | `src/content/about.ts` |

## Web & Digital Experiences gallery

`src/content/webGallery.ts` holds one entry per site, each needing **exactly
two screenshots** — desktop and mobile — at the paths already set in that
file, e.g.:

```
public/images/websites/swifty-global-desktop.jpg
public/images/websites/swifty-global-mobile.jpg
public/images/websites/say-studio-desktop.jpg
public/images/websites/say-studio-mobile.jpg
```

...and so on for tentplanner, skylab, webralo, ylb-concept and
tifera-solutions. **All of these are now populated with real full-page
screenshots** (from `~/Desktop/Yllka Projects/Web & Digital Experiences/`).
`vm-cars` is still a placeholder — no screenshots have been provided for it
yet.

These are full-page screenshots (can be many times taller than a single
viewport), so they're shown through `<ProjectMockup>`
(`src/components/ProjectMockup.tsx`), which drops each one into the site's
existing browser/phone mockup frames, cropped to the frame's viewport shape
and anchored to the **top** of the image — so the mockup shows the real
header/hero rather than stretching into a long scrolling image. This reuses
`<Visual crop>` under the hood (`object-cover` + top alignment); the same
`crop` mode is what the `/work` and `/work/websites` thumbnail grids use for
card covers, for the same reason.

`/work/websites` is an index grid — one card per site (its desktop shot,
name, industry). Clicking a card opens `/work/websites/[slug]`, a dedicated
page rendering that site's desktop + mobile screenshots via `<ProjectMockup>`,
its description, and a link to the live site. Both pages, and the "View the
Web & Digital Experiences gallery" links on Home and Work, only appear once
at least one entry's desktop screenshot exists on disk — same auto-detect
mechanism as everything else on the site, so there's nothing to switch on
manually.

To add another site beyond the current eight, copy an entry's shape in
`webGallery.ts`, give it a new unique `slug` (used for both its URL and its
image filenames), and drop its two screenshots in using that slug —
`<ProjectMockup>` handles the framing automatically, full-page screenshots
included.

## Things marked as placeholders — replace before publishing

- `src/content/about.ts` — the `experience` array is bracketed placeholder
  data (`[Company name]`, `[Job title]`, etc.). Replace with your real work
  history, or delete entries you don't want to show.

## Design tokens

Colors, the accent color, and the font are defined once in
`src/app/globals.css` (`:root` custom properties + the `@theme inline`
block). Change a color there and it updates everywhere.
