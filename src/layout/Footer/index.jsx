
import "./style.css"

import {FaLocationDot, FaPhone, FaEnvelope} from "react-icons/fa6"
import { Link } from "react-router-dom"

import logo from "../../assets/logoFooter.png"
import iconFacebook from "../../assets/icons/Facebook.svg"
import iconInstagram from "../../assets/icons/Instagram.svg"
import iconTwitter from "../../assets/icons/Twitter.svg"
import iconYoutube from "../../assets/icons/YouTube-1.svg"

const Footer = () =>{
    return(
        <footer >
            <div className="grid row">

                <div className="logo-footer">
                    <Link to="/#"><img src={logo} alt="Little Lemon's Logo"/></Link>
                </div>

                <div>
                    <h3>Navigation</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/#">About</Link></li>
                        <li><Link to="/#">Menu</Link></li>
                        <li><Link to="/reservation">Reservations</Link></li>
                        <li><Link to="/#">Order Online</Link></li>
                        <li><Link to="/#">Login</Link></li>
                    </ul>
                </div>

                <div className="contact">
                    <h3>Contact</h3>
                    <ul>
                        <li><FaLocationDot />Chicago, Illinois</li>
                        <li><FaPhone />(123) 456-7890</li>
                        <li><FaEnvelope/>service@littlelemon.com</li>
                    </ul>
                </div>

                <div className="social-icons">
                    <h3>Our Social Media</h3>
                    <ul >
                        <li>
                            <Link to="/#">
                                <img src={iconFacebook} alt="Facebook Icon"/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <img src={iconInstagram} alt="Instagram Icon"/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/#">
                                <img src={iconTwitter} alt="Twitter Icon"/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/#">
                                <img src={iconYoutube} alt="Youtube Icon"/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;