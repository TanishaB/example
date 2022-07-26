import { useState } from "react";

export default function Login(){

    const[name, setName] = useState("");
    const[email ,setEmail] = useState(0);
    const[dob, setDob] = useState("");
    const[mobileNo, setMobileNo] = useState(0);

    function handleSubmit(){
        alert(`Hi ${name}, we have saved your date. Email: ${email}, DOB : ${dob}, Mobile No : ${dob}`);
    }

    return(
        <div>
            <h1> REGISTRATION FORM </h1>
            <form onSubmit={handleSubmit}>
                <label for="name">Full Name:</label><br/> 
                <input type="text" id="name" name ="name" value={name} onChange={(e) => setName(e.target.value)}></input><br/><br/>
                <label for="email">Email:</label><br/> 
                <input type="text" id="email" name ="email" value={email} onChange={(e) => setEmail(e.target.value)}></input><br/><br/>
                <label for="mobileNo">Mobile No:</label><br/> 
                <input type="number" id="mobileNo" name ="mobileNo" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)}></input><br/><br/>
                <label for="dob">Date of Birth:</label><br/> 
                <input type="date" id="dob" name ="dob" value={dob} onChange={(e) => setDob(e.target.value)}></input><br/><br/>
                <button type="submit"> Login </button>
            </form>
        </div>
    );
    
}



/*

import logo from './logo.svg';
import './App.css';
import React from 'react';
import RegisterForm from './22RegisterForm';

 
class App extends React.Component{
  render(){
    return(
      <div>
        <RegisterForm/>
      </div>
    );
  }
}
 
export default App;

*/