import { CDN_LINK } from "../utilities/constants";

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

export default Header;