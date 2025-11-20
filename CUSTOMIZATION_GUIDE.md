# 🎨 Quick Customization Guide

This guide provides quick reference for common customization tasks.

## 🎭 Hero Section Variants

### How to Switch Variants

**File:** `src/components/Hero.astro` (Line 11)

```astro
const variant = 'synthwave-sun'; // Change this value
```

### Available Options

| Variant | Description | Best For |
|---------|-------------|----------|
| `synthwave-sun` | Classic 80's sunset with perspective grid | Retro aesthetic lovers |
| `neon-matrix` | Matrix-style falling code | Tech-focused portfolios |
| `cyber-portal` | Rotating neon rings | Futuristic vibe |
| `glitch-minimal` | Clean design with glitch effects | Minimalists |
| `vapor-wave` | Vaporwave gradient background | Artistic portfolios |

### Visual Comparison

```
SYNTHWAVE-SUN           NEON-MATRIX            CYBER-PORTAL
   ╱▔▔▔╲                   █▌▐█                    ◯◯◯
  │ ☀️  │                  ▐█▌█▌                   ◯ ◯ ◯
  ╲▂▂▂╱                   █▌▐█▌                    ◯◯◯
▔▔▔▔▔▔▔▔▔              ▔▔▔▔▔▔▔▔▔              ▔▔▔▔▔▔▔▔▔
▁▁▁▁▁▁▁▁▁              ▁▁▁▁▁▁▁▁▁              ▁▁▁▁▁▁▁▁▁
```

## 🌈 Color Palettes

### Palette 1: Synthwave (Default)
**Best for:** Classic cyberpunk aesthetic

```javascript
// tailwind.config.mjs
colors: {
  'neon-pink': '#ff00e5',    // Hot pink
  'neon-cyan': '#00eaff',    // Electric cyan
  'neon-purple': '#8d4bff',  // Deep purple
  'neon-blue': '#0084ff',    // Bright blue
  'neon-orange': '#ff6b00',  // Neon orange
}
```

**Preview:**
```
█ #ff00e5  █ #00eaff  █ #8d4bff  █ #0084ff  █ #ff6b00
```

### Palette 2: Cyberpunk Noir
**Best for:** Darker, edgier look

```javascript
colors: {
  'noir-pink': '#ff0080',
  'noir-cyan': '#00ffff',
  'noir-purple': '#9d00ff',
  'noir-green': '#00ff41',
  'noir-red': '#ff0033',
}
```

**Preview:**
```
█ #ff0080  █ #00ffff  █ #9d00ff  █ #00ff41  █ #ff0033
```

### Palette 3: Vaporwave Pastel
**Best for:** Softer, dreamier aesthetic

```javascript
colors: {
  'vapor-pink': '#ff6ad5',
  'vapor-purple': '#c774e8',
  'vapor-blue': '#94d0ff',
  'vapor-mint': '#8ce8c4',
  'vapor-peach': '#ffb3d9'
}
```

**Preview:**
```
█ #ff6ad5  █ #c774e8  █ #94d0ff  █ #8ce8c4  █ #ffb3d9
```

### How to Apply a Palette

1. Open `tailwind.config.mjs`
2. Find the `colors` section under `theme.extend`
3. Replace the color values
4. Restart dev server: `npm run dev`

## 📝 Content Customization Checklist

### Essential Updates

| Section | File | What to Change |
|---------|------|----------------|
| **Name** | `Hero.astro` | Replace "YOUR NAME" |
| **Title** | `Hero.astro` | Replace "SOFTWARE ENGINEER" |
| **Bio** | `About.astro` | Update biography paragraphs |
| **Location** | `About.astro` | Change "Your City" |
| **Email** | `Contact.astro` | Update email address |
| **Social Links** | `Contact.astro`, `Footer.astro` | Add your social URLs |
| **Skills** | `Skills.astro` | Modify skills array |
| **Projects** | `Projects.astro` | Add your projects |
| **Experience** | `Experience.astro` | Add work history |

### File Locations Quick Reference

```
src/components/
├── Hero.astro          → Lines 40-50: Name & Title
├── About.astro         → Lines 65-85: Biography
│                       → Lines 37-44: Location/Stats
├── Skills.astro        → Lines 3-38: Skills data
├── Projects.astro      → Lines 3-51: Projects data
├── Experience.astro    → Lines 3-46: Work history
├── Contact.astro       → Line 119: Email
│                       → Lines 174-196: Socials
└── Footer.astro        → Line 17: Name
                        → Lines 59-82: Social links
```

## 🎯 Common Customizations

### 1. Add Your Photo

**File:** `src/components/About.astro` (Around line 32)

Replace:
```astro
<div class="absolute inset-0 bg-gradient-to-br from-neon-purple...">
```

With:
```astro
<img src="/avatar.jpg" alt="Your Name" class="w-full h-full object-cover" />
```

Don't forget to add `avatar.jpg` to the `public/` folder.

### 2. Add a New Skill

**File:** `src/components/Skills.astro`

```astro
{
  category: "FRONTEND",
  color: "pink",
  skills: [
    { name: "React", level: 90 },
    { name: "Vue.js", level: 85 },  // Add this line
  ]
}
```

### 3. Add a Project

**File:** `src/components/Projects.astro`

```astro
{
  id: 7,  // Increment ID
  title: "My New Project",
  description: "Description here",
  tech: ["React", "Node.js"],
  github: "https://github.com/you/project",
  demo: "https://demo.com",
  status: "DEPLOYED"
}
```

### 4. Change Navigation Order

**File:** `src/pages/index.astro`

Reorder components:
```astro
<Layout>
  <main>
    <Hero />
    <Skills />      <!-- Moved up -->
    <About />       <!-- Moved down -->
    <Projects />
    <!-- ... -->
  </main>
</Layout>
```

### 5. Disable CRT Scanlines

**File:** `src/layouts/Layout.astro`

Change:
```astro
<body class="crt-scanlines">
```

To:
```astro
<body>
```

### 6. Disable Cursor Trail

**File:** `src/layouts/Layout.astro`

Delete or comment out the `<script>` section (lines 18-34).

## 🎨 Advanced Styling

### Create Custom Color

**File:** `tailwind.config.mjs`

```javascript
colors: {
  'my-custom-color': '#hexcode',
}
```

Use it:
```astro
<h1 class="text-my-custom-color">Title</h1>
<div class="neon-border-my-custom-color">Content</div>
```

### Create Custom Animation

**File:** `src/styles/global.css`

```css
@keyframes my-animation {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.my-class {
  animation: my-animation 2s infinite;
}
```

### Modify Existing Effect

**Glitch Effect Intensity:**

**File:** `src/styles/global.css` (around line 125)

```css
.glitch::before {
  left: 2px;  /* Change from 2px to 5px for stronger effect */
  text-shadow: -2px 0 #ff00e5;  /* Increase values */
}
```

## 🚀 Performance Tips

### 1. Optimize Images

```bash
# Install image optimization
npm install sharp

# Images will auto-optimize on build
```

### 2. Reduce Animation on Mobile

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
  }
}
```

### 3. Lazy Load Components

```astro
---
import { lazy } from 'astro';
const Projects = lazy(() => import('../components/Projects.astro'));
---
```

## 🎁 Bonus Features

### Add Sound Effects

1. Add `.mp3` files to `public/sounds/`
2. In `Contact.astro`, uncomment:

```javascript
new Audio('/sounds/click.mp3').play();
```

### Add Page Transitions

**File:** `src/layouts/Layout.astro`

```astro
<ViewTransitions />

<style>
  @view-transition {
    navigation: auto;
  }
</style>
```

### Add Analytics

**File:** `src/layouts/Layout.astro` in `<head>`

```astro
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 📱 Responsive Breakpoints

Tailwind breakpoints used:
- `sm:` - 640px+
- `md:` - 768px+
- `lg:` - 1024px+
- `xl:` - 1280px+

Example:
```astro
<h1 class="text-4xl md:text-6xl lg:text-8xl">
  <!-- 4xl on mobile, 6xl on tablet, 8xl on desktop -->
</h1>
```

## 🆘 Quick Fixes

### Problem: Colors not showing
**Solution:** Restart dev server after changing `tailwind.config.mjs`

### Problem: Fonts not loading
**Solution:** Check internet connection (Google Fonts are external)

### Problem: Build fails
**Solution:**
```bash
rm -rf node_modules
npm install
npm run build
```

### Problem: Animations jerky
**Solution:** Enable hardware acceleration in browser settings

---

**Need More Help?** Check the main README.md or open an issue on GitHub.
