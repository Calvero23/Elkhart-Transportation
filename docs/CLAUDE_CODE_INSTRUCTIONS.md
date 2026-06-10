# CLAUDE_CODE_INSTRUCTIONS.md
# Elkhart Transportation — Website Build Reference
# Version: 0.2 | Synced with: transport_business_prd_v0_2.md + transport_business_project_instructions_v0_1.md

---

## 1. Project Overview

This website is for a regional transportation business based in **Elkhart, Indiana**, operated by **Dennis** (owner/operator). His brother **Joshua** is managing the digital build and systems transformation.

The business currently operates informally. This website is a critical step in moving from a phone-number-only operation to a professional, owned digital presence that generates leads, builds credibility, and supports high-value contract services.

**The business currently pays ~$700–800/month to rent visibility on a third-party SEO domain it does not own. This website eliminates that dependency.**

### Current working brand names (may change)
- Taxi/general side: **Elkhart Taxi**
- NEMT/medical side: **SafeCar Transport**

Do not treat these as final. When in doubt, use neutral language like "Elkhart Transportation" until branding is confirmed.

---

## 2. Source of Truth Documents

Always reference these files when making content, copy, or structural decisions:

| File | Purpose |
|------|---------|
| `transport_business_prd_v0_2.md` | Full business strategy, website PRD, service lines, SEO plan, pricing, NEMT, operations |
| `transport_business_project_instructions_v0_1.md` | Working rules, Dennis/Joshua roles, priorities, tone, output style |
| `docs/CLAUDE_CODE_INSTRUCTIONS.md` | This file — website-specific build instructions |

**If anything in this file conflicts with the PRD, the PRD wins.**

---

## 3. Business Context Claude Code Must Understand

- Dennis handles everything personally: calls, scheduling, dispatch, invoicing, cash, customer service.
- The business is too dependent on his personal phone and informal habits.
- The most valuable future revenue comes from **NEMT, scheduled rides, airport, senior, and business/factory accounts** — not one-off cash taxi rides.
- The website must reflect a professional, trustworthy company that can win contracts with medical brokers, HR managers, and facility coordinators — not just local bar rides.
- The competitor set includes: southbendtaxi.com, eaglecabsouthbend.com, elkharttaxiservice.com, goexpresstravel.com, and others in the Michiana region.

---

## 4. Brand & Design Specifications

| Element | Value |
|---------|-------|
| Primary color | Navy `#0D1B2A` |
| Accent color | Gold `#C9A84C` |
| Background | White `#FFFFFF` |
| Mid-navy (hover states) | `#1A2E42` |
| Body font | DM Sans (Google Fonts, weights 400 500 600 700) |
| Tone | Local, professional, trustworthy — NOT corporate luxury, NOT gig economy |
| Mobile-first | Yes — most visitors will be on phones |
| Load speed | Priority. No heavy JS frameworks. |

### Tone guidance (from project instructions)
> Local, friendly, approachable, professional, confident, trustworthy for medical/senior rides, reliable for scheduled rides, aware of the local area, competitive against poor-quality local taxi experiences.
> Avoid sounding too corporate, too luxury-only, or too cheap.

---

## 5. Full Site Map (per PRD Section 8.5)

Build pages in this priority order:

| Priority | Page | File | Notes |
|----------|------|------|-------|
| 1 | Home | `index.html` | Already started — needs gap-fill (see Section 6) |
| 2 | Contact / Schedule a Ride | `src/pages/contact.html` | Highest conversion priority |
| 3 | NEMT / Medical Transport | `src/pages/nemt.html` | Highest revenue priority |
| 4 | Airport Transportation | `src/pages/airport.html` | Strong SEO + fare value |
| 5 | Senior Transportation | `src/pages/senior.html` | Trust-based, recurring |
| 6 | Scheduled Rides | `src/pages/scheduled-rides.html` | Core differentiator vs Uber/Lyft |
| 7 | Factory / Business Visitor | `src/pages/factory-transport.html` | B2B contract leads |
| 8 | Local Taxi Service | `src/pages/local-taxi.html` | Visibility, but lower margin |
| 9 | Corporate Accounts | `src/pages/corporate-accounts.html` | Business account leads |
| 10 | About | `src/pages/about.html` | Trust, local story, compliance |
| 11 | Service Areas | `src/pages/service-areas.html` | Local SEO anchor page |
| 12 | FAQ | `src/pages/faq.html` | FAQ schema, SEO, conversion |
| 13 | Careers / Drivers | `src/pages/drivers.html` | Driver recruitment |
| 14 | Privacy Policy | `src/pages/privacy.html` | Legal requirement |
| 15 | Terms of Service | `src/pages/terms.html` | Legal requirement |
| Later | City landing pages | `src/pages/cities/[city].html` | Local SEO expansion |
| Later | Popular route pages | `src/pages/routes/[route].html` | Local SEO expansion |

---

## 6. Homepage Gap List (What's Missing from Current index.html)

Current `index.html` has: nav, hero, 3 service cards, trust signals grid, footer.

Per PRD Section 8.4, the following are **missing and must be added**:

| Missing Element | Priority | Notes |
|----------------|----------|-------|
| Sticky mobile call button | HIGH | Click-to-call, always visible on mobile |
| Quick booking / quote form | HIGH | Name, phone, pickup, dropoff, date, time, ride type |
| Popular routes / airport transfers section | HIGH | Flat-rate routes, SEO value |
| Medical and senior transportation section | HIGH | Dedicated callout block, not just a card |
| Business / factory visitor section | MEDIUM | B2B callout with "Partner With Us" CTA |
| Service area map or city list | HIGH | Local SEO signal |
| Reviews / testimonials section | MEDIUM | Add placeholder, fill later |
| FAQ section (brief, 3–5 questions) | MEDIUM | FAQ schema opportunity |
| Safety and reliability standards section | MEDIUM | Expand beyond current trust grid |
| Footer: NAP + hours + service areas + links | HIGH | NAP consistency critical for local SEO |

---

## 7. Required Elements on EVERY Page (per PRD Section 8.8)

Every page must include:

- **Click-to-call button** — visible above the fold on mobile
- **Short ride request form** OR clear link to contact page
- **Service area reference** — at minimum a line like "Serving Elkhart, Goshen, Mishawaka, South Bend, and surrounding areas"
- **Trust message** — at minimum one credential (licensed, insured, dispatched)
- **Scheduling expectation** — e.g., "Call or book online. Rides confirmed before departure."
- **Business inquiry option** — link or mention for facilities/companies

---

## 8. Ride Request Form Fields (per PRD Section 8.8)

Use this form on the homepage and contact page:

- Name
- Phone number
- Pickup address
- Drop-off address
- Date
- Time
- Ride type (dropdown: Local Taxi | Scheduled Ride | Airport | Medical Appointment | Senior Transportation | Factory/Business | Other)
- Number of passengers
- Notes / special needs
- Consent to be contacted checkbox

Use **Formspree** (free tier) for form submission. Replace `YOUR_FORM_ID` placeholder before go-live.

### Business/Facility Inquiry Form Fields

Use this on the corporate accounts and factory transport pages:

- Organization name
- Contact person
- Phone
- Email
- Type of transportation needed
- Estimated ride frequency
- Billing/invoicing needs
- Notes

---

## 9. SEO Requirements (per PRD Sections 8.6, 8.7, 8.9)

### Every page must have:
- Unique `<title>` tag — format: `[Service] in Elkhart, IN | [Business Name]`
- Unique `<meta name="description">` — 140–160 characters, local + service keywords
- One `<h1>` per page — include city name and service type
- `<h2>` and `<h3>` used logically for content structure
- Internal links to related service pages and contact page
- NAP (Name, Address, Phone) in footer — must be identical across all pages

### Homepage must have:
- LocalBusiness schema (JSON-LD in `<head>`)
- NAP in footer
- Service area list

### Service pages must have:
- Service schema where appropriate
- FAQ schema if FAQ section is included

### Target keyword clusters (per PRD Section 8.7):
- `elkhart taxi` / `elkhart cab` / `elkhart transportation`
- `elkhart airport transportation` / `south bend airport transportation`
- `elkhart medical transportation` / `non emergency medical transportation elkhart`
- `elkhart senior transportation`
- `elkhart scheduled rides`
- `elkhart factory transportation` / `elkhart business transportation`
- `taxi near me` (intent-based)

### Technical SEO checklist:
- [ ] XML sitemap (`/sitemap.xml`)
- [ ] Clean URL structure (no `?id=` params)
- [ ] Fast mobile load (test with PageSpeed Insights)
- [ ] All images have `alt` text
- [ ] Google Analytics (GA4) snippet in `<head>`
- [ ] Google Search Console verified via meta tag or DNS
- [ ] Google Business Profile NAP must match site footer exactly

---

## 10. Service Area (for all pages and local SEO)

**Primary:**
- Elkhart, IN
- Goshen, IN
- Mishawaka, IN
- South Bend, IN
- Granger, IN

**Secondary / Extended:**
- Nappanee, IN
- Bristol, IN
- Middlebury, IN
- Osceola, IN
- Nearby Southern Michigan areas (operationally practical only)

**Key destinations to mention:**
- South Bend International Airport (SBN)
- Chicago O'Hare (ORD) — long-distance, quote-based
- Elkhart General Hospital
- Beacon Health facilities
- Local dialysis centers
- RV manufacturers and industrial parks in Elkhart County

---

## 11. Trust Signals & Compliance Messaging

Use these consistently. Do not overstate certifications not yet confirmed.

**Safe to use now:**
- Licensed & Insured
- All Rides Dispatched & Logged Before Departure
- Local Drivers — Elkhart-Based
- Professional Driver Standards
- ADA-Accessible Vehicles Available (only if confirmed with Dennis)
- Drug & Alcohol Tested Drivers (only if program is active)
- HIPAA-Aware Transport (for NEMT/medical pages only)

**Do not claim until confirmed:**
- Medicaid-certified / Medicaid-enrolled (requires broker enrollment)
- Wheelchair accessible (requires vehicle confirmation)
- Any specific broker enrollment (requires completion)

---

## 12. Folder Structure

```
elkhart-transport/
├── index.html                        ← Homepage (needs gap-fill per Section 6)
├── sitemap.xml                       ← Build after all pages exist
├── src/
│   ├── css/
│   │   ├── main.css                  ← Global styles, variables, typography
│   │   └── components.css            ← Nav, footer, cards, buttons, forms
│   ├── js/
│   │   ├── main.js                   ← Nav toggle, sticky CTA
│   │   └── booking.js                ← Form handling, Formspree
│   └── pages/
│       ├── contact.html              ← Build next after homepage
│       ├── nemt.html                 ← NEMT / medical transport
│       ├── airport.html              ← Airport transportation (add this)
│       ├── senior.html               ← Senior transportation (add this)
│       ├── scheduled-rides.html      ← Scheduled rides (add this)
│       ├── factory-transport.html    ← Factory/business visitor
│       ├── local-taxi.html           ← Local taxi (add this)
│       ├── corporate-accounts.html   ← Corporate accounts (add this)
│       ├── about.html
│       ├── service-areas.html        ← Add this — SEO anchor
│       ├── faq.html                  ← Add this — FAQ schema
│       ├── drivers.html              ← Add this — recruitment
│       ├── privacy.html              ← Add this — legal
│       ├── terms.html                ← Add this — legal
│       └── cities/                   ← Phase 2 local SEO pages
│           └── [city-name].html
├── public/
│   ├── images/                       ← Vehicle photos, team photos
│   └── icons/                        ← Favicon
└── docs/
    ├── CLAUDE_CODE_INSTRUCTIONS.md   ← This file
    ├── transport_business_prd_v0_2.md
    └── transport_business_project_instructions_v0_1.md
```

---

## 13. Claude Code Build Prompts — Use In Order

### Step 1 — Fix the homepage (gap-fill)
```
Update index.html to add the following missing sections per the PRD:
1. Sticky mobile call button (fixed bottom bar on mobile, click-to-call)
2. Quick ride request form below the hero (fields: name, phone, pickup address, 
   dropoff address, date, time, ride type dropdown, passengers, notes, consent checkbox)
   Use Formspree action placeholder.
3. Popular routes section with flat-rate airport transfer callouts 
   (South Bend Airport, Chicago O'Hare)
4. Dedicated medical and senior transportation callout block (not just a card)
5. Service area section listing all cities from CLAUDE_CODE_INSTRUCTIONS.md Section 10
6. Placeholder testimonials section (3 cards, lorem content)
7. 5-question FAQ section with FAQ schema JSON-LD
8. Updated footer with full NAP (business name, Elkhart IN, phone placeholder), 
   hours placeholder, service area list, and nav links
9. LocalBusiness JSON-LD schema in the <head>
10. GA4 placeholder snippet in the <head>
Keep all existing sections. Match current brand colors and DM Sans typography.
```

### Step 2 — Contact / Schedule page
```
Build src/pages/contact.html. Include:
- Full ride request form (all fields from CLAUDE_CODE_INSTRUCTIONS.md Section 8)
- Business/facility inquiry form (separate section, all fields from Section 8)
- Formspree action placeholder for both forms
- Click-to-call button with phone placeholder
- Service area list (cities from Section 10)
- Estimated response time message ("We confirm all rides before departure")
- Match index.html nav and footer exactly including NAP
```

### Step 3 — NEMT / Medical Transport page
```
Build src/pages/nemt.html targeting medical transport brokers, Medicaid coordinators, 
discharge planners, and private-pay medical patients. Include:
- What NEMT is and who it serves
- Why contract with us (reliability, documentation, driver standards, HIPAA awareness)
- ADA accessibility note (with disclaimer: contact us to confirm availability)
- Broker enrollment and documentation capabilities
- Driver credential standards
- Ride documentation process (pickup/dropoff records)
- Business/facility inquiry form (Section 8 fields)
- Click-to-call CTA
- Internal links to contact.html and service-areas.html
- Page title: "Non-Emergency Medical Transportation in Elkhart, IN | [Business Name]"
- Meta description targeting NEMT + Elkhart keywords
Match index.html nav and footer.
```

### Step 4 — Airport Transportation page
```
Build src/pages/airport.html. Include:
- Hero targeting airport rides from Elkhart/Goshen/Mishawaka to SBN and ORD
- Flat-rate pricing callout (actual rates TBD — use "Call for rates" placeholder)
- Popular routes section: Elkhart to SBN, Elkhart to ORD, Goshen to SBN, etc.
- Why book with us vs Uber/Lyft for airport (reliability, scheduled pickup, no surge)
- How to book (call or form, confirmed before departure)
- Short ride request form (link to contact.html or embed abbreviated version)
- Page title: "Airport Transportation Elkhart IN | South Bend & Chicago Airport Rides"
Match index.html nav and footer.
```

### Step 5 — Senior Transportation page
```
Build src/pages/senior.html. Include:
- Compassionate, trust-focused tone
- Services: doctor appointments, dialysis, therapy, errands, facility transport
- Driver standards (professional, patient, reliable)
- Scheduling and recurring ride options
- Family/caregiver scheduling option (they can book on behalf of their parent)
- ADA/accessibility note
- Click-to-call and ride request form
- Internal link to contact.html and nemt.html
- Page title: "Senior Transportation Elkhart IN | Medical & Appointment Rides"
Match index.html nav and footer.
```

### Step 6 — Remaining service pages
```
Build these three pages, each with full nav, footer, click-to-call, ride/inquiry form, 
and matching brand styles:

1. src/pages/scheduled-rides.html
   - Why scheduled rides beat Uber/Lyft (reliability, no surge, confirmed pickup)
   - Who it's for: commuters, recurring appointments, predictable weekly rides
   - How scheduling works, confirmation process
   - Page title: "Scheduled Rides Elkhart IN | Reliable Booked Transportation"

2. src/pages/factory-transport.html
   - Target: HR managers and plant supervisors at Elkhart County manufacturers (RV industry focus)
   - Shift transport, visitor transport, contractor transport
   - Zone-flat rate pricing model, contract/account pricing available
   - Business inquiry form (Section 8 fields)
   - Page title: "Factory & Business Transportation Elkhart IN | Shift & Visitor Rides"

3. src/pages/local-taxi.html
   - On-demand local rides, Elkhart and surrounding area
   - Comparison vs Uber/Lyft: local drivers, human dispatch, no surge
   - Minimum fare note, how to request
   - Page title: "Elkhart Taxi Service | Local Cab & On-Demand Rides"
```

### Step 7 — About, Service Areas, FAQ
```
Build these three pages:

1. src/pages/about.html
   - Local business story (Elkhart-based, serving the community)
   - Owner/operator: professional, committed to reliability
   - Driver standards: background checked, drug tested, trained
   - Compliance: licensed, insured, dispatched
   - Why we exist: reliable alternative to rideshare for important rides
   - Page title: "About Us | Elkhart Transportation Company"

2. src/pages/service-areas.html
   - All cities from Section 10 with descriptions
   - Key destinations: SBN, ORD, hospitals, dialysis, factories
   - Internal links to each service page
   - Page title: "Service Areas | Elkhart County & Northern Indiana Transportation"

3. src/pages/faq.html
   - 10–15 questions covering: how to book, pricing, NEMT, airport rides, senior rides,
     service area, driver standards, scheduling, cancellation, payment methods
   - FAQ schema JSON-LD
   - Page title: "FAQ | Elkhart Transportation Questions Answered"
```

### Step 8 — Legal + Drivers pages
```
Build:
1. src/pages/privacy.html — Standard privacy policy (data collected, how used, contact)
2. src/pages/terms.html — Terms of service (ride policies, cancellation, liability)
3. src/pages/drivers.html — Driver recruitment page (requirements, how to apply, 
   contact form with: name, phone, email, license type, vehicle info, notes)
```

### Step 9 — XML Sitemap
```
Generate sitemap.xml listing all HTML pages in the site with their correct relative 
paths. Use today's date as lastmod. Set changefreq to "monthly" for legal pages and 
"weekly" for service and home pages. Priority: 1.0 for homepage, 0.9 for NEMT and 
contact, 0.8 for other service pages, 0.6 for legal/driver pages.
```

### Step 10 — Final SEO and schema audit
```
Review all HTML files and verify:
1. Every page has a unique <title> and <meta description>
2. Every page has exactly one <h1> containing city name and service type
3. All internal links use correct relative paths and resolve correctly
4. Footer NAP is identical on every page (business name, Elkhart IN, phone)
5. Homepage has LocalBusiness JSON-LD schema
6. FAQ page has FAQ schema JSON-LD
7. All images have descriptive alt attributes
8. Mobile nav toggle works on all pages
9. Sticky call button is visible on mobile on all pages
10. Formspree action URLs are present (even as placeholders) on all forms
Report any issues found before marking complete.
```

---

## 14. Deployment (VPS via GitHub)

```bash
# Local setup
git init
git add .
git commit -m "initial site build"
git remote add origin https://github.com/[username]/elkhart-transport.git
git push -u origin main

# On VPS (Ubuntu + Nginx)
cd /var/www
git clone https://github.com/[username]/elkhart-transport.git
# Configure Nginx to serve index.html as root
# Point domain DNS A record to VPS IP

# To deploy updates
cd /var/www/elkhart-transport
git pull origin main
```

Nginx server block example:
```nginx
server {
    listen 80;
    server_name elkhartransportation.com www.elkhartransportation.com;
    root /var/www/elkhart-transport;
    index index.html;
    location / {
        try_files $uri $uri/ =404;
    }
}
```

---

## 15. Before Go-Live Checklist

- [ ] Replace all phone number placeholders with Dennis's actual business number
- [ ] Replace Formspree `YOUR_FORM_ID` with real form IDs
- [ ] Replace GA4 `G-XXXXXXXXXX` with real measurement ID
- [ ] Add real business hours to footer
- [ ] Confirm ADA vehicle availability with Dennis before publishing ADA claim
- [ ] Confirm drug testing program is active before publishing that trust signal
- [ ] Verify NEMT broker enrollment status before making specific compliance claims
- [ ] Add real photos to `/public/images/` (vehicles, driver, local area)
- [ ] Add favicon to `/public/icons/favicon.ico`
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Verify Google Business Profile NAP matches site footer exactly
- [ ] Test all forms end-to-end (submit → receive email confirmation)
- [ ] Test site on mobile (iPhone + Android)
- [ ] Run PageSpeed Insights on homepage and fix any critical issues

---

## 16. Phase 2 — After Launch

- Individual city landing pages (`/cities/goshen`, `/cities/mishawaka`, etc.)
- Popular route pages (`/routes/elkhart-to-chicago`, etc.)
- Online booking with date/time picker (after operations system is stable)
- Driver portal (separate subdomain)
- Spanish-language versions of key service pages
- Review/testimonial collection system
- Missed call follow-up automation
- Ride request form → Airtable/Google Sheets automation
