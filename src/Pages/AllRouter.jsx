import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

const AllRouter = () => {
    return(
        <div>
        <Switch>
            <Route path="/" exact>
                <Login/>
            </Route>
            <Route path="/home" exact>
                <Home/>
            </Route>
        </Switch>
        </div>
    )
}
export default AllRouter;