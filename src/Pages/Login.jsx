import { useContext, useEffect, useState } from "react";
import { contextApi } from "./ContextApi";
import data from "../db.json";
import "./login.css";
import { Redirect } from "react-router-dom";
const Login = () => {
    const [email , setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [ login,setLogin] = useContext(contextApi);
    const submit = () => {
        const count = 0 ;
        {data.login.map((item) => {
            if(item.email === email && item.password === password){
                setLogin(true);
                alert("Login succesful");
                count++;
                return;
            }
    })}
    if(count == 0){
        alert("Invalid credential")
    }
    }
    
    return login ?(<Redirect  to="/home" />) : (
       
        <div className="content">
         <div className="content-div">
             
            <div className="content-div1">
                <h1>USER ICON LOGIN FORM</h1>
            <input placeholder="email" type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)}/><br /><br/>
            <hr className="line" />
             <input placeholder="password" type="password" className="input"  value={password} onChange={(e) => setPassword(e.target.value) }/><br /><br />
             <button className="submit-btn" onClick={() => submit()}>Submit</button>
            </div>
         </div>
        </div>
   ) 
}
export default Login;