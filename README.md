# E-Basuramo — MVP Web App v2

E-waste pickup scheduling platform for Metro Manila SMEs, schools, and offices.
Built as an academic MVP by **E-Basureros** (DLSU-Manila, April 2026).

---

## File Structure

```
ebasuramo/
├── index.html            ← Single-page app (all 16 pages in one phone shell)
├── css/
│   ├── base.css          ← Variables, reset, phone shell, shared layout & components
│   ├── home.css          ← Onboarding, Login, Register, Home dashboard
│   ├── schedule.css      ← Schedule Pickup form, Track Pickup live view
│   ├── history.css       ← History list, Pickup Detail, Rate & Review modal
│   ├── collectors.css    ← Find Collectors list, Collector Detail profile
│   └── profile.css       ← Profile, Plans, Notifications, Data Wipe,
│                            Impact Analytics, Organization Details
└── js/
    ├── navigation.js     ← showPage(), showToast(), nav/status-bar management
    ├── home.js           ← Onboarding, login, register interactions
    ├── schedule.js       ← Chip toggle, date/time slot selection, submit
    ├── history.js        ← Filter tabs, pickup detail, rate & review modal
    ├── collectors.js     ← Filter chips, dynamic collector detail population
    └── profile.js        ← Plans, notifications, data wipe, analytics, sign out
```

---

## All Pages (16 total)

| Page ID            | Nav Entry Point                      | Description                                       |
|--------------------|--------------------------------------|---------------------------------------------------|
| `onboarding`       | App launch (default)                 | Splash with feature highlights and CTAs           |
| `login`            | Onboarding → "Log in"                | Email/password + Google login                     |
| `register`         | Onboarding → "Get Started"           | Org type, name, address, RA 9003 consent          |
| `home`             | After login / bottom nav             | Dashboard: active pickup, stats, nearby collectors|
| `schedule`         | Home quick action / bottom nav       | Full pickup booking form with collector match     |
| `track`            | Home "Track →" / History card        | Live pickup tracking with animated map + timeline |
| `history`          | Bottom nav                           | Filter tabs, cert preview, history cards          |
| `pickup-detail`    | Tapping a history card               | Full pickup info, items, cert download, rate CTA  |
| `collectors`       | Home quick action / "See all"        | Searchable, filterable EMB collector list         |
| `collector-detail` | Tapping any collector card           | Profile, stats, waste types, reviews, schedule CTA|
| `profile`          | Bottom nav                           | Account, plan, analytics, privacy, support links  |
| `plans`            | Profile → Subscription Plans         | Free / SME Pro ₱299 / Enterprise ₱499             |
| `notifications`    | Profile → Notifications / Home avatar| Pickup alerts, cert ready, plan renewal           |
| `datawipe`         | Quick action / Profile privacy menu  | Secure data destruction info, pricing, booking    |
| `analytics`        | Profile → Impact Analytics           | Bar chart, waste breakdown, milestones, CO₂ saved |
| `org-details`      | Profile avatar ✏️ / menu item        | Editable org name, type, address, contact         |

---

## Revenue Streams in MVP

| Feature                  | Where in App                         | Business Plan Revenue Stream |
|--------------------------|--------------------------------------|------------------------------|
| In-app ad banner         | Home page                            | Advertising                  |
| 10% platform fee note    | Schedule form info box               | Per-transaction commission   |
| SME Pro ₱299/mo          | Plans page + Profile sub-card        | Subscription                 |
| Enterprise ₱499/mo       | Plans page                           | Subscription                 |
| Data Wipe add-on ₱299    | Data Wipe page + Schedule dropdown   | Value-added service          |
| RA 9003 cert ₱199        | Schedule dropdown                    | Value-added service          |

---

## Compliance References

- **RA 9003** — Collector accreditation, pickup certificates
- **RA 6969** — Toxic substances / hazardous waste (collector badge)
- **RA 10173** — Data privacy (login, data wipe page, org details, register consent)
- **DoD 5220.22-M** — Data destruction standard (data wipe page)
- **EMB** — Environmental Management Bureau (collector badge, accreditation numbers)

---

## How to Run

1. Keep the file structure intact (all folders relative to `index.html`).
2. Open `index.html` in any modern browser.
3. App starts on the **Onboarding** screen. Tap **Get Started** or **Log In** to enter.

> No build tools, frameworks, or server required.
> Google Fonts require an internet connection.
