import { useState } from "react";

export default function FormControl(){

    const[name, setName] = useState("");
    const[email ,setEmail] = useState(0);
    const[dob, setDob] = useState("");
    const[mobileNo, setMobileNo] = useState(0);
    const[course, setCourse] = useState("");

    function handleSubmit(){
        alert(`Hi ${name}, we have saved your date. Email: ${email}, DOB : ${dob}, Mobile No : ${dob} and couse choosen : ${course}`);
    }

    return(
        <div>
            <h1> REGISTRATION FORM </h1>
            <form onSubmit={handleSubmit}>
                <label for="name">Full Name:</label><br/> 
                <input type="text" id="name" name ="name" value={name} onChange={(e) => setName(e.target.value)}></input><br/>
                
                <label for="email">Email:</label><br/> 
                <input type="text" id="email" name ="email" value={email} onChange={(e) => setEmail(e.target.value)}></input><br/>
                
                <label for="mobileNo">Mobile No:</label><br/> 
                <input type="number" id="mobileNo" name ="mobileNo" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)}></input><br/>
                
                <label for="dob">Date of Birth:</label><br/> 
                <input type="date" id="dob" name ="dob" value={dob} onChange={(e) => setDob(e.target.value)}></input><br/>
                
                <label for="course">Choose course:</label>
                <select id="course" value = {course} name="course" onChange={(e) => setCourse(e.target.value)}>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="JAVASCRIPT">JAVASCRIPT</option>
                </select>
                <br/>

               
                
                <button type="submit"> Login </button>
            </form>
        </div>
    );
    
}


/*

import logo from './logo.svg';
import './App.css';
import React from 'react';
import FormControl from './23FormControl';

 
class App extends React.Component{
  render(){
    return(
      <div>
        <FormControl/>
      </div>
    );
  }
}
 
export default App;
*/