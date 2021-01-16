import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/landing.css'
import Landing from './components/landing.js'
import Header from './components/menu.js'


ReactDOM.render(
  <React.StrictMode>
    <Landing/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
