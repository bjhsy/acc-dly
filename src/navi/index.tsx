import React from "react";
import ReactDOM from "react-dom";
import Navi from "./Navi";

(function() {
  var ie = !!((window as any).attachEvent && !(window as any).opera);
  var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && parseInt(RegExp.$1) < 525;
  var fn: Function[] = [];
  var run = function() {
    for (var i = 0; i < fn.length; i++) fn[i]();
  };
  var d: any = document;
  d.ready = function(f: any) {
    if (!ie && !wk && d.addEventListener) return d.addEventListener("DOMContentLoaded", f, false);
    if (fn.push(f) > 1) return;
    if (ie)
      (function() {
        try {
          d.documentElement.doScroll("left");
          run();
        } catch (err) {
          setTimeout(arguments.callee, 0);
        }
        15;
      })();
    else if (wk)
      var t = setInterval(function() {
        if (/^(loaded|complete)$/.test(d.readyState)) clearInterval(t), run();
      }, 0);
  };
})();

(document as any).ready(function() {
  const child: any = document.getElementsByTagName("div");
  const navelm = document.createElement("div");
  document.body.appendChild(navelm);
  ReactDOM.render(<Navi body={child[0]} />, navelm);
});

// window.onload = function() {

// };
