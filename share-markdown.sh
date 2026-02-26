#!/bin/bash

# Script pro sdílení markdown souboru
# Použití: ./share-markdown.sh [cesta-k-souboru.md] [slug]

MARKDOWN_SHARE_DIR="/Users/anetalizancova/Aibility_marketing brain/aibility/4_Tools/markdown-share"
SOURCE_FILE="$1"
SLUG="$2"

# Pokud není zadán soubor, použij aktuální otevřený soubor (pokud je .md)
if [ -z "$SOURCE_FILE" ]; then
    echo "❌ Chybí cesta k markdown souboru"
    echo "Použití: ./share-markdown.sh [cesta-k-souboru.md] [slug-optional]"
    exit 1
fi

# Zkontroluj, jestli soubor existuje
if [ ! -f "$SOURCE_FILE" ]; then
    echo "❌ Soubor neexistuje: $SOURCE_FILE"
    exit 1
fi

# Pokud není zadán slug, použij název souboru
if [ -z "$SLUG" ]; then
    FILENAME=$(basename "$SOURCE_FILE" .md)
    # Sanitizuj název pro URL (pouze alfanumerické, pomlčky a podtržítka)
    # Nahraď nealfanumerické znaky pomlčkou, převeď na lowercase
    SLUG=$(echo "$FILENAME" | sed 's/[^a-zA-Z0-9_-]/-/g' | tr '[:upper:]' '[:lower:]')
    # Odstraň dvojité a více po sobě jdoucích pomlček
    SLUG=$(echo "$SLUG" | sed 's/-\+/-/g')
    # Odstraň pomlčky na začátku a konci
    SLUG=$(echo "$SLUG" | sed 's/^-\+//;s/-\+$//')
fi

TARGET_FILE="$MARKDOWN_SHARE_DIR/public/markdowns/${SLUG}.md"

# Zkontroluj, jestli cílová složka existuje
mkdir -p "$MARKDOWN_SHARE_DIR/public/markdowns"

# Zkontroluj, jestli soubor už existuje
if [ -f "$TARGET_FILE" ]; then
    echo "⚠️  Soubor už existuje: $TARGET_FILE"
    read -p "Chceš ho přepsat? (y/n): " -r
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Zrušeno"
        exit 1
    fi
fi

# Zkopíruj soubor
cp "$SOURCE_FILE" "$TARGET_FILE"
echo "✅ Zkopírováno: $SOURCE_FILE → $TARGET_FILE"

# Commitni a pushni
cd "$MARKDOWN_SHARE_DIR" || exit 1

git add "public/markdowns/${SLUG}.md"
git commit -m "Add markdown: ${SLUG}" > /dev/null 2>&1
git push > /dev/null 2>&1

if [ $? -eq 0 ]; then
    echo "✅ Pushnuto na GitHub"
    echo ""
    echo "🔗 Link: https://anetalizancova-mdshare.vercel.app/${SLUG}"
    echo "⏱️  Vercel automaticky redeployne za ~1 minutu"
else
    echo "⚠️  Chyba při pushnutí na GitHub (možná už je pushnuté)"
    echo "🔗 Link: https://anetalizancova-mdshare.vercel.app/${SLUG}"
fi
