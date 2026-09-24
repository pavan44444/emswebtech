# EMS Webtech — React redesign (v2: real brand theme + creative loader)

## Run it

```bash
npm install
npm run dev
```

## What changed from v1

- **Real brand palette**: olive green (`#8B9A3E`), orange CTA accent
  (`#E2793A`), near-black ink, warm cream background — matched to the
  live site's actual colors instead of the earlier marigold direction.
- **Bolder type**: Unbounded (display) + Manrope (body) — chunkier,
  more "heavy UI" feel than the previous pairing.
- **New: `src/components/Preloader.jsx`** — a one-time animated intro
  (letter-by-letter reveal + progress counter + panel wipe) that plays
  once per visit, wired in via `App.jsx`.

## Next steps we're building toward (per your latest brief)

1. Big 4K-style hero imagery (replacing/complementing the geometric shapes)
2. Horizontal-scroll section(s)
3. More motion/interaction throughout — this is intentionally staged so
   each step is easy to review before the next lands.
