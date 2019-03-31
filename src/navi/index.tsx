import React from "react";
import ReactDOM from "react-dom";
import Navi from "./Navi";

window.onload = function() {
  const child: any = document.getElementsByTagName("div");
  // const elm = document.createElement("div");
  // elm.appendChild(child[0]);
  const navelm = document.createElement("div");
  document.body.appendChild(navelm);
  ReactDOM.render(<Navi body={child[0]} />, navelm);
};
