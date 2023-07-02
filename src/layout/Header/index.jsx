import { Link } from "react-router-dom"
import logo from "../../assets/Logo.svg"
import "./style.css"
import { useState, useEffect} from "react"
import {FaBars} from "react-icons/fa6"

const Header = ({children}) =>{

    const [showNav, setShowNav] = useState(false);

    return(
        <header className="grid row">
            <Link className="logo-image" to="/"><img src={logo} alt="Little Lemon's Logo"/></Link>
                <div id="mobile-nav">
                    <div className="hamburguer" onClick={ ()=>setShowNav(!showNav) } >
                        <FaBars />
                    </div>
                    {showNav &&
                    <div id="mobile-menu" onClick={()=>setShowNav(false)}>
                        {children}
                    </div>
                    }
                </div>
                <div id="desktop-nav">
                    {children}
                </div>
        </header>
    )
}

export default Header;