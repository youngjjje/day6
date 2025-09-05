import {Link} from "react-router-dom"
import {useState} from "react"
import "../css/Navigation.css"

const NavigationMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    const menuItems = [
        { path: "/", label: "Home" },
        { path: "/profile", label: "Profile" },
        { path: "/about", label: "About" },
        { path: "/contact", label: "Contact" },
        { path: "/post", label: "Post" }
    ]

    return (
        <div>
            <button onClick={toggleMenu} className="menu-btn">
                Menu
            </button>

            {/* 사이드 메뉴는 DOM에 항상 있고, className으로 열고 닫힘만 제어 */}
            <div className={`side-menu ${menuOpen ? "open" : ""}`} >
                <button onClick={toggleMenu} className="menu-btn">Menu</button>
                {menuItems.map((item) => (
                    <Link className="menu-word" key={item.path} to={item.path} onClick={() => setMenuOpen(false)}>
                        <div>{item.label}</div>
                    </Link>
                 ))}
            </div>            
        </div>
    )
}

export default NavigationMenu