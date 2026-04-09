# Pomponette — Affiliate Wellness Website

## 1. Project Description
Pomponette is a premium, elegant intimate wellness affiliate boutique targeting French-speaking adults. The site promotes Lovehoney products via Webgains affiliate links. No e-commerce, no user accounts, no payments. Pure content + affiliate outbound links.

## 2. Page Structure
- `/` — Accueil (Home)
- `/pour-elle` — Pour Elle (products for her)
- `/pour-lui` — Pour Lui (products for him)
- `/a-deux` — À Deux (couples products) [future phase]
- `/guide-conseils` — Guide & Conseils (blog) [future phase]
- `/a-propos` — À propos [future phase]
- `/contact` — Contact [future phase]
- `/mentions-legales` — Mentions légales
- `/politique-confidentialite` — Politique de confidentialité
- `/politique-cookies` — Politique de cookies
- `/cgu` — CGU
- `/divulgation-affiliation` — Divulgation d'affiliation

## 3. Core Features
- [x] Age verification modal (+18, localStorage)
- [x] Cookie consent banner (GDPR)
- [x] Newsletter form (Brevo-ready)
- [x] Affiliate product grid (no prices)
- [x] SEO meta tags + Open Graph
- [x] Responsive mobile-first layout
- [x] Legal pages (FR)
- [x] Contact form

## 4. Data Model Design
No database needed. Static affiliate site with mock product data.

## 5. Backend / Third-party Integration Plan
- Supabase: Not needed
- Shopify: Not needed
- Stripe: Not needed
- Brevo: Newsletter form (placeholder container #brevo-newsletter-form)
- Webgains/Lovehoney: Affiliate outbound links (rel="nofollow sponsored")

## 6. Development Phase Plan

### Phase 1: Core Pages (Accueil, Pour Elle, Pour Lui)
- Goal: Build the main pages with full design, branding, and affiliate product grids
- Deliverable: Fully styled homepage + 2 category pages

### Phase 2: Additional Pages
- Goal: Guide & Conseils, À Deux, À propos, Contact
- Deliverable: Blog layout, about page, contact form

### Phase 3: Legal Pages
- Goal: All 5 legal pages in French
- Deliverable: Complete legal compliance
