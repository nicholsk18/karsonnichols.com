# karsonnichols.com

Personal portfolio and blog built with Astro, TypeScript, and Tailwind CSS.

## Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Optimize images (convert PNG/JPG to WebP)
pnpm optimize-images

# Update image references to WebP
pnpm update-image-refs
```

## TODO

1. **Hire Me Page** - Create a dedicated page with detailed information about services, pricing, process, and how to work together
2. **Add More Blog Posts** - Write additional blog posts to showcase expertise
3. **Trusted By Section** - Create a section to display companies/clients worked with
4. **Add Pagination** - Add pagination to blogs and projects pages

## Tech Stack

- **Framework**: Astro 5.x
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Content**: MDX (Content Collections)
- **Interactivity**: Alpine.js
- **Analytics**: Google Analytics (gtag.js)
- **Image Optimization**: Sharp (automated WebP conversion)

## Project Structure

```
├── src/
│   ├── assets/          # Images, icons, logos
│   ├── components/      # Reusable UI components
│   ├── content/         # Content collections (blog, projects)
│   ├── data/            # JSON data files
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   └── utils/           # Helper functions
├── scripts/             # Build/optimization scripts
└── public/              # Static assets
```
