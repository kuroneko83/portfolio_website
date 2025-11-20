# 🎭 Hero Variants Visual Guide

This document provides detailed information about each hero section variant.

## 🌅 Variant 1: Synthwave Sun

**Best For:** Classic 80's retro aesthetic, nostalgic vibes

**Key Features:**
- Animated sunset with neon gradient
- Perspective grid floor (Tron-style)
- Glowing pulse effects
- Mountain silhouette (optional)

**Colors Used:**
- Pink sunset core
- Orange-to-purple gradient
- Cyan grid lines
- Pink text accents

**Code:**
```astro
const variant = 'synthwave-sun';
```

**Customization Options:**
```astro
<!-- Change sun size -->
<div class="w-64 h-64 md:w-96 md:h-96">  <!-- Increase/decrease values -->

<!-- Change grid opacity -->
<div class="... opacity-40">  <!-- Adjust 0-100 -->

<!-- Change gradient colors -->
<div class="bg-gradient-to-b from-cyber-darker via-neon-purple/20 to-neon-pink/30">
```

---

## 🔢 Variant 2: Neon Matrix

**Best For:** Tech-focused portfolios, developer showcases

**Key Features:**
- Animated falling Matrix-style code
- Chrome metallic text effect
- Terminal-style subtitle
- Minimal centered layout

**Colors Used:**
- Green Matrix characters (can be changed)
- Chrome gradient text
- Purple terminal text
- Pink/cyan/purple badges

**Code:**
```astro
const variant = 'neon-matrix';
```

**Customization Options:**
```astro
<!-- Change Matrix characters -->
const matrix = "01ABCD";  <!-- Use binary, hex, or custom -->

<!-- Change Matrix color -->
ctx.fillStyle = '#0f0';  <!-- Green by default, try '#ff00e5' -->

<!-- Change fall speed -->
setInterval(draw, 35);  <!-- Lower = faster, higher = slower -->
```

**Advanced:**
Modify the canvas drawing function to change density, character size, or add color variations.

---

## 🌀 Variant 3: Cyber Portal

**Best For:** Futuristic, sci-fi themed portfolios

**Key Features:**
- Three rotating neon rings
- Different rotation speeds
- Pulsing center glow
- Floating text animation

**Colors Used:**
- Pink outer ring
- Cyan middle ring
- Purple inner ring
- Gradient center glow

**Code:**
```astro
const variant = 'cyber-portal';
```

**Customization Options:**
```astro
<!-- Change ring count (add more) -->
<div class="absolute inset-24 border-4 border-neon-blue rounded-full..."></div>

<!-- Change rotation speed -->
<div style="animation-duration: 4s;">  <!-- Adjust seconds -->

<!-- Change ring sizes -->
<div class="absolute inset-0">   <!-- Outermost -->
<div class="absolute inset-8">   <!-- Middle -->
<div class="absolute inset-16">  <!-- Inner -->
```

---

## ⚡ Variant 4: Glitch Minimal

**Best For:** Minimalist portfolios, modern tech aesthetic

**Key Features:**
- Clean, centered design
- Animated glitch effect on name
- Terminal-style status lines
- Flickering online indicator

**Colors Used:**
- Pink glitched name
- Cyan terminal text
- Purple role text
- Pink flickering status

**Code:**
```astro
const variant = 'glitch-minimal';
```

**Customization Options:**
```astro
<!-- Add more status lines -->
<p class="text-xl font-mono text-neon-cyan">
  &gt; VERSION: <span class="text-neon-purple">2.0.1</span>
</p>

<!-- Change glitch intensity -->
<!-- Edit in src/styles/global.css -->
.glitch::before {
  left: 5px;  /* Increase for more offset */
}
```

---

## 🌊 Variant 5: Vaporwave

**Best For:** Artistic portfolios, creative professionals

**Key Features:**
- Animated gradient background
- Chrome metallic title
- Japanese text subtitle
- Floating geometric shapes

**Colors Used:**
- Full rainbow gradient (animated)
- Chrome silver text
- Cyan subtitle
- Purple secondary text

**Code:**
```astro
const variant = 'vapor-wave';
```

**Customization Options:**
```astro
<!-- Change gradient colors -->
<div class="absolute inset-0 vapor-gradient">
<!-- Edit in tailwind.config.mjs or global.css -->

<!-- Add more floating shapes -->
<div class="absolute top-40 right-20 w-12 h-12 border-2 border-vapor-mint"></div>

<!-- Change Japanese text -->
<p>カスタムテキスト</p>  <!-- Replace with your text -->
```

---

## 🔀 Mixing Variants

You can combine features from different variants!

### Example: Matrix + Portal

```astro
<!-- Use Matrix background -->
<canvas id="matrix-canvas"></canvas>

<!-- Add Portal rings -->
<div class="absolute inset-0 flex items-center justify-center">
  <div class="w-96 h-96">
    <div class="absolute inset-0 border-4 border-neon-pink rounded-full animate-spin"></div>
  </div>
</div>
```

### Example: Synthwave + Glitch

```astro
<!-- Synthwave background -->
<div class="absolute bottom-0 h-96 cyber-grid-perspective"></div>

<!-- Glitch text -->
<h1 class="glitch" data-text="YOUR NAME">YOUR NAME</h1>
```

---

## 📐 Layout Variations

### Centered (Current Default)
```astro
<div class="relative z-10 text-center px-4">
```

### Left Aligned
```astro
<div class="relative z-10 text-left px-4 max-w-4xl">
```

### Split (Text Left, Visual Right)
```astro
<div class="grid md:grid-cols-2 gap-12">
  <div><!-- Text content --></div>
  <div><!-- Visual element --></div>
</div>
```

---

## 🎨 Color Scheme Compatibility

| Variant | Synthwave Palette | Noir Palette | Vaporwave Palette |
|---------|------------------|--------------|-------------------|
| Synthwave Sun | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Neon Matrix | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Cyber Portal | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Glitch Minimal | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Vaporwave | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## 🎯 Choosing the Right Variant

### Ask Yourself:

1. **What's your field?**
   - Developer/Engineer → Matrix or Minimal
   - Designer/Artist → Vaporwave or Synthwave
   - General Tech → Portal or Synthwave

2. **What's your style preference?**
   - Bold & Colorful → Synthwave or Vaporwave
   - Clean & Modern → Minimal or Matrix
   - Futuristic → Portal

3. **Target audience?**
   - Recruiters/Corporate → Minimal or Portal
   - Creative Agencies → Vaporwave or Synthwave
   - Tech Startups → Matrix or Portal

---

## 🔧 Performance Considerations

### Lightest (Best Performance)
1. Glitch Minimal
2. Synthwave Sun
3. Cyber Portal

### Medium
4. Vaporwave

### Heaviest (Most Animations)
5. Neon Matrix (uses Canvas)

**Optimization Tip:** For mobile, consider disabling heavy animations:

```astro
<div class="hidden md:block">
  <!-- Canvas or heavy animation -->
</div>
<div class="md:hidden">
  <!-- Simpler mobile version -->
</div>
```

---

## 🆕 Creating Your Own Variant

1. Copy an existing variant block in `Hero.astro`
2. Change the variant name check
3. Modify visual elements
4. Test responsiveness

```astro
{variant === 'my-custom' && (
  <section class="...">
    <!-- Your custom design -->
  </section>
)}
```

---

## 📱 Mobile Responsiveness

All variants are mobile-responsive with:

- Text scales down on smaller screens
- Grid/visual effects adapt
- Touch-friendly buttons
- Optimized animations

**Test on:**
- iPhone (375px)
- iPad (768px)
- Desktop (1920px)

---

## 🎁 Bonus: Seasonal Variants

### Halloween Version
```astro
<!-- Change colors to orange and purple -->
'neon-orange': '#ff6600',
'neon-purple': '#8b00ff',
<!-- Add spooky elements -->
```

### Winter Version
```astro
<!-- Use blue and white tones -->
'ice-blue': '#a0d8ef',
'snow-white': '#f0f8ff',
<!-- Add snowfall effect -->
```

---

**Experiment and have fun!** The best variant is the one that represents YOU.
