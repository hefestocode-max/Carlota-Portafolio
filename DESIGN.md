# DESIGN.md — Carlota Mac Portfolio

## Direction
Luxury-minimal cinematic portfolio with editorial pacing: large media, restrained copy, generous negative space and deliberate motion.

## Visual priorities
- Hero video must feel premium and immediate.
- Typography should support a film/editorial identity.
- Project cards should showcase imagery first, metadata second.
- Mobile should feel intentional, not merely stacked.

## Existing implementation
- Uses Google Fonts: Great Vibes, Ibarra Real Nova, Poppins, Nunito Sans.
- Uses Swiper and Lottie via CDN.
- Core styling lives in `styles.css`; project pages use `projects/project.css`.

## Review checklist
- Above the fold: name, role and video readable on desktop/mobile.
- About: portrait and bio have balanced rhythm and line length.
- Work: filters, images and project links are clear.
- Project pages: media, synopsis and credits are complete.
- Contact: obvious next action.
- Accessibility: alt text, contrast, keyboard nav, reduced motion if needed.
- Performance: video/image sizes do not make first load feel broken.
