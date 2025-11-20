# ⚡ Quick Setup Guide

Get your cyberpunk portfolio running in 5 minutes!

## 🚀 Installation Steps

### 1. Install Dependencies

```bash
cd portfolio_website
npm install
```

This will install:
- Astro v4.15+
- Tailwind CSS v3.4+
- Required integrations

**Expected time:** 2-3 minutes

### 2. Start Development Server

```bash
npm run dev
```

Your site will be available at: **http://localhost:4321**

### 3. View Your Portfolio

Open your browser and navigate to `http://localhost:4321`

You should see the cyberpunk portfolio with the default Synthwave Sun hero variant!

---

## 🎨 First Customizations (5 Minutes)

### Step 1: Change Your Name (30 seconds)

**File:** `src/components/Hero.astro`

Find line 40-ish and replace:
```astro
<h1 class="... neon-text-pink ..." data-text="YOUR NAME">
  YOUR NAME
</h1>
```

With:
```astro
<h1 class="... neon-text-pink ..." data-text="John Doe">
  John Doe
</h1>
```

**Save the file** - the page will auto-reload!

### Step 2: Update Your Email (30 seconds)

**File:** `src/components/Contact.astro`

Find line 119 and update:
```astro
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>
```

### Step 3: Try Different Hero Variants (1 minute)

**File:** `src/components/Hero.astro`

Line 11, change:
```astro
const variant = 'synthwave-sun';
```

Try each one:
- `'synthwave-sun'` - 80's sunset
- `'neon-matrix'` - Matrix code
- `'cyber-portal'` - Rotating rings
- `'glitch-minimal'` - Clean & minimal
- `'vapor-wave'` - Vaporwave aesthetic

**Save and watch it change instantly!**

### Step 4: Switch Color Palette (2 minutes)

**File:** `tailwind.config.mjs`

Find the `colors` section and try:

**Cyberpunk Noir (darker):**
```javascript
'neon-pink': '#ff0080',
'neon-cyan': '#00ffff',
'neon-purple': '#9d00ff',
```

**Vaporwave Pastel (softer):**
```javascript
'neon-pink': '#ff6ad5',
'neon-cyan': '#94d0ff',
'neon-purple': '#c774e8',
```

**Important:** After changing colors, restart the dev server:
```bash
# Stop server (Ctrl+C)
npm run dev
```

### Step 5: Add Your First Project (1 minute)

**File:** `src/components/Projects.astro`

Find the `projects` array (line 3) and edit the first project:

```javascript
{
  id: 1,
  title: "My Awesome App",              // Your project name
  description: "Built an amazing app that does X, Y, Z", // Description
  tech: ["React", "Node.js", "MongoDB"], // Your tech stack
  github: "https://github.com/you/project",
  demo: "https://yourproject.com",
  status: "DEPLOYED"
}
```

---

## ✅ Verification Checklist

- [ ] Dev server running on localhost:4321
- [ ] Page loads with no errors
- [ ] Hero section displays correctly
- [ ] All sections visible (About, Skills, Projects, etc.)
- [ ] Smooth scrolling works
- [ ] Neon effects visible
- [ ] Responsive on mobile (test by resizing browser)

---

## 🐛 Common Issues & Quick Fixes

### Issue: "npm: command not found"
**Fix:** Install Node.js from https://nodejs.org (LTS version)

### Issue: Port 4321 already in use
**Fix:** Either:
```bash
# Stop the existing server
# Or use a different port
npm run dev -- --port 3000
```

### Issue: Blank page or errors in console
**Fix:**
```bash
# Clear everything and reinstall
rm -rf node_modules package-lock.json .astro
npm install
npm run dev
```

### Issue: Tailwind classes not working
**Fix:** Restart dev server after any changes to `tailwind.config.mjs`

### Issue: Fonts not loading
**Fix:** Check internet connection (fonts load from Google Fonts CDN)

---

## 📦 Build for Production

When you're ready to deploy:

```bash
# Build the site
npm run build

# Preview the production build
npm run preview
```

The built site will be in the `dist/` folder.

---

## 🌐 Deploy Now (Choose One)

### Deploy to Netlify (Easiest)

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repo
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy"

**Done in ~5 minutes!**

### Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repo
5. Click "Deploy"

**Auto-detects Astro settings!**

---

## 📚 Next Steps

1. **Customize Content**
   - Read `CUSTOMIZATION_GUIDE.md` for detailed instructions
   - Update bio, skills, projects, experience

2. **Explore Variants**
   - Read `VARIANTS_GUIDE.md` for hero section options
   - Mix and match different styles

3. **Add Your Photo**
   - Add image to `public/` folder
   - Update `src/components/About.astro`

4. **Configure Form Submission**
   - Set up Formspree, Netlify Forms, or custom API
   - Instructions in README.md

5. **SEO & Meta Tags**
   - Update `src/layouts/Layout.astro`
   - Add descriptions, keywords, OG images

---

## 🎯 Content Priority

Update in this order:

1. ✅ **Hero:** Name & title
2. ✅ **Contact:** Email & social links
3. ⬜ **About:** Bio & stats
4. ⬜ **Skills:** Your actual skills
5. ⬜ **Projects:** Real projects with links
6. ⬜ **Experience:** Work history
7. ⬜ **Photo:** Add your image
8. ⬜ **Form:** Connect to submission service

---

## 💡 Pro Tips

### Tip 1: Use Live Reload
Keep the dev server running while editing - changes appear instantly!

### Tip 2: Test Responsiveness
Use browser DevTools (F12) → Toggle Device Toolbar to test mobile views

### Tip 3: Color Picker
Use browser DevTools to test colors before committing:
- Right-click element → Inspect
- Click color swatch in Styles panel
- Pick your color
- Copy hex code to your files

### Tip 4: Check Performance
```bash
npm run build
npm run preview
```
Then use Lighthouse in DevTools to check performance score.

### Tip 5: Git Commits
Commit your changes frequently:
```bash
git add .
git commit -m "Update hero section with my name"
git push
```

---

## 📞 Need Help?

1. Check **README.md** for comprehensive documentation
2. Check **CUSTOMIZATION_GUIDE.md** for specific changes
3. Check **VARIANTS_GUIDE.md** for hero variants
4. Open an issue on GitHub
5. Review Astro docs: https://docs.astro.build

---

## 🎉 You're Ready!

Your cyberpunk portfolio is set up and running. Now make it yours!

**Happy coding in the Neon Era!** ⚡🌆

---

**Quick Commands Reference:**

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```
