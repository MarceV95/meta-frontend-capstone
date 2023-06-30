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
                    <a href="/#"><img src={logo}/></a>
                </div>

                <div>
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="/#">Home</a></li>
                        <li><a href="/#">About</a></li>
                        <li><a href="/#">Menu</a></li>
                        <li><a href="/#">Reservations</a></li>
                        <li><a href="/#">Order Online</a></li>
                        <li><a href="/#">Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>678 Pisa Ave, Chicago, IL 60611</li>
                        <li>(312) 593-2744</li>
                        <li>customer@littlelemon.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Our Social Media</h3>
                    <ul className="social-icons">
                        <li>
                            <a href="/#">
                                <img src={iconFacebook} />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={iconInstagram} />
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <img src={iconTwitter} />
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <img src={iconYoutube} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;