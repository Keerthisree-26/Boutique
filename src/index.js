import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import App from './App';
import { Footer } from './components/Footer';
import { About } from './components/About';
import ReactDOM from 'react-dom';
import {Products} from './components/Products'
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
<Navbar/>
<Home/>
<About/>
<Footer/>
<Products/>
</BrowserRouter>
  

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

