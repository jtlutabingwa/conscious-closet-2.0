# 🌿 The Conscious Closet

**Empowering mindful fashion choices through education, community, and action.**

A full-stack sustainable fashion platform built with Next.js and AWS serverless architecture. The Conscious Closet educates users about eco-friendly fashion, connects them with sustainable brands, and provides tools for community engagement — including event discovery, idea submissions, and a growing network of conscious consumers.

🔗 **Live Site:** [main.d27864khk00keb.amplifyapp.com](https://main.d27864khk00keb.amplifyapp.com)

---

## 📖 Origin Story

This project started as a class assignment for **ITIS 3135 (Web-Based Application Design and Development)** at UNC Charlotte. The original version was a simple static HTML/CSS/JS site hosted on GitHub Pages, built to promote sustainable fashion awareness for our client, Holly Needham, at UNC Greensboro.

**🔗 Original class project:** [webpages.charlotte.edu/jlutabin/assets/itis3135/project/](https://webpages.charlotte.edu/jlutabin/assets/itis3135/project/)

What started as a 10-page static site with hardcoded content and no backend has evolved into a full-stack cloud application with user authentication, a serverless API, a real database, and a modern React frontend — deployed on AWS infrastructure that can scale to thousands of users.

### Then vs Now

| Feature | Original (Class Project) | Current (AWS Platform) |
|---------|------------------------|----------------------|
| **Hosting** | GitHub Pages (static) | AWS Amplify + S3 + CloudFront |
| **Frontend** | Raw HTML/CSS/JS with `data-include` for components | Next.js 15 + React 19 + TypeScript + Tailwind CSS v4 |
| **Backend** | None — forms showed an `alert()` and discarded data | API Gateway + Lambda + DynamoDB |
| **Database** | None — all content hardcoded in HTML | DynamoDB (Submissions + Users tables) |
| **Authentication** | None | AWS Cognito (email signup, verification, JWT tokens) |
| **Deployment** | Manual file upload | Git push → auto-deploy via Amplify |
| **Design** | Basic CSS with centered layout | Custom design system with Playfair Display + DM Sans, animations, card layouts, grain texture |
| **Search** | Basic client-side `input` filtering | Maintained + improved with modern UI |
| **Images** | Static `<img>` tags | Next.js `<Image>` with optimization and lazy loading |
| **Security** | None | JWT-secured API, IAM roles, CORS, billing alerts |
| **Scalability** | Single static host | Serverless — handles 50 to 50,000 users without code changes |
| **Cost** | Free (GitHub Pages) | ~$5-15/mo (serverless, scales to zero) |

The original project used `HTML.Include.min.js` to inject a shared header and footer into each page — essentially a hand-rolled component system. The new version uses proper React components, server-side rendering, and a real routing system. Every piece of hardcoded content now has a path to becoming dynamic and database-driven.

---

## 🏗️ Architecture

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   Browser    │────▶│  CloudFront  │────▶│  S3 Bucket  │
│   (User)     │     │    (CDN)     │     │  (Static)   │
└──────┬───────┘     └──────────────┘     └─────────────┘
       │
       │  API Calls
       ▼
┌──────────────┐     ┌──────────────┐     ┌─────────────┐
│  AWS Amplify │     │ API Gateway  │────▶│   Lambda    │
│  (Next.js)   │────▶│  (REST API)  │     │ (Node.js)   │
└──────────────┘     └──────┬───────┘     └──────┬──────┘
                            │                     │
                     ┌──────▼───────┐     ┌──────▼──────┐
                     │   Cognito    │     │  DynamoDB   │
                     │  (Auth)      │     │ (Database)  │
                     └──────────────┘     └─────────────┘
```

---

## ✨ Features

### Core Platform
- **9 fully designed pages** — Home, Info, Why Sustainable, Gallery, Brands, Events, Take Action, Submit, Founder
- **Modern UI** — Playfair Display + DM Sans typography, staggered entrance animations, card-based layouts, subtle grain texture overlay
- **Responsive design** — Mobile-friendly with animated hamburger navigation
- **Searchable gallery** — Filter sustainable fashion inspirations by keyword
- **Brand directory** — Filterable grid of eco-friendly brands with images, descriptions, and category tags
- **Events calendar** — Upcoming sustainability events with location indicators and resource links
- **Rotating quotes** — Inspirational sustainability quotes cycle automatically on the Take Action page

### Backend & Data
- **Serverless API** — API Gateway + Lambda handling form submissions
- **DynamoDB** — Two tables (Submissions, Users) storing user-generated content
- **JWT-secured endpoints** — Cognito authorizer protects authenticated routes
- **Auto user creation** — First authenticated submission creates a Users table entry
- **CORS configured** — Frontend and API communicate across domains

### User Authentication
- **Cognito User Pool** — Email-based signup with verification code
- **Complete auth flow** — Login, signup, email verification, and session management
- **Profile page** — Displays user info with linked submissions and saved brands
- **Auth context provider** — Global auth state accessible from any component
- **Auto-filled forms** — Logged-in users get name and email pre-populated
- **Protected routes** — Profile redirects unauthenticated users to login

### DevOps & Infrastructure
- **AWS Amplify** — Auto-deploys from GitHub on every push to `main`
- **S3 + CloudFront** — Static asset hosting with global CDN and SSL
- **Billing alerts** — Budget monitors at $10 and $25 thresholds
- **IAM security** — Dedicated admin user, MFA on root account
- **CLI deployment** — Backup `aws s3 sync` pipeline for static assets

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 15, React 19, TypeScript, Tailwind CSS v4 |
| **Fonts** | Playfair Display (display), DM Sans (body) via Google Fonts |
| **Auth** | AWS Cognito, aws-amplify SDK |
| **API** | AWS API Gateway (HTTP API) with JWT authorizer |
| **Backend** | AWS Lambda (Node.js 22.x) |
| **Database** | AWS DynamoDB (on-demand capacity) |
| **Hosting** | AWS Amplify (frontend), S3 + CloudFront (assets) |
| **CI/CD** | GitHub → Amplify auto-deploy on push |
| **DNS/SSL** | CloudFront (SSL), Route 53 (pending custom domain) |

---

## 📁 Project Structure

```
conscious-closet/
├── app/
│   ├── globals.css          # Design system — colors, animations, components
│   ├── layout.tsx           # Root layout with header, footer, auth providers
│   ├── favicon.ico          # Custom leaf favicon
│   ├── page.tsx             # Home — hero, stats, how it works, testimonials
│   ├── brands/page.tsx      # Brand directory with search and trademark notice
│   ├── events/page.tsx      # Events calendar with resource links
│   ├── founder/page.tsx     # Holly Needham bio and quote
│   ├── gallery/page.tsx     # Sustainable fashion image gallery with search
│   ├── info/page.tsx        # Sustainability education — pillars, fabrics, lifecycle
│   ├── login/page.tsx       # Login form with Cognito auth
│   ├── profile/page.tsx     # User profile dashboard
│   ├── signup/page.tsx      # Registration with email verification
│   ├── submit/page.tsx      # Idea submission — API-connected with JWT auth
│   ├── take-action/page.tsx # Action items, lifestyle tips, rotating quotes
│   ├── verify/page.tsx      # Email verification code entry
│   └── why/page.tsx         # Fast vs sustainable fashion comparison
├── components/
│   ├── AuthContext.tsx       # Global auth state management (Cognito)
│   ├── ConfigureAmplify.tsx  # AWS Amplify SDK configuration
│   ├── Footer.tsx            # Footer with nav links and legal disclaimer
│   └── Header.tsx            # Sticky header with scroll effect and auth UI
├── public/
│   └── images/              # Static images (brands, gallery, founder)
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- AWS account (for backend services)
- Git

### Local Development

```bash
# Clone the repository
git clone https://github.com/jtlutabingwa/concious-closet-2.0.git
cd concious-closet-2.0

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### AWS Services

| Service | Region | Resource |
|---------|--------|----------|
| Cognito User Pool | us-east-2 | `us-east-2_uz7rgMTVd` |
| API Gateway | us-east-1 | `qrd0rlcn9h` |
| Lambda | us-east-2 | `submitIdea` |
| DynamoDB | us-east-2 | `Submissions`, `Users` |
| Amplify | us-east-1 | `d27864khk00keb` |
| S3 | us-east-2 | `concious-closet-frontend` |
| CloudFront | Global | `E3F081P8GFKHG8` |

---

## 📊 Database Schema

### Submissions Table
| Attribute | Type | Role |
|-----------|------|------|
| submissionid | String (UUID) | Partition Key |
| userID | String | Cognito sub (or "anonymous") |
| name | String | Submitter name |
| email | String | Submitter email |
| idea | String | Submission content |
| eventDate | String | Optional event date |
| createdAt | String (ISO 8601) | Timestamp |
| status | String | pending / approved / featured |

### Users Table
| Attribute | Type | Role |
|-----------|------|------|
| userID | String (Cognito sub) | Partition Key |
| displayName | String | Public profile name |
| email | String | User email |
| campus | String | UNCG, Charlotte, etc. |
| joinedAt | String (ISO 8601) | Registration date |
| sustainabilityScore | Number | Gamification points |
| savedBrands | List | Bookmarked brand IDs |
| completedActions | List | Tracked sustainability actions |

### API Endpoints
| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | /submissions | JWT | Submit a sustainable fashion idea |
| OPTIONS | /submissions | None | CORS preflight handling |

---

## 🎨 Design System

### Color Palette
| Name | Hex | Usage |
|------|-----|-------|
| Brand Brown | `#8b5e3c` | Headers, warm accents |
| Brand Dark | `#5a3e36` | Navigation, dark surfaces |
| Brand Cream | `#f5f1e9` | Page background |
| Brand Linen | `#fffaf0` | Card backgrounds |
| Accent Green | `#4a7c59` | CTAs, success states, primary accent |
| Accent Sage | `#87a78e` | Secondary green, highlights |
| Accent Terracotta | `#c4704b` | Warnings, fast fashion comparison |
| Accent Gold | `#c9a84c` | Stats, highlights, achievement |

### Typography
- **Display:** Playfair Display — headings, hero text, blockquotes
- **Body:** DM Sans — paragraphs, labels, navigation, UI elements

### Animation Library
| Class | Effect |
|-------|--------|
| `animate-fade-up` | Fade in from 30px below |
| `animate-fade-in` | Simple opacity fade |
| `animate-slide-left` | Slide in from left |
| `animate-slide-right` | Slide in from right |
| `animate-scale-in` | Scale up from 90% |
| `animate-float` | Gentle floating loop |
| `delay-100` to `delay-700` | Staggered animation delays |

### Component Classes
| Class | Description |
|-------|-------------|
| `.modern-card` | Rounded card with hover lift and shadow |
| `.stat-card` | Gradient-bordered stat display |
| `.cta-section` | Green gradient CTA block with decorative circle |
| `.btn-primary` | Green filled button with hover lift |
| `.btn-secondary` | Green outlined button with fill on hover |
| `.modern-table` | Styled table with gradient header |
| `.section-divider` | Green gradient horizontal rule |
| `.grain` | Subtle noise texture overlay |

---

## 🗺️ Roadmap

### Completed
- [x] **Step 1** — AWS Foundation (S3, CloudFront, IAM, billing alerts, deploy pipeline)
- [x] **Step 2** — Backend API (DynamoDB, Lambda, API Gateway, working submissions)
- [x] **Step 3** — Next.js frontend migration with Amplify auto-deployment
- [x] **Step 4** — User authentication (Cognito signup, login, verify, JWT-secured API)
- [x] **Design Overhaul** — Full visual redesign with custom typography, animations, and modern layout

### Upcoming
- [ ] **Step 5** — Clothing swap marketplace (list items, browse, request swaps)
- [ ] Custom domain registration
- [ ] SES email confirmations for submissions
- [ ] OpenSearch for full-text search across brands and events
- [ ] Analytics pipeline (Kinesis + S3 + Athena)
- [ ] Mobile app (React Native sharing the same API)

---

## 💰 Cost Estimate

All services are serverless and scale to zero when idle.

| User Scale | Monthly Cost | Notes |
|-----------|-------------|-------|
| 50 users | ~$5 | Mostly free tier |
| 500 users | ~$16 | Past free tier on some services |
| 5,000 users | ~$32 | Full serverless pricing |
| 50,000 users | ~$134 | Still cheaper than a single EC2 + RDS setup |

---

## ⚖️ Legal Disclaimers

**Educational Purpose:** The Conscious Closet is a non-commercial, educational platform created to promote awareness of sustainable fashion. We do not sell products or services.

**Trademark Notice:** All brand names, logos, and trademarks featured on this site belong to their respective owners. The Conscious Closet is not affiliated with, sponsored by, or endorsed by any of the brands listed. Brands are featured solely for informational and educational purposes.

**Image Usage:** Images of sustainable fashion brands and products are used for educational, non-commercial purposes. If you are a rights holder and would like content updated or removed, please contact us through the submission form.

**User Content:** Ideas and content submitted through the platform become part of The Conscious Closet community. We reserve the right to feature approved submissions on the site.

---

## 👥 Team

| Role | Name | Institution |
|------|------|------------|
| **Founder & Creative Director** | Holly Needham | UNC Greensboro |
| **Lead Developer** | Jonathan Lutabingwa | UNC Charlotte |

### Acknowledgements
- **ITIS 3135** — Web-Based Application Design and Development (UNC Charlotte) where this project originated
- **Fashion Revolution**, **Good On You**, and **Common Objective** for sustainability resources and inspiration
- **Patagonia**, **Koru Eco Brand**, **Mi Terro**, **Kotn**, and **Reformation** — featured as examples of sustainable fashion leadership

---

## 📄 License

© 2025 The Conscious Closet | Designed & Developed by Lutabingwa Group
