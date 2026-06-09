# Salesforce Developer Portfolio

A modern, responsive, and professional portfolio website for a Salesforce Automation Developer. Built with TanStack Start, React 19, Tailwind CSS v4, and deployed on Netlify.

## Features

- **10 full sections**: Hero, Animated Stats, About, Skills, Certifications, Projects, Experience Timeline, Services, Testimonials, Contact
- **Dark / Light mode** with system preference detection and localStorage persistence
- **Animated statistics** using IntersectionObserver for scroll-triggered counters
- **Netlify Forms** contact form with client-side validation and spam protection
- **Responsive design** — mobile, tablet, and desktop optimized
- **SEO metadata** including Open Graph tags
- **Salesforce-themed** color palette: `#032D60`, `#0176D3`, `#1B96FF`

## Tech Stack

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing, SSR)
- [Tailwind CSS v4](https://tailwindcss.com) with custom Salesforce design tokens
- [Lucide React](https://lucide.dev) icons
- [Netlify Forms](https://docs.netlify.com/forms/setup/) for contact form handling
- Content Collections (blog infrastructure — unused in this template version)

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Requires Node.js 18+. For local Netlify feature emulation (Forms, Edge Functions):

```bash
netlify dev --port 8889
```

## Customization

All personal data (name, job history, skills, certifications, projects, testimonials) lives in the section components under `src/components/sections/`. Each file is self-contained and easy to edit.

To update contact info, edit `src/components/sections/Contact.tsx` and `src/components/sections/Footer.tsx`.
