/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Dark Terminal Green Palette
        'neon-pink': '#00d000',      // Dark terminal green
        'neon-cyan': '#00b000',      // Darker terminal green
        'neon-purple': '#009000',    // Very dark green
        'neon-blue': '#00c000',      // Mid-dark green
        'neon-orange': '#00a000',    // Muted dark green
        'cyber-dark': '#0a0f0a',     // Very dark green-tinted black
        'cyber-darker': '#050805',   // Almost black with green tint
        'cyber-gray': '#0f1a0f',     // Darker gray-green

        // Additional Green Shades
        'matrix-green': '#00cc00',   // Traditional terminal green
        'emerald': '#059669',        // Deep emerald
        'jade': '#047857',           // Dark jade
        'forest': '#065f46',         // Deep forest green
        'mint': '#10b981',           // Muted mint

        // Accent colors (very subdued)
        'accent-teal': '#0d9488',    // Dark teal
        'accent-lime': '#65a30d'     // Muted lime
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'mono': ['Share Tech Mono', 'monospace'],
        'display': ['Audiowide', 'cursive']
      },
      boxShadow: {
        'neon-pink': '0 0 20px rgba(255, 0, 229, 0.5), 0 0 40px rgba(255, 0, 229, 0.3)',
        'neon-cyan': '0 0 20px rgba(0, 234, 255, 0.5), 0 0 40px rgba(0, 234, 255, 0.3)',
        'neon-purple': '0 0 20px rgba(141, 75, 255, 0.5), 0 0 40px rgba(141, 75, 255, 0.3)',
        'neon-blue': '0 0 20px rgba(0, 132, 255, 0.5), 0 0 40px rgba(0, 132, 255, 0.3)',
        'cyber-glow': '0 0 30px rgba(255, 0, 229, 0.4), inset 0 0 20px rgba(255, 0, 229, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'flicker': 'flicker 0.15s infinite',
      },
      keyframes: {
        glow: {
          '0%': { filter: 'brightness(1) drop-shadow(0 0 10px currentColor)' },
          '100%': { filter: 'brightness(1.3) drop-shadow(0 0 20px currentColor)' }
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-2px, 2px)' },
          '66%': { transform: 'translate(2px, -2px)' }
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        }
      }
    }
  },
  plugins: []
}
