# Liquid Glass Site Generator — Claude Code Prompt

> **Usage:** Run this prompt with Claude Code from the root of a freshly cloned
> `liquid-glass-template` repository. Replace every `{{PLACEHOLDER}}` with real
> values before executing, or pass them as CLI arguments.

---

## 1. Input Parameters

Provide ALL required parameters. Leave nothing blank unless marked optional.

### Identity

| Parameter | Value | Notes |
|---|---|---|
| **Practitioner Name** | `{{PRACTITIONER_NAME}}` | Legal / real name (e.g. "Mama Aisha Najat") |
| **Brand Name** | `{{BRAND_NAME}}` | Display brand — may differ from practitioner name (e.g. "Psychic Beelah") |
| **Practitioner Title** | `{{PRACTITIONER_TITLE}}` | e.g. "Spiritual Healer & Psychic Reader" |
| **Location** | `{{LOCATION}}` | e.g. "Johannesburg, South Africa" |
| **Site Name** | `{{SITE_NAME}}` | Used in nav, metadata, copyright (often same as brand name) |
| **Domain** | `{{DOMAIN}}` | e.g. "psychicbeelah.co.za" (no protocol, no trailing slash) |
| **Locale** | `{{LOCALE}}` | Language/locale code (default: `en_ZA`) |

### Content Voice

| Parameter | Value | Notes |
|---|---|---|
| **Content Voice** | `{{CONTENT_VOICE}}` | `"modern-mystic"` or `"traditional-healer"` — controls vocabulary rules (see Section 3) |

### Theme & Palette

Colors map directly to CSS custom properties in `globals.css` and to `site.config.ts`.

| Parameter | CSS Variable | Default | Notes |
|---|---|---|---|
| **Cream** | `--cream` | `#fff6ed` | Primary background |
| **Cream Dark** | `--cream-dark` | `#fcecd8` | Secondary background / hover states |
| **Forest** | `--forest` | `#194027` | Primary text / foreground |
| **Forest Light** | `--forest-light` | `#2d6b45` | Secondary text / lighter accents |
| **Orange Accent** | `--orange-accent` | `#ed6b2d` | Section labels, focus rings, highlights |
| **Gold Warm** | `--gold-warm` | `#c8952e` | Warm accent / ratings / icons |
| **Marquee BG** | _(config only)_ | `#eff483` | Create Together / marquee strip background (stored in `createTogether.backgroundColor`, not in CSS) |

You may omit colors to keep the defaults. If you provide a named palette preset, all colors are set at once:
- `"earth"` (default) — cream/forest/orange palette as above
- `"ocean"` — cool blues and sandy neutrals
- `"dusk"` — purple/mauve twilight palette
- Or provide individual hex overrides for any combination.

### Contact & Conversion

| Parameter | Value |
|---|---|
| **WhatsApp Number** | `{{WHATSAPP_NUMBER}}` (digits only with country code, e.g. `27783885136`) |
| **Display Phone** | `{{DISPLAY_PHONE}}` (formatted for display, e.g. `"+27 78 388 5136"`) |
| **Email Address** | `{{EMAIL_ADDRESS}}` (practitioner's reply-to email) |
| **From Email** | `{{FROM_EMAIL}}` (e.g. hello@psychicbeelah.co.za — must match domain) |

### Hero

| Parameter | Value | Notes |
|---|---|---|
| **Video URL** | `{{VIDEO_URL}}` | Hero background video URL (hosted externally or `/videos/hero.mp4`) |

### Services

Provide services as categories with optional children. No prices or WhatsApp messages needed — services are navigational categories, not priced offerings.

```
{{SERVICES}}
Example:
- Love Spells | Attraction, Reuniting & Marriage | [attraction-love-spells, get-back-lost-love, gay-love-spells, marriage-love-spells]
- Psychic Reading | Intuitive Guidance & Clarity
- Money Spells | Prosperity & Abundance
```

Format per line: `Title | Subtitle | [optional child slugs]`

Child slugs in `[brackets]` generate child services under the parent. Each child slug becomes a service page at `/services/{slug}`.

### Optional Overrides

These are auto-generated if left blank. Provide only if the client has specific requirements.

| Parameter | Value | Default Behavior |
|---|---|---|
| **Hero Headline** | `{{HERO_HEADLINE}}` | Auto-generated as array of strings (e.g. `["Clarity is", "Waiting."]`) |
| **Hero Subtitle** | `{{HERO_SUBTITLE}}` | Auto-generated (one grounded sentence) |
| **About Section Label** | `{{ABOUT_SECTION_LABEL}}` | Auto-generated (e.g. "WELCOME TO PSYCHIC BEELAH") |
| **About Headline** | `{{ABOUT_HEADLINE}}` | Auto-generated |
| **About Bio** | `{{ABOUT_BIO}}` | Auto-generated (1 paragraph, matches voice) |
| **About Tags** | `{{ABOUT_TAGS}}` | Auto-generated (6-8 tags from practitioner services) |
| **About Page Story** | `{{ABOUT_PAGE_STORY}}` | Auto-generated (2 paragraphs, practitioner origin story) |
| **About Page Approach** | `{{ABOUT_PAGE_APPROACH}}` | Auto-generated (headline, description, 4 principles, disclaimer) |
| **How It Works Steps** | `{{HOW_IT_WORKS_STEPS}}` | Auto-generated (3 steps with titles + descriptions) |
| **Testimonials** | `{{TESTIMONIALS}}` | 6 placeholder testimonials generated |
| **Contact Tagline** | `{{CONTACT_TAGLINE}}` | Auto-generated |
| **Marquee Text** | `{{MARQUEE_TEXT}}` | Auto-generated (e.g. "Start Your Spiritual Journey Today") |
| **Articles** | `{{ARTICLES}}` | Empty array if not provided |
| **Headline Font** | `{{HEADLINE_FONT}}` | Playfair Display |
| **Serif Font** | `{{SERIF_FONT}}` | Cormorant Garamond |
| **Body Font** | `{{BODY_FONT}}` | Inter |

---

## 2. Reference Architecture

Before making ANY changes, read and internalize these reference documents in the project:

1. **`docs/Site_PRD_Plan.docx`** — The complete Liquid Glass design language specification. Pay particular attention to:
   - Color palette and usage rules
   - Typography hierarchy
   - Functional specifications for each section
   - Content strategy and brand voice

2. **`docs/Next_js_Best_Practices.docx`** — Architecture patterns. Key sections:
   - Feature colocation and App Router file organization
   - Component library stack (Tailwind + custom glass utilities)
   - Static generation and caching strategies
   - Metadata API for SEO

3. **`docs/Claude.md`** — The orchestrator agent pattern and sub-agent delegation model.

4. **`src/site.config.ts`** — The template configuration schema. This is the ONLY file where site-specific values live. Study the type definitions:
   - `Service` with optional `children?: Service[]` (hierarchical, not flat)
   - `ServicePageData` with `intro[]`, `benefits[]`, `deepDive[]`, `processSteps[]`
   - `Testimonial` with `id`, `author`, `role`, `content`, `rating`, optional `image`
   - `NavItem` with `targetSection` (scroll) or `href` (route)
   - `ServiceMenuItem` with optional `children` for dropdown menus
   - `ArticleMeta` for blog/article entries

5. **`src/app/globals.css`** — CSS custom properties and Tailwind v4 `@theme inline` block. Colors defined here MUST match `site.config.ts`.

---

## 3. Content Generation Rules

### 3.1 Content Voice (Conditional)

All generated copy follows the voice set by `{{CONTENT_VOICE}}`.

#### Voice: "modern-mystic"

**Tone:** Calm. Assured. Direct. Never desperate, never salesy, never vague.

**Vocabulary — USE these words:**
- Insight, Guidance, Clarity, Energy, Alignment
- Presence, Awareness, Connection, Flow, Light
- Journey, Path, Space, Stillness, Truth

**Vocabulary — NEVER use these words:**
- Fortune telling, magic tricks, spells, curses
- Predict the future, see the future, psychic powers
- Guaranteed, 100%, miracle, instant fix
- Woo-woo jargon that alienates skeptics

**The "No-Woo" Rule:**
- "We will work to release the tension holding you back"
- "Together we'll find the clarity you've been searching for"

**Grounding Principle:** Every sentence should feel like it could appear on a premium wellness brand's website. Think Headspace, not Hogwarts.

#### Voice: "traditional-healer"

**Tone:** Authoritative. Compassionate. Rooted. Speaks from ancestral wisdom with confidence, but never desperate or manipulative.

**Vocabulary — USE these words:**
- Spells, rituals, healing, ancestral wisdom, spiritual
- Psychic reading, energy, blockages, cleansing, protection
- Sacred, traditional, powerful, genuine, authentic
- Clarity, truth, guidance, balance, restoration

**Vocabulary — NEVER use these words:**
- Guaranteed miracles, instant results, 100% success
- Fear tactics ("you're cursed and only I can help")
- Manipulation language ("act now or lose everything")
- Claims of controlling someone's will

**Authenticity Rules:**
- Always position as guide, not guru
- Acknowledge free will explicitly
- No false promises — "honest readings, not false hope"
- Ground spiritual claims in tradition, not fantasy
- Never claim to "predict the future" — instead offer "spiritual insight" and "clarity"

**Grounding Principle:** Every sentence should feel like a trusted elder sharing wisdom, not a street vendor making claims.

### 3.2 Writing Style

- **Headlines:** Evocative, not descriptive. 2–5 words. They should feel like a whisper, not a shout.
- **Subheads:** One sentence. Grounded. Explains what the headline evokes.
- **Body copy:** Short paragraphs. Clear. Never walls of text.
- **CTAs:** Low-pressure. Invitational, not transactional.
  - "Start a conversation"
  - "Begin your journey"
  - "Book A Reading"
  - NOT "Buy Now" or "Book Immediately"

### 3.3 Service Page Auto-Generation

For each service that has a dedicated page (parent services + any children listed in the input), auto-generate all `ServicePageData` fields:

- **slug** — URL-safe slug (e.g. `"love-spells"`, `"attraction-love-spells"`)
- **category** — uppercase label (e.g. `"LOVE SPELLS"`, `"ATTRACTION SPELLS"`)
- **title** — display title (e.g. `"Love Spells"`, `"Attraction Love Spells"`)
- **tagline** — short tagline with bullet separators (e.g. `"Restore Love • Attract Romance • Strengthen Commitment"`)
- **heroImage:** `/images/services/{slug}-hero.jpg`
- **3 intro paragraphs** — describe the service, its approach, and its spiritual foundation
- **contentImage:** `/images/services/{slug}-content.jpg`
- **benefitTitle** — question-form heading (e.g. `"Who Can Benefit from Love Spells?"`)
- **5 benefits** — specific emotional/practical outcomes
- **1 benefitNote** — ethical disclaimer or additional context
- **1 deepDiveHeading** — evocative heading for the detailed section
- **3 deepDive paragraphs** — detailed exploration of the spiritual principles behind the service
- **processSteps:** Reuse `STANDARD_PROCESS` for all service pages

The `STANDARD_PROCESS` steps should be customized based on `{{CONTENT_VOICE}}`:
- **"modern-mystic":** Use wellness-aligned language (consultation → insight → personalized work → ongoing support)
- **"traditional-healer":** Use traditional language (private consultation → psychic reading → customized ritual → spiritual guidance)

### 3.4 Testimonial Generation

If the client has not provided real testimonials, generate 6 placeholder testimonials that:
- Are SHORT (1–2 sentences max)
- Feel emotionally authentic, not generic
- Use "FirstName L." format (e.g. "Maria S.", "João R.")
- Include a `role` field (e.g. "Life Coach", "Entrepreneur", "Teacher")
- Reference specific emotional outcomes (clarity, relief, understanding)
- Vary in tone: some grateful, some surprised, some understated
- All have `rating: 5`
- Match the selected `{{CONTENT_VOICE}}`

### 3.5 About Bio Generation

Generate a single paragraph bio (60–120 words) that:
- Establishes the practitioner's approach and philosophy
- Mentions location and experience
- Uses the practitioner's brand name
- Matches the selected `{{CONTENT_VOICE}}`

### 3.6 About Page Generation

Auto-generate the full about page content:
- **Story:** 2 paragraphs about the practitioner's background and calling
- **Approach:** Headline, description, 4 principles, and an ethical disclaimer
- **Services list:** Derived from the service input, with short descriptions
- **Gallery:** 3 placeholder image entries

---

## 4. Task Execution Steps

Execute these steps IN ORDER. Do not skip any step.

### Step 1 — Validate Inputs

Before writing any code:
- Confirm all required parameters are provided (Identity, Voice, WhatsApp, Services)
- Validate WhatsApp number format (digits only, starts with country code)
- Validate hex color format for any provided palette colors
- Validate domain format (no protocol, no trailing slash)
- Confirm at least 1 service category is provided
- If any required input is missing, STOP and list what is needed

### Step 2 — Update `src/site.config.ts`

This is the primary content file. Update every field using the actual project schema.

Replace ALL placeholder values. For fields not provided (optional overrides), generate appropriate values following the content rules in Section 3.

**Complete field mapping:**

```
practitioner.name           ← {{PRACTITIONER_NAME}}
practitioner.brandName      ← {{BRAND_NAME}}
practitioner.title          ← {{PRACTITIONER_TITLE}}
practitioner.location       ← {{LOCATION}}

site.name                   ← {{SITE_NAME}}
site.domain                 ← {{DOMAIN}}
site.url                    ← https://{{DOMAIN}}
site.language               ← extract from {{LOCALE}} (e.g. "en")
site.locale                 ← {{LOCALE}}

theme.colors.cream          ← {{CREAM}} or default
theme.colors.creamDark      ← {{CREAM_DARK}} or default
theme.colors.forest         ← {{FOREST}} or default
theme.colors.forestLight    ← {{FOREST_LIGHT}} or default
theme.colors.orangeAccent   ← {{ORANGE_ACCENT}} or default
theme.colors.goldWarm       ← {{GOLD_WARM}} or default
theme.colors.marqueeBackground ← {{MARQUEE_BG}} or default
(glass values — keep template defaults)

typography.headlineFont     ← {{HEADLINE_FONT}} or "Playfair Display"
typography.serifFont        ← {{SERIF_FONT}} or "Cormorant Garamond"
typography.bodyFont         ← {{BODY_FONT}} or "Inter"

whatsapp.phone              ← {{WHATSAPP_NUMBER}}
whatsapp.displayPhone       ← {{DISPLAY_PHONE}}
whatsapp.generalMessage     ← generate per voice

seo.title                   ← "{{PRACTITIONER_NAME}} | {{PRACTITIONER_TITLE}}" or custom
seo.description             ← generate (150–160 chars, includes name, title, location)
seo.keywords                ← generate (6–10 keywords: name, services, location)
seo.ogTitle                 ← same as seo.title
seo.ogDescription           ← generate (shorter version of description)
seo.ogUrl                   ← https://{{DOMAIN}}

hero.headline               ← {{HERO_HEADLINE}} as string[] or generate (MUST be array of strings)
hero.subtitle               ← {{HERO_SUBTITLE}} or generate
hero.videoUrl               ← {{VIDEO_URL}}

about.sectionLabel          ← {{ABOUT_SECTION_LABEL}} or generate (e.g. "WELCOME TO {{BRAND_NAME}}")
about.headline              ← {{ABOUT_HEADLINE}} or generate
about.bio                   ← {{ABOUT_BIO}} or generate per Section 3.5
about.portrait.src          ← "/images/about-portrait.jpg"
about.portrait.alt          ← {{BRAND_NAME}}
about.tags                  ← {{ABOUT_TAGS}} or generate from services

aboutPage.hero.sectionLabel ← "ABOUT"
aboutPage.hero.portrait     ← "/images/about-portrait.jpg"
aboutPage.hero.tagline      ← generate
aboutPage.story             ← {{ABOUT_PAGE_STORY}} or generate per Section 3.6
aboutPage.approach          ← {{ABOUT_PAGE_APPROACH}} or generate per Section 3.6
aboutPage.services          ← derive from {{SERVICES}} input
aboutPage.gallery           ← 3 placeholder gallery entries

services.sectionLabel       ← "SERVICES"
services.headline           ← generate
services.subtitle           ← generate
services.items              ← parse {{SERVICES}} into Service[] with children
services.gallery            ← generate 3 GalleryImage entries

howItWorks.sectionLabel     ← "HOW IT WORKS"
howItWorks.headline         ← generate
howItWorks.subtitle         ← generate
howItWorks.steps            ← {{HOW_IT_WORKS_STEPS}} or generate 3 HowItWorksStep entries

testimonials.sectionLabel   ← "TESTIMONIALS"
testimonials.items          ← {{TESTIMONIALS}} or generate per Section 3.4

footer.sectionLabel         ← "CONNECT"
footer.headline             ← generate (evocative, 2–5 words)
footer.subtitle             ← generate

contact.sectionLabel        ← "GET IN TOUCH"
contact.headline            ← "Contact {{PRACTITIONER_NAME}}"
contact.tagline             ← {{CONTACT_TAGLINE}} or generate
contact.labels              ← keep defaults (firstName, lastName, email, phone, message)
contact.placeholders        ← keep defaults or customize
contact.submitText          ← "Send Message"
contact.loadingText         ← "Sending…"
contact.successMessage      ← generate
contact.errorMessage        ← keep default
contact.copyright           ← "© {year} {{PRACTITIONER_NAME}}. All rights reserved."

createTogether.marqueeText  ← {{MARQUEE_TEXT}} or generate
createTogether.repeatCount  ← 6
createTogether.ctaText      ← "BOOK ME"
createTogether.backgroundColor ← same as theme.colors.marqueeBackground
createTogether.textColor    ← "rgba(25, 64, 39, 0.55)" (or derive from forest)

navigation.brandName        ← {{BRAND_NAME}} (uppercase)
navigation.items            ← generate NavItem[] (Home, About, Services, Articles, Connect)
navigation.serviceMenu      ← generate from {{SERVICES}} as ServiceMenuItem[]
navigation.headerCta        ← { text: "Book A Reading", href: "/#contact" }

articles.pageTitle          ← generate or "Insights & Wisdom"
articles.sectionLabel       ← "ARTICLES"
articles.gridLabel          ← "LATEST ARTICLES"
articles.items              ← {{ARTICLES}} or empty array []
articles.pages              ← {{ARTICLES}} pages or empty object {}

email.subjectTemplate       ← "New enquiry from {name}"
email.fieldLabels           ← keep defaults
email.replyFooter           ← "Reply to this email to respond directly to {name}."

servicePages.howItWorksHeadline ← "Your Journey, Step by Step"
servicePages.standardProcess   ← generate STANDARD_PROCESS (4 steps, voice-matched)
servicePages.pages             ← auto-generate per Section 3.3 for every service
```

**CRITICAL:** The `hero.headline` field MUST be an array of strings, not a single string.

### Step 3 — Update `src/app/globals.css` CSS Variables

This step is REQUIRED — colors won't change without updating CSS custom properties.

Map each color input to the `:root` block. **Preserve all existing glass and semantic variables — only change the color hex values:**
```css
:root {
  /* Warm Editorial Palette — update these */
  --cream: {{CREAM}};
  --cream-dark: {{CREAM_DARK}};
  --forest: {{FOREST}};
  --forest-light: {{FOREST_LIGHT}};
  --orange-accent: {{ORANGE_ACCENT}};
  --gold-warm: {{GOLD_WARM}};

  /* Glass system — DO NOT CHANGE these */
  --glass-white: rgba(255, 255, 255, 0.55);
  --glass-white-strong: rgba(255, 255, 255, 0.75);
  --glass-border: rgba(255, 255, 255, 0.6);
  --glass-border-hover: rgba(255, 255, 255, 0.85);

  /* Semantic — update references if palette names change */
  --background: var(--cream);
  --foreground: var(--forest);
}
```

Verify the `@theme inline` block still maps ALL CSS variables to Tailwind tokens. The complete block must include color tokens, glass tokens, semantic tokens, font tokens, AND animation tokens:
```css
@theme inline {
  /* Color tokens — update if palette hex values changed */
  --color-cream: var(--cream);
  --color-cream-dark: var(--cream-dark);
  --color-forest: var(--forest);
  --color-forest-light: var(--forest-light);
  --color-orange-accent: var(--orange-accent);
  --color-gold-warm: var(--gold-warm);

  /* Glass tokens — DO NOT CHANGE */
  --color-glass-white: var(--glass-white);
  --color-glass-white-strong: var(--glass-white-strong);
  --color-glass-border: var(--glass-border);
  --color-glass-border-hover: var(--glass-border-hover);

  /* Semantic tokens — DO NOT CHANGE */
  --color-background: var(--background);
  --color-foreground: var(--foreground);

  /* Font tokens — DO NOT CHANGE unless fonts were customized */
  --font-headline: var(--font-playfair);
  --font-serif: var(--font-cormorant);
  --font-sans: var(--font-inter);

  /* Animation tokens — DO NOT CHANGE */
  --animate-float: float 6s ease-in-out infinite;
  --animate-pulse-glow: pulse-glow 3s ease-in-out infinite;
  --animate-drift: drift 8s ease-in-out infinite;
}
```

Also update the marquee background in `createTogether.backgroundColor` if a custom marquee color was provided.

Verify custom utility classes still work:
- `.glass-panel` — glass card effect
- `.btn-ortiz` — pill button with clip-path fill
- `.section-label` — uppercase orange label

### Step 4 — Verify Tailwind Config

The project uses **Tailwind v4 with CSS-first configuration** — there is NO `tailwind.config.ts` file.

All theme tokens are defined in `globals.css` via `@theme inline`. After updating Step 3, verify:
- All color tokens in `@theme inline` resolve to valid CSS custom properties
- Font tokens (`--font-headline`, `--font-serif`, `--font-sans`) are still correct
- Animation keyframes are preserved

### Step 5 — Update Environment Variable Template

Create or update `.env.example` with the actual env var names used by the project:

```env
# Resend (transactional email — required for contact form)
RESEND_API_KEY=re_xxxxxxxxxxxx

# Contact form email addresses
CONTACT_FROM_EMAIL={{FROM_EMAIL}}
CONTACT_TO_EMAIL={{EMAIL_ADDRESS}}
```

Note: WhatsApp phone is in `site.config.ts`, NOT in env vars.
Note: Analytics IDs are not currently implemented via env vars.

### Step 6 — Verify SEO Metadata

The project uses Next.js Metadata API in `app/layout.tsx`. Verify that:
- `metadata.title` reads from `siteConfig.seo.title`
- `metadata.description` reads from `siteConfig.seo.description`
- `metadata.keywords` reads from `siteConfig.seo.keywords`
- `metadata.openGraph` reads from `siteConfig.seo.og*` fields

Note: `sitemap.ts`, `robots.ts`, and `opengraph-image.tsx` do NOT exist in the template yet. These are optional enhancements — do NOT create them unless specifically requested.

### Step 7 — Build Verification

```bash
npm install
npm run build
npx tsc --noEmit
npm run lint
```

If the build fails:
1. Read the error output carefully
2. Fix the issue (most likely a missing import or type mismatch in site.config.ts)
3. Re-run the build
4. Repeat until clean

### Step 8 — Generate Output Summary

After all steps complete, output a summary:

```
═══════════════════════════════════════════════════════
  SITE GENERATION COMPLETE
═══════════════════════════════════════════════════════

  Site:           {{SITE_NAME}}
  Brand:          {{BRAND_NAME}}
  Practitioner:   {{PRACTITIONER_NAME}} ({{PRACTITIONER_TITLE}})
  Domain:         {{DOMAIN}}
  Voice:          {{CONTENT_VOICE}}
  WhatsApp:       {{DISPLAY_PHONE}}

  Palette:
    Cream:        {{CREAM}}
    Forest:       {{FOREST}}
    Accent:       {{ORANGE_ACCENT}}
    Gold:         {{GOLD_WARM}}
    Marquee:      {{MARQUEE_BG}}

  Services:       [count] service categories configured
  Service Pages:  [count] individual service pages generated
  Testimonials:   [count] testimonials (generated/provided)
  Articles:       [count] articles configured

  Build:          PASSED / FAILED (details)
  Lint:           PASSED / FAILED (details)
  TypeScript:     PASSED / FAILED (details)

═══════════════════════════════════════════════════════
  NEXT STEPS
═══════════════════════════════════════════════════════

  1. Add practitioner portrait:  /public/images/about-portrait.jpg
  2. Add service hero images:    /public/images/services/{slug}-hero.jpg
  3. Add service content images: /public/images/services/{slug}-content.jpg
  4. Add gallery images:         /public/images/gallery-*.jpg
  5. Add how-it-works images:    /public/images/how-*.jpg
  6. Create .env.local with:
     - RESEND_API_KEY
     - CONTACT_FROM_EMAIL
     - CONTACT_TO_EMAIL
  7. Push to GitHub
  8. Connect to Vercel:
     - Import repository
     - Set environment variables
     - Add custom domain: {{DOMAIN}}
  9. Configure Resend:
     - Add domain: {{DOMAIN}}
     - Set DNS records (DKIM, SPF, DMARC)
  10. Test all WhatsApp links on mobile

═══════════════════════════════════════════════════════
```

---

## 5. Quality Checklist

Before reporting completion, verify EVERY item:

### Content Quality
- [ ] Hero headline is an **array of strings** (e.g. `["Clarity is", "Waiting."]`)
- [ ] Hero subtitle is one grounded sentence
- [ ] CTAs use low-pressure language ("Start a conversation", not "Buy Now")
- [ ] About bio matches selected `{{CONTENT_VOICE}}`
- [ ] About page story, approach, and services are populated
- [ ] Service page auto-generated content matches voice rules
- [ ] Testimonials feel authentic, not generic
- [ ] All copy follows the correct voice rules (modern-mystic OR traditional-healer)
- [ ] Footer headline is evocative (2–5 words)
- [ ] Contact section has headline, tagline, labels, placeholders, and messages
- [ ] CreateTogether / marquee text is populated
- [ ] How It Works has 3 steps with titles and descriptions

### Technical Quality
- [ ] `site.config.ts` has NO remaining PLACEHOLDER values
- [ ] `site.config.ts` exports are correctly typed (matches existing interfaces)
- [ ] `globals.css` `:root` colors match `site.config.ts` `theme.colors`
- [ ] `globals.css` `@theme inline` block maps all color variables
- [ ] WhatsApp number is digits only with country code
- [ ] Domain has no protocol prefix and no trailing slash
- [ ] `seo.ogUrl` uses `https://{{DOMAIN}}`
- [ ] `seo.description` is 150–160 characters
- [ ] `.env.example` exists with `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`
- [ ] `navigation.serviceMenu` matches `services.items` structure (same categories + children)
- [ ] `createTogether.backgroundColor` matches `theme.colors.marqueeBackground`
- [ ] `npm run build` exits with code 0
- [ ] `npm run lint` exits with code 0
- [ ] `npx tsc --noEmit` exits with code 0

### Design Consistency
- [ ] Glass settings (blur, saturation, opacity) are unchanged from template defaults
- [ ] Font tokens in `@theme inline` still map correctly
- [ ] Custom utility classes (`.glass-panel`, `.btn-ortiz`, `.section-label`) still work
- [ ] Marquee background color is consistent between CSS and config

---

## 6. Error Handling

| Error | Resolution |
|---|---|
| Missing required parameter | STOP. List all missing parameters. Do not generate partial sites. |
| Build fails on type error in site.config.ts | Check that all arrays match their type definitions. Verify `Service`, `Testimonial`, `ServicePageData`, `NavItem`, `ServiceMenuItem` objects have all required fields. |
| Build fails on import error | Verify site.config.ts export names match what components import. Check for typos. |
| Colors don't appear | Check `globals.css` CSS custom properties match `site.config.ts` `theme.colors`. Both files must be updated — CSS cannot import TypeScript. |
| Service dropdown empty | Check `navigation.serviceMenu` matches `services.items` structure. Parent categories need matching `label` and `href`, children need matching nested `children` arrays. |
| WhatsApp number has spaces or symbols | Strip to digits only. Verify it starts with a valid country code. |
| Domain has protocol (https://) | Strip protocol. Store clean domain in `site.domain`, full URL in `site.url`. |
| hero.headline is a string, not array | MUST be `string[]`. Split into 2-3 array elements for line breaks in the component. |
| Service pages missing content | Verify `servicePages.pages` has an entry for every service (parent + children). Each entry needs all `ServicePageData` fields. |
| Hierarchical services not rendering | Services use `children?: Service[]` for nesting. Parent services have `children` array; leaf services do not. The `navigation.serviceMenu` mirrors this hierarchy with `ServiceMenuItem`. |

---

## 7. Example Invocation

```bash
claude "Execute docs/generate-site.md with these parameters:

Practitioner Name: Mama Aisha Najat
Brand Name: Psychic Beelah
Practitioner Title: Spiritual Healer & Psychic Reader
Location: Johannesburg, South Africa
Site Name: Psychic Beelah
Domain: psychicbeelah.co.za
Locale: en_ZA
Content Voice: traditional-healer
Video URL: https://psychicbeelah.co.za/sitepad-data/uploads/2026/01/6892461-hd_1920_1080_25fps.mp4
WhatsApp Number: 27783885136
Display Phone: +27 78 388 5136
Email Address: mamaaisha@psychicbeelah.co.za
From Email: hello@psychicbeelah.co.za
Services:
- Love Spells | Attraction, Reuniting & Marriage | [attraction-love-spells, get-back-lost-love, gay-love-spells, marriage-love-spells]
- Psychic Reading | Intuitive Guidance & Clarity
- Money Spells | Prosperity & Abundance
"
```
