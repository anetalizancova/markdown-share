# SP™ Marketing Engine — Brainstorming

**27. března 2026 · Marketing team**

---

## Co dnes řešíme

Jeden produkt. Jeden funnel. Jeden engine.

**5 věcí, na kterých se musíme dohodnout:**

1. **Co děláme HNED** — quick wins, které spustíme zítra
2. **Jak vypadá funnel** — assessment + lead magnety jako priorita č.1
3. **Jak to technicky poběží** — engine, agenti, sdílený tooling
4. **Kolik potřebujeme vydělat** — revenue model, funnel matematika
5. **Kdo co vlastní** — ownership po úkolech

---

## ⚡ Quick wins — začínáme ZÍTRA

### Engine (hodiny práce → okamžitý dopad)

- [ ] **Brand voice** finalizovat (Aneta + Verča) → commitnout do firemního gitu
- [ ] **Content atomizer** rozšířit o SP™ framing + automatické CTA → git
- [ ] **Campaign Agent v1** — z briefu generuje textový balíček (email + social + Circle)
- [ ] **UTM + naming convention** zkontrolovat a rozšířit pro SP™ → git
- [ ] **MCP + commands audit** — co máme v celém týmu, co sdílet, co chybí

### Analytika (MUSÍ být PŘED kampaní)

- [ ] GTM + GA4 + PostHog na superpowered.pro
- [ ] Meta Pixel + CAPI · LinkedIn Insight Tag
- [ ] Definovat events: `assessment_started` · `completed` · `email_captured` · `paid_purchased`

### Content sprint (4–6 týdnů dopředu)

- [ ] Atomizovat vše co máme (blogy, metodologie, archetypy, webináře)
- [ ] Vizuály: infografiky, ukázky výsledků, before/after, archetyp karty
- [ ] Video: krátká explainer videa (HeyGen / Remotion)
- [ ] **3–4 lead magnety** připravit a testovat (viz sekce Lead magnety)

### Assessment flow (připravit kompletně)

- [ ] User journey end-to-end: landing → start bez emailu → test → email gate → výsledky → share → upsell
- [ ] Copy pro každý krok (landing, intro, gate, result page, share CTA)
- [ ] Share card design + OG tagy + předvyplněný LinkedIn post
- [ ] Retargeting audiences: kdo začal a nedokončil, kdo dokončil a nekoupil

---

## 🔑 5 klíčových rozhodnutí

| # | Otázka | Varianta A | Varianta B | Dopad |
|:-:|--------|-----------|-----------|-------|
| 1 | **Assessment start bez emailu?** | Bez emailu, gate až na výsledky | Email hned na začátku | Celá user journey + sekvence |
| 2 | **Lead flow: Make nebo vlastní?** | Make (jako u jiných produktů) | Vlastní automatizace z Cursoru | Rychlost vs flexibilita |
| 3 | **Registrace & reminders: AT nebo Brevo?** | Zůstat na AT (funguje) | Přejít na Brevo (silnější) | Konsolidace vs risk migrace |
| 4 | **Newsletter: nový SP™ nebo transformace?** | Standalone SP™ newsletter | Přeformátovat stávající Aibility NL | Brand vs audience |
| 5 | **Kolik do testovací fáze?** | Dle revenue modelu níže | | Budget = počet leadů |

---

## 💰 Revenue model

### Kontext

Runway ~6–9 měsíců. Cíl: break-even do léta. Každá aktivita musí mít přímou linku na revenue.

### Funnel matematika (měsíčně)

| Krok funnelu | Metrika | 🔴 Konzervativní | 🟡 Realistický | 🟢 Optimistický |
|:-------------|:--------|------------------:|---------------:|----------------:|
| Landing visits | /měsíc | 1 500 | 3 000 | 6 000 |
| → Assessment started | 40–60% | 600 | 1 500 | 3 600 |
| → Completed + email | 50–70% | 300 | 900 | 2 500 |
| → Paid report | 3–6% | 9 | 45 | 150 |
| **Paid report revenue** | ~950 CZK | **8 550 CZK** | **42 750 CZK** | **142 500 CZK** |

### Q2 revenue mix (duben–červen)

| Zdroj | Jednotky | Cena | Revenue odhad |
|:------|:--------:|-----:|--------------:|
| Paid reports | 40–80 | ~950 CZK | 38–76k CZK |
| SP Foundation #1 | 50–100 | 5 000 CZK | 250–500k CZK |
| B2B piloty | 2–3 | 150–380k CZK | 300k–1.1M CZK |
| **CELKEM Q2** | | | **~600k–1.7M CZK** |

> **Klíčový insight:** Paid reports = validace + micro-revenue. Reálné peníze přijdou z B2B + Foundation. Assessment je TOP of funnel pro všechno.

### Akvizice — odhad nákladů

| Metrika | Odhad | Poznámka |
|:--------|------:|:---------|
| CPL (cost per lead) | 80–200 CZK | Meta + LinkedIn, CZ trh |
| CAC (paid report) | 1 500–5 000 CZK | Závisí na conversion rate |
| Test ad spend / měsíc | 20–50k CZK | Začít nízko, škálovat dle dat |
| Break-even paid report | CPL < 150 + conv > 5% | Přepočítat po 2 týdnech reálných dat |

### Revenue milestones Q2

- [ ] **500+** dokončených free assessmentů
- [ ] **40+** paid reportů
- [ ] **2+** B2B piloty (pipeline ~4M CZK)
- [ ] **SP Foundation #1** proběhl (květen/červen)
- [ ] Dashboard live, weekly Slack report + AI doporučení

### Metriky k průběžnému sledování

| Metrika | Vzorec |
|:--------|:-------|
| CPL | Ad spend / Leads |
| Assessment completion rate | Completed / Started |
| Paid conversion rate | Paid / Completed |
| CAC | Total spend / Paid customers |
| LTV | Průměrný revenue per customer (report + upsell) |
| Funnel drop-off | Kde odcházejí a proč |

---

## Produktový žebříček

| Tier | Produkt | Cena | Cíl |
|:-----|:--------|-----:|:----|
| **FREE** | SP™ Free Assessment (10 min) | 0 | Volume, lead gen, viral loop |
| | → Archetyp + top 3 superpowers + share card | | |
| **PAID** | SP™ Full Report | $29–49 | Revenue z B2C, ověření WTP |
| | → 20 sub-kompetencí, custom instructions, certifikát, learning path | | |
| **PROGRAM** | SP™ Foundation | ~5 000 CZK | Vzdělávací revenue, community |
| | → 3h workshop, 100+ lidí, jednou za 2 měsíce | | |
| **PROGRAM** | SP™ Build | ~10–20k CZK | Higher-ticket, menší skupina |
| | → 10h školení (vibe coding, Cursor, agenti) | | |
| **PROGRAM** | SP™ Coach / Ambassador | ~50k CZK | Škálování přes partnery |
| | → Kohortový certifikační program | | |
| **B2B** | Team Assessment + Workshop | 150–380k+ | Hlavní revenue driver |
| | → Full service / lokální / licence modely | | |

**Priorita Q2:** P0 = Free assessment + Paid report · P1 = B2B assessment · P2 = Foundation · P3 = Build/Coach

---

## Jeden funnel, jeden CTA

Všechno vede na jedno místo. Každý touchpoint = "Jaký jsi AI archetyp?"

```
           ┌─── Social ───┐
           ├─── Newsletter ┤
           ├─── Webináře ──┤───→  superpowered.pro  ───→  Assessment START
           ├─── Paid ads ──┤                                    │
           ├─── Lead mag. ─┤                          Email capture (gate)
           └─── Community ─┘                                    │
                                                         Výsledky + share card
                                                                │
                                                    ┌───────────┴───────────┐
                                                   B2C                     B2B
                                              Paid report             Demo / pilot
                                           Foundation / Build        Team rollout
                                           Coach / Ambassador         Renewal
```

| Dřív | Teď |
|:-----|:----|
| Promo na různé webináře | Každý webinář = "SP™ pro [téma]" |
| Newsletter = mix témat | Newsletter = SP™ s jedním CTA |
| Social = různé akce | Social = SP™ framework, data, archetypy |
| Kampaně na Edu, Aimee, events | Kampaně = assessment + lead magnety |

**Messaging:** ① "Jaký jsi AI archetyp? Zjisti zdarma." ② "Staň se Superpowered Professional" ③ "Změřte AI připravenost týmu" (B2B)

---

## PRIORITA #1: Free Assessment + Lead Magnety

> Tohle můžeme pustit SAMI, BEZ závislosti na dalších lidech. Priorita č.1.

### Free Assessment — user journey

```
Ad / social / NL / doporučení → superpowered.pro
                                       │
                         Assessment START (hned, bez emailu, bez bariéry, 10 min)
                                       │
                              Chce vidět výsledky → EMAIL CAPTURE
                                       │
                        ┌──────────────┴──────────────┐
                        │       Systém na pozadí:      │
                        │  → Airtable (lead + UTM)     │
                        │  → Brevo (kontakt + tagy)    │
                        │  → Post-assessment sekvence  │
                        │  → Slack notifikace          │
                        └──────────────┬──────────────┘
                                       │
                         Výsledky: Archetyp + Superpowers + Growth Edge
                                       │
                                Share card → viral loop
                                       │
                              Soft upsell → Paid report
```

**Klíčové:**
- Email = gate na výsledky (ne na začátku)
- Share card dostává UŽ po free (viral loop)
- Soft upsell od prvního touchpointu — s hodnotou, ne hard sell
- **→ OVĚŘIT NA MEETINGU:** Platí start bez emailu + email gate na výsledky?

### Lead magnety — praktické hooks pro lidi, co assessment NEUDĚLALI

Lead magnety jsou pro cold audience. Musí fungovat bez znalosti SP™. Praktická hodnota → hook → CTA na assessment.

| # | Lead magnet | Hook | CTA → Assessment |
|:-:|:------------|:-----|:-----------------|
| 1 | **"10 AI nástrojů, které vám ušetří 5h týdně"** | Ultra praktický, okamžitě použitelný | "Které nástroje jsou pro VÁS? Zjistěte svůj profil →" |
| 2 | **"AI Skills Report 2026: Kde stojí průměrný profesionál"** | Data-driven, curiosity gap | "Jste nad nebo pod průměrem? Změřte se →" |
| 3 | **"AI Prompt Pack: 30 promptů pro váš obor"** | Per-role, hned to zkusí | "Chcete prompty na míru? Zjistěte svůj AI profil →" |
| 4 | **"Jak AI mění váš obor: Mini průvodce pro profesionály"** | Edu, thought leadership | "Připraveni zjistit svou AI připravenost? →" |
| 5 | **"Team AI Readiness Checklist"** (B2B) | Self-assessment pro firmy | "Chcete přesná data? → Team assessment" |

> **Strategie:** Testovat 3–4 varianty paralelně. Co nefunguje zahodit, co funguje škálovat.

### Lead magnet flow

```
Ad / Social / NL → Landing page → Opt-in (email za magnet)
                                          │
                                Brevo: segment + sekvence
                                Airtable: lead record
                                PostHog/GA4: tracking
                                          │
                                CTA v magnetu → Free assessment
                                          │
                                Assessment start (bez emailu)
```

### Post-assessment email sekvence (= PRVNÍ sekvence po email capture)

| # | Den | Předmět | Jádro | CTA |
|:-:|:---:|:--------|:------|:----|
| 1 | 0 | Tvůj výsledek: [Archetyp] | Shrnutí + co to znamená + link na detail | Sdílet na LinkedIn |
| 2 | 1 | Sdílel/a jsi svůj výsledek? | Social sharing nudge + předvyplněný text | Sdílet kartu |
| 3 | 3 | Co ti archetyp říká o tvém potenciálu | Deep-dive, superpowers, growth edge | Prozkoumej profil |
| 4 | 7 | Co kdybys věděl/a víc? | Teaser paid: 20 sub-kompetencí, custom instructions | Koupit full report |
| 5 | 21 | Tvoje AI skills se mění | Re-assessment nudge, co se změnilo v AI | Udělat znovu |

### Co potřebujeme pro assessment + lead magnety

| Co | Priorita | Stav |
|:---|:--------:|:-----|
| Assessment self-service (start bez emailu, email gate) | P0 | Ověřit na meetingu |
| Lead capture flow → AT + Brevo + Slack | P0 | Nastavit |
| Post-assessment email sekvence (5 emailů) | P0 | Vytvořit |
| Tracking: GTM + GA4 + PostHog + Meta Pixel | P0 | Nastavit |
| 3–4 lead magnety (obsah + landing) | P0 | Vytvořit |
| Landing A/B test (min 2 varianty) | P1 | Připravit |
| Share card generování + OG tagy | P1 | Doladit |
| Direct-to-assessment ads experiment | P1 | Otestovat |

---

## Paid Upsell

```
Free assessment hotový → Výsledky na webu
       │
       ├─ CTA na result page: "Chceš víc? → Full report"
       ├─ Post-assessment email #4 (den 7): soft upsell
       │
       ▼
  Platba ($29–49, A/B test max 2 varianty)
       │
       ├─→ Brevo: tag "sp-paid" + sekvence
       ├─→ Airtable: update status
       ├─→ Abra (jen placené!)
       └─→ Slack #sp-revenue
       │
       ▼
  Paid report: 20 sub-kompetencí, custom instructions, certifikát, learning path
       │
       ▼
  Follow-up → upsell Foundation / Build / B2B
```

**Pricing test:** Max 2 varianty (29 vs 49). Testujeme na upsellu PO free completion, ne v top-of-funnel. Neměnit messaging zároveň s cenou.

---

## Marketing Engine — architektura

### 4 principy

1. **Code-based, Cursor-centric** — commands, rules, MCP servery, verzované v gitu
2. **AI generuje, člověk rozhoduje** — AI navrhuje varianty, člověk schválí, AI publishne
3. **Content as code** — emaily, posty, šablony, brand voice = soubory v gitu
4. **Sdílené pro celý tým** — stejné rules, skills, commands, MCP config = stejná kvalita

### Vrstvy

| Vrstva | Co | Příklady |
|:-------|:---|:---------|
| 👤 **Human** | Strategie, kreativa, schválení | — |
| 🎛️ **Control** (Cursor) | Commands, rules, skills, MCPs, agenti | `/sp-campaign`, `brand-voice`, Circle MCP |
| 📝 **Content** | AI tvorba → atomizace → per-platform adaptace | Brand voice auto, UTM auto, SP™ CTA |
| 📤 **Distribution** | Email, social, web, paid, community | Brevo, Upload Post, Circle, Meta, LinkedIn |
| 📊 **Intelligence** | Dashboard, reporting, AI doporučení | Vercel dashboard, Slack bot, AI vrstva |

### AI agenti

| Agent | Co dělá | Command | Priorita |
|:------|:--------|:--------|:--------:|
| **Campaign Agent** | Z briefu → kompletní kampaň (email + social + Circle + follow-up + vizuály) | `/sp-campaign` | P0 |
| **Content Atomizer** | 1 zdroj → posty na všechny platformy s SP™ CTA | `/sp-atomize` | P0 |
| **Newsletter Agent** | Draft SP™ newsletteru (data nugget, archetyp, tip) | `/sp-newsletter` | P1 |
| **Dashboard Agent** | Sběr dat + weekly report + AI doporučení | `/sp-dashboard` | P1 |
| **Vizuál Generator** | Vizuály z SP™ šablon (promo, story, OG, carousel) | `/sp-visual` | P1 |
| **B2B Report Agent** | Team-level report pro klienty | `/sp-team-report` | P1 |

**Quick win verze P0 agentů:**
- **Atomizer:** Rozšířit existující content-atomizer skill o SP™ framing + auto CTA. Hotový za odpoledne.
- **Campaign Agent:** Začít jen s textovým balíčkem (email + social + Circle). Vizuály a unified publish přidat postupně.

### Jak kampaň vzniká

```
/sp-campaign [typ] [název]
       │
       Agent vygeneruje:
       ├─ 📧 Promo email (text.md + branded.html s UTM)
       ├─ 📱 Social posty (LinkedIn, IG, FB, X, Threads)
       ├─ 🎨 Vizuály (feed 1080², story 1080×1920, OG 1200×630)
       ├─ 💬 Circle post
       ├─ 📧 After-registration email + 2 reminders
       ├─ 📧 Follow-up email draft
       └─ 📋 Campaign checklist
       │
       Uloženo v: content/campaigns/[datum]-[název]/
       │
       Review + approve [člověk] → /sp-publish
       │
       ├─→ Brevo: email draft
       ├─→ Upload Post API: social posty
       ├─→ Circle MCP: community post
       └─→ Slack: notifikace
```

---

## Sdílený tooling

### Princip: celý tým = stejný setup

Všechno ve firemním repu. Verzované. Sdílené. Nejdřív společně vyladit, pak commitnout.

| Typ | Co finalizovat | Kde v repu |
|:----|:---------------|:-----------|
| **Rules** | brand-voice, utm-gen, sp-assess, naming-convention | `.cursor/rules/` |
| **Skills** | direct-response-copy (na SP™), content-atomizer (+ SP™), newsletter, positioning | `.cursor/skills/` |
| **Commands** | /sp-campaign, /sp-atomize, /sp-newsletter, /sp-publish, /sp-dashboard, /brevo, /upload-social | `.cursor/commands/` |
| **MCP config** | Circle, Brevo, Upload Post, GitHub, AT, Slack, Stripe, PostHog, GA4, LinkedIn, Meta | `.cursor/mcp.json` |
| **Templates** | Email šablony, social formáty, vizuál šablony, ad kreativy | `templates/` |

### Co kdo používá teď (doplnit asynchronně)

| Kdo | Nástroje / commands / MCPs | Workflow | Co chybí |
|:----|:---------------------------|:---------|:---------|
| | | | |
| | | | |
| | | | |
| | | | |

---

## Content & kanály

### Content pilíře

| Pilíř | Podíl | Příklady |
|:------|:-----:|:---------|
| Archetyp Identity | 30% | "Který AI archetyp jsi?", quiz, archetyp stories |
| AI Skills & Superpowers | 25% | Tipy propojené s 10 skills, "jak se zlepšit v X" |
| Data & Insights | 20% | "78% přeceňuje", statistiky, Dunning-Kruger angle |
| Stories & Social Proof | 15% | Before/after, user stories, leaderboard |
| Metodika & Thought Leadership | 10% | Behind the scenes, Filipovy insights |

### Kanálový plán

| Kanál | Frekvence | Formáty |
|:------|:----------|:--------|
| **LinkedIn** | 3–4× týdně | Carousels, data posty, B2B angle, user stories |
| **Instagram** | 3× týdně | Archetyp karty, stories (ankety, quiz), reels |
| **X / Threads** | 3× týdně | Quick insights, hot takes, threads |
| **Newsletter** | 1× týdně / 2× měsíčně | Data nugget, archetyp spotlight, tip, CTA |
| **Circle** | Per akce + 1× týdně | Community engagement, promo, recapy |
| **Blog** | 2× měsíčně | SEO content propojený s assessmentem |
| **Webináře** | 1× měsíčně (free) | "SP™ pro [téma]" |

### Paid ads (multi-channel, testovat)

| Kanál | Cílení | Formáty |
|:------|:-------|:--------|
| **Meta** | Retargeting, lookalike | Carousel, video, lead forms |
| **LinkedIn** | HR/L&D, B2B | Sponsored content, InMail |
| **Reddit** | AI/tech komunity | Nativní posty, promoted |
| **TikTok** | Broader reach | Short-form explainers, test hooks |
| **X Ads** | Thought leadership | Promoted threads, amplifikace |

---

## Email sekvence — přehled

| Sekvence | Trigger | Emailů | Kde | Priorita |
|:---------|:--------|:------:|:----|:--------:|
| **Post-assessment** | Email capture po dokončení free testu | 5 (den 0–21) | Brevo | P0 |
| **Lead magnet** | Download lead magnetu | 3–4 | Brevo | P0 |
| **Webinář registrace** | Registrace na akci | 3 (potvrzení + 2 reminders) | AT nebo Brevo | P1 |
| **Webinář follow-up** | Po webináři | 1–2 | Brevo (existující pipeline) | Funguje |
| **Paid follow-up** | Koupil paid report | 2–3 | Brevo | P2 |
| **Re-engagement** | 30+ dní neaktivní | 3 | Brevo | P2 |

### Automatizace flows

**Lead capture (P0):**
Email capture → Airtable (lead + UTM) → Brevo (kontakt + tagy: sp-lead, sp-completed, sp-{archetype}) → Post-assessment sekvence → Slack notifikace

**Platba (P1):**
Platba → Brevo (tag sp-paid) → Airtable (update) → Abra (jen placené!) → Slack #sp-revenue

**Registrace na akce (P1):**
Registrace → After-registration email → Reminder 1 den před → Reminder 1h před
→ ROZHODNOUT: AT (funguje teď) nebo Brevo (silnější)?

---

## Dashboard & tracking

### Dashboard (vibecodovaný, žádné tabulky)

**Tech:** Next.js / React na Vercel · API calls do zdrojů · Slack bot · AI vrstva (OpenRouter)

**Hlavní čísla:**
- Nové leads (vs minulý týden) · Dokončené assessmenty · Newsletter subscribers (delta)
- Web traffic (sources) · Revenue (paid + programy + B2B) · Social engagement

**Detail:**
- Funnel: leads → started → completed → paid → shared
- Email: open rate, CTR, nové kontakty
- Campaigns: aktivní, spend, výsledky
- B2B pipeline (přehled, detail řeší Žaneta)

**Reporting:**
- Slack report (pátek) do #sp-marketing + link na dashboard
- Markdown report commit do `marketing-wiki/sp-weekly/` (historie)
- AI vrstva: automatické "co fungovalo / co ne / co vyladit"

### Tracking — checklist (PŘED kampaní)

- [ ] GTM container na superpowered.pro
- [ ] GA4 property + custom events
- [ ] PostHog event tracking (primární produktová analytika)
- [ ] Meta Pixel + CAPI (retargeting)
- [ ] LinkedIn Insight Tag (B2B retargeting)
- [ ] Plausible jako backup (privacy-friendly)
- [ ] UTM naming convention (dle Aibility konvence)
- [ ] Event taxonomy: `assessment_started` · `assessment_completed` · `email_captured` · `card_shared` · `paid_purchased` · `program_registered`
- [ ] Tracking schema: co se propisuje do AT, Brevo, PostHog, GA4

### Data zdroje pro dashboard

| Zdroj | Data | API |
|:------|:-----|:----|
| Airtable | Leads, deals | Airtable API |
| Brevo | Email stats, kontakty | Brevo API |
| PostHog | Funnel, eventy, cohorty | PostHog API |
| GA4 | Traffic, sources | GA4 API |
| Meta Ads | Spend, conversions | Meta Marketing API |
| LinkedIn Ads | Spend, conversions | LinkedIn API |

---

## Action plan — 3 kroky

### 🔴 KROK 1: Zmapovat + Quick wins (tento týden)

**Zmapovat:**
- [ ] Co kdo používá — tools, commands, MCPs, workflow (asynchronně doplnit tabulku v Sdílený tooling)
- [ ] Rozhodnout co nechat, co vyhodit, co přidat
- [ ] Rozdělit ownership (viz sekce Ownership)

**Engine quick wins:**
- [ ] Brand voice finalizovat → git
- [ ] Direct-response copy skill doladit na SP™ → git
- [ ] Content atomizer + SP™ framing + auto CTA → git
- [ ] UTM convention rozšířit pro SP™ → git
- [ ] Campaign Agent v1 (textový balíček) → git
- [ ] MCP + commands sdílená konfigurace → git

**Analytika:**
- [ ] Celý tracking stack na superpowered.pro (GTM, GA4, PostHog, Meta Pixel, LinkedIn Tag)

**Content sprint:**
- [ ] Atomizovat vše → 4–6 týdnů content dopředu
- [ ] Vizuály + video + interaktivní formáty
- [ ] 3–4 lead magnety připravit

### 🟡 KROK 2: Připravit launch (paralelně)

**Priorita = assessment + lead magnety (bez závislosti na dalších lidech).**

- [ ] Lead flow: email capture → AT + Brevo + Slack (Make nebo vlastní)
- [ ] Brevo list "SP Leads" + custom attributes + segmenty
- [ ] Post-assessment sekvence v Brevo (5 emailů)
- [ ] After-registration + 2 reminder templates
- [ ] Assessment promo kampaň (kompletní balíček)
- [ ] Lead magnet promo kampaně (per magnet)
- [ ] Landing A/B test (min 2 varianty)
- [ ] Experiment: direct-to-assessment ads
- [ ] Pricing test paid report (29 vs 49) na upsellu
- [ ] Dashboard MVP (vibecodovat)

### 🟢 KROK 3: Po launchi — iterovat a škálovat

- [ ] Newsletter Agent, Vizuál Generator, Unified publish, B2B Report Agent
- [ ] LinkedIn Ads (B2B), Meta retargeting, další paid kanály
- [ ] Další webináře, SP Foundation promo
- [ ] Blog / SEO, pravidelný publishing
- [ ] Paid follow-up + re-engagement sekvence

### ✅ Checklist: co musí fungovat pro první kampaň

- [ ] Assessment self-service ready (start bez emailu, email gate)
- [ ] Lead flow: email capture → AT + Brevo + Slack
- [ ] Post-assessment sekvence v Brevo (min 3 emaily)
- [ ] Tracking: GTM + GA4 + PostHog + Meta Pixel
- [ ] UTM parametry
- [ ] Content: promo email + social per platforma + Circle + vizuály
- [ ] Landing / result page funkční
- [ ] Share card + OG tagy
- [ ] Min 1 lead magnet ready

---

## Ownership

### Ownership podle oblasti (doplnit na meetingu)

| Oblast | Co zahrnuje | Owner |
|:-------|:------------|:-----:|
| **Engine & agenti** | Campaign Agent, Atomizer, commands, rules, MCP config | |
| **Tracking & analytika** | GTM, GA4, PostHog, Meta Pixel, UTM, event taxonomy | |
| **Paid ads** | Meta, LinkedIn, Reddit, TikTok, X — setup, kreativy, optimalizace | |
| **Lead magnety** | Obsah, landing pages, A/B testy, distribuce | |
| **Assessment kampaň** | Promo materiály, social, email, vizuály | |
| **Email sekvence** | Post-assessment, lead magnet, registrace, follow-up v Brevo | |
| **Dashboard** | Vibecodování, data napojení, Slack bot, AI vrstva | |
| **Content & social** | Plánování, tvorba, distribuce, engagement | |
| **B2B podpora** | One-pager, sample report, case study, sales materiály | |

### Co kdo používá teď (doplnit asynchronně)

| Kdo | Tools & commands | MCPs | Typický workflow | Co chybí |
|:----|:-----------------|:-----|:-----------------|:---------|
| | | | | |
| | | | | |
| | | | | |
| | | | | |

---

## Otevřené otázky

### Produkt & flow

1. Free assessment — je self-service ready? Platí start bez emailu?
2. Paid report — co přesně dostane uživatel navíc? Za kolik? ($29 vs $49)
3. Direct-to-assessment ads — umíme poslat lidi z reklamy rovnou do testu?
4. SP Foundation — kdy první běh? Obsah?

### Engine & tooling

5. SP™ lead flow — Make (jako u jiných) nebo vlastní automatizace?
6. After-registration + reminders — AT nebo Brevo?
7. Newsletter — standalone SP™ nebo transformace stávajícího?
8. Content kalendář — Git, AT, nebo dashboard?
9. Co dát do firemního repa HNED? (rules, skills, commands, MCP config)

### Revenue & budget

10. Paid ads budget — kolik do testovací fáze? (rozhodnout dle revenue modelu)
11. Minimum leadů/paid týdně, aby to dávalo revenue smysl?
12. Road show — kdo, kolik měst, kdy?

### Growth experimenty

13. Landing A/B pro FREE akvizici — jak přesně nastavit? (max 2 varianty)
14. Pricing A/B pro PAID upsell — kde testujeme, jak dlouho, podle čeho vyhodnotíme?

### Ownership

15. Kdo vlastní engine stavbu? (agenti, commands, pipeline)
16. Kdo vibecoduje dashboard?

---

## APPENDIX: Budoucí flows (reference)

### Webináře & Events

Webináře = hlavní lead gen nástroj. Každý webinář = "SP™ pro [téma]".

**Lifecycle:** Příprava (`/sp-campaign webinar`) → Promo (2–3 týdny, email + social + Circle + paid) → Registrace (after-reg email + 2 reminders) → Po webináři (follow-up: transcript → `/fupwebinar` → `/brevo` → autopost → Circle post → content atomizace na 2–3 týdny)

### SP™ Foundation / Build / Coach

**Flow:** Promo kampaň → Registrace + platba → Brevo (segment) + AT + Abra → After-reg email + reminders → Workshop/program → Follow-up (záznam + materiály + CTA na vyšší tier + feedback + Circle pozvánka)

### Newsletter

`/sp-newsletter` → Agent připraví draft (data nugget + archetyp spotlight + tip + promo + CTA) → text.md + newsletter.html → Review → `/brevo` → Schedule

### B2B motion

B2B řeší primárně Žaneta. Marketing dodává:

| Co | Priorita |
|:---|:--------:|
| Enterprise one-pager (PDF) | P1 |
| Sample team report (anonymizovaný) | P1 |
| Case study template (po prvním pilotu) | P2 |
| LinkedIn Ads (HR/L&D cílení) | P2 |
| B2B email sekvence (po demo callu) | P2 |

**B2B sales flow:** Identifikace → Kvalifikace → Demo (ukázka assessmentu + sample report) → Pilot (10–20 lidí) → Proposal → Rollout → Re-assessment za 3 měsíce
