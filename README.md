# Storyboard AI Tool - Marketing Website

A stunning one-page marketing website for Storyboard AI Tool built with Next.js.

## Overview

This is a Next.js landing page designed to showcase and sell Storyboard AI Tool - an AI-powered storyboarding application. It's optimized for hosting platforms like Hostinger, Netlify, and Vercel.

## Features

- **Modern Dark Theme**: Sleek, professional design with gradient accents
- **Fully Responsive**: Works on desktop, tablet, and mobile devices
- **Next.js Static Export**: Fast, SEO-friendly static site
- **Animated Background**: Subtle floating gradient effects
- **Clear CTAs**: Multiple call-to-action buttons linked to LemonSqueezy checkout

## Sections

1. **Hero** - Main headline with stats and CTA buttons
2. **Demo Preview** - Visual mockup of the application
3. **Features** - 6 key features with icons
4. **Providers** - Supported AI integrations grid
5. **Workflow** - 3-step how it works section
6. **Pricing** - Single lifetime license at $49
7. **Testimonial** - Social proof quote
8. **Final CTA** - Closing call to action
9. **Footer** - Navigation and copyright

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

### Hostinger
1. Connect your GitHub repository to Hostinger
2. Repository: `https://github.com/crispygoat/Storyboard-ai-marketing`
3. Branch: `main`
4. Build command: `npm run build`
5. Output directory: `out`
6. Node version: 18.x or higher

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `out`
4. Deploy automatically on push

### Vercel
1. Import the repository
2. Framework preset: Next.js
3. Deploy with zero configuration

### GitHub Pages
1. Push to GitHub
2. Go to Settings > Pages
3. Deploy from GitHub Actions or select branch
4. Site will be at `https://username.github.io/repo-name`

## Customization

### Update Checkout URL
Find and replace the LemonSqueezy checkout URL in `app/page.tsx`:
```
https://storyboardaitool.lemonsqueezy.com/checkout/buy/dd882149-ab0b-4637-9a49-763d6f82ba2f
```

### Update Pricing
Search for `$49` in `app/page.tsx` to update the price in multiple locations.

### Update Contact Email
Replace `support@storyboardaitool.com` with your actual support email in `app/page.tsx`.

### Add Screenshots
Replace the placeholder demo frames with actual product screenshots.

### Update Styles
Modify `app/globals.css` to customize colors, fonts, and animations.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Google Fonts (Inter)
- Static Export (no server required)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright 2025 Storyboard AI Tool. All rights reserved.
