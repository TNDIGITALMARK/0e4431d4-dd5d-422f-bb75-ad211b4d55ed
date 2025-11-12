# Creative Studios - Portfolio Website

A modern, professional portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features a clean, minimalist design with pixel-perfect implementation based on professional design specifications.

## 🎨 Features

- **Hero Landing Page**: Impactful first impression with featured projects, services showcase, and client testimonials
- **Portfolio Showcase**: Comprehensive gallery with project filtering by category (Web Design, Mobile Apps, Branding)
- **About Page**: Team profiles, skills visualization, certifications, and company story
- **Contact Page**: Multi-channel contact options with working contact form and social media integration
- **Responsive Design**: Fully responsive across all devices with mobile-first approach
- **Modern UI/UX**: Clean aesthetics, smooth animations, and intuitive navigation

## 🎨 Design System

The website implements a pixel-perfect design system with:

- **Color Palette**: Navy primary (#1a2332), Orange accent (#ff9a3c), Light blue (#7ab8d9)
- **Typography**: Inter font family with carefully scaled heading and body text
- **Spacing**: Consistent 8px-based spacing system
- **Components**: Reusable button styles, card layouts, and form elements
- **Animations**: Subtle hover effects and transitions for enhanced interactivity

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Hero landing page
│   ├── portfolio/page.tsx    # Portfolio showcase
│   ├── about/page.tsx        # About & team page
│   ├── contact/page.tsx      # Contact form page
│   ├── not-found.tsx         # Custom 404 page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles & design system
├── components/
│   └── portfolio/
│       ├── Navigation.tsx    # Header navigation
│       └── Footer.tsx        # Site footer
public/
└── generated/                # AI-generated project images
    ├── project-abstract-1.png
    ├── project-mobile-app.png
    ├── project-web-design.png
    ├── project-responsive.png
    └── team-profile.png
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages Overview

### 1. Home Page (`/`)
- Hero section with compelling tagline
- Featured projects grid (4 projects)
- Services overview (3 service cards)
- Team spotlight
- Call-to-action section
- Client testimonials

### 2. Portfolio Page (`/portfolio`)
- Filterable project grid (Web Design, Mobile Apps, Branding)
- Detailed project cards with:
  - Project images
  - Client information
  - Results achieved
  - Technologies used
  - Call-to-action buttons
- Statistics showcase

### 3. About Page (`/about`)
- Company story and mission
- Skills visualization with progress bars
- Team member profiles (3 members)
- Certifications and education
- Current availability status
- Core values presentation

### 4. Contact Page (`/contact`)
- Multiple contact methods (Email, Phone, Location)
- Project inquiry form with validation:
  - Name and email fields
  - Project type dropdown
  - Budget range selector
  - Detailed message textarea
- Success confirmation
- Portfolio download option
- Social media links

## 🎨 Customization

### Colors

Edit color variables in `src/app/globals.css`:

```css
:root {
  --navy-primary: 214 35% 15%;
  --orange-accent: 31 100% 62%;
  --blue-light: 200 55% 67%;
  /* ... more colors */
}
```

### Content

- **Project Data**: Edit arrays in page components (`src/app/*/page.tsx`)
- **Company Info**: Update text in Navigation, Footer, and page components
- **Images**: Replace files in `public/generated/` with your own

### Typography

The design uses the Inter font family from Google Fonts. To change fonts, update the import in `globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;500;600;700&display=swap');
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Custom CSS
- **UI Components**: Custom-built components
- **Image Handling**: Next.js Image optimization
- **Fonts**: Google Fonts (Inter)

## SSR and Browser API Usage

This template includes safeguards for server-side rendering (SSR) issues with browser APIs. 

### When to Force Dynamic Rendering

Add `export const dynamic = 'force-dynamic';` to pages that use:
- `navigator` (geolocation, online status, share API)
- `window` (localStorage, sessionStorage, innerWidth/Height)
- Browser-only APIs (Web APIs, PWA features)

### Performance Considerations

- **Static pages** (no browser APIs): Keep static for best performance
- **Dynamic pages** (use browser APIs): Add the dynamic export
- **Mixed apps**: Use selective dynamic rendering per page

### Example Usage

```typescript
// For pages using browser APIs
'use client';
export const dynamic = 'force-dynamic';

import { useGeolocation } from '@/hooks/use-geolocation';

export default function WeatherPage() {
  // This page uses browser APIs, so it needs dynamic rendering
}
```
