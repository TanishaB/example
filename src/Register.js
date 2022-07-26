import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Register(){
    const[userID, setUserID] = useState("");
    const[pwd, setPwd] = useState("");
    const[confirmPwd, setConfirmPwd] = useState("");


    function handleSubmit(event){
        if(pwd == confirmPwd){
            alert("You are successfully registered");
        }
        else{
            alert("Password and confirm password don't match");
        }
    }

    return(
        <div>
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>
                User ID : <input type="text" value ={userID} onChange={(e)=> setUserID(e.target.value)}/><br/><br/>

                Password : <input type="text" value ={pwd} onChange={(e)=> setPwd(e.target.value)}/><br/><br/>

                Confirm Password : <input type="text" value ={confirmPwd} onChange={(e)=> setConfirmPwd(e.target.value)}/><br/><br/>

                <button type="submit">Register</button><br/><br/><br/>
                <NavLink to="/Login"> Login </NavLink>
            </form>
        </div>
    )
}