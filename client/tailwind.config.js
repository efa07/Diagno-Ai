/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#13ecc8",
        "background-light": "#f6f8f8",
        "background-dark": "#10221f",
        "foreground-light": "#0d1b19",
        "foreground-dark": "#e7f3f1",
        "card-light": "#ffffff",
        "card-dark": "#182d2a",
        "muted-light": "#4c9a8d",
        "muted-dark": "#a0c3bd",
        "border-light": "#e7f3f1",
        "border-dark": "#2a4a44",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}