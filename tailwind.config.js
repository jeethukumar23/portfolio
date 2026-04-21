/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#c084fc',
        'neon-blue': '#2563eb',
        'neon-cyan': '#06b6d4',
        'dark-bg': '#0f0f1e',
        'dark-card': '#1a1a2e',
        'dark-border': '#2d3a5a',
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(135deg, #c084fc 0%, #2563eb 50%, #06b6d4 100%)',
        'gradient-hover': 'linear-gradient(135deg, #06b6d4 0%, #c084fc 100%)',
      },
      boxShadow: {
        'glow-purple': '0 0 20px rgba(192, 132, 252, 0.5)',
        'glow-blue': '0 0 20px rgba(37, 99, 235, 0.5)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in',
        'slide-up': 'slideUp 0.8s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { transform: 'translateY(30px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(192, 132, 252, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(192, 132, 252, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

