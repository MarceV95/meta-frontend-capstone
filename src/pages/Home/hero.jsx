
import { Link } from "react-router-dom"

import hero from "../../assets/restauranfood.jpg"

const Hero = () => {
    return(
        <section id="hero">
            <article>
                <div className="grid row">
                    <div className="hero-text">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <Link to="/reservation"><button>Reserve a Table</button></Link>
                    </div>
                    <div className="hero-image">
                        <img src={hero}/>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Hero;