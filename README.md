# mattseal

**A creative playground for design, technology, culture, and things I can't leave alone.**

mattseal.com is an experimental personal website by Matthew Kearney, a product designer exploring the intersection of design, technology, creative coding, and personal expression.

Unlike my professional portfolio at [sealspace.com](https://sealspace.com/), this is a space for curiosity, experimentation, and ideas that don't necessarily fit into a traditional case study.

## The Concept

An evolving personal publication with the visual sensibility of an independent design magazine and the interactivity of the modern web.

The creative direction combines:

- **Editorial design:** Expressive typography, unconventional compositions, and thoughtful visual hierarchy.
- **Analog inspiration:** Print textures, halftones, collage, nostalgic graphics, and tactile details.
- **Digital experimentation:** Creative coding, playful interactions, animation, and emerging technologies.
- **Personal perspective:** Design opinions, videos, cultural influences, and behind-the-scenes explorations.

The goal isn't nostalgia for its own sake. It's to explore how the character and imperfections of physical media can make digital experiences feel more human.

## What You'll Find

**Notes**\
Perspectives on product design, AI, creativity, and the evolving role of designers.

**Experiments**\
Interactive prototypes, creative coding projects, unconventional interfaces, and ideas worth exploring.

**Currently Collecting**\
Music, design references, cultural artifacts, and unexpected sources of inspiration.

**Video & Process**\
Occasional commentary, creative explorations, and documentation of the design and development process.

These sections represent the intended direction and will evolve as content is created.

## Built With

The initial prototype uses a deliberately lightweight stack:

- HTML5
- CSS3
- Vanilla JavaScript
- Cursor
- OpenAI Codex
- Git & GitHub

No frontend framework or CMS is required at this stage.

The site is being developed through an AI-assisted workflow combining human creative direction, design critique, iterative prototyping, and code generation.

## Getting Started

Clone the repository:
```bash
git clone https://github.com/sealrockswell/mattseal.git
cd mattseal
```

Open `index.html` in a browser to preview the current prototype.

For a local HTTP preview (Python 3 required), run from the project folder:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Visit http://127.0.0.1:8000. Stop the server with Ctrl+C. No install or build step is required; opening `index.html` directly also works.

## Project Files

- `index.html` — Semantic homepage, draft editorial content, and navigation.
- `styles.css` — Provisional design tokens, editorial layouts, responsive rules, and reduced-motion support.
- `main.js` — Progressively enhances the print study with a native range slider.
- `assets/` — Original local SVG print artwork, subtle grain, and favicon. No remote image or font requests.

## Iterating on the Prototype

Change the color and font tokens at the top of `styles.css` to explore art direction. System fonts keep the prototype self-contained. Edit draft copy directly in `index.html`; replace or extend the SVG artwork in `assets/`.

The print reveal uses a native range input for pointer, touch, and keyboard access. Arrow keys adjust it; Home and End reveal either full composition. Without JavaScript, the artwork remains a static split print and the inactive control stays hidden. All navigation and text remain available. Reduced-motion preferences disable smooth scrolling; the reveal itself tracks the input directly without animated easing.

## Prototype Review Checklist

- Review at narrow mobile, tablet, and wide desktop widths; check for overflow and overlapping text.
- Tab through links and the slider; verify visible focus and the skip link.
- Move the slider with pointer/touch and Arrow, Home, and End keys.
- Disable JavaScript: content, navigation, artwork, and external links should still work.
- Enable reduced motion and check that scrolling is immediate.

## Draft Material and Next Steps

All editorial copy is provisional. Notes are inline draft fragments, not published articles. Currently Collecting contains original graphic studies and labeled collection prompts, not claims about actual possessions, music, or cultural finds. No personal photographs or real videos are included.

Next: review typography, color, and composition; replace draft prompts with personal material; develop individual entries and video content when available. There is no CMS, archive, analytics, deployment configuration, or domain connection.

## Design Principles

1. **Personality over convention.** Make the experience feel authored, not templated.
2. **Experiment with purpose.** Interactions should create delight or meaning, not unnecessary friction.
3. **Analog character, digital precision.** Embrace texture and imperfection without sacrificing usability.
4. **Content is the experience.** Ideas, perspectives, and experiments should drive the design.
5. **Always evolving.** Treat the website as a living creative project rather than a finished artifact.

## Project Status

**Early development / Creative exploration**

The first editorial homepage milestone is implemented locally: an expressive opening spread, draft Notes, a working two-layer print experiment, Currently Collecting prompts, and a personal sign-off. Colors and typography remain provisional. Browser and device review is still required before treating this as production-ready.

## About

Created by **Matthew Kearney**.

Professional work: [sealspace.com](https://sealspace.com/)\
LinkedIn: [Matthew Kearney](https://www.linkedin.com/in/matthewkearneydesign)

---

*Made for the things that don't fit neatly into a portfolio.*
