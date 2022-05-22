import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';

// 在渲染之前 需要进行移动端的适配 移动端的适配主要用到rem作为单位 设置移动端的适配
document.documentElement.style.fontSize = 100/750 + 'vw';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


