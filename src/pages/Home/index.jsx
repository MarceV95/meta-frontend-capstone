import "./style.css"

import Specials from "./specials"
import Hero from "./hero"
import Testimonials from "./testimonials"
import About from "./about"

const Home = () =>{
    return(
        <>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
        </>
    )
}

export default Home;