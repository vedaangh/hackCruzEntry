import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/landing.css'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import Landing from './components/landing.js'
import NewsPage from './components/newspage.js'



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Landing/>

        <Switch>
        <Route exact path="/"  component={Landing}/>
        <Route path="/news" component={NewsPage}/>
       
         
        </Switch>
      
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
