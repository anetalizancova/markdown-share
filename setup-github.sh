#!/bin/bash

# Script pro připojení k GitHubu a pushnutí kódu
# Použití: ./setup-github.sh <repo-name>

REPO_NAME=${1:-markdown-share}
GITHUB_USER="anetalizancova"

echo "🚀 Nastavuji GitHub repository..."

# Zkontroluj, jestli už není remote nastavený
if git remote get-url origin &>/dev/null; then
    echo "⚠️  Remote 'origin' už existuje. Chceš ho přepsat? (y/n)"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        git remote remove origin
    else
        echo "❌ Zrušeno. Uprav remote manuálně."
        exit 1
    fi
fi

# Přidej remote
echo "📦 Přidávám remote..."
git remote add origin "https://github.com/${GITHUB_USER}/${REPO_NAME}.git"

# Push
echo "⬆️  Pushuji na GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Hotovo! Repo je na: https://github.com/${GITHUB_USER}/${REPO_NAME}"
    echo ""
    echo "📝 Další kroky:"
    echo "1. Jdi na https://vercel.com"
    echo "2. Importuj repo ${GITHUB_USER}/${REPO_NAME}"
    echo "3. Deploy!"
else
    echo "❌ Chyba při pushnutí. Zkontroluj:"
    echo "   - Je repo vytvořené na GitHubu?"
    echo "   - Máš správná oprávnění?"
    echo "   - Je správné jméno repo? (aktuálně: ${REPO_NAME})"
fi
