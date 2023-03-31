/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      boxShadow: {
        default: "4px 12px 30px 6px rgba(0, 0, 0, 0.09)",
      },
    },
    fontFamily: {
      GangwonBold: ["GangwonEduPowerExtraBoldA", "sans-serif"],
      GmarketMedium: ["GmarketSansMedium", "sans-serif"],
      GmarketLight: ["GmarketSansLight", "sans-serif"],
      Jalnan: ["Jalnan", "sans-serif"],
    },
  },

  variants: {
    extends: {},
  },
  plugins: [],
}
