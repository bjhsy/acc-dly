import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { bootstrap } from '@fyl080801/navijs';
import { LocaleProvider } from 'antd';
import 'antd/dist/antd.css';
import '@fyl080801/navijs/lib/index.css';

bootstrap();

ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <App />
  </LocaleProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
