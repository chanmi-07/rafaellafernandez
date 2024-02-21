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
        astro: "rgba(255, 93, 1, 1)",
        react: "rgba(97, 218, 251, 1)",
        tailwindcss: "rgba(38, 194, 254, 1)",
        docusaurus: "rgba(37, 194, 160, 1)",
        laravel: "rgba(240, 81, 63, 1)",
        spatie: "rgba(0, 117, 147, 1)",
        socialite: "rgba(227, 148, 187, 1)",
        vonage: "rgba(0, 0, 0, 1)",
      },
      spacing: {
        header: "60px",
      },
    },
  },
  plugins: [],
};
