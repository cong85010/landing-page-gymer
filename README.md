# GYMER - Personal Training Landing Page

A high-converting landing page for personal training services built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✅ Bold, distinctive "Forge & Fire" aesthetic design
- ✅ Fully responsive mobile-first design
- ✅ Smooth scroll animations with Framer Motion
- ✅ Google Sheets integration for form submissions
- ✅ Vietnamese language content optimized for conversion
- ✅ All buttons fully functional with proper navigation
- ✅ Form validation and error handling
- ✅ Personal training focused copy and messaging

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Integration**: Google Apps Script → Google Sheets

## Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Set up Google Sheets integration:**
   - Follow the detailed guide in `GOOGLE_SHEETS_SETUP.md`
   - Update `.env.local` with your Google Apps Script URL

3. **Run development server:**
```bash
npm run dev
```

4. **Open in browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
gymer/
├── app/
│   ├── globals.css          # Global styles and custom CSS
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── components/
│   ├── HeroSection.tsx      # Hero with CTA
│   ├── ProblemDesireSection.tsx
│   ├── BenefitsSection.tsx
│   ├── SuccessStoriesSection.tsx
│   ├── ProgramsSection.tsx
│   ├── RegistrationSection.tsx  # Form with Google Sheets
│   ├── FAQSection.tsx
│   ├── FinalCTASection.tsx
│   └── Footer.tsx
├── .env.local               # Environment variables (create this)
├── GOOGLE_SHEETS_SETUP.md   # Setup guide
└── requirement.md           # Original requirements
```

## Registration Form

The registration form collects:
- **Name** (required)
- **Phone** (required)
- **Goal** (required - dropdown selection)

All submissions are automatically saved to Google Sheets with timestamp.

### Anti-Spam Protection

Basic protection against spam and bots:

**Client-Side:**
- 🕒 **Minimum 3-second** form fill time (prevents instant bot submissions)
- 🍯 **Honeypot field** (invisible trap that only bots fill)

How it works:
- Normal users: Fill form naturally (10-20 seconds) → Submit successfully
- Bots: Try to submit instantly → Blocked (< 3 seconds)
- Bots: Auto-fill all fields including honeypot → Silently blocked

## Customization

### Update Contact Information

Edit `components/Footer.tsx`:
```typescript
href="tel:+84123456789"  // Your phone number
href="mailto:contact@gymer.vn"  // Your email
```

### Modify Copy/Content

All Vietnamese content can be found in the component files:
- Hero headline: `components/HeroSection.tsx`
- Benefits: `components/BenefitsSection.tsx`
- Success stories: `components/SuccessStoriesSection.tsx`
- FAQ: `components/FAQSection.tsx`

### Adjust Colors

Main color scheme is defined in `app/globals.css`:
- Primary: Orange to Red gradient (`#ff6b35` → `#dc143c`)
- Background: Deep black (`#0a0a0a`)
- Accents: Orange variations

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This app can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any hosting platform that supports Next.js**

Don't forget to set `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` in your hosting platform's environment variables!

## Support

For issues or questions about Google Sheets integration, see `GOOGLE_SHEETS_SETUP.md`.

## License

© 2024 GYMER - Personal Training. All rights reserved.
