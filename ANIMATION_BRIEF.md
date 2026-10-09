# Animation Brief — A Curious Trajectory

## Goal

Build a **single-page, publishable GitHub Pages animation** that introduces a multidisciplinary creative professional through a **25-second, minimalist, pencil-drawn UFO story**. This document can be placed in a GitHub repository as a project brief or provided to a coding assistant as an implementation specification. A complete working implementation is supplied alongside this brief as `index.html`, `styles.css`, and `script.js`.

## Concept

A tiny, slightly strange alien pilots a flying saucer above a blank sheet of off-white paper. A pencil-outline tractor beam reaches toward the bottom of the frame. Career milestones appear as tiny individual doodles, wobble, and float upward into the UFO one after another. The same alien and saucer remain on screen the whole time, tying a seemingly nonlinear career into one narrative. After the final "ELISAVA" moment, a considered closing statement types into view. The animation ends at 25 seconds and holds on the statement until replayed.

### Main visual reference

The user supplied a rough black-and-white UFO drawing: simple dome, two alien eyes, skewed oval saucer, two tiny stars, and a long open-ended tractor beam, with generous white space. **Recreate that rough, childlike pencil sketch energy**; do not use a glossy 3D UFO, gradients, neon glow, polished icons, photorealism, or corporate presentation graphics. The supplied drawing is a *style reference*, not something to use as an unmodified background.

## Art direction

- Mostly off-white paper (#faf9f6) and dark graphite lines (#282622).
- Hand-drawn, a little uneven, deliberately imperfect; small asymmetries are good.
- Alien UFO hovering and gently wobbling, stars twitching occasionally, beam contours with fine uneven outlines.
- Draw each object in the *same* single-color pencil language; no stock illustrations or image-generation dependency.
- Typewriter-inspired monospaced text; minimal words while the career symbols are being lifted.
- Portrait-friendly, but responsive for laptop and mobile screens.
- The story is playful, curious, poetic, and thoughtful, not a formal CV slideshow.
- No background music is required; visual experience should work silently.

## Timing: exactly ~25 seconds

| Time | Visual moment | Career detail |
|---|---|---|
| 0:00–0:01.5 | UFO floats in, beam appears | Introduction |
| 0:01.5–0:03.7 | Miniature car + hand-lettered “cox” floats up | Cox Automotive — technology |
| 0:03.7–0:05.9 | Book with EN / ES speech bubbles | School — bilingual parent liaison |
| 0:05.9–0:08.1 | Notebook + pencil | Writer |
| 0:08.1–0:10.3 | Clapperboard | Film |
| 0:10.3–0:12.5 | Simple camera | Photography |
| 0:12.5–0:14.7 | Collage/visual-direction sheet | Creative director |
| 0:14.7–0:17.0 | Lettered “ELISAVA” with tiny pencil stars | Master’s in Applied AI for Arts and Design |
| 0:17.0–0:25.0 | Typewritten statement gradually revealed | The connecting thread / creative future |

All career objects should appear **one at a time** and be pulled upward from the bottom of the open beam toward the ship, shrinking and fading as they reach it. Hold the final text on screen after the animation finishes; do not auto-loop.

## Exact closing copy

> From tech to education to creativity, my path has always been about connection. Now, through a Master’s in Applied AI for Arts and Design, I’m expanding my skills in AI and technology to help build more thoughtful creative futures.

The copy should feel like a personal, forward-looking statement, **not a recruitment advertisement**. Visually emphasize the handmade UFO first; keep the line quietly typeset and readable.

## Page structure

One clean webpage with a tiny editorial label at the top, a large central pencil animation, understated phase labels, the concluding statement below the drawing, and a small **Replay** control. No navigation, secondary pages, footers filled with links, distracting backgrounds, brand color palettes, or scroll-based animation triggers.

## Technical requirements

1. Fully functional on **GitHub Pages** with static root files: `index.html`, `styles.css`, `script.js`.
2. Use **inline SVG line art**, CSS keyframes, and lightweight vanilla JavaScript for milestone timing and typewriter text; no frameworks or external CDNs.
3. Animation length **25,000 milliseconds**; one run and then hold on the final frame.
4. Replay button restarts from the first frame.
5. Reflow responsively across phones and desktops; the pencil visual should preserve its aspect ratio.
6. Respect operating system `prefers-reduced-motion` and provide an immediately readable static message.
7. No external fonts, image hosting, or libraries required.
8. Maintain editable, easily identifiable milestone objects in code.
9. Ensure the typography is readable over the off-white background.
10. Provide a `README.md` with exact GitHub Pages publishing instructions and a short class-project rationale.

## Acceptance checklist

- [ ] Alien and UFO visibly resemble loose black pencil strokes (not a polished vector spaceship).
- [ ] Six career fields + ELISAVA are represented in the correct order.
- [ ] Each object rises through the same beam and disappears near the ship.
- [ ] The final ELISAVA destination and the exact closing statement appear.
- [ ] The statement remains readable after the approximately 25-second sequence.
- [ ] Works with a mouse and on a touch screen; replay works.
- [ ] No browser console errors and no missing assets.
- [ ] Loads on GitHub Pages with no build process.

## Credits and accuracy notes

The project narrative and reference drawing were supplied by the project author. The "cox" illustration is a small stylized career signifier, **not the official Cox Automotive brand asset**. The milestone symbols are visual metaphors, not claims that the referenced organizations endorsed the work.