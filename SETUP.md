# Setup Instructions

## 1. Vytvoření GitHub Repository

1. Jdi na [GitHub.com](https://github.com) a přihlas se do svého účtu `anetalizancova`
2. Klikni na **"+"** v pravém horním rohu → **"New repository"**
3. Nastavení:
   - **Repository name**: `markdown-share` (nebo jak chceš)
   - **Description**: "Simple markdown share tool"
   - **Visibility**: Public (nebo Private, jak preferuješ)
   - **NEPŘIDÁVEJ** README, .gitignore nebo license (už to máme)
4. Klikni **"Create repository"**

## 2. Push kódu na GitHub

Po vytvoření repo na GitHubu spusť tyto příkazy:

```bash
cd "/Users/anetalizancova/Aibility_marketing brain/markdown-share"
git remote add origin https://github.com/anetalizancova/markdown-share.git
git branch -M main
git push -u origin main
```

Pokud používáš SSH místo HTTPS:
```bash
git remote add origin git@github.com:anetalizancova/markdown-share.git
git push -u origin main
```

## 3. Napojení na Vercel

1. Jdi na [vercel.com](https://vercel.com) a přihlas se (nebo vytvoř účet)
2. Klikni na **"Add New..."** → **"Project"**
3. Importuj repo `anetalizancova/markdown-share`
4. Vercel automaticky rozpozná Next.js projekt
5. Klikni **"Deploy"**
6. Po dokončení deploymentu dostaneš URL typu: `https://markdown-share-xxx.vercel.app`

## 4. Hotovo! 🎉

Tvůj markdown share tool je teď živý! Můžeš:
- Přidat nový markdown do `public/markdowns/nazev.md`
- Commitnout a pushnout → Vercel automaticky redeployne
- Sdílet link: `https://tvoje-url.vercel.app/nazev`
