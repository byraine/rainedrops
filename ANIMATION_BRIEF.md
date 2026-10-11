# Animation Brief — A Curious Trajectory

## Goal

Build a **single-page, publishable GitHub Pages animation** that introduces a multidisciplinary creative professional through a **25-second, minimalist, pencil-drawn UFO story**. This document can be placed in a GitHub repository as a project brief or provided to a coding assistant as an implementation specification. A complete working implementation is supplied alongside this brief as `index.html`, `styles.css`, and `script.js`.

## Concept

A tiny, slightly strange alien pilots a flying saucer through a dark, star-filled galaxy. A pencil-outline tractor beam reaches toward the bottom of the frame. Career milestones appear as tiny individual doodles, wobble, and float upward into the UFO one after another. The same alien and saucer remain on screen the whole time, tying a seemingly nonlinear career into one narrative. After the final "ELISAVA" moment, a considered closing statement types into view. The animation ends at 25 seconds and holds on the statement until replayed.

### Main visual reference

The user supplied a rough black-and-white UFO drawing: simple dome, two alien eyes, skewed oval saucer, two tiny stars, and a long open-ended tractor beam, with generous negative space. **Recreate that rough, childlike pencil sketch energy**; do not use a glossy 3D UFO, gradients, neon glow, polished icons, photorealism, or corporate presentation graphics. The supplied drawing is a *style reference*, not something to use as an unmodified background.

## Art direction

- Deep midnight-black galaxy background, soft planetary colors, and luminous white pencil-like line drawings.
- Hand-drawn, a little uneven, deliberately imperfect; small asymmetries are good.
- The UFO accelerates upward while fast vertical star trails, planets, and a black hole create a feeling of flying through space; beam contours remain irregular and pencil-like.
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

One clean webpage with a tiny editorial label at the top, a large central pencil animation, understated phase labels, the concluding statement below the drawing, and a small **Replay** control. No navigation, secondary pages, or distracting interface chrome; the moving galaxy is an intentional part of the animation.

## Technical requirements

1. Fully functional on **GitHub Pages** with static root files: `index.html`, `styles.css`, `script.js`.
2. Use **inline SVG line art**, CSS keyframes, and lightweight vanilla JavaScript for milestone timing and typewriter text; no frameworks or external CDNs.
3. Animation length **25,000 milliseconds**; one run and then hold on the final frame.
4. Replay button restarts from the first frame.
5. Reflow responsively across phones and desktops; the pencil visual should preserve its aspect ratio.
6. Respect operating system `prefers-reduced-motion` and provide an immediately readable static message.
7. No external fonts, image hosting, or libraries required.
8. Maintain editable, easily identifiable milestone objects in code.
9. Ensure the typography and career symbols contrast clearly with the dark galaxy background.\n11. Make the spaceship steerable with pointer, touch, and arrow keys; it must visibly move across the scene.\n12. Generate animated downward star trails using a lightweight 2D canvas under the SVG foreground.\n13. Scale each career symbol around its own origin so it remains centered in the tractor beam while ascending.
10. Provide a `README.md` with exact GitHub Pages publishing instructions and a short class-project rationale.

## Acceptance checklist

- [ ] Alien and UFO visibly resemble loose black pencil strokes (not a polished vector spaceship).
- [ ] Six career fields + ELISAVA are represented in the correct order.
- [ ] Each object rises through the same beam and disappears near the ship.
- [ ] The final ELISAVA destination and the exact closing statement appear.
- [ ] The statement remains readable after the approximately 25-second sequence.
- [ ] UFO moves broadly in response to the mouse, touch input, or arrow keys; replay works.\n- [ ] A clearly visible fast-moving starfield communicates forward/upward flight.\n- [ ] The career symbols are genuinely visible during pickup (no inherited zero-opacity styles).
- [ ] No browser console errors and no missing assets.
- [ ] Loads on GitHub Pages with no build process.

## Credits and accuracy notes

The project narrative and reference drawing were supplied by the project author. The "cox" illustration is a small stylized career signifier, **not the official Cox Automotive brand asset**. The milestone symbols are visual metaphors, not claims that the referenced organizations endorsed the work.

## Full-screen interactive universe (revision)

The published GitHub Pages experience is now an edge-to-edge, single-screen galaxy rather than a framed webpage. The original hand-drawn UFO and sequential career-symbol tractor-beam animation are preserved, with a 25-second story followed by continued free flight.

- **Steering:** Move the mouse anywhere across the screen, drag/touch on mobile, or use the arrow keys to move the UFO across the viewport.
- **Black holes:** Two accessible, visible swirling wormholes act as spatial portals. Fly into one to trigger a collision-based warp; alternatively click/tap a portal.
- **Portal transition:** The ship spirals toward the hole, shrinks and rotates, disappears into a vortex, and then reappears elsewhere.
- **New space regions:** Arrival updates the sector label, nebula colors, star-streak palette, and planetary layout. The five regions are The Origin, Violet Drift, Blue Expanse, Ember Field, and The Green Beyond.
- **Animation timing:** The career-story clock pauses briefly during warp transitions so milestones are not skipped. Free flight continues after the final message.
- **Motion accessibility:** The experience respects reduced-motion settings by suppressing spinning and reducing starfield velocity while leaving navigation functional.

### Test checklist
- [ ] Verify that the website fills the browser viewport with no surrounding card or scrollbars.
- [ ] Move the mouse toward all four edges; the UFO should travel a large distance.
- [ ] Fly directly into both black holes and confirm a full spiral-and-arrival sequence.
- [ ] Click/tap each portal as an alternative to collision entry.
- [ ] Confirm the new sector has changed colors and planet positions.
- [ ] Verify that all seven career symbols still visibly rise into the beam.
- [ ] Continue steering after the closing statement appears.


## Rebuild — self-contained fullscreen GitHub Pages (October 2026)

The latest published build uses **one self-contained `index.html`** with embedded CSS, JavaScript and editable SVG artwork. This avoids browser-cache mismatches between separate `styles.css` and `script.js` files. The older files may remain in the repository as archival source but are **not loaded** by the live page.

### Experience and mechanics

- Edge-to-edge interactive galaxy, without a boxed layout or scrollbars.
- Original pencil-style alien UFO and all seven career symbols; each symbol rises directly up the beam to the ship.
- Cursor/touch-controlled free flight, keyboard arrows and a replay button.
- Fast flowing starfield, color-changing nebulae and movable planets.
- Two accessible black holes: flying into one **or clicking it** triggers an animated two-second spiraling vortex, then places the UFO in another region of space.
- Five visually different space sectors, with updated color palette and planet placement after a jump.
- The career narrative lasts approximately 25 seconds excluding warp time, while exploration continues afterward.
- Reduced-motion preferences suppress continuously spinning/decorative movement while keeping controls functional.

### Testing

In a simulated DOM run of the committed script, the career icon rendered, pointer steering activated a collision warp, the first warp arrived in sector 2, clicking the second portal arrived in sector 4, and the 25-second story showed the complete end message. A separate manual visual check of the live GitHub Pages deployment is still recommended.
