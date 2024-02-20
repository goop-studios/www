import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import cloudflare from "@astrojs/cloudflare";
import Compress from 'astro-compress';
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", "sv"],
    defaultLocale: "en",
    routing: {
        prefixDefaultLocale: true
    },
    fallback: {
      sv: "en"
    }
  },
  routing: {
    extensions: [".astro", ".mdx"],
    exclude: ["**/node_modules/**", "**/components/**"],
  },
  integrations: [tailwind({
    configFile: "./tailwind.config.mjs"
  }),
  svelte(),
  compressor({
    gzip: true,
    brotli: false,
    fileExtensions: [".html", ".js", ".css", ".cjs", ".mjs"]
  }), Compress({
    CSS: true,
    HTML: true,
    Image: true,
    JavaScript: true,
    SVG: true,
    Map: true,
    Parser: true
  })],
  output: "server",
  adapter: cloudflare({
    imageService: "passthrough"
  })
});