import { visit } from 'unist-util-visit';
import { h } from 'hastscript';
import type { Root } from 'mdast';

export default function directiveHandler() {
  return (tree:Root) => {
    visit(tree, (node) => {
      if (
        node.type === 'containerDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'textDirective'
      ) {
        if (node.name == "box") {
          const data = node.data || (node.data = {});
          const type = node.attributes?.type || "default"; //default, info,
          data.hName = "div";
          data.hProperties = {
            className: ["box", type],
          }; // CSS .default .info .
        } else if(node.name == "card") {
          const data = node.data || (node.data = {});
          const { url, title, description, image} = node.attributes || {};
          data.hName = "a";
          data.hProperties = {
            href: url,
            className: ["linkcard"],
            target: "_blank",
            rel: "noopener noreferrer",
          };
          data.hChildren = [
            ...(image ? [h("img.linkcard-img", { src: image })] : []),
            h("div.linkcard-content", [
              h("div.linkcard-title", title || url),
              h("div.linkcard-desc", description || ""),
            ])
          ];
        } else if(node.name == "image"){
          const data  = node.data || (node.data = {});
          const {src, title, description, width, height} = node.attributes || {};
          data.hName = "div";
          data.hProperties = {
            id: "div-img-"+title,
            className: ["div-image"],
          }
          data.hChildren = [
            h("img.image-img", {src: src, alt: description, width: width , height: height} ),
            h("p.image-title",title),
            h("p.image-desc",description),
          ]
        } else {
          //const data = node.data || (node.data = {});
          //const hast = h(node.name, node.attributes || {});

          //data.hName = hast.tagName;
          //data.hProperties = hast.attributes || {};
          
        }
      }
    });
  };
}