# 🐄 Hare Krishna Krishi Tatha Pashu Panchhi Farm Website

> Fresh, Pure & Trusted Cow Milk and Dairy Products from Our Village

A modern, bilingual (English 🇬🇧 & Nepali 🇳🇵), responsive website for **Hare Krishna Dairy Farm** - a registered small-scale village farm in Nepal.

## 📋 Official Information

**Official Name:** Hare Krishna Krishi tatha Pashu Panchhi Farm (Registered Dairy & Farm)

**Short Name:** Hare Krishna Dairy Farm

**Tagline:** "Pure Milk from Our Village to Your Home"

**Location:** [Your Village, Municipality, District], Nepal

## 🎯 Farm Overview

- **Size:** Small, community-focused dairy farm
- **Current Herd:** ~10 cows (previously 15)
- **Operations:**
  - Fresh cow milk collection & distribution
  - Traditional dairy product preparation
  - Milk collection from local farmers
  - Monthly credit system for village customers
  - Fixed, transparent pricing

## ✨ Key Features

### 🌐 Bilingual Support

- **English** (en)
- **Nepali** (ne)
- Language toggle available in navigation bar

### 📱 Responsive Design

- Mobile-first design
- Works seamlessly on all devices
- Optimized performance

### 🎨 Farm-Authentic UI

- Custom, distinctive design (not generic AI-generated)
- Green & earth-tone color palette reflecting farm values
- Easy-to-read typography optimized for both languages
- Emoji-based visual elements for accessibility

### ⚡ Modern Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **next-intl** - Internationalization

## 📄 Pages & Content

| Page              | URL                | Purpose                                 |
| ----------------- | ------------------ | --------------------------------------- |
| **Home**          | `/`                | Hero section, farm overview, key offers |
| **About Us**      | `/about`           | Farm story, mission, values             |
| **Products**      | `/products`        | Milk & dairy products catalog           |
| **Milk & Credit** | `/milk-collection` | Milk collection process, credit system  |
| **Gallery**       | `/gallery`         | Farm images & operations                |
| **Contact**       | `/contact`         | Contact info, WhatsApp, phone, location |

## 🛍️ Products Offered

1. **Fresh Cow Milk** 🥛
2. **Dahi (Curd)**
3. **Ghee**
4. **Paneer**
5. **Butter**
6. **Kuraune** (Traditional Cheese)
7. **Mohi** (Buttermilk)

_All with fixed, transparent pricing_

## 💳 Credit System

- Village customers can purchase on monthly credit
- Records maintained in farm notebook
- Transparent, trust-based system
- Fixed schedule pickup: Morning (5-8 AM) & Evening (4-7 PM)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/harekrishnakrishi.git
cd harekrishnakrishi

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
npm run dev
```

Visit **http://localhost:3000** in your browser.

The app will auto-update as you edit files.

### Build for Production

```bash
npm run build
npm start
```

### Type Checking

```bash
npm run check
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx                 # Root layout
│   ├── globals.css                # Global styles
│   └── [locale]/                  # Localized routes
│       ├── layout.tsx             # Locale layout with i18n
│       ├── page.tsx               # Home page
│       ├── about/page.tsx         # About page
│       ├── products/page.tsx      # Products page
│       ├── milk-collection/page.tsx
│       ├── gallery/page.tsx       # Gallery page
│       └── contact/page.tsx       # Contact page
├── components/
│   ├── Navbar.tsx                 # Navigation bar with language toggle
│   ├── Footer.tsx                 # Footer
│   ├── HeroSection.tsx            # Homepage hero
│   ├── AboutPreview.tsx           # Short about preview
│   ├── OffersSection.tsx          # What we offer section
│   └── TrustSection.tsx           # Trust & values section
├── messages/
│   ├── en.json                    # English translations
│   └── ne.json                    # Nepali translations
├── i18n.ts                        # i18n configuration
└── middleware.ts                  # Locale routing middleware
```

## 🌍 Internationalization (i18n)

All content is available in **English** and **Nepali**.

### Adding New Translations

1. Add text to `src/messages/en.json`
2. Add text to `src/messages/ne.json`
3. Use `useTranslations()` hook in components

Example:

```tsx
const t = useTranslations("home");
return <h1>{t("title")}</h1>;
```

## 🎨 Customization

### Update Farm Information

Edit `src/messages/en.json` and `src/messages/ne.json`:

- Farm phone number
- Location details
- Product prices
- Timing & hours

### Color Theme

Tailwind CSS classes use green (`green-600`, `green-700`, etc.). Modify in component classNames:

```tsx
className = "bg-green-600"; // Adjust color
```

### Contact Links

Update phone, WhatsApp, and email in:

- `src/components/Navbar.tsx`
- `src/components/HeroSection.tsx`
- `src/app/[locale]/contact/page.tsx`

## 📞 Contact Information

**Farm Location:** [Your Village, Municipality, District]

**Phone:** +977 XXXX XXXX

**WhatsApp:** Available

**Hours:**

- Morning: 5:00 AM - 8:00 AM
- Evening: 4:00 PM - 7:00 PM

## 👥 Farm Values

- ✅ Quality over Quantity
- ✅ Honesty in Every Transaction
- ✅ Community First
- ✅ Traditional Methods
- ✅ Transparent Pricing

## 🔄 Future Enhancements

- [ ] Gallery with real farm photos
- [ ] Notice board for milk availability
- [ ] Online booking/ordering system
- [ ] Daily stock status updates
- [ ] Admin dashboard for price management
- [ ] Downloadable price list (PDF)
- [ ] Milk collection map
- [ ] SMS notifications

## 🤝 Contributing

Community feedback is welcome! To suggest improvements:

1. Share ideas with farm management
2. Submit feature requests
3. Report any issues

## 📄 License

All rights reserved © Hare Krishna Krishi Tatha Pashu Panchhi Farm

---

**Built with ❤️ for our village community**

Last Updated: February 2026
