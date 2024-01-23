/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    colors: {
      'white': '#fff',
      'gray-nurse': '#EAEDEB',
      'green-kelp': '#263E2C',
      'lightning-yellow': '#FEC31D',
      'golden-grass': '#E5B11D',
      'pumice': '#CDD5CF;',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      dmsans: ["DMSans", "sans"],
    },
  },
  plugins: [],
}
