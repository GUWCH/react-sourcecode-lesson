import { TEXT } from "./const";

function createElement(type, config, ...children) {
  console.log("====================================");
  console.log(config.__self);
  console.log("====================================");
  if (config) {
    delete config.__self;
    delete config.__source;
  }

  let props = {
    ...config,
    children: children.map((child) =>
      typeof child === "object" ? child : createText(child)
    ),
  };
  return {
    type,
    props,
  };
}

function createText(child) {
  return {
    type: TEXT,
    props: { children: [], nodeValue: child },
  };
}

export default { createElement };
