/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#0989ff",
        topHeadingPrimary: "##010f1c",
        topHeadingSecondary: "#021d35",
        pink: "#FD4B6B",
      },
      container: {
        center: true,
        padding: "15px"
      }
    },
  },
  plugins: [],
}