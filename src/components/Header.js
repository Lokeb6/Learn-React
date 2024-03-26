import { CDN_LINK } from "../utilities/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const[btname,setbtname] = useState("Login")
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={CDN_LINK}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/Grocery">Grocery</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to= "/About">About</Link>
                    </li>
                    <li>
                        <Link to = "/Contact">Contact</Link>
                    </li>
                    <li>Cart</li>
                    <button className="Log-in" onClick={() => {btname === "Login"? setbtname("Logout"): setbtname("Login")}}>{btname}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;