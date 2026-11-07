import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#101010',
        surface: {
          DEFAULT: '#191919',
          elevated: '#222222',
          muted: '#141414',
          card: '#181818',
        },
        primary: {
          DEFAULT: '#FFFFFF',
          muted: '#A5A5A5',
          subtle: '#666666',
        },
        accent: {
          pink: '#F72585',
          orange: '#FF9D00',
          gold: '#FFD166',
        },
        border: {
          subtle: '#262626',
          strong: '#3B3B3B',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Anton', 'Impact', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.02em',
        widest: '0.25em',
        mega: '0.4em',
      },
      boxShadow: {
        'glow-pink': '0 0 25px rgba(247, 37, 133, 0.35)',
        'glow-orange': '0 0 25px rgba(255, 157, 0, 0.35)',
        'editorial': '0 20px 40px -15px rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
};

export default config;
