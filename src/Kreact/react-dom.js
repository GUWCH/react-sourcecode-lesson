import { TEXT } from "./const";

function render(vnode, container) {
  //   console.log("vnode", vnode);
  const node = createNode(vnode);
  container.appendChild(node);
}

function createNode(vnode) {
  let node = null;
  let { type, props } = vnode;
  if (type === TEXT) {
    node = document.createTextNode("");
  } else if (typeof type === "string") {
    // 证明是html标签节点
    node = document.createElement(type);
  } else if (typeof type === "function") {
    // 表示类组件或者函数组件
    node = type.isReactComponent
      ? updateClassComponent(vnode)
      : updateFuncitonComponent(vnode);
  }
  reconcileChildren(node, props.children);

  updateChildren(node, props);
  return node;
}

// 遍历children 生成真实节点并插入父节点
function reconcileChildren(node, children) {
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    render(child, node);
  }
}

// 添加节点属性
function updateChildren(node, nextVal) {
  //   console.log("nextval", nextVal);
  Object.keys(nextVal)
    .filter((k) => k != "children") // 过滤掉children的内容
    .forEach((k) => {
      node[k] = nextVal[k];
    });
}

function updateClassComponent(vnode) {
  const { type, props } = vnode;
  const cmp = new type(props);
  const vvnode = cmp.render();
  const node = createNode(vvnode);
  return node;
}

function updateFuncitonComponent(vnode) {
  const { type, props } = vnode;
  const cmp = type(props);

  const node = createNode(cmp);
  return node;
}

export default { render };
