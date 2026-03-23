# Cursor jako Marketing Brain

**160+ konverzací · 1 repozitář · 0 řádků kódu ručně · ∞ iterací**

> Tenhle dokument vznikl v Cursoru. O Cursoru. Pro Cursor Masterclass. Rekurze kompletní.

---

## Co tady vlastně děláme

Začalo to jako jednoduchý editor na HTML emaily. Dneska je z toho **kompletní marketingový systém** — emaily, newslettery, sociální sítě, vizuály, webinářové follow-upy, komunitní posty, automatizace, landing pages. Vše v jednom repozitáři, propojené přes 20 custom příkazů a 23 pravidel.

Repo se přejmenovalo z *email-builder* na *marketing brain*. A to přesně vystihuje, co se stalo.

---

## Emaily — Věčný příběh

Follow-upy z webinářů, newslettery, onboarding, potvrzovací emaily, B2B kampaně. Každý email projde kolečkem: text v markdownu → konverze do HTML → brand check → dark mode testování → upload do Brevo.

**Dark mode** je samostatná válečná disciplína. Existuje sekce v dokumentaci s názvem "MAXIMUM RULES", která obsahuje 7 úrovní obrany proti email klientům. `!important` na všem. A stejně to Gmail občas invertuje.

**Emoji** vypadá nevinně, dokud se 🚀 nerozhodne žít na dalším řádku. Řešení: každé emoji zabalené do speciálního span tagu. Máme na to vlastní automatizaci.

A ten footer? Ten chybí vždycky. Pokaždé. Minimálně jednou za konverzaci.

---

## Sociální sítě — LinkedIn, Instagram, X, Threads

Posty pro všechny platformy, každý s jiným tónem. LinkedIn je thought leadership, Instagram vizuální, X krátký a Threads casual.

Automatický social poster generuje posty, plánuje a postuje sám. Když funguje, je to magie. Když nefunguje — a to se stává — posty se zdublují, promují webinář, který už proběhl, nebo je kalendář tři dny prázdný a nikdo neví proč.

Jedna z nejdůležitějších věcí, co jsme se naučili: každý post musí mít CTA. Vždy. Všude. Bez výjimky. A nikdy to nesmí znít jako AI.

---

## Vizuály — Designér z nouze

LinkedIn carousely, Instagram posty, covery pro komunitu, bannery na webináře. Vše generované v Cursoru — přes Gemini, SVG šablony, nebo rovnou v HTML.

Iterací na vizuály je obvykle víc než na texty. Overlay je příliš světlý, pak příliš tmavý, font je špatně, logo je malé, a "ta fotka by mohla být vidět o fousek víc, ale jen trošku."

A když to konečně sedí: "tvl, my budeme ještě designéři :D"

---

## Texty & Copy — Boj se slopem

Existuje nepsané pravidlo: pokud to zní jako AI, jdeme znovu. Na to máme dokonce skill s metodami Schwartze, Ogilvyho a Sugarmana — aktivuje se, když output potřebuje zachránit.

Každý newsletter má být originál, ne copy-paste se stejnými boxy. Každý Circle post se píše lidem, ne robotům. A když se v nadpisu objeví "Úvod" nebo "Popis" — to je okamžitá červená karta.

Quality bar je jednoduchý: musí to znít přirozeně, mít praktickou hodnotu a nesmí to být cirkus.

---

## Strategie & Plánování

Cursor slouží i jako sparring partner. Brainstorming na kampaně, positioning produktů, analýza konkurence, tvorba briefů pro kreativce.

Celý marketing tým (2 lidi) má zdokumentovaný workflow na vlastní webové stránce — s editovatelným textem, komentáři a stahováním. Vytvořené v Cursoru. Samozřejmě.

---

## Automatizace & MCP

Tady se to stává zajímavým:

- **Webinář proběhne** → GitHub Action stáhne přepis → AI vytáhne klíčové body → vygeneruje follow-up email + Circle post → commitne → pošle notifikaci na Slack. Jeden příkaz.
- **Brevo** napojené přes MCP — jeden příkaz a email je v Brevu jako draft.
- **Circle** přes MCP — jeden příkaz a post je v komunitě.
- **Airtable** přes MCP — data o webinářích přímo v Cursoru.
- **Auto social poster** — generuje, plánuje, postuje. Dashboard na Vercelu.
- **Slack remindery** — scrapne web, najde webinář za 10 dní, pošle reminder.
- **Landing pages** — agent generuje texty, nasazuje přes Framer MCP.

Když automatizace poprvé projde end-to-end, je to ten nejlepší pocit. Když neprojde — a to se stane — debug je dobrodružství.

---

## 20 Custom příkazů

Každý opakovaný workflow se stal příkazem. To je ta největší superschopnost:

| Příkaz | Co udělá |
|--------|----------|
| `/fupwebinar` | Přepis webináře → kompletní follow-up email |
| `/brevo` | HTML email → Brevo draft + test send |
| `/circlepost` | Zkrátí obsah → postne do Circle |
| `/aiedunl` | Celý AI Edu newsletter od nuly |
| `/socialpost-auto` | Markdown → naplánované posty na sítě |
| `/mdshare` | Markdown → veřejný link |
| `/urlimage` | Obrázek → GitHub raw URL pro emaily |
| `/board` | Správa projektového boardu |
| `/autofup` | Spustí celou webinářovou automatizaci |

Když něco funguje → "Udělej z toho command." To je nejvyšší pochvala.

---

## 23 Custom pravidel

Brand guidelines, UTM konvence, newsletter formáty, email sekvence, direct-response copy, content atomizer, orchestrator... Cursor ví, jak má Aibility vypadat, znít a komunikovat. Nemusíme to opakovat.

---

## V číslech

| Co | Kolik |
|----|-------|
| Konverzací | 160+ |
| HTML emailů | 77 |
| Custom příkazů | 20 |
| Custom pravidel | 23 |
| Integrací | 10+ |
| Webinářů s follow-upem | 10+ |
| Kolikrát chyběl footer | Nespočítáno |

---

## Nejlepší momenty (aneb co se tu reálně děje)

### Iterace je lifestyle
Typický flow: email vypadá super → ale ten font je špatně → a kde je footer → ok, hotovo → ale ještě jedna věc... Nikdy to nekončí jednou verzí.

### Pojmenování je věda
Produkty a lidi mají konkrétní jména. A AI je rádo zapomene. *Aimee* se přejmenuje na *Amy*, *Railway* na *Replit*, a názvy nástrojů se kreativně překombinují. Bacha na to.

### Když to konečně jede samo
Automatizace funguje → notifikace přijde do Slacku → "Funguje to! ...sice do špatnýho kanálu, ale funguje."

### Design feedback loop
"Ježíši, ty covery jsou hrozný :D" → předělání → "Tohle je úplně stejný :D" → další předělání → "Dej to zpátky, předtím to bylo lepší."

### Meta momenty
Cursor píše feedback na AI nástroj. S poznámkou: "ať je jasný, že to nejsem já :D"

AI napíše "Tvoje prostředí tě brzdí." Reakce: "To zní, jako bych se měla odstěhovat."

### Typický den v 6 krocích
1. "Udělej mi tohle."
2. "Ne takhle."
3. "Chybí footer."
4. "Super, ale ještě..."
5. "Pecka."
6. `/brevo`

---

## Co z toho plyne

Cursor není jen editor. Je to místo, kde vzniká celý marketingový systém — od prvního nápadu po odeslání kampaně. Pravidla zajišťují konzistenci, příkazy šetří hodiny, automatizace běží na pozadí, a MCP propojuje všechno dohromady.

A ano, občas chybí footer. Ale to je součást procesu.

---

*Made with Cursor · Aibility · Březen 2026*
