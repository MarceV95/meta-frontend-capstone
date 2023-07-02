import { Link } from "react-router-dom"


import food1 from "../../assets/greek salad.jpg"
import food2 from "../../assets/bruchetta.svg"
import food3 from "../../assets/lemon dessert.jpg"

import {RiEBike2Fill} from "react-icons/ri"

const Card = (props) => {
    return (
        <article>
            <img src={props.img}/>
            <div className="card-body">

                <div className="card-title">
                    <h2>{props.title}</h2>
                    <span>${props.cost}</span>
                </div>

                <p>{props.children}</p>

            </div>
            <div className="card-order">
                    <Link to="/" >
                        <h3>Order delivery</h3>
                        <RiEBike2Fill />
                    </Link>
                </div>
        </article>
    )
}

const Specials = () => {
    return(
        <section id="specials">
            <div className="grid row">
                <h1>This weeks specials!</h1>
                <Link to="/">
                    <button>Online Menu</button>
                </Link>
            </div>
            <article className="grid row card-container">
                <Card img={food1} title="Greek Salad" cost="12.99">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</Card>
                <Card img={food2} title="Bruchetta" cost="5.99">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with garlic with salt and olive oil.</Card>
                <Card img={food3} title="Lemon Dessert" cost="4.00">This comes straight from grandma's recipe book, every las ingreadient has been sourced and is as authentic as can be imagined.</Card>
            </article>
        </section>
    )
}

export default Specials;