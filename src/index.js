import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Component from './Component';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Component />
  </React.StrictMode>,
  document.getElementById('kedroviz')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
