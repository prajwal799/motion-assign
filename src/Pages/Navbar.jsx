import React, { useContext } from "react";
import {Link} from "react-router-dom";
import { contextApi } from "./ContextApi";
import "./Navbar.css"
const Navbar = () => {
    const [login,setLogin] = useContext(contextApi)
    return(
        <>
        <div className="navbar">
                <Link to="/" className="text ">Login</Link>
                <Link to="/home" className="text">Home</Link>
                {login ? <button style={{marginLeft:"40%" ,background:"green",border:"none"}} onClick={() => setLogin(false)}>logout</button> : <h1></h1>}
            </div>
        </>
    )
}
export default Navbar;