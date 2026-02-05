# Development Guide - Hare Krishna Dairy Farm Website

## Project Setup

This website is built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **next-intl** for internationalization.

### System Requirements

- Node.js 18.17 or later
- npm 9+ (or yarn, pnpm, bun)
- Git
- A modern web browser

### Initial Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/harekrishnakrishi.git
   cd harekrishnakrishi
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Project Structure Explained

### `/src/app`

- **Root layout** - Sets up global styles and HTML structure
- **`[locale]`** - Dynamic route for language switching
  - **`layout.tsx`** - Locale-specific layout with i18n setup
  - **`page.tsx`** - Home page
  - **`about/page.tsx`** - About Us page
  - **`products/page.tsx`** - Products listing
  - **`milk-collection/page.tsx`** - Milk & Credit system info
  - **`gallery/page.tsx`** - Photo gallery
  - **`contact/page.tsx`** - Contact form & info

### `/src/components`

Reusable React components:

- **Navbar.tsx** - Top navigation with language toggle
- **Footer.tsx** - Footer with quick links
- **HeroSection.tsx** - Homepage hero section
- **AboutPreview.tsx** - Quick about section
- **OffersSection.tsx** - What we offer cards
- **TrustSection.tsx** - Trust & values section

### `/src/messages`

Translation files:

- **en.json** - English translations (all page content)
- **ne.json** - Nepali translations (all page content)

Add new translations here for any new text on the site.

### Config Files

- **`next.config.ts`** - Next.js configuration with i18n plugin
- **`src/i18n.ts`** - i18n setup and configuration
- **`src/middleware.ts`** - Locale routing middleware
- **`tailwind.config.ts`** - Tailwind CSS configuration
- **`tsconfig.json`** - TypeScript configuration

## Development Workflow

### Adding a New Page

1. **Create the directory**

   ```bash
   mkdir -p src/app/\[locale\]/your-page
   ```

2. **Create `page.tsx`**

   ```tsx
   "use client";

   import { useTranslations } from "next-intl";

   export default function YourPage() {
     const t = useTranslations("yourPage");

     return (
       <div className="max-w-6xl mx-auto px-4 py-16">
         <h1>{t("title")}</h1>
       </div>
     );
   }
   ```

3. **Add translations to `en.json` and `ne.json`**

   ```json
   {
     "yourPage": {
       "title": "Your Page Title"
     }
   }
   ```

4. **Update Navbar** - Add link in `src/components/Navbar.tsx`

### Adding Translations

All text must be added to both:

- `src/messages/en.json` (English)
- `src/messages/ne.json` (Nepali)

Structure:

```json
{
  "page_name": {
    "key": "Translation text"
  }
}
```

Access in components:

```tsx
const t = useTranslations("page_name");
<h1>{t("key")}</h1>;
```

### Styling

This project uses **Tailwind CSS** for styling. Key colors:

- **Green**: `bg-green-600`, `text-green-700`, etc.
- **Blue**: `bg-blue-600`, `text-blue-700`, etc.
- **Gray**: `bg-gray-50`, `text-gray-700`, etc.

To modify the color scheme:

1. Edit component `className` attributes
2. Or modify `tailwind.config.ts` for global changes

### Animations

Uses **Framer Motion** for smooth animations. Import and use:

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>;
```

## Common Tasks

### Update Farm Contact Information

Edit `src/messages/en.json` and `src/messages/ne.json`:

```json
{
  "contact": {
    "phone": "+977 XX XXX XXXX",
    "location": "Village Name, Municipality, District"
  }
}
```

Also update in component files:

- `src/components/Navbar.tsx`
- `src/components/HeroSection.tsx`
- `src/components/Footer.tsx`
- `src/app/[locale]/contact/page.tsx`

### Update Product List

Edit `src/messages/en.json` and `src/messages/ne.json`:

```json
{
  "products": {
    "items": [
      {
        "name": "Product Name",
        "description": "Product description"
      }
    ]
  }
}
```

### Add Farm Photos to Gallery

1. Place images in `public/images/gallery/`
2. Update `src/app/[locale]/gallery/page.tsx` to display images
3. Current version uses emoji placeholders - replace with actual images

### Enable WhatsApp Integration

Update WhatsApp links with your farm's WhatsApp number:

1. Replace `977XXXXXXXXX` with your number in:
   - `src/components/Navbar.tsx`
   - `src/components/HeroSection.tsx`
   - `src/app/[locale]/contact/page.tsx`

2. Pre-fill message example:
   ```
   https://wa.me/977XXXXXXXXX?text=Hello%2C%20I%20want%20to%20know%20more%20about%20Hare%20Krishna%20Dairy%20Farm
   ```

## Testing

### Check for TypeScript errors

```bash
npm run check
```

### Run ESLint

```bash
npm run lint
```

### Build check

```bash
npm run build
```

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import on Vercel**
   - Go to https://vercel.com/new
   - Import GitHub repository
   - Deploy!

### Deploy to Other Platforms

The website can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- Render
- Self-hosted server

Just run:

```bash
npm run build
npm start
```

## Performance Optimization

- Images are optimized with Next.js Image component
- CSS is minified with Tailwind
- JavaScript is code-split automatically
- Routes are pre-rendered when possible

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome)

## Troubleshooting

### Build fails

- Clear `.next` folder: `rm -rf .next`
- Reinstall: `npm install`

### Pages not showing

- Check i18n setup in `src/middleware.ts`
- Verify locale in URL (should be `/en` or `/ne`)

### Translation not appearing

- Check spelling in translation files
- Ensure both `en.json` and `ne.json` have the key
- Restart dev server

### Styles not applying

- Check Tailwind class names
- Ensure component has `"use client"` for client-side styling
- Check media queries for responsive design

## Useful Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
npm run check      # Check TypeScript types
npm run format     # Format code with Prettier
```

## Getting Help

For issues or questions:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Check the [next-intl documentation](https://next-intl-docs.vercel.app/)
3. Check the [Tailwind CSS documentation](https://tailwindcss.com/docs)

---

**Happy coding! 🚀**
