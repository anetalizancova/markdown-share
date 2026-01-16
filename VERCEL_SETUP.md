# Vercel Setup - Rychlý návod

## ✅ GitHub repo je hotový!
Repo je vytvořené a kód je pushnutý: https://github.com/anetalizancova/markdown-share

## 🚀 Napojení na Vercel (2 minuty)

1. **Jdi na Vercel:**
   - Otevři https://vercel.com
   - Přihlas se (nebo vytvoř účet, pokud ho nemáš)

2. **Importuj projekt:**
   - Klikni na **"Add New..."** → **"Project"**
   - Vyber **"Import Git Repository"**
   - Najdi a vyber repo **`anetalizancova/markdown-share`**
   - Pokud ho nevidíš, klikni **"Adjust GitHub App Permissions"** a povol přístup

3. **Nastavení projektu:**
   - **Framework Preset**: Next.js (mělo by být automaticky rozpoznané)
   - **Root Directory**: `./` (nech prázdné)
   - **Build Command**: `npm run build` (automatické)
   - **Output Directory**: `.next` (automatické)
   - **Install Command**: `npm install` (automatické)

4. **Deploy:**
   - Klikni **"Deploy"**
   - Počkej ~1-2 minuty na deployment
   - Hotovo! 🎉

## 📍 Tvoje URL bude:
Po dokončení deploymentu dostaneš URL typu:
- `https://markdown-share-xxx.vercel.app`
- Nebo můžeš nastavit vlastní doménu v nastavení projektu

## 🎯 Jak to použít:

1. Přidej nový markdown do `public/markdowns/nazev.md`
2. Commitni a pushni:
   ```bash
   git add public/markdowns/nazev.md
   git commit -m "Add new markdown"
   git push
   ```
3. Vercel automaticky redeployne (~1 minuta)
4. Sdílej link: `https://tvoje-url.vercel.app/nazev`

## 🔗 Užitečné odkazy:

- **GitHub repo**: https://github.com/anetalizancova/markdown-share
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Vercel Docs**: https://vercel.com/docs
