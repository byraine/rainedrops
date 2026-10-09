# A Curious Trajectory 👽✎

A **25-second, pencil-sketch career animation** made for a class project. A slightly wobbly hand-drawn alien in a flying saucer uses its tractor beam to collect tiny illustrations from different phases of a creative career. It ends with **ELISAVA** and a typewriter-style statement about bridging creativity, AI, and technology.

**Live website:** Add your GitHub Pages URL here after publishing.

## Preview / concept

- **0:00–0:01.5** — The doodled UFO hovers above a blank page.
- **0:01.5–0:03.7** — Cox Automotive (technology): a little car with a "cox" sketch.
- **0:03.7–0:05.9** — Bilingual parent liaison (education): book with EN / ES speech bubbles.
- **0:05.9–0:08.1** — Writing: notebook and pencil.
- **0:08.1–0:10.3** — Film: clapperboard.
- **0:10.3–0:12.5** — Photography: camera.
- **0:12.5–0:14.7** — Creative direction: collage/layout sheet with a spark.
- **0:14.7–0:17.0** — ELISAVA: handwritten academic destination.
- **0:17.0–0:25.0** — Final reflection appears in typewriter text and remains visible at the end.

The imagery is **intentionally imperfect**: uneven graphite-style vector paths, a bright paper background, a thin tractor beam, tiny stars, and gently wobbling motion. The visual style references the UFO pencil doodle supplied for this project. Cox Automotive is represented by a stylized wordmark, **not an official corporate logo**.

## How to publish on GitHub Pages

1. Create a **public GitHub repository**, for example `a-curious-trajectory`.
2. Upload **all four website files together** to the root of the repo:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - Optionally, `ANIMATION_BRIEF.md`
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Set branch to `main` and folder to `/(root)` and click **Save**.
6. GitHub will display a URL similar to `https://YOUR-USERNAME.github.io/a-curious-trajectory/` once deployment finishes.

**Important:** A `.md` file documents the concept, but it **does not run an animation**. GitHub Pages displays the actual website from `index.html` + `styles.css` + `script.js`. There is no build step, API key, package install, or third-party dependency.

## Test locally

Open `index.html` in your browser, or run a local web server from the project folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customize it

In `script.js`:
- Change `OUTRO_TEXT` to edit the ending statement.
- Change `CAREER_MILESTONES` to edit the sequence or labels.
- Change the SVG snippets inside `ICONS` to redraw a symbol.
- Adjust `TOTAL_MS`, `FIRST_PICKUP_MS`, `PICKUP_INTERVAL_MS`, and `OUTRO_START_MS` to alter timing, keeping the entire timeline within `TOTAL_MS`.

In `styles.css`:
- Change `--paper` and `--ink` to alter the paper/pencil colors.
- Edit `@keyframes abduct` to change how objects are beamed into the UFO.
- Edit the responsive rules for portrait/mobile presentation.

In `index.html`:
- The large `<svg>` contains all UFO and tractor beam pencil paths, while career illustrations are inserted into `#career-object` from JavaScript.

## End statement

> From tech to education to creativity, my path has always been about connection. Now, through a Master’s in Applied AI for Arts and Design, I’m expanding my skills in AI and technology to help build more thoughtful creative futures.

## Class project description

This experimental digital autobiography treats a career as a collection of unlikely but interconnected experiences. Instead of a chronological résumé, an alien literally collects skills and disciplines into one moving visual narrative. The humorous abduction mechanic connects work in technology, bilingual education, writing, filmmaking, photography, and creative direction to ongoing study of AI in arts and design. Its handmade visual language asserts that imperfect, human expression still matters in technological work.

## Accessibility and implementation

- Fully static website; no external assets, fonts, tracking, or required libraries.
- Scalable, editable SVG line drawings and CSS animation.
- Typewriter text remains visible after the 25-second sequence.
- **Replay** button restarts the animation.
- Respects `prefers-reduced-motion` by immediately displaying the message rather than automatically playing movement.
- Semantic accessible labels accompany the animation.
- Mobile and desktop layouts.

Created for an educational portfolio/class project.