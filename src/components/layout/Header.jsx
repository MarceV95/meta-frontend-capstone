import logo from "../../assets/Logo.svg"

const Header = ({children}) =>{
    return(
        <header className="grid row">
            <a className="logo-image" href="/#"><img src={logo} /></a>
            {children}
        </header>
    )
}

export default Header;