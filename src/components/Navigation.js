import {Link} from "react-router-dom"
import NavigationMenu from "./NavigationMenu"


import Flower from "../Image/Flower.PNG"

const Navigation = () => {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <NavigationMenu >Menu</NavigationMenu>
            </div>

            <div className="nav-center">
                <Link to="/">
                    <img src={Flower} alt="Home" className="nav-logo" />
                </Link>
            </div>

            <div className="nav-right">
                <Link to="/profile" className="nav-link">My Profile</Link>
            </div>
        </nav>
    )
}

export default Navigation