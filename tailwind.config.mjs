const { addDynamicIconSelectors } = require('@iconify/tailwind')


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./public/**/*", "./public/*"],
  theme: {
    extend: {
      fontFamily: {
        "sauce": "Sauce Code Pro NFP, monospace",
        "ubuntu": "Ubuntu NFP, monospace",
      },
      textColor: {
        "goop-green": "#2af442",
        "goop-purple": "#e42af4",
      },
      ringColor: {
        "goop-green": "#2af442",
        "goop-purple": "#e42af4",
      },
      borderColor: {
        "goop-green": "#2af442",
        "goop-purple": "#e42af4",
      },
      backgroundColor: {
        "goop-green": "#2af442",
        "goop-purple": "#e42af4",
      },
      gradientColorStops: {
        "goop-green": "#2af442",
        "goop-purple": "#e42af4",
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
};