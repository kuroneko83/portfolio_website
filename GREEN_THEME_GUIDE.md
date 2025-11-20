# 🟢 Matrix Green Theme - Color Customization Guide

Your portfolio has been updated with a **Matrix-inspired green color scheme** that's less neon and more subdued while maintaining the cyberpunk aesthetic!

## 🎨 New Color Palette

### Primary Colors (replacing pink/cyan/purple)

| Old Name | New Color | Hex Code | Description |
|----------|-----------|----------|-------------|
| `neon-pink` | **Bright Mint Green** | `#00ff88` | Main accent color |
| `neon-cyan` | **Classic Matrix Green** | `#00ff41` | Terminal green |
| `neon-purple` | **Neon Green** | `#39ff14` | Bright green accent |
| `neon-blue` | **Aqua Green** | `#0dff92` | Blue-green blend |
| `neon-orange` | **Chartreuse** | `#7fff00` | Yellow-green |

### Background Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| `cyber-dark` | `#0a0f0a` | Dark green-tinted panels |
| `cyber-darker` | `#050805` | Almost black with green tint |
| `cyber-gray` | `#1a2e1a` | Dark gray-green |

### Additional Green Shades

| Color Name | Hex Code | Description |
|------------|----------|-------------|
| `matrix-green` | `#00ff41` | Classic terminal green |
| `emerald` | `#10b981` | Emerald green |
| `jade` | `#059669` | Jade green |
| `forest` | `#047857` | Forest green |
| `mint` | `#6ee7b7` | Soft mint |
| `accent-teal` | `#14b8a6` | Teal accent |
| `accent-lime` | `#84cc16` | Lime accent |

## 🔧 What Was Changed

### Files Modified:

1. **tailwind.config.mjs** - Updated all color definitions
2. **src/styles/global.css** - Updated all CSS effects:
   - Neon text shadows (green glow)
   - Neon borders (green outlines)
   - Holographic borders (green gradient)
   - CRT scanlines (green tint)
   - Grid backgrounds (green lines)
   - Glitch effects (green shadows)
   - Button hover effects (green)
   - Terminal windows (green borders)
   - Cyber cards (green hover)
   - Vaporwave gradient (green tones)
   - Pixel borders (green stack)
   - Selection color (green highlight)

3. **src/layouts/Layout.astro** - Cursor trail now uses green glow

## 🎯 Visual Changes You'll See

### Before → After

- **Pink neon text** → **Mint green neon text**
- **Cyan accents** → **Matrix green accents**
- **Purple highlights** → **Neon green highlights**
- **Multi-color gradients** → **Green gradient variations**
- **Vibrant neon** → **Subdued Matrix aesthetic**

## 🌟 Theme Characteristics

✅ **Less Intense** - Softer green tones instead of harsh neon
✅ **Matrix Inspired** - Classic terminal green aesthetic
✅ **Cyberpunk Feel** - Maintains the retro-futuristic vibe
✅ **More Professional** - Easier on the eyes, still striking
✅ **Cohesive** - All greens work together harmoniously

## 🎨 Customizing Further

### Make It Even More Subtle

To reduce intensity even more, edit `tailwind.config.mjs`:

```javascript
colors: {
  'neon-pink': '#10b981',    // Use emerald instead of mint
  'neon-cyan': '#059669',    // Use jade instead of matrix green
  'neon-purple': '#047857',  // Use forest instead of neon green
}
```

### Add More Variety

Mix in some teal/cyan tones:

```javascript
colors: {
  'neon-pink': '#14b8a6',    // Teal
  'neon-cyan': '#06b6d4',    // Cyan
  'neon-purple': '#10b981',  // Emerald
}
```

### Go Full Matrix (Very Minimal)

Pure green monochrome:

```javascript
colors: {
  'neon-pink': '#00ff41',
  'neon-cyan': '#00ff41',
  'neon-purple': '#00ff41',
  // All use classic matrix green
}
```

## 🔄 Switching Back

Want the original neon colors back? Simply restore the old values in `tailwind.config.mjs`:

```javascript
colors: {
  'neon-pink': '#ff00e5',    // Hot pink
  'neon-cyan': '#00eaff',    // Electric cyan
  'neon-purple': '#8d4bff',  // Deep purple
}
```

Then restart the dev server:
```bash
npm run dev
```

## 🎭 Color Psychology

**Green Theme Benefits:**
- More professional appearance
- Easier to read (less eye strain)
- Tech/hacker aesthetic (Matrix vibes)
- Evokes: growth, tech, innovation
- Better for developer portfolios

**When to Use:**
- Developer/engineer portfolios
- Tech-focused content
- When targeting corporate/startups
- If you want less "flashy" more "serious"

## 📱 Testing Your Theme

The green theme works across:
- ✅ Desktop (all browsers)
- ✅ Mobile (responsive)
- ✅ Tablet (adaptive)
- ✅ Dark mode (native)

## 🚀 View Your Changes

Your dev server is running at: **http://localhost:4322/**

All changes are live - refresh your browser to see the green theme!

---

**Made with Matrix vibes** 💚 | **Less neon, more green!**
