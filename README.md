# Leoneigh Digital Showcase

A four-page static showcase for Leoneigh Digital, an asynchronous B2B software consultancy. Matte carbon, industrial monospace, crimson telemetry. No frameworks, dependencies, tracking, or build step.

**Live:** https://leoneighdigital.github.io/

---

## Contents

- [Overview](#overview)
- [Page map](#page-map)
- [Project structure](#project-structure)
- [Local development](#local-development)
- [Customization](#customization)
- [Fonts](#fonts)
- [Deployment](#deployment)
- [Design system](#design-system)
- [Browser support](#browser-support)

---

## Overview

The showcase is the primary commercial front for Leoneigh Digital. It presents the consultancy as a focused asynchronous engineering partner for international product teams, technical founders, and boutique digital agencies.

Every page uses plain HTML5, a shared stylesheet, shared JavaScript, and self-hosted fonts.

**Core principles:**

- **Static by default.** No server, database, framework, or client-side routing.
- **Progressive enhancement.** Content, navigation, and mailto calls to action work with JavaScript disabled.
- **Zero third-party calls.** No analytics, CDN fonts, tracking pixels, or external scripts.
- **Semantic HTML.** Landmark elements, labelled navigation, and a skip link support accessible browsing.

---

## Page map

| Page | File | Purpose |
| --- | --- | --- |
| **Status** | `index.html` | Hero, positioning statement, live telemetry, and showcase index |
| **Systems** | `systems.html` | Production systems with demo and source links |
| **Stack** | `stack.html` | Engineering disciplines and production stack |
| **Engage** | `engage.html` | Retainer tiers, dispatch call to action, and engagement protocol |

Navigation is shared across all four pages, with `aria-current="page"` on the active link. All inter-page links are relative.

---

## Project structure

```text
leoneigh-digital/
├── index.html
├── systems.html
├── stack.html
├── engage.html
├── style.css
├── script.js
├── .nojekyll
├── README.md
├── assets/
│   └── Profile.jpg
└── fonts/
    ├── Inter-Variable.woff2
    ├── Inter-Variable-Italic.woff2
    ├── JetBrainsMono-Variable.ttf
    ├── JetBrainsMono-Variable-Italic.ttf
    ├── Inter-LICENSE.txt
    └── JetBrainsMono-OFL.txt
```

The relative paths allow the site to run from the domain root, a subpath, or a static local server.

---

## Local development

### Requirements

- A modern browser
- An optional static file server for local development

### VS Code Live Server

1. Install the Live Server extension.
2. Right-click `index.html`.
3. Select **Open with Live Server**.
4. The browser opens at a local address such as `http://127.0.0.1:5500/index.html`.

### Python

From the project root:

```powershell
python -m http.server 5500
```

Then open http://localhost:5500/.

### Node.js

```powershell
npx serve .
```

A static server is recommended for self-hosted fonts and for consistent behavior across browsers.

---

## Customization

### Content

Update page copy directly in the corresponding HTML file. Shared header navigation should be kept consistent across all four pages.

### Profile image

The profile image is defined in [assets/Profile.jpg](assets/Profile.jpg) and is referenced by the page favicons, header mark, and hero profile.

### Contact details

Update mailto links in the engagement page and any dispatch links elsewhere in the site.

### Live clock

`script.js` updates the Pretoria/South Africa clock with the `Africa/Johannesburg` timezone every second.

### Visual theme

Shared colors, spacing, typography, and layout variables are maintained in `style.css`.

---

## Fonts

The project self-hosts the following variable font families:

- **Inter**: headings and interface copy
- **JetBrains Mono**: labels, telemetry, prices, and technical details

Font declarations are defined in `style.css` and reference the files in the `fonts/` directory. Their respective license files are stored alongside the fonts.

---

## Deployment

The repository is configured for GitHub Pages.

1. Commit all project files.
2. Push the project to the repository default branch.
3. Open the repository **Settings**.
4. Select **Pages**.
5. Set the source to deploy from the default branch.
6. Choose the repository root as the deployment directory.

The `.nojekyll` file prevents GitHub Pages from processing the static site with Jekyll.

---

## Design system

### Palette

- Background: charcoal black
- Surface: near-black panels
- Text: zinc white
- Muted text: gray
- Accent: crimson red
- Technical borders: zinc gray

### Typography

- Body and display text: Inter
- Labels, metadata, prices, and telemetry: JetBrains Mono

### Layout

- Responsive shared `wrap` container
- Persistent top navigation
- Industrial border and surface treatment
- Reduced-motion support for users who prefer less animation

---

## Browser support

The site targets current versions of:

- Chrome
- Edge
- Firefox
- Safari

All core content and navigation require no JavaScript. JavaScript enhancements include the live clock and other progressive interactions.
