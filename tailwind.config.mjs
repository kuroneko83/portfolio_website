/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Synthwave Palette (Default)
        'neon-pink': '#ff00e5',
        'neon-cyan': '#00eaff',
        'neon-purple': '#8d4bff',
        'neon-blue': '#0084ff',
        'neon-orange': '#ff6b00',
        'cyber-dark': '#0a0a0f',
        'cyber-darker': '#050508',
        'cyber-gray': '#1a1a2e',

        // Cyberpunk Noir Palette
        'noir-pink': '#ff0080',
        'noir-cyan': '#00ffff',
        'noir-purple': '#9d00ff',
        'noir-green': '#00ff41',
        'noir-red': '#ff0033',

        // Vaporwave Pastel Palette
        'vapor-pink': '#ff6ad5',
        'vapor-purple': '#c774e8',
        'vapor-blue': '#94d0ff',
        'vapor-mint': '#8ce8c4',
        'vapor-peach': '#ffb3d9'
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
