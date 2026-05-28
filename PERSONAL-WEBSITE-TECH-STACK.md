# High-Performance Website Tech Stack

This document outlines the complete tech stack, configuration, and best practices from the Dealer Edge project for building a high-performance personal website.

---

## Quick Stats (Dealer Edge Benchmarks)

| Metric | Value | Status |
|--------|-------|--------|
| **First Load JS** | 102 kB | 47% under 150 kB budget |
| **Lighthouse Performance** | 95+ | Target |
| **CLS (Layout Shift)** | 0.0 | Perfect |
| **LCP (Production)** | ~1.5-2.0s | Excellent |
| **Server Components** | 78% | Optimal (minimize client JS) |

---

## Core Tech Stack

### Framework & Runtime

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 15.x (App Router) | React framework with SSR/SSG/ISR |
| **React** | 19.x | UI library |
| **TypeScript** | 5.6+ | Type safety |
| **Node.js** | 20+ | Runtime |

### Styling

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Tailwind CSS** | 4.x | Utility-first CSS (CSS-first config) |
| **PostCSS** | 8.x | CSS processing |
| **tailwindcss-animate** | 1.x | Animation utilities |

### UI Components

| Technology | Purpose |
|-----------|---------|
| **Radix UI** | Accessible headless components |
| **Lucide React** | Icon library (tree-shakeable) |
| **class-variance-authority** | Component variant management |
| **clsx + tailwind-merge** | Class name utilities |

---

## Project Setup

### 1. Initialize Project

```bash
npx create-next-app@latest my-website --typescript --tailwind --eslint --app --src-dir=false
cd my-website
```

### 2. Install Dependencies

```bash
# Core styling
npm install tailwindcss@^4.0.0 @tailwindcss/postcss@^4.0.0

# UI utilities
npm install class-variance-authority clsx tailwind-merge tailwindcss-animate

# Icons
npm install lucide-react

# Radix UI (install as needed)
npm install @radix-ui/react-slot @radix-ui/react-dialog @radix-ui/react-dropdown-menu
```

### 3. PostCSS Configuration

Create `postcss.config.js`:

```js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

### 4. Next.js Configuration

Create `next.config.ts`:

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Automatic format conversion: AVIF → WebP → Original
    formats: ['image/avif', 'image/webp'],
    
    // Responsive image sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Cache optimization
    minimumCacheTTL: 60,
    
    // Remote image patterns (add your domains)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
```

---

## Tailwind CSS v4 Configuration

### globals.css

```css
@import "tailwindcss";

@plugin "tailwindcss-animate";

@custom-variant dark (&:is(.dark *));

@theme {
  /* ============================================================================
   * COLOR TOKENS
   * ============================================================================ */
  
  /* Brand Colors */
  --color-primary: #3B82F6;           /* Your primary brand color */
  --color-primary-foreground: #FFFFFF;
  --color-secondary: #64748B;
  --color-secondary-foreground: #FFFFFF;
  --color-accent: #0EA5E9;
  --color-accent-foreground: #FFFFFF;
  
  /* Surface Colors */
  --color-background: #FFFFFF;
  --color-foreground: #0F172A;
  --color-card: #FFFFFF;
  --color-card-foreground: #0F172A;
  --color-muted: #F1F5F9;
  --color-muted-foreground: #64748B;
  
  /* UI Colors */
  --color-border: #E2E8F0;
  --color-input: #FFFFFF;
  --color-ring: #3B82F6;
  --color-destructive: #EF4444;
  
  /* Status Colors */
  --color-success: #22C55E;
  --color-warning: #EAB308;
  --color-error: #EF4444;
  
  /* Shadows */
  --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-card-hover: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  /* Typography */
  --text-display: 3.75rem;
  --text-h1: 2.5rem;
  --text-h2: 2rem;
  --text-h3: 1.5rem;
  --text-body: 1rem;
  --text-small: 0.875rem;
}

/* ============================================================================
 * ROOT VARIABLES
 * ============================================================================ */
:root {
  /* Motion Timing */
  --motion-duration-fast: 150ms;
  --motion-duration-base: 200ms;
  --motion-duration-slow: 300ms;
  
  /* Motion Easing */
  --motion-ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --motion-ease-enter: cubic-bezier(0, 0, 0.2, 1);
  --motion-ease-exit: cubic-bezier(0.4, 0, 1, 1);
  
  /* Motion Intensity (0-1, respects prefers-reduced-motion) */
  --motion-intensity: 1;
  
  /* Micro-interactions */
  --motion-hover-lift: 2px;
  
  /* Border Radius */
  --radius: 0.5rem;
  
  /* Z-index Scale */
  --z-dropdown: 50;
  --z-sticky: 100;
  --z-modal: 200;
  --z-tooltip: 300;
}

/* ============================================================================
 * ACCESSIBILITY - Reduced Motion
 * ============================================================================ */
@media (prefers-reduced-motion: reduce) {
  :root {
    --motion-intensity: 0;
    --motion-duration-fast: 0ms;
    --motion-duration-base: 0ms;
    --motion-duration-slow: 0ms;
    --motion-hover-lift: 0px;
  }
}

/* ============================================================================
 * BASE STYLES
 * ============================================================================ */
body {
  color: var(--color-foreground);
  background-color: var(--color-background);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ============================================================================
 * CARD HOVER EFFECTS
 * ============================================================================ */
.card-hover {
  box-shadow: var(--shadow-card);
  transition:
    transform calc(var(--motion-duration-base) * var(--motion-intensity)) var(--motion-ease-default),
    box-shadow calc(var(--motion-duration-base) * var(--motion-intensity)) var(--motion-ease-default);
}

.card-hover:hover {
  box-shadow: var(--shadow-card-hover);
  transform: translateY(calc(-1 * var(--motion-hover-lift)));
}

/* ============================================================================
 * BUTTON HOVER EFFECTS
 * ============================================================================ */
.btn-hover {
  transition:
    transform calc(var(--motion-duration-base) * var(--motion-intensity)) var(--motion-ease-default),
    box-shadow calc(var(--motion-duration-base) * var(--motion-intensity)) var(--motion-ease-default);
}

.btn-hover:hover:not(:disabled) {
  transform: translateY(calc(-1 * var(--motion-hover-lift)));
}

.btn-hover:active:not(:disabled) {
  transform: translateY(0) scale(0.98);
}

@layer base {
  * {
    @apply border-border;
  }
}
```

---

## Font Optimization

### app/layout.tsx

```tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap', // Prevents invisible text during load
});

export const metadata: Metadata = {
  title: 'Your Website',
  description: 'Your description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/images/hero.webp"
          as="image"
          fetchPriority="high"
          type="image/webp"
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
```

---

## Server vs Client Components

### Decision Tree

```
Is the component interactive?
│
├─ NO → ✅ Use Server Component (default)
│   Examples: Layout, Footer, Headers, Static content
│
└─ YES → Does it need React hooks or browser APIs?
    │
    ├─ NO (CSS-only) → ✅ Use Server Component
    │   Examples: Hover effects, CSS transitions
    │
    └─ YES → Use Client Component
        Examples: Forms, modals, interactive widgets
```

### Server Component (Default)

```tsx
// No 'use client' directive needed
export default function Header() {
  return (
    <header className="bg-white py-4 border-b">
      <nav className="container mx-auto px-4">
        <h1>My Website</h1>
      </nav>
    </header>
  );
}
```

### Client Component (When Needed)

```tsx
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  
  return (
    <form>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded px-4 py-2"
      />
    </form>
  );
}
```

---

## Image Optimization

### Using next/image

```tsx
import Image from 'next/image';

// Above-the-fold hero image
<Image
  src="/images/hero.webp"
  alt="Hero image"
  width={1200}
  height={600}
  priority // Preload for LCP
  className="object-cover"
/>

// Below-the-fold images (lazy loaded by default)
<Image
  src="/images/photo.webp"
  alt="Photo"
  width={800}
  height={600}
  className="object-cover rounded-lg"
/>

// Responsive fill image
<div className="relative aspect-video w-full">
  <Image
    src="/images/background.webp"
    alt="Background"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>
```

### Image Guidelines

| Use Case | Recommended Size | Notes |
|----------|-----------------|-------|
| Hero images | 1920x1080 max | Use priority prop |
| Thumbnails | 400x400 | Lazy load |
| Blog images | 1200x800 | WebP format |
| Icons | SVG preferred | Or 48x48 PNG |

---

## Performance Budget

### Bundle Size Limits

| Metric | Budget | Target |
|--------|--------|--------|
| First Load JS (per route) | < 150 kB | < 100 kB |
| Total Bundle Size | < 500 kB | < 300 kB |
| Third-Party Scripts | < 50 kB | < 30 kB |

### Component-Level Guidelines

| Component Type | Size Budget | Notes |
|---------------|-------------|-------|
| Server Component | < 5 kB | Minimal JS sent to client |
| Simple Client Component | < 10 kB | Forms, buttons with state |
| Complex Client Component | < 30 kB | Rich interactions |
| Radix UI Primitive | 10-20 kB | Justified for accessibility |

---

## Dynamic Imports (Code Splitting)

### When to Use

```tsx
import dynamic from 'next/dynamic';

// Large components only shown conditionally
const Modal = dynamic(() => import('./Modal'), {
  loading: () => <div>Loading...</div>,
});

// Client-only components (browser APIs)
const MapWidget = dynamic(() => import('./MapWidget'), {
  ssr: false,
});
```

### When NOT to Use

- Components visible on initial page load
- Critical UI elements (navigation, buttons)
- Small components (< 10 kB)
- SEO-critical content

---

## Core Web Vitals Targets

| Metric | Target | Description |
|--------|--------|-------------|
| **LCP** | < 2.5s | Largest Contentful Paint |
| **INP** | < 200ms | Interaction to Next Paint |
| **CLS** | < 0.1 | Cumulative Layout Shift |

### How to Achieve

1. **LCP Optimization**
   - Use `priority` on hero images
   - Preload critical resources
   - Use Server Components for initial content
   - Minimize render-blocking JS

2. **CLS Prevention**
   - Always specify image dimensions (width/height)
   - Use `next/font` for fonts
   - Reserve space for dynamic content

3. **INP Optimization**
   - Use Server Components (reduce client JS)
   - Debounce expensive operations
   - Break up long tasks

---

## Utility Functions

### lib/utils.ts

```typescript
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## Component Examples

### Button Component

```tsx
// components/ui/button.tsx
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 btn-hover',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
        ghost: 'hover:bg-muted hover:text-foreground',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3 text-sm',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
```

### Card Component

```tsx
// components/ui/card.tsx
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-card rounded-lg border border-border p-6 card-hover',
        className
      )}
      {...props}
    />
  );
}
```

---

## Development Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Analyze bundle
ANALYZE=true npm run build

# Lint
npm run lint
```

---

## Deployment (Vercel Recommended)

### vercel.json (optional)

```json
{
  "framework": "nextjs",
  "regions": ["iad1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

---

## Performance Checklist

### Before Committing

- [ ] Run `npm run build` - check First Load JS < 150 kB
- [ ] Server Components used by default
- [ ] `'use client'` only where necessary
- [ ] Images have width/height specified
- [ ] Hero images use `priority` prop
- [ ] Large components use dynamic imports

### Monthly Audit

- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Review bundle size with analyzer
- [ ] Test on slow 3G network

---

## File Structure

```
my-website/
├── app/
│   ├── globals.css          # Tailwind + custom styles
│   ├── layout.tsx           # Root layout with fonts
│   ├── page.tsx             # Home page
│   └── (routes)/            # Route groups
├── components/
│   ├── ui/                  # Reusable UI components
│   └── sections/            # Page sections
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   └── images/              # Static images
├── next.config.ts
├── postcss.config.js
├── package.json
└── tsconfig.json
```

---

## Summary

The Dealer Edge stack achieves excellent performance through:

1. **Next.js 15 App Router** - Server-first rendering
2. **Tailwind CSS v4** - Zero-runtime styling
3. **Server Components (78%)** - Minimal client JS
4. **Image Optimization** - AVIF/WebP with responsive sizes
5. **Font Optimization** - next/font with swap display
6. **Code Splitting** - Dynamic imports for large components
7. **Performance Budget** - Strict 150 kB First Load JS limit

Follow these patterns and you'll achieve Lighthouse scores of 95+ with sub-2s LCP.
