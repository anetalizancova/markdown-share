# Markdown Share

Jednoduchý nástroj na sdílení markdownů jako veřejných linků.

## Jak přidat nový markdown

1. Vlož soubor do `public/markdowns/` (např. `public/markdowns/guide.md`).
2. Commitni a pushni do GitHubu.
3. Otevři link ve tvaru: `https://your-vercel-domain.vercel.app/guide`.

Soubor jde stáhnout přímo na: `https://your-vercel-domain.vercel.app/markdowns/guide.md`.

## Lokální development

```bash
npm install
npm run dev
```

Potom otevři `http://localhost:3000`.

## Poznámky

- Markdown soubory jsou veřejné (public folder).
- Copy a Download jsou dostupné přímo ve view.
