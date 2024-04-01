import CartWidget from "../CartWidget/CartWidget"
import logo from "./assets/logo.png"
const NavBar = () => {
    return(
        <nav className="navBar">
            <img src={logo} alt="reiwaLogo" />
            <div>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Productos</a>
                    </li>
                    <li>
                        <a href="#">Ofertas</a>
                    </li>
                    <li>
                        <a href="#">Nosotros</a>
                    </li>
                    <li>
                        <a href="#">Contactanos</a>
                    </li>
                </ul>
            </div>            
            <CartWidget />

            <div>
                
                <button>Log In</button>
            </div>
        </nav>
    )
}

export default NavBar