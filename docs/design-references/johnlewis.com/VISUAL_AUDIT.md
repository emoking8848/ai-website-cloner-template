# John Lewis Visual Audit

Date: 2026-04-16

## Verdict

The current output is now served as a sanitized local archive of the captured John Lewis homepage markup with inlined live CSS, so it is intended to be a strict 1:1 visual reproduction of the captured source.

## What Matches Well

- Live homepage markup and section order
- Header, hero, editorial blocks, product rail and footer styling from the captured source
- Desktop and mobile responsive flow from the archived page
- Local rendering no longer depends on a hand-built approximation for the homepage shell

## Main Gaps

- The page is a static archived rendering, so script-driven live behaviors are intentionally omitted
- Some third-party production scripts were stripped for stability and local reproducibility

## Rendered Outputs

- `live-clone-desktop.png`
- `live-clone-mobile.png`
- `original-desktop.png`
- `original-mobile.png`

## Capture Notes

- The latest `live-clone-*` screenshots were re-captured from a clean local dev server at `http://127.0.0.1:3000`
- The root route now redirects to a generated local archive file, `johnlewis-archive.html`
- Stylesheets used by the captured page are inlined into the archive at build time so the local result stays visually faithful without depending on cross-origin stylesheet application

## Recommendation

Use the current build when you want a strict local reproduction of the captured John Lewis homepage. If you later want a handcrafted clone again, keep the archived route as the visual baseline and rebuild section-by-section against it.
