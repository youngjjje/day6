import {Link} from "react-router-dom"
import NavigationMenu from "./NavigationMenu"

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">My Profile</Link>
                </li>
                <div>
                    <NavigationMenu >메뉴</NavigationMenu>
                </div>
            </ul>
        </nav>
    )
}

export default Navigation