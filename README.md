# Tensai Japanese Language Institute — Next.js Website

A full-stack Next.js 14 website for TIJL, converted from the original HTML site.

## Tech Stack
- **Frontend**: Next.js 14 (App Router) + TypeScript
- **Styling**: Custom CSS (no Tailwind) — matches original design exactly
- **Backend**: Next.js API Routes (no external server needed)
- **Data**: JSON files (no database)

## Project Structure

```
tensai-nextjs/
├── app/
│   ├── layout.tsx              # Root layout (Topbar + Header + Footer)
│   ├── globals.css             # All styles
│   ├── page.tsx                # Home page
│   ├── about/page.tsx
│   ├── courses/
│   │   ├── japanese/page.tsx
│   │   ├── jlpt/page.tsx
│   │   └── international/page.tsx
│   ├── fees/page.tsx
│   ├── batch-timing/page.tsx
│   ├── services/
│   │   ├── placement/page.tsx
│   │   ├── counselling/page.tsx
│   │   ├── activities/page.tsx
│   │   └── study-japan/page.tsx
│   ├── gallery/page.tsx
│   ├── contact/page.tsx
│   ├── registration/page.tsx
│   └── api/
│       ├── registrations/route.ts      # GET + POST registrations
│       └── contact-messages/route.ts   # GET + POST messages
├── components/
│   ├── Topbar.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Breadcrumb.tsx
│   ├── HeroSlider.tsx
│   └── CTABand.tsx
├── data/
│   ├── site.json               # All site content (editable!)
│   ├── registrations.json      # Submitted registrations stored here
│   └── contact-messages.json   # Contact form submissions stored here
└── next.config.js
```

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

## API Endpoints

### Registrations
- `GET  /api/registrations` — List all registrations
- `POST /api/registrations` — Submit a new registration

**POST body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+91-9999999999",
  "courseLevel": "Level I — Conversational / N5",
  "batchType": "Morning",
  "dob": "1995-01-01",
  "gender": "Male",
  "city": "Noida",
  "howHeard": "Google Search",
  "message": "..."
}
```

### Contact Messages
- `GET  /api/contact-messages` — List all messages
- `POST /api/contact-messages` — Submit a contact message

**POST body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+91-8888888888",
  "subject": "Course inquiry",
  "message": "I'd like to know more about N4 course."
}
```

## Updating Content

All site content is stored in `data/site.json`. Edit this file to update:
- Hero slides
- Statistics
- Course details
- Fee structure
- Batch timings
- JLPT levels
- Contact information
- And more

## Pages

| URL | Description |
|-----|-------------|
| `/` | Home page with hero slider, stats, highlights |
| `/about` | About TIJL and director |
| `/courses/japanese` | Japanese language course levels |
| `/courses/jlpt` | JLPT preparation info |
| `/courses/international` | International language courses |
| `/fees` | Fee structure with pricing cards |
| `/batch-timing` | Batch schedule table |
| `/services/placement` | Career placement |
| `/services/counselling` | Career counselling |
| `/services/activities` | Extra-curricular activities |
| `/services/study-japan` | Study in Japan guidance |
| `/gallery` | Photo gallery with lightbox |
| `/contact` | Contact form + map |
| `/registration` | Student registration form |
