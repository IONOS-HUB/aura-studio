# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 15 (App Router). Confirmed over the existing Vite + React SPA scaffold because the product depends on local-search discovery (O6) and a client-rendered SPA indexes poorly; Next.js keeps React while adding static/SSR rendering for SEO. The current `src/` Vite scaffold is not yet migrated — this is a recorded decision to act on, not a completed state. Tailwind CSS v4 and GSAP + ScrollTrigger are confirmed dependencies (per client request and PRD §11.1); Cal.com is the confirmed booking integration for Phase 1 (see Capabilities & Constraints).

## Users

Primary: women 20–45 near the studio who discover Aura Beauty Studio on Instagram or TikTok and browse/book from a phone — frequently outside business hours (evenings, Sundays). They decide from photos of finished work, not descriptions, and often have limited mobile data.

## Product Purpose

Convert social-media traffic (Instagram, TikTok, WhatsApp) into booked appointments without requiring a WhatsApp conversation first, and give the owner (María) a single Google Calendar as the source of truth for all bookings so nothing is lost to scattered DMs.

## Positioning

An always-on booking path for a single-operator beauty studio: visitors can see real availability and confirm a slot at any hour (e.g. 11pm) with two-way sync to the owner's actual calendar, instead of the DM-and-wait pattern typical of small local studios in this category.

## Operating Context

- Services offered: uñas (nails), pestañas (lashes), cejas (brows), maquillaje (makeup), depilación (waxing), masajes corporales (body massage) — six categories total.
- Hours: Mon–Sat 08:00–19:00, Sun 08:00–16:00, timezone `America/Guayaquil` (UTC−5). Open: whether there's a lunch break, national holidays, and whether the last slot *starts* or *ends* at closing time.
- Current acquisition channels: Instagram (@beautystudio_aura1), TikTok (@beautystudio_aura1), WhatsApp (+593 99 536 8242) as fallback/manual channel.
- Location: "Armando Hidrovo y Daniel Reyes (casa esquinera)" — city/sector still missing, needed for the map and local SEO.
- Team: currently appears to be María alone; open whether other specialists exist and whether they'd need separate calendars.
- Legal jurisdiction: Ecuador — LOPDP (Ley Orgánica de Protección de Datos Personales) applies because the site collects name, phone, email, and (optional) birthdate.

## Capabilities & Constraints

- Booking must sync two-way with Google Calendar, block already-occupied slots, support per-service durations, apply a configurable buffer between appointments (suggested 15 min), and confirm/remind by email.
- Phase 1 booking implementation: Cal.com embedded with custom styling — chosen over a native Google Calendar booking page (too limited on branding) and a fully custom backend+API system (8–12 days, high maintenance burden a one-person business shouldn't carry in v1). Revisit a custom system only if volume later justifies it.
- Birthdate field in any form is optional, explicitly labeled with its purpose, never required — LOPDP consent needs a declared purpose, and a required birthdate field hurts conversion.
- No online payments/deposits, no multi-language, no separate team-profile pages, no visitor comment wall, and no invented testimonials in Phase 1 — explicitly excluded, not oversights.
- No customer reviews exist yet; the product must not fabricate them. Legitimate paths: launch without a testimonials section (reserve the space for Phase 2), and/or offer discounted services to early clients in exchange for real reviews.
- Cookie/analytics consent required before GA4 loads (Google Consent Mode v2) — LOPDP-driven, not optional.
- WhatsApp must remain a visible fallback path throughout (floating button, "prefer to coordinate by WhatsApp?" near booking) for visitors who don't want to book directly.
- Six services still need real durations and prices from the client before the booking module can be configured — currently blocking.
- Domain is undecided (brief left it blank); a `.com`/`.ec` for "aurabeautystudio" was suggested but availability is unverified.

## Brand Commitments

- Name: Aura Beauty Studio. Slogan: "La belleza de sentirte tú." Descriptor from the logo: "Nails · Lashes · Makeup."
- Logo delivered as PNG only; a background-removed version and, ideally, a vector (SVG/AI) file are still needed — without a vector, planned signature animation work can't run at full quality.
- Contact email on record: crdiris2428@gmail.com (personal Gmail; a branded address like hola@aurabeautystudio.com was proposed but not decided).
- WhatsApp: +593 99 536 8242.

## Evidence on Hand

- Logo (PNG, with background) delivered. Slogan, palette direction, contact details, address (partial), hours, and social handles delivered.
- No finished-work photos, studio photos, or photos of María working exist yet — all required before the gallery (a core trust signal for this audience) can be built. This is the top content risk for the project.
- No customer testimonials exist. Do not fabricate any — see Capabilities & Constraints.
- No per-service pricing/duration data yet.
- No "Conoce Aura" or "Por qué elegir Aura" body copy yet.
- No cancellation policy text yet (needed for legal pages and to reduce no-shows).

## Product Principles

1. The booking CTA is always reachable — never gated behind scroll depth or animation delay.
2. Never fabricate what doesn't exist yet: no invented testimonials, no placeholder pricing, no stock-photo gallery standing in for real work.
3. Design for the actual usage moment: a phone, often at night, often on limited data — not a desktop-first showcase.
4. Legal and consent requirements (LOPDP, cookie consent, optional birthdate) are load-bearing product constraints, not launch-day add-ons.
5. WhatsApp stays available everywhere as an escape hatch from the booking flow, never removed in favor of the new system.

## Accessibility & Inclusion

WCAG 2.1 AA contrast is a hard requirement (the PRD explicitly flags gold-on-white as a common failure in this category to avoid). Full keyboard navigability with visible focus is required. `prefers-reduced-motion: reduce` must remove all movement-based animation, not just shorten it.
