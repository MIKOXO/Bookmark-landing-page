/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        Blue600: "hsl(231, 69%, 60%)",
        Red400: "hsl(0, 94%, 66%)",

        // Neutral
        Grey50: "hsl(0, 0%, 97%)",
        Blue950: "hsl(229, 31%, 21%)",
      },
    },
  },
  plugins: [],
};
