import { CDN_LINK } from "../utilities/constants";
import { useState } from "react";

const Header = () => {
    const[btname,setbtname] = useState("Login")
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={CDN_LINK}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="Log-in" onClick={() => {btname === "Login"? setbtname("Logout"): setbtname("Login")}}>{btname}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;