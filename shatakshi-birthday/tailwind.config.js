/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F4EF',
        primary: '#0F172A',
        accent: '#A61E4D',
        gold: '#D6B98C',
        text: '#2B2B2B',
        'text-light': '#6B6B6B',
        card: '#FFFFFF',
        'card-hover': '#FEFEFE',
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'sans-serif'],
        handwritten: ['Caveat', 'cursive'],
      },
      borderRadius: {
        'card': '24px',
        'card-lg': '32px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(15, 23, 42, 0.06)',
        'soft-lg': '0 8px 40px rgba(15, 23, 42, 0.1)',
        'lift': '0 12px 48px rgba(15, 23, 42, 0.12)',
      },
      transitionDuration: {
        'slow': '500ms',
        'slower': '800ms',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        drift: {
          '0%': { transform: 'translateX(-100px) rotate(-5deg)' },
          '100%': { transform: 'translateX(calc(100vw + 100px)) rotate(5deg)' },
        },
      },
    },
  },
  plugins: [],
}