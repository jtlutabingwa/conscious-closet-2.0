# 🌿 The Conscious Closet

**Empowering mindful fashion choices through education, community, and action.**

A full-stack sustainable fashion platform built with Next.js and AWS serverless architecture. The Conscious Closet educates users about eco-friendly fashion, connects them with sustainable brands, and provides tools for community engagement — including event discovery, idea submissions, and a growing network of conscious consumers.

🔗 **Live Site:** [main.d27864khk00keb.amplifyapp.com](https://main.d27864khk00keb.amplifyapp.com)

---

## 📸 Screenshots

| Home Page | Brands Directory | Events |
|-----------|-----------------|--------|
| Hero section with stats & testimonials | Searchable brand cards with images | Modern event table with resources |

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
- **Modern UI** — Playfair Display + DM Sans typography, staggered animations, card-based layouts, grain texture overlay
- **Responsive design** — Mobile-friendly with collapsible navigation
- **Image gallery** — Searchable sustainable fashion inspirations
- **Brand directory** — Filterable grid of eco-friendly brands with images and descriptions
- **Events calendar** — Upcoming sustainability events and workshops

### Backend & Data
- **Serverless API** — API Gateway + Lambda handling form submissions
- **DynamoDB** — Two tables (Submissions, Users) storing user data and ideas
- **JWT-secured endpoints** — Cognito authorizer protects authenticated routes
- **CORS configured** — Frontend and API communicate seamlessly across domains

### User Authentication
- **Cognito User Pool** — Email-based signup with verification
- **Login / Signup / Verify flow** — Complete auth lifecycle
- **Profile page** — Displays user info, linked submissions, and saved brands
- **Session management** — Auth context provider with automatic token handling
- **Auto-filled forms** — Logged-in users get name/email pre-populated

### DevOps & Infrastructure
- **AWS Amplify** — Auto-deploys from GitHub on every push to `main`
- **S3 + CloudFront** — Static asset hosting with CDN and SSL
- **Billing alerts** — Budget monitors at $10 and $25 thresholds
- **IAM security** — Separate admin user with MFA on root account

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 15, React 19, TypeScript, Tailwind CSS v4 |
| **Fonts** | Playfair Display (display), DM Sans (body) |
| **Auth** | AWS Cognito, aws-amplify SDK |
| **API** | AWS API Gateway (HTTP API) |
| **Backend** | AWS Lambda (Node.js 22.x) |
| **Database** | AWS DynamoDB (on-demand) |
| **Hosting** | AWS Amplify (frontend), S3 + CloudFront (assets) |
| **CI/CD** | GitHub → Amplify auto-deploy |
| **DNS/SSL** | CloudFront (SSL), Route 53 (pending) |

---

## 📁 Project Structure

```
conscious-closet/
├── app/
│   ├── globals.css          # Design system, animations, custom styles
│   ├── layout.tsx           # Root layout with header, footer, auth providers
│   ├── page.tsx             # Home page
│   ├── brands/page.tsx      # Sustainable brand directory
│   ├── events/page.tsx      # Events calendar
│   ├── founder/page.tsx     # Founder bio (Holly Needham)
│   ├── gallery/page.tsx     # Sustainable fashion gallery
│   ├── info/page.tsx        # Sustainability education
│   ├── login/page.tsx       # Login form
│   ├── profile/page.tsx     # User profile dashboard
│   ├── signup/page.tsx      # Registration form
│   ├── submit/page.tsx      # Idea submission (API-connected)
│   ├── take-action/page.tsx # Actionable sustainability tips
│   ├── verify/page.tsx      # Email verification
│   └── why/page.tsx         # Why sustainable fashion matters
├── components/
│   ├── AuthContext.tsx       # Auth state management (Cognito)
│   ├── ConfigureAmplify.tsx  # AWS Amplify configuration
│   ├── Footer.tsx            # Site footer with links
│   └── Header.tsx            # Sticky header with auth UI
├── public/
│   └── images/              # Static images (brands, gallery, founder)
├── package.json
├── tailwind.config.ts
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

### Environment Setup

The app connects to these AWS services (already configured):

| Service | Region | Purpose |
|---------|--------|---------|
| Cognito User Pool | us-east-2 | Authentication |
| API Gateway | us-east-1 | REST API |
| Lambda | us-east-2 | Backend logic |
| DynamoDB | us-east-2 | Data storage |
| Amplify | us-east-1 | Frontend hosting |
| S3 + CloudFront | us-east-2 | Static assets |

---

## 📊 AWS Infrastructure

### DynamoDB Tables

**Submissions**
| Attribute | Type | Role |
|-----------|------|------|
| submissionid | String | Partition Key |
| userID | String | Links to Cognito user |
| name | String | Submitter name |
| email | String | Submitter email |
| idea | String | Submission content |
| eventDate | String | Optional event date |
| createdAt | String (ISO 8601) | Timestamp |
| status | String | pending / approved / featured |

**Users**
| Attribute | Type | Role |
|-----------|------|------|
| userID | String | Partition Key (Cognito sub) |
| displayName | String | Public name |
| email | String | User email |
| campus | String | UNCG, Charlotte, etc. |
| joinedAt | String (ISO 8601) | Registration date |
| sustainabilityScore | Number | Gamification points |
| savedBrands | List | Bookmarked brand IDs |
| completedActions | List | Tracked actions |

### API Endpoints

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | /submissions | JWT | Submit a fashion idea |
| OPTIONS | /submissions | None | CORS preflight |

---

## 🎨 Design System

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Brand Brown | `#8b5e3c` | Headers, accents |
| Brand Dark | `#5a3e36` | Navigation, dark elements |
| Brand Cream | `#f5f1e9` | Backgrounds |
| Brand Linen | `#fffaf0` | Card backgrounds |
| Accent Green | `#4a7c59` | CTAs, success states |
| Accent Sage | `#87a78e` | Secondary green |
| Accent Terracotta | `#c4704b` | Warning, comparison |
| Accent Gold | `#c9a84c` | Highlights, stats |

### Typography
- **Display:** Playfair Display (headings, hero text, quotes)
- **Body:** DM Sans (paragraphs, labels, navigation)

### Animations
- `animate-fade-up` — Elements fade in from below
- `animate-slide-left` / `animate-slide-right` — Horizontal reveals
- `animate-scale-in` — Scale entrance
- `animate-float` — Gentle floating effect
- Staggered delays: `delay-100` through `delay-700`

---

## 🗺️ Roadmap

- [x] **Step 1** — AWS Foundation (S3, CloudFront, billing alerts)
- [x] **Step 2** — Backend API (DynamoDB, Lambda, API Gateway)
- [x] **Step 3** — Next.js frontend migration with Amplify deployment
- [x] **Step 4** — User authentication (Cognito signup/login/verify)
- [ ] **Step 5** — Clothing swap marketplace
- [ ] Custom domain registration
- [ ] SES email confirmations
- [ ] OpenSearch for full-text search
- [ ] Mobile app (React Native)

---

## 💰 Cost Estimate

| Users | Monthly Cost |
|-------|-------------|
| 50 | ~$5 |
| 500 | ~$16 |
| 5,000 | ~$32 |
| 50,000 | ~$134 |

All services are serverless and scale to zero when idle.

---

## 👥 Team

- **Holly Needham** — Founder & Creative Director | UNC Greensboro
- **Jonathan Lutabingwa** — Developer | UNC Charlotte

---

## 📄 License

© 2025 The Conscious Closet | Designed by Lutabingwa Group
