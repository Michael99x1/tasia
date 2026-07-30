# [Hospital Name] — Website Prototype

A 4-page prototype built to show a private hospital what a modern, information-rich
website could look like. Every hospital-specific detail is a bracketed placeholder —
swap these out before going live.

## Pages
- `index.html` — Home: hero, live "Today at [Hospital Name]" status strip, department
  and about teasers, why-us, testimonials, HMO list
- `about.html` — About Us: mission/vision, accreditation, facility stats, milestones
  timeline, standards, doctors panel
- `departments.html` — Full detail on all 9 departments (General Outpatient, Surgery,
  Maternity, Pediatrics, Laboratory, Pharmacy, Dental, Physiotherapy, Emergency Care)
- `contact.html` — Appointment booking form, FAQ, contact details, map placeholder

Shared styling lives in `css/style.css`; the mobile menu script is `js/nav.js`.

## Before going live, replace:
| Placeholder | Found in |
|---|---|
| `[Hospital Name]` | every page (title, header, footer) |
| `[Logo]` (currently an SVG mark) | header `.brand-mark`, all pages |
| `[Street Address, City, State]` | topbar, contact page, footer |
| `[Phone Number]` / `[Emergency Phone Number]` / `[WhatsApp Number]` | topbar, hero, contact page |
| `[Hospital Email Address]` | topbar, contact page, footer |
| `Dr. [Full Name]` + specialties | about.html doctors panel |
| `[HMO Provider 1–4]` | index.html insurance section, contact FAQ |
| `[Year]` milestones | about.html timeline — replace with real founding history |
| `[XX]` stats (years, doctors, beds, patients) | about.html stat band, home hero |
| Photo placeholders (teal blocks with captions) | swap in real photography — exterior, staff, wards |
| `[Registration No.]` / regulatory body | about.html accreditation |

## Notes for the developer
- Fonts (Fraunces / Inter / IBM Plex Mono) load from Google Fonts via `<link>` tags —
  works fine in any normal browser, just needs internet access.
- The appointment form is front-end only (no backend yet). Wire it to email, WhatsApp
  Business API, or a booking service before launch.
- The "Today at [Hospital Name]" status strip and Quick Check widget use sample data.
  If the hospital wants this to be real-time, it needs a small backend/admin panel to
  update wait times and bed availability — otherwise, keep it static and update it
  manually each morning.
- Map placeholder in `contact.html` is ready for a Google Maps embed — just drop in an
  `<iframe>` with the real address.
