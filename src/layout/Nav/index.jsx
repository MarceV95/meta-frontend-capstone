import { NavLink, Link } from "react-router-dom";
const Nav = () =>{
    return(
        <nav className="nav-bar">
            <ul>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><Link to="#">ABOUT</Link></li>
                <li><Link to="/#">MENU</Link></li>
                <li><NavLink to="/reservation">RESERVATIONS</NavLink></li>
                <li><Link to="/#">ORDER ONLINE</Link></li>
                <li><Link to="/#">LOGIN</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;