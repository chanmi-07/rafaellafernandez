/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "rgba(20, 20, 22, 1)",
        primary: "rgba(216, 172, 207, 1)",
        secondary: "rgba(123, 136, 206, 1)",
        "light-1": "rgba(253, 250, 243, 1)",
        "light-2": "rgba(208, 205, 198, 1)",
      },
      spacing: {
        header: "40px",
      },
    },
  },
  plugins: [],
};
