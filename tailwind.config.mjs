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
        "goop-green2": "#26dc3b",
        "goop-purple": "#e42af4",
        "goop-purple2": "#cd26dc",
      },
      ringColor: {
        "goop-green": "#2af442",
        "goop-green2": "#26dc3b",
        "goop-purple": "#e42af4",
        "goop-purple2": "#cd26dc",
      },
      borderColor: {
        "goop-green": "#2af442",
        "goop-green2": "#26dc3b",
        "goop-purple": "#e42af4",
        "goop-purple2": "#cd26dc",
      },
      backgroundColor: {
        "goop-green": "#2af442",
        "goop-green2": "#26dc3b",
        "goop-purple": "#e42af4",
        "goop-purple2": "#cd26dc",
      },
      gradientColorStops: {
        "goop-green": "#2af442",
        "goop-green2": "#26dc3b",
        "goop-purple": "#e42af4",
        "goop-purple2": "#cd26dc",
      },
      outlineColor: {
        "goop-green": "#2af442",
        "goop-green2": "#26dc3b",
        "goop-purple": "#e42af4",
        "goop-purple2": "#cd26dc",
      },
      textDecorationColor: {
        "goop-green": "#2af442",
        "goop-green2": "#26dc3b",
        "goop-purple": "#e42af4",
        "goop-purple2": "#cd26dc",
        "opacity-0": "rgba(0, 0, 0, 0)",
        "opacity-100": "rgba(0, 0, 0, 1)",
      },
      transitionProperty: {
        "decoration": "text-decoration-color",
        "outline": "outline-color",
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
};