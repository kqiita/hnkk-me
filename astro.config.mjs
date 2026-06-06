import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import remarkDirective from "remark-directive";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

import directiveHandler from "./src/plugins/custom/directiveHandler";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  markdown: {
    remarkPlugins: [
      [remarkToc, { heading: "index" }],
      remarkDirective,
      directiveHandler,
    ],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }],
    ],
  },
});
