import {Link} from "react-router-dom"
import {useState} from "react"

const NavigationMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const menuItems = [
        { path: "/", label: "Home" },
        { path: "/profile", label: "Profile" },
        { path: "/about", label: "About" },
        { path: "/contact", label: "Contact" },
        { path: "/post", label: "Post" }
    ]

    return (
        <div>
            <button onClick={() => setIsOpen((prev) => !prev)}>
                메뉴
            </button>
            {isOpen && (
                <div>
                    {menuItems.map((item) => (
                        <Link key={item.path} to={item.path}>
                            <div>{item.label}</div>
                        </Link>
            ))}
                </div>
            )}
            
        </div>
    )
}

export default NavigationMenu