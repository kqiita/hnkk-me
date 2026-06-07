import type { MarkdownHeading } from "astro";

export default interface TOCNode extends MarkdownHeading {
  children: TOCNode[];
}
export function buildTOC(headings: MarkdownHeading[]): TOCNode[] {
  const root: TOCNode[] = [];
  const stack: TOCNode[] = [];
  for (const heading of headings) {
    const node: TOCNode = { ...heading, children: [] };
    while (stack.length && stack[stack.length - 1].depth >= heading.depth) {
      stack.pop();
    }
    if (stack.length === 0) {
      root.push(node);
    } else {
      stack[stack.length - 1].children.push(node);
    }
    stack.push(node);
  }
  return root;
}
