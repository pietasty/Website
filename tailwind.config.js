/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'white-ish': '#f7f9fb',
        'warm': '#ffe4a1',
        'light-warm': '#fff4d8'
      }
    },
  },
  plugins: [],
}

