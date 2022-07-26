/*
import logo from './logo.svg';
import './App.css';
import React from 'react';
import Calculator from './24Calculator';

 
class App extends React.Component{
  render(){
    return(
      <div>
        <Calculator/>
      </div>
    );
  }
}
 
export default App;

*/

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './contactUs';
import Login from './Login';
import Register from './Register';
  
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    

    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="about" element={<About/>}></Route>
      <Route path="contact" element={<Contact/>}></Route>
      <Route path="Login" element={<Login/>}></Route>
      <Route path="Register" element={<Register/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}
  
export default App;