/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary-1": "hsl(180, 66%, 49%)",
      "primary-2": " hsl(257, 27%, 26%)",
      "secondary": "hsl(0, 87%, 67%)",
      "neutral-gray": "hsl(0, 0%, 75%)",
      "neutral-violet": "hsl(257, 7%, 63%)",
      "neutral-dark-1": "hsl(255, 11%, 22%)",
      "neutral-dark-2": "hsl(260, 8%, 14%)"
    },
    extend: {},
  },
  plugins: [],
}

