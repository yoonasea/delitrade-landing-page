# 八寶軒 (De Li Trade)

Landing page for a professional Feng Shui products and astrology services shop located in Bukit Batok, Singapore.

## Stack

- **React 19** — UI framework
- **TypeScript** — type safety
- **Vite 5** — build tool
- **Tailwind CSS** — utility-first styling
- **lucide-react** — icon library

## Getting Started

```bash
npm install
npm run dev       # development server
npm run build     # production build
npm run preview   # preview production build
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx      — fixed top nav with mobile hamburger menu
│   ├── Hero.tsx            — hero section with name, tagline, CTAs
│   ├── About.tsx           — about section with feature cards
│   ├── Services.tsx        — services grid (4 service cards)
│   ├── Testimonials.tsx    — customer reviews
│   ├── Contact.tsx         — contact info, map, payment methods, footer
│   ├── Section.tsx         — reusable section wrapper (id, background)
│   ├── SectionHeader.tsx   — reusable title/subtitle/divider header
│   └── ContactCard.tsx     — reusable contact info card (icon, label, content)
├── animations.tsx          — scroll-triggered animation system (Anim component)
├── App.tsx                 — root component composing all sections
├── index.css               — base reset
└── main.tsx                — entry point
```

## Animations

Every section uses the `Anim` component for scroll-triggered fade/slide transitions. Seven variants are available:

| Variant | Effect |
|---|---|
| `fadeUp` | fades in + slides up |
| `fadeDown` | fades in + slides down |
| `fadeLeft` | fades in + slides left |
| `fadeRight` | fades in + slides right |
| `scale` | fades in + scales up |
| `rotate` | fades in + rotates in |
| `slideUp` | fades in + slides up (subtle) |

Customise timing with `delay` (seconds) and `duration` (seconds) props.

## Customising Content

Edit the data arrays and JSX in each component file to update text, add services, or change testimonials.

## Image Assets

Place images in `public/images/`:

```
public/images/
├── services/     — service card images (fengshui.jpg, religious.png, bazi.webp, ziwei.jpg)
├── payment/      — payment method logos (paynow.png, cdc.png)
└── gallery/      — gallery placeholders (placeholder1-6.jpg)
```

## Deployment

The project includes Firebase Hosting configuration. To deploy:

```bash
firebase login
firebase init hosting   # point to dist/, configure as SPA
npm run build
firebase deploy
```
