import { vitePreprocess } from "@astrojs/svelte";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  preprocess: vitePreprocess({
    scss: {
      includePaths: ["./src"],
    },
    postcss: {
      plugins: [tailwindcss, autoprefixer],
      true: true,
    },
  }),
};
