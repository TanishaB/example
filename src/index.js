/*
import React from 'react';
import ReactDOM from 'react-dom';
//import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './contactUs';
import Login from './Login';
import Register from './Register';

*/

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/

/*
const routing = (

  <BrowserRouter>
    <NavLink to="/">Home</NavLink> &nbsp; &nbsp;
    <NavLink to="/about">About</NavLink> &nbsp; &nbsp;
    <NavLink to="/contact">Contact Us</NavLink> &nbsp; &nbsp;

    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="about" element={<About/>}></Route>
      <Route path="contact" element={<Contact/>}></Route>
      <Route path="Login" element={<Login/>}></Route>
      <Route path="Register" element={<Register/>}></Route>
    </Routes>
  </BrowserRouter>

)

ReactDOM.render(routing, document.getElementById('root'));
reportWebVitals();


*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
  
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




