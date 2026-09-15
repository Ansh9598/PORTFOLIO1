/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#05070d',
          light: '#f6f7fb',
        },
        surface: {
          DEFAULT: '#0b0f19',
          light: '#ffffff',
        },
        ink: {
          DEFAULT: '#e8edf5',
          light: '#0b0f19',
        },
        muted: {
          DEFAULT: '#8892a6',
          light: '#5b6478',
        },
        cyan: {
          glow: '#4ce0d2',
        },
        violet: {
          glow: '#7c5cff',
        },
        signal: {
          DEFAULT: '#34d399',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(76, 224, 210, 0.15)',
        dock: '0 20px 60px rgba(0,0,0,0.45)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        drift: {
          '0%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(20px,-15px)' },
          '100%': { transform: 'translate(0,0)' },
        },
        pulseLine: {
          '0%': { strokeDashoffset: '400' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        drift: 'drift 10s ease-in-out infinite',
        pulseLine: 'pulseLine 3s linear infinite',
      },
    },
  },
  plugins: [],
};
