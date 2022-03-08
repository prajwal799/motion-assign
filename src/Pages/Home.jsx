import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { contextApi } from "./ContextApi";
import data from "../db.json"
const Home = () => {
    const [login,setLogin] = useContext(contextApi);
   
    return login ? <div>
        <div>
           
        </div>
   
    </div> : <Redirect to="/" />
}
export default Home;