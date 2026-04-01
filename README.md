# 🌿 The Conscious Closet

## 🚨 The Problem

The fashion industry is one of the largest polluters on the planet. It produces **92 million tons** of textile waste annually, consumes **2,700 liters of water** to make a single cotton shirt, and accounts for **10% of global carbon emissions** — more than international flights and maritime shipping combined. Despite growing awareness, most consumers don't know where to start when it comes to making sustainable choices. The information is scattered, the alternatives are hard to find, and fast fashion makes it too easy to look away.

Meanwhile, students and young adults — the generation most vocal about climate change — lack a centralized platform that educates them about sustainable fashion, connects them with ethical brands, and gives them tools to actually take action in their daily lives.

## 💡 The Solution

**The Conscious Closet** is a full-stack educational platform that bridges the gap between awareness and action in sustainable fashion. Instead of just telling people that fast fashion is harmful, we give them a place to learn *why* it matters, discover *who* is doing it right, and take *concrete steps* toward a more mindful wardrobe.

The platform provides:
- **Education** — comprehensive information about sustainable fabrics, the lifecycle of fashion, and the real cost of fast fashion
- **Brand discovery** — a curated, searchable directory of 20 verified sustainable brands across categories like outdoor, luxury, footwear, and essentials
- **Community engagement** — event listings, idea submissions, and tools for users to share their sustainability journey
- **Personalization** — user accounts with saved brands, submission history, and profile dashboards
- **Accessibility** — a public version anyone can browse without creating an account, plus a full-featured platform for engaged users

Built on AWS serverless infrastructure, the platform costs under $15/month to operate and can scale from 50 users to 50,000 without changing a single line of code.

🔗 **Live Site (Public):** [public.d27864khk00keb.amplifyapp.com](https://public.d27864khk00keb.amplifyapp.com/) — Browse freely, no account needed

🔗 **Live Site (Full Platform):** Available on request — [Connect on LinkedIn](https://linkedin.com/in/YOUR_PROFILE) for access to user accounts, submissions, and the complete platform

---

## 📖 Origin Story

This project started as a class assignment for **ITIS 3135 (Web-Based Application Design and Development)** at UNC Charlotte. The original version was a simple static HTML/CSS/JS site hosted on GitHub Pages, built to promote sustainable fashion awareness for our client Holly Needham at UNC Greensboro.

**🔗 Original class project:** [webpages.charlotte.edu/jlutabin/assets/itis3135/project/](https://webpages.charlotte.edu/jlutabin/assets/itis3135/project/)

Recognizing the potential to turn a class project into something that could genuinely help people make better fashion choices, we migrated the entire application to AWS and rebuilt it from the ground up. What started as a 10-page static site with hardcoded content and no backend has evolved into a full-stack cloud application with user authentication, a serverless API, a real database, and a modern React frontend — deployed on infrastructure that can scale to thousands of users.

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
| **Search** | Basic client-side `input` filtering | Maintained + improved with tag-based filtering |
| **Images** | Static `<img>` tags | Next.js `<Image>` with optimization and lazy loading |
| **Security** | None | JWT-secured API, input sanitization, rate limiting, IAM roles, CORS, billing alerts |
| **Notifications** | None | SNS email alerts for submissions and signups |
| **User Features** | None | Save brands, view submissions, password reset |
| **Scalability** | Single static host | Serverless — handles 50 to 50,000 users without code changes |
| **Cost** | Free (GitHub Pages) | ~$5-15/mo (serverless, scales to zero) |

---

## 📚 Inspired By

This platform was inspired by Elizabeth L. Cline's book *The Conscious Closet: The Revolutionary Guide to Looking Good While Doing Good*, which opened our eyes to the true impact of fast fashion. We encourage everyone to [read the book](https://www.elizabethlcline.com/the-conscious-closet).

---

## 🏗️ Architecture

```
┌─────────────┐
│   Browser    │
│   (User)     │
└──────┬───────┘
       │
   ┌───┴────────────────────────┐
   │              │             │
   ▼              ▼             ▼
┌────────┐  ┌──────────┐  ┌─────────┐
│Amplify │  │   API    │  │Cognito  │
│Next.js │  │ Gateway  │  │  Auth   │
│CI/CD   │  │  HTTP    │  │  JWT    │
└───┬────┘  └────┬─────┘  └────┬────┘
    │            │              │
    ▼            ▼              │
┌────────┐  ┌──────────┐       │
│GitHub  │  │ Lambda   │◄──────┘
│  Repo  │  │ Node.js  │
└────────┘  └────┬─────┘
                 │
          ┌──────┴──────┐
          ▼             ▼
    ┌──────────┐  ┌─────────┐
    │DynamoDB  │  │  SNS    │
    │ Tables   │  │ Alerts  │
    └──────────┘  └─────────┘
```

---

## ✨ Features

### Core Platform
- **9 fully designed pages** — Home, Info, Why Sustainable, Brands, Events, Take Action, Submit, Founder, Profile
- **Modern UI** — Playfair Display + DM Sans typography, staggered entrance animations, card-based layouts, subtle grain texture overlay
- **Responsive design** — Mobile-friendly with animated hamburger navigation and sticky header with scroll effect
- **20 sustainable brands** — Searchable, filterable directory with tag-based categories (Outdoor, Essentials, Luxury, Footwear, Activewear, Denim, Fair Trade, etc.)
- **Events calendar** — Upcoming sustainability events with location indicators and resource links
- **Rotating quotes** — Inspirational sustainability quotes cycle automatically on the Take Action page

### User Accounts & Personalization
- **Email signup with verification** — Cognito-powered registration with 6-digit email verification codes
- **Login with session management** — JWT tokens stored client-side, auto-refresh, persistent sessions
- **Password reset** — Two-step forgot password flow with code verification and full password validation
- **User profile dashboard** — View account details, submission history, and saved brands in one place
- **Save brands** — Heart button on brand cards to save/unsave favorites, synced to DynamoDB Users table
- **View submissions** — Profile page displays all past submissions with color-coded status badges (pending/approved/featured) and timestamps
- **Auto-filled forms** — Logged-in users get name and email pre-populated on the submission form

### Backend & API
- **Serverless API** — API Gateway (HTTP API) with multiple Lambda functions
- **6 API endpoints:**

| Method | Route | Auth | Lambda | Description |
|--------|-------|------|--------|-------------|
| POST | /submissions | JWT | submitIdea | Submit a sustainable fashion idea |
| GET | /submissions/my | JWT | getSubmissions | Fetch user's submission history |
| GET | /brands/saved | JWT | getSavedBrands | Get user's saved brands list |
| POST | /brands/saved | JWT | savedBrands | Save a brand to favorites |
| DELETE | /brands/saved | JWT | savedBrands | Remove a brand from favorites |
| OPTIONS | /* | None | — | CORS preflight handling |

- **DynamoDB** — Two tables (Submissions with GSI, Users) storing user-generated content
- **SNS notifications** — Email alerts sent to admin when a new submission is received or a new user signs up
- **Cognito Post Confirmation trigger** — Lambda fires on every new user verification to notify admin

### DevOps & Infrastructure
- **AWS Amplify** — Auto-deploys from GitHub on every push to `main`
- **Multi-branch deployment** — `main` branch (full app with auth) and `public` branch (educational only, no auth)
- **S3 + CloudFront** — Static asset hosting with global CDN and SSL (backup site)
- **Billing alerts** — Budget monitors at $10 and $25 thresholds
- **IAM security** — Dedicated admin user, MFA on root account
- **CLI deployment** — Backup `aws s3 sync` pipeline for static assets

---

## 🔒 Security

### Authentication Security
- **AWS Cognito** — Managed authentication handling password hashing, brute force protection, and token management
- **JWT token verification** — API Gateway validates tokens against Cognito's public keys before requests reach Lambda
- **Secure Remote Password (SRP)** — Passwords never travel over the network in plain text during login
- **Email verification required** — Users must verify their email before accounts become active
- **Password policy** — Minimum 8 characters with uppercase, lowercase, and number requirements enforced on both client and server

### Input Sanitization
All user inputs are sanitized on both the client and server side to prevent injection attacks.

- **Server-side (Lambda):** All functions strip HTML tags (`<script>`, `<img>`, etc.), remove dangerous characters (`< > ' " ; \``), and enforce maximum field lengths (name: 100, email: 254, idea: 2000, date: 10)
- **Client-side (React):** All forms run inputs through a `sanitize()` function before sending to the API
- **Email validation** — Regex validation on both client and server to reject malformed addresses
- **Date format validation** — Event dates checked against MM/DD/YYYY pattern
- **Name validation** — Signup only allows letters, spaces, hyphens, and apostrophes
- **Verification code filtering** — Only digits accepted, automatically stripped to exactly 6 characters
- **Search input sanitization** — Brand search fields strip HTML and dangerous characters on every keystroke
- **Brand name sanitization** — Save brand requests sanitize the brand name server-side before writing to DynamoDB

### Rate Limiting
Multiple layers of rate limiting prevent abuse at both the application and infrastructure level.

- **Submission rate limiting** — Maximum 5 submissions per user per 24-hour period, enforced server-side via DynamoDB GSI query checking `createdAt` timestamps
- **Login attempt limiting** — Client-side lockout after 5 failed login attempts per session
- **Verification code resend limiting** — Maximum 3 resend attempts per session
- **API Gateway throttling** — 10 requests per second with burst of 20 on the submission endpoint
- **Saved brands limit** — Maximum 50 saved brands per user to prevent database bloat

### Infrastructure Security
- **S3 bucket private** — Origin Access Control ensures only CloudFront can read from the bucket; no public access
- **IAM roles** — Lambda execution roles have only the permissions they need (DynamoDB, SNS)
- **MFA on root account** — Multi-factor authentication on the AWS root user
- **Separate IAM admin** — Day-to-day work uses an IAM user, never the root account
- **Billing alerts** — Budget monitors at $10 and $25 prevent unexpected charges
- **CORS configuration** — API Gateway configured with specific allowed origins, headers, and methods
- **HTTPS everywhere** — SSL/TLS on all endpoints via CloudFront, Amplify, and API Gateway

### Error Handling
- **Friendly error messages** — Login errors say "Incorrect email or password" instead of revealing whether an email exists
- **Graceful failures** — SNS notification failures don't block user submissions; the submission still saves
- **JSON parse protection** — Malformed request bodies are caught and return a 400 error before any processing
- **CloudWatch logging** — All Lambda errors logged for debugging without exposing internal details to users
- **Rate limit responses** — 429 status codes with clear messages telling users when they can try again

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 15, React 19, TypeScript, Tailwind CSS v4 |
| **Fonts** | Playfair Display (display), DM Sans (body) via Google Fonts |
| **Auth** | AWS Cognito, aws-amplify SDK |
| **API** | AWS API Gateway (HTTP API) with JWT authorizer |
| **Backend** | AWS Lambda (Node.js 22.x) — 5 functions |
| **Database** | AWS DynamoDB (on-demand) — 2 tables + 1 GSI |
| **Notifications** | AWS SNS (email alerts to admin) |
| **Hosting** | AWS Amplify (frontend), S3 + CloudFront (backup) |
| **CI/CD** | GitHub → Amplify auto-deploy on push (multi-branch) |
| **DNS/SSL** | CloudFront (SSL), Route 53 (pending custom domain) |

---

## 📁 Project Structure

```
conscious-closet/
├── app/
│   ├── globals.css             # Design system — colors, animations, components
│   ├── layout.tsx              # Root layout with header, footer, auth providers
│   ├── favicon.ico             # Custom leaf favicon
│   ├── page.tsx                # Home — hero, stats, how it works, testimonials
│   ├── brands/page.tsx         # 20 brands with save hearts and tag filtering
│   ├── events/page.tsx         # Events calendar with resource links
│   ├── founder/page.tsx        # Holly Needham bio and quote
│   ├── info/page.tsx           # Sustainability education + inspired by section
│   ├── login/page.tsx          # Login with forgot password link
│   ├── profile/page.tsx        # Dashboard — submissions + saved brands
│   ├── reset-password/page.tsx # Two-step password reset flow
│   ├── signup/page.tsx         # Registration with full validation
│   ├── submit/page.tsx         # Idea submission with rate limit handling
│   ├── take-action/page.tsx    # Action items, lifestyle tips, rotating quotes
│   ├── verify/page.tsx         # Email verification with resend limiting
│   └── why/page.tsx            # Fast vs sustainable fashion comparison
├── components/
│   ├── AuthContext.tsx          # Global auth state management (Cognito)
│   ├── ConfigureAmplify.tsx     # AWS Amplify SDK configuration
│   ├── Footer.tsx              # Footer with nav links and legal disclaimer
│   └── Header.tsx              # Sticky header with scroll effect and auth UI
├── public/
│   └── images/
│       └── brands/             # Brand logos and images (20 brands)
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
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

> **Note:** The frontend runs locally at localhost:3000 with full navigation and page rendering. Form submissions, user authentication, brand saving, and submission history require the AWS backend services (API Gateway, Lambda, DynamoDB, Cognito) which are configured separately and not included in this repo.

### AWS Services

| Service | Region | Resource |
|---------|--------|----------|
| Cognito User Pool | us-east-2 | `us-east-2_uz7rgMTVd` |
| API Gateway | us-east-1 | `qrd0rlcn9h` |
| Lambda Functions | us-east-2 | `submitIdea`, `getSubmissions`, `savedBrands`, `getSavedBrands`, `newUserNotification` |
| DynamoDB | us-east-2 | `Submissions` (+ GSI), `Users` |
| SNS | us-east-2 | `submission-creation` |
| Amplify | us-east-1 | `d27864khk00keb` |
| S3 | us-east-2 | `concious-closet-frontend` |
| CloudFront | Global | `E3F081P8GFKHG8` |

---

## 📊 Database Schema

### Submissions Table
| Attribute | Type | Role |
|-----------|------|------|
| submissionid | String (UUID) | Partition Key |
| userID | String | GSI Partition Key — Cognito sub or email |
| name | String | Submitter name (sanitized, max 100) |
| email | String | Submitter email (validated, max 254) |
| idea | String | Submission content (sanitized, max 2000) |
| eventDate | String | Optional event date (MM/DD/YYYY validated) |
| createdAt | String (ISO 8601) | GSI Sort Key — timestamp |
| status | String | pending / approved / featured |

**Global Secondary Index:** `userID-createdAt-index` — enables querying submissions by user and 24-hour rate limiting checks.

### Users Table
| Attribute | Type | Role |
|-----------|------|------|
| userID | String (Cognito sub) | Partition Key |
| displayName | String | Public profile name |
| email | String | User email |
| campus | String | UNCG, Charlotte, etc. |
| joinedAt | String (ISO 8601) | Registration date |
| sustainabilityScore | Number | Gamification points |
| savedBrands | List of Strings | Bookmarked brand names (max 50) |
| completedActions | List of Strings | Tracked sustainability actions |

---

## 🗺️ Roadmap

### Completed
- [x] AWS Foundation (S3, CloudFront, IAM, billing alerts, deploy pipeline)
- [x] Backend API (DynamoDB, Lambda, API Gateway, working submissions)
- [x] Next.js frontend migration with Amplify auto-deployment
- [x] User authentication (Cognito signup, login, verify, JWT-secured API)
- [x] Full visual redesign with custom typography, animations, and modern layout
- [x] Security hardening — input sanitization, rate limiting, API throttling
- [x] SNS notifications — email alerts for submissions and new user signups
- [x] Password reset — forgot password flow with code verification
- [x] Save brands — heart-based save system with profile display
- [x] Submission history — view past submissions on profile with status badges
- [x] Multi-branch deployment — public (no auth) and main (full app) branches
- [x] Legal disclaimers — trademark notices, inspired by section, educational purpose

### Upcoming
- [ ] Custom domain registration
- [ ] SES email confirmations for submissions
- [ ] OpenSearch for full-text search across brands and events
- [ ] Analytics pipeline (Kinesis + S3 + Athena)

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

**Inspired By:** This platform was inspired by Elizabeth L. Cline's book *The Conscious Closet*. We are not affiliated with or endorsed by the author or publisher.

**Trademark Notice:** All brand names, logos, and trademarks featured on this site belong to their respective owners. The Conscious Closet is not affiliated with, sponsored by, or endorsed by any of the brands listed. Brands are featured solely for informational and educational purposes.

**Image Usage:** Images are used for educational, non-commercial purposes. If you are a rights holder and would like content updated or removed, please contact us through the submission form.

---

## 👥 Team

| Role | Name | Institution |
|------|------|------------|
| **Founder & Creative Director** | Holly Needham | UNC Greensboro |
| **Lead Developer** | Jonathan Lutabingwa | UNC Charlotte |

### Acknowledgements
- **ITIS 3135** — Web-Based Application Design and Development (UNC Charlotte) where this project originated
- **Elizabeth L. Cline** — Author of *The Conscious Closet*, the book that inspired this platform
- **Fashion Revolution**, **Good On You**, and **Common Objective** for sustainability resources
- All 20 featured brands for their leadership in sustainable fashion

---

## 📄 License

© 2025 The Conscious Closet | Designed & Developed by Lutabingwa Group
