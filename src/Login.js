import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Login(){

    const[userID, setUserID] = useState("");
    const[pwd,setPwd] = useState("");

    function handleSubmit(event){
        let strData = `User ID : ${userID} and Password : ${pwd}`;
        alert(strData);
        event.preventDefault();
    }

    return(
        <div>
            <h1> Login Form </h1>
            <form onSubmit={handleSubmit}>
                User Id : <input type="text" id="uid" name ="uid" value={userID} onChange={(e) => setUserID(e.target.value)}></input><br/><br/>
                Password : <input type="text" id="pwd" name ="pwd" value={pwd} onChange={(e) => setPwd(e.target.value)}></input><br/><br/>
                <button type="submit"> Login </button>

                <NavLink to="/Register">Register</NavLink>
            </form>

            <img src="/angel.jpg"></img>
        </div>
    );
    
}




/*

import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './Login';

 
class App extends React.Component{
  render(){
    return(
      <div>
        <Login/>
      </div>
    );
  }
}
 
export default App;
*/