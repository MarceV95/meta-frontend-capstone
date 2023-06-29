import logo from "../../assets/logoFooter.png"

const Footer = () =>{
    return(
        <footer style={{"background": "green"}}>
            <div>
                <img src={logo} height={170}/>
            </div>
            <div>Navigation</div>
            <div>Contact</div>
            <div>Social Media Links</div>
        </footer>
    )
}

export default Footer;