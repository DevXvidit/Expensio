/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',
        secondary: '#0EA5E9',
        background: '#0F172A',
        surface: '#1E293B',
      },
    },
  },
  plugins: [],
}
