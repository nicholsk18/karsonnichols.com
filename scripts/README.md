# Image Optimization Workflow

This directory contains scripts for automated image optimization using WebP format.

## Scripts

### `optimize-images.js`

Converts all PNG and JPG images in `src/assets` to WebP format.

**Features:**

- Finds all images recursively
- Converts to WebP with 80% quality (great balance of size/quality)
- Skips already-converted images
- Shows detailed file size savings

**Usage:**

```bash
npm run optimize-images
```

### `update-image-refs.js`

Automatically updates all image references in your source code from `.png`/`.jpg` to `.webp`.

**Features:**

- Scans all source files (`.astro`, `.mdx`, `.tsx`, `.ts`, `.jsx`, `.js`)
- Updates all image path references
- Shows summary of changes

**Usage:**

```bash
npm run update-image-refs
```

## Workflow for New Images

When you add new images to the project:

1. **Add your images** (PNG/JPG) to `src/assets/`
2. **Optimize them:**
   ```bash
   npm run optimize-images
   ```
3. **Update references:**
   ```bash
   npm run update-image-refs
   ```
4. **Test the site:**
   ```bash
   npm run dev
   ```
5. **Delete originals** (optional):
   ```bash
   find src/assets -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) -delete
   ```

## Benefits

- **90%+ file size reduction** on average
- **Faster page loads** → better SEO rankings
- **Better Core Web Vitals** scores (LCP, CLS)
- **Improved mobile performance**
- **Native browser support** (WebP is supported in all modern browsers)

## Initial Optimization Results

- **Before:** 117.52MB
- **After:** 11.05MB
- **Saved:** 106.47MB (90.6% reduction!)

## Future Improvements

Consider adding:

- Automatic optimization on pre-commit hook
- Responsive image sizes (`srcset`)
- AVIF format for even better compression (when browser support improves)
