import { CDN_LINK } from "../utilities/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const[btname,setbtname] = useState("Login")
    return(
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img className="w-48" src={CDN_LINK}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-2 m-4">
                    <li className="px-4">
                        <Link to="/Grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to= "/About">About</Link>
                    </li>
                    <li className="px-4">
                        <Link to = "/Contact">Contact</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button className="Log-in" onClick={() => {btname === "Login"? setbtname("Logout"): setbtname("Login")}}>{btname}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;