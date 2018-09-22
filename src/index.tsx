import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./app";
import { printMe } from './printer';

function createRootDomElement() {
  const root = document.createElement("div");
  root.id = "root";
  document.body.appendChild(root);
}

printMe('hey');

createRootDomElement();
ReactDOM.render(<App />, document.getElementById("root"));
