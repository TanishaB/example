import { useState } from "react";

export default function Login(){

    const[userID, setUserID] = useState("");
    const[pwd,setPwd] = useState("");

    function handleSubmit(event){
        if(userID == "Tanisha" && pwd =="Braganza")
            alert(`Successful : User ID : ${userID} and Password : ${pwd}`);
        else
            alert("Unsuccessful!! Wrong User name or password");
        event.preventDefault();
    }

    return(
        <div>
            <h1> Login Form </h1>
            <form onSubmit={handleSubmit}>
                User Id : <input type="text" id="uid" name ="uid" value={userID} onChange={(e) => setUserID(e.target.value)}></input><br/><br/>
                Password : <input type="text" id="pwd" name ="pwd" value={pwd} onChange={(e) => setPwd(e.target.value)}></input><br/><br/>
                <button type="submit"> Login </button>
            </form>
        </div>
    );
    
}