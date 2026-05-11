import { defineConfig } from "astro/config";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import remarkDirective from "remark-directive";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

import directiveHandler from "./src/plugins/custom/directiveHandler";

// https://astro.build/config
export default defineConfig({
    markdown: {
        remarkPlugins: [[remarkToc, {heading:"目次"},], remarkDirective,directiveHandler],
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'append' }]],
    }
});