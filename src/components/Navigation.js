import {Link, useNavigate} from "react-router-dom"
import NavigationMenu from "./NavigationMenu"
import {authService} from "fbase"

import Flower from "../Image/Flower.PNG"

const Navigation = () => {
    const navigate = useNavigate()

    const onLogOutClick = () => {
        authService.signOut()
        navigate("/")
    }

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
                <button className="logout-btn" onClick={onLogOutClick}>Log Out</button>
            </div>
        </nav>
    )
}

export default Navigation