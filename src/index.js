// import React, { Component } from "react";
// import ReactDOM from "react-dom";

import React from "./Kreact";
import ReactDOM from "./Kreact/react-dom";
import Component from "./Kreact/component";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";

class ClassComponent extends Component {
  static defaultProps = {
    color: "green",
  };
  render() {
    return (
      <div className="border">
        {this.props.name} <p className={this.props.color}>color </p>
      </div>
    );
  }
}
function FunctionComponent({ name }) {
  return <div className="border">{name}</div>;
}
// }
const jsx = (
  <div className="border">
    <p>全栈</p>
    <a href="https://wwww.baidu.com">百度</a>
    <ClassComponent name={"class component"} />
    <FunctionComponent name={"function component"} />
  </div>
);

ReactDOM.render(
  jsx,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
