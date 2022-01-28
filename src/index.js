import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import Routers from './router/Routers'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/global.css';




ReactDOM.render(
  <BrowserRouter>
    <Home></Home>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
