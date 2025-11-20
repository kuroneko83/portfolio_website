# 🌆 Cyberpunk Portfolio - Retro-Futuristic Personal Website

A stunning 80's retro-futuristic cyberpunk portfolio website featuring neon grids, synthwave colors, glowing chrome edges, CRT textures, and animated holographic UI components.

![Portfolio Preview](https://via.placeholder.com/1200x600/0a0a0f/ff00e5?text=Cyberpunk+Portfolio)

## ✨ Features

- 🎨 **5 Hero Section Variants** - Choose from Synthwave Sun, Neon Matrix, Cyber Portal, Glitch Minimal, or Vaporwave
- 🌈 **3 Color Palettes** - Synthwave, Cyberpunk Noir, and Vaporwave Pastel
- 🎭 **Animated Components** - Neon glow effects, glitch animations, scanlines, and holographic borders
- 📱 **Fully Responsive** - Optimized for all devices
- ⚡ **Lightning Fast** - Built with Astro for optimal performance
- 🎮 **Interactive Elements** - Hover effects, cursor trails, and easter eggs
- ♿ **Accessible** - Semantic HTML and ARIA labels

## 📋 Sections

1. **Hero** - Animated intro with multiple visual variants
2. **About Me** - Retro ID-card style biography
3. **Skills** - Cyberpunk chip design with animated progress bars
4. **Projects** - Terminal-style project cards
5. **Experience** - Timeline with neon nodes
6. **Contact** - Console-style contact form
7. **Footer** - Grid background with scanlines

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or 20+
- npm or yarn

### Installation

```bash
# Navigate to the project directory
cd portfolio_website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
# Build the site
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization Guide

### 1. Change Hero Section Variant

Open `src/components/Hero.astro` and change the `variant` variable (line 11):

```astro
const variant = 'synthwave-sun'; // Options: 'synthwave-sun', 'neon-matrix', 'cyber-portal', 'glitch-minimal', 'vapor-wave'
```

**Available Variants:**

- **synthwave-sun** - Classic synthwave sunset with perspective grid
- **neon-matrix** - Matrix-style falling code animation
- **cyber-portal** - Rotating neon rings portal effect
- **glitch-minimal** - Minimal design with glitch text
- **vapor-wave** - Vaporwave gradient with floating elements

### 2. Switch Color Palettes

The project includes 3 pre-configured color palettes in `tailwind.config.mjs`:

#### **Palette 1: Synthwave (Default)**
```javascript
colors: {
  'neon-pink': '#ff00e5',
  'neon-cyan': '#00eaff',
  'neon-purple': '#8d4bff',
  'neon-blue': '#0084ff',
  'neon-orange': '#ff6b00',
}
```

#### **Palette 2: Cyberpunk Noir**
```javascript
colors: {
  'neon-pink': '#ff0080',    // Use: noir-pink
  'neon-cyan': '#00ffff',    // Use: noir-cyan
  'neon-purple': '#9d00ff',  // Use: noir-purple
  'neon-green': '#00ff41',   // Use: noir-green
  'neon-red': '#ff0033',     // Use: noir-red
}
```

#### **Palette 3: Vaporwave Pastel**
```javascript
colors: {
  'neon-pink': '#ff6ad5',    // Use: vapor-pink
  'neon-cyan': '#94d0ff',    // Use: vapor-blue
  'neon-purple': '#c774e8',  // Use: vapor-purple
  'vapor-mint': '#8ce8c4',
  'vapor-peach': '#ffb3d9'
}
```

To switch palettes, simply replace the color values in `tailwind.config.mjs` and restart the dev server.

### 3. Edit Personal Information

#### Update Name and Title

**Hero Section** (`src/components/Hero.astro`):
```astro
<h1>YOUR NAME</h1>  <!-- Replace with your name -->
<p>SOFTWARE ENGINEER</p>  <!-- Replace with your title -->
```

#### Update About Section

**About Component** (`src/components/About.astro`):
- Line 65-85: Edit biography text
- Line 37-44: Update location, role, and level
- Line 96-113: Modify quick stats

#### Update Skills

**Skills Component** (`src/components/Skills.astro`):
- Line 3-38: Modify the `skillCategories` array
- Add/remove skills and adjust proficiency levels

#### Update Projects

**Projects Component** (`src/components/Projects.astro`):
- Line 3-51: Edit the `projects` array
- Replace placeholder GitHub and demo links

#### Update Experience

**Experience Component** (`src/components/Experience.astro`):
- Line 3-46: Modify the `experiences` array
- Update roles, companies, and achievements

#### Update Contact Information

**Contact Component** (`src/components/Contact.astro`):
- Line 119: Update email address
- Line 135: Update location
- Line 174-196: Update social media links

**Footer Component** (`src/components/Footer.astro`):
- Line 17: Update your name
- Line 33-52: Update navigation links
- Line 59-82: Update social media links

### 4. Add Your Avatar/Photo

Replace the placeholder avatar in `src/components/About.astro` (line 30-40):

```astro
<!-- Current placeholder -->
<div class="aspect-square rounded-lg overflow-hidden neon-border-purple relative">
  <!-- Replace this div with an image -->
  <img src="/your-photo.jpg" alt="Your Name" class="w-full h-full object-cover" />
</div>
```

Place your image in the `public` folder (e.g., `public/avatar.jpg`).

### 5. Toggle CRT Scanlines

Scanlines are enabled by default. To disable:

**Remove from Layout** (`src/layouts/Layout.astro`):
```astro
<!-- Remove the 'crt-scanlines' class from body -->
<body class="">  <!-- Was: <body class="crt-scanlines"> -->
```

Or create a toggle button to enable/disable dynamically.

### 6. Customize Fonts

Current fonts (via Google Fonts):
- **Orbitron** - Headings (cyberpunk style)
- **Share Tech Mono** - Body text (monospace)
- **Audiowide** - Display text

To change fonts, edit `src/styles/global.css` (line 1):

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

Then update the `tailwind.config.mjs` font families.

### 7. Add Real Form Submission

The contact form currently has a simulated submission. To add real functionality:

**Option 1: Formspree**
```javascript
// In src/components/Contact.astro script section
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
```

**Option 2: Netlify Forms**
Add `netlify` attribute to form:
```astro
<form netlify name="contact" class="space-y-6">
```

**Option 3: Custom API**
Replace the fetch URL with your own API endpoint.

## 🌐 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Astro settings
6. Click "Deploy"

### Deploy to GitHub Pages

```bash
# Install GitHub Pages adapter
npm install @astrojs/github-pages

# Update astro.config.mjs
import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/portfolio_website',
});

# Build and deploy
npm run build
# Push dist folder to gh-pages branch
```

## 🎮 Advanced Customization

### Add Sound Effects

1. Add audio files to `public/sounds/`
2. Uncomment sound code in `src/components/Contact.astro`:

```javascript
// Play click sound
new Audio('/sounds/click.mp3').play();
```

### Create Additional Pages

```bash
# Create new page
touch src/pages/blog.astro
```

### Add Dark/Light Mode Toggle

Create a theme switcher with alternative color schemes (already set up in Tailwind config).

### Modify Animations

Edit animation durations in `tailwind.config.mjs` or create custom keyframes in `src/styles/global.css`.

## 📁 Project Structure

```
portfolio_website/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Skills.astro
│   │   ├── Projects.astro
│   │   ├── Experience.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
├── package.json
└── README.md
```

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build) v4.15+
- **Styling:** [Tailwind CSS](https://tailwindcss.com) v3.4+
- **Fonts:** Google Fonts (Orbitron, Share Tech Mono, Audiowide)
- **Icons:** Heroicons (SVG)
- **Deployment:** Netlify / Vercel / GitHub Pages

## 🎨 Design Inspiration

- 80's Synthwave & Vaporwave aesthetics
- Blade Runner & Ghost in the Shell (1995)
- 80's anime tech (Akira, Bubblegum Crisis)
- Cyberpunk 2077 UI
- Retro arcade machines
- CRT monitors & terminal interfaces

## 📝 Checklist Before Going Live

- [ ] Update all personal information (name, email, location)
- [ ] Add your own projects with real links
- [ ] Replace placeholder avatar with your photo
- [ ] Update experience section with real work history
- [ ] Configure form submission (Formspree/Netlify/custom)
- [ ] Add your social media links
- [ ] Test on mobile devices
- [ ] Test in different browsers
- [ ] Add favicon (replace `public/favicon.svg`)
- [ ] Update meta tags and SEO info in Layout.astro
- [ ] Add Google Analytics (optional)
- [ ] Test all links and buttons

## 🐛 Troubleshooting

### Dev server won't start
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Tailwind classes not working
Make sure to restart dev server after modifying `tailwind.config.mjs`

### Animations not smooth
Check browser hardware acceleration is enabled

### Build errors
Ensure Node.js version is 18+ or 20+

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Design & Development: [Your Name]
- Framework: Astro
- Styling: Tailwind CSS
- Inspiration: 80's Retro-Futuristic Aesthetics

---

**Built with ❤️ in the Neon Era** | © 2025

For questions or support, reach out at [your.email@example.com](mailto:your.email@example.com)
