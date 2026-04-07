/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0f',
        secondary: '#6c63ff',
        tertiary: '#FFFFFF',
        accent: '#ff6b6b',
        neon: '#00f5ff',
        deepblue: '#1a1a2e',
        midblue: '#16213e',
        surface: '#0f3460',
        muted: '#a0aec0',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      screens: {
        'ls': '450px',
        'xs': '350px'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'slide-up': 'slideUp 0.6s ease forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          from: { boxShadow: '0 0 10px #6c63ff, 0 0 20px #6c63ff, 0 0 30px #6c63ff' },
          to: { boxShadow: '0 0 20px #00f5ff, 0 0 40px #00f5ff, 0 0 60px #00f5ff' },
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 40%, #16213e 70%, #0f3460 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(108,99,255,0.1) 0%, rgba(0,245,255,0.05) 100%)',
        'glow-gradient': 'radial-gradient(ellipse at center, rgba(108,99,255,0.3) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
}
