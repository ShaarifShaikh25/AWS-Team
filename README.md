# AWS Student Builder Group — Recruitment Portal 2026
### G. H. Raisoni College of Engineering & Management (GHRCEM), Jalgaon

A modern, responsive recruitment portal for the **AWS Student Builder Group** at GHRCEM Jalgaon. The portal introduces the student community, showcases the 5 core teams, outlines benefits and application steps, answers frequently asked questions, and connects students to their respective Google Form application links.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher recommended; v20+ supported)
- **npm** or your preferred package manager

### Installation

1. Clone or open the repository folder:
   ```bash
   cd AWS-Team
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open the displayed local URL (typically `http://localhost:5173`) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build:
   ```bash
   npm run preview
   ```

---

## 🔗 How to Configure the Google Form URLs

All application links are centralized in a single configuration file:

👉 **`src/config/teamLinks.ts`**

Open `src/config/teamLinks.ts` and replace the placeholder strings with your actual Google Form URLs:

```typescript
export const TEAM_FORM_LINKS = {
  // Technical Team: Cloud learning, workshops, and hands-on projects
  technical: 'https://docs.google.com/forms/d/e/.../viewform',

  // Content & Design Team: Visuals, educational materials, and creatives
  contentDesign: 'https://docs.google.com/forms/d/e/.../viewform',

  // Marketing & Outreach Team: Outreach campaigns, event promotions, and partnerships
  marketingOutreach: 'https://docs.google.com/forms/d/e/.../viewform',

  // Community & Engagement Team: Student onboarding, discussions, and networking
  communityEngagement: 'https://docs.google.com/forms/d/e/.../viewform',

  // Events & Operations Team: Workshops logistics, volunteer coordination, and execution
  eventsOperations: 'https://docs.google.com/forms/d/e/.../viewform',
} as const;
```

### Safe Placeholder Handling
- If any URL still contains its placeholder (e.g. `PASTE_...`), the portal automatically detects this and prevents opening broken links.
- Clicking the button when a placeholder is active displays a helpful **"Application link coming soon"** modal with preparation advice for prospective applicants.
- Once replaced with valid `https://` URLs, the cards display an **"Applications Open"** badge and clicking "Apply Now →" safely opens the respective Google Form in a new tab.

---

## 📂 Project Structure

```
AWS-Team/
├── public/
│   ├── ghrcem-logo.png        # Official GH Raisoni College logo
│   └── hero-reference.jpg     # Design reference asset
├── src/
│   ├── config/
│   │   └── teamLinks.ts       # Centralized 5 team Google Form links & validator
│   ├── data/
│   │   ├── teamsData.ts       # 5 core teams configuration & metadata
│   │   ├── benefitsData.ts    # 5 growth benefits
│   │   ├── howItWorksData.ts  # 3-step application journey
│   │   └── faqData.ts         # FAQs accordion questions & answers
│   ├── types/
│   │   └── index.ts           # TypeScript type definitions
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky navigation with college logo & mobile drawer
│   │   ├── HeroSection.tsx    # Two-column hero with 3D tech illustration
│   │   ├── AboutSection.tsx   # GHRCEM community mission and 4 core pillars
│   │   ├── TeamsSection.tsx   # 5-card responsive teams grid
│   │   ├── TeamCard.tsx       # Individual team card with accent styling & form link
│   │   ├── BenefitsSection.tsx# "Why Join Us" feature strip
│   │   ├── HowItWorksSection.tsx # 3-step connected timeline
│   │   ├── FAQSection.tsx     # Accordion with accessible toggling
│   │   ├── FinalCTA.tsx       # Banner with rocket icon & team CTA
│   │   ├── Footer.tsx         # College branding, address, copyright 2026
│   │   ├── AwsLogo.tsx        # Authentic AWS smile mark component
│   │   └── NotificationModal.tsx # Friendly "Link Coming Soon" modal
│   ├── App.tsx                # Main application page layout
│   ├── index.css              # Tailwind CSS styles & custom glassmorphism
│   └── main.tsx               # React application entry point
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🎨 Color Palette & Design Tokens

- **Primary Background:** Deep navy `#050816`
- **Secondary Background:** Dark Navy `#0B1026`
- **Primary Accent:** AWS Orange `#FF9900`
- **Secondary Accent:** Purple `#7C3AED`
- **Supporting Accent:** Cyan `#06B6D4`
- **Text Colors:** Primary `#F8FAFC`, Secondary `#AAB4CC`
- **Borders:** Translucent white (`rgba(255, 255, 255, 0.08)`)

---

## 🛡️ Key Features

- **College & Community Identity:** Integrates G. H. Raisoni College of Engineering & Management, Jalgaon branding and authentic AWS Student Builder Group styling.
- **5 Independent Team Portals:**
  1. Technical Team (Purple accent · AWS Cloud, Development, Projects)
  2. Content & Design Team (Magenta accent · Design, Content, Creativity)
  3. Marketing & Outreach Team (Orange accent · Marketing, Outreach, Campaigns)
  4. Community & Engagement Team (Teal accent · Community, Engagement, Networking)
  5. Events & Operations Team (Blue accent · Event Planning, Logistics, Coordination)
- **Responsive on all screens:** Mobile, Tablet, Laptop, and Desktop.
- **Accessible & Clean:** Semantic HTML, ARIA attributes for FAQ accordion and modals, zero broken placeholder links.
