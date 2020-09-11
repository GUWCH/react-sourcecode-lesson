import { TEXT } from "./const";

function createElement(type, config, ...children) {
  if (config) {
    delete config.__self;
    delete config.__source;
  }
  // 几内亚比绍
  let props = {
    ...type.defaultProps,
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
