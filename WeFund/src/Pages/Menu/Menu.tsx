import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Menu(){
    return(
        <>
        <Router>
            <h1>Menu</h1>
            <Sidebar/>
            <div>
                
            </div>
        </Router>
        </>
    )
}

export default Menu;