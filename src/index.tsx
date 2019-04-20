import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import zhCN from "antd/lib/locale-provider/zh_CN";
import { bootstrap } from "@fyl080801/navijs";
import { LocaleProvider } from "antd";
import "antd/dist/antd.css";
import "@fyl080801/navijs/lib/index.css";

ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <App />
  </LocaleProvider>,
  document.getElementById("root")
);

bootstrap({
  navigation: [
    {
      title: "排班管理",
      icon: "",
      menu: [
        { title: "巡检策略", route: "/inspection/strategy" },
        { title: "巡检计划", route: "/inspection/plan" },
        { title: "巡检结果", route: "/inspection/planresult" }
      ]
    }
  ]
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
