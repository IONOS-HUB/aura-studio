# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 15 (App Router). Confirmed over the existing Vite + React SPA scaffold because the product depends on local-search discovery (O6) and a client-rendered SPA indexes poorly; Next.js keeps React while adding static/SSR rendering for SEO. The current `src/` Vite scaffold is not yet migrated — this is a recorded decision to act on, not a completed state. Tailwind CSS v4 and GSAP + ScrollTrigger are confirmed dependencies (per client request and PRD §11.1); Google Calendar Appointment Schedules is the confirmed booking integration for Phase 1 (see Capabilities & Constraints).

## Users

Primary: women 20–45 near the studio who discover Aura Beauty Studio on Instagram or TikTok and browse/book from a phone — frequently outside business hours (evenings, Sundays). They decide from photos of finished work, not descriptions, and often have limited mobile data.

## Product Purpose

Convert social-media traffic (Instagram, TikTok, WhatsApp) into booked appointments without requiring a WhatsApp conversation first, and give the owner (María) a single Google Calendar as the source of truth for all bookings so nothing is lost to scattered DMs.

## Positioning

An always-on booking path for a single-operator beauty studio: visitors can see real availability and confirm a slot at any hour (e.g. 11pm) with two-way sync to the owner's actual calendar, instead of the DM-and-wait pattern typical of small local studios in this category.

## Operating Context

- Services offered: uñas (nails), pestañas (lashes), cejas (brows), maquillaje (makeup), depilación (waxing), masajes corporales (body massage) — six categories total.
- Hours: Mon–Sat 08:00–19:00, Sun 08:00–16:00, timezone `America/Guayaquil` (UTC−5). Last appointment is booked according to service duration within those hours. Lunch break and national holidays are not published.
- Current acquisition channels: Instagram (@beautystudio_aura1), TikTok (@beautystudio_aura1), WhatsApp (+593 99 536 8242) as fallback/manual channel.
- Location: Armando Hidrovo y Daniel Reyes (casa esquinera), Ibarra, Imbabura, Ecuador. Sector not specified.
- Team: currently appears to be María alone; open whether other specialists exist and whether they'd need separate calendars.
- Legal jurisdiction: Ecuador — LOPDP (Ley Orgánica de Protección de Datos Personales) applies because the site collects name, phone, email, and (optional) birthdate.

## Capabilities & Constraints

- Booking must sync two-way with Google Calendar, block already-occupied slots, support per-service durations, apply a configurable buffer between appointments (suggested 15 min), and confirm/remind by email.
- Phase 1 booking implementation: Google Calendar Appointment Schedules, embedded on `/` (#reserva) and `/reservar` via the public schedule URL the client provided. Chosen because it writes directly into María's Google Calendar (the source of truth), needs no extra vendor account, and is already live. A custom backend remains out of Phase 1.
- Birthdate field in any form is optional, explicitly labeled with its purpose, never required — LOPDP consent needs a declared purpose, and a required birthdate field hurts conversion.
- No online payments/deposits, no multi-language, no separate team-profile pages, no visitor comment wall, and no invented testimonials in Phase 1 — explicitly excluded, not oversights.
- No customer reviews exist yet; the product must not fabricate them. Legitimate paths: launch without a testimonials section (reserve the space for Phase 2), and/or offer discounted services to early clients in exchange for real reviews.
- Cookie/analytics consent required before GA4 loads (Google Consent Mode v2) — LOPDP-driven, not optional.
- WhatsApp must remain a visible fallback path throughout (floating button, "prefer to coordinate by WhatsApp?" near booking) for visitors who don't want to book directly.
- Published service prices and durations are **referential samples** until the client delivers the real table; they are labeled as such on the site and confirmed before the appointment. They are not the final catalog.
- Cancellation policy (assumed for launch, pending client override): free cancel/reschedule up to 12 hours before the appointment; a delay of more than 15 minutes may require rescheduling.
- Domain is undecided (brief left it blank); a `.com`/`.ec` for "aurabeautystudio" was suggested but availability is unverified.

## Brand Commitments

- Name: Aura Beauty Studio. Slogan: "La belleza de sentirte tú." Descriptor from the logo: "Nails · Lashes · Makeup."
- Logo delivered as PNG (`public/imgs/icon.PNG`, gold on black). A background-removed version and, ideally, a vector (SVG/AI) file are still needed — without a vector, planned signature animation work can't run at full quality.
- Contact email on record: crdiris2428@gmail.com (personal Gmail; a branded address like hola@aurabeautystudio.com was proposed but not decided).
- WhatsApp: +593 99 536 8242.

## Evidence on Hand

- Logo (PNG, gold on black) delivered and used for Open Graph, apple-touch icon, and photo placeholders. Slogan, palette direction, contact details, hours, social handles, and city (Ibarra, Imbabura) delivered.
- No finished-work photos, studio photos, or photos of María working exist yet. Gallery and hero use the lockup as a branded stand-in — not stock photography.
- No customer testimonials exist. Do not fabricate any — see Capabilities & Constraints.
- Per-service prices/durations on the site are referential samples until the real table arrives.
- "Conoce Aura" / "Por qué elegir Aura" body copy is studio-written pending client originals.
- Cancellation policy published as the 12-hour / 15-minute assumption above.

## Product Principles

1. The booking CTA is always reachable — never gated behind scroll depth or animation delay.
2. Never fabricate what doesn't exist yet: no invented testimonials, no stock-photo gallery standing in for real work. Published prices may be referential samples only until the real table is delivered — never presented as a confirmed catalog.
3. Design for the actual usage moment: a phone, often at night, often on limited data — not a desktop-first showcase.
4. Legal and consent requirements (LOPDP, cookie consent, optional birthdate) are load-bearing product constraints, not launch-day add-ons.
5. WhatsApp stays available everywhere as an escape hatch from the booking flow, never removed in favor of the new system.

## Accessibility & Inclusion

WCAG 2.1 AA contrast is a hard requirement (the PRD explicitly flags gold-on-white as a common failure in this category to avoid). Full keyboard navigability with visible focus is required. `prefers-reduced-motion: reduce` must remove all movement-based animation, not just shorten it.
