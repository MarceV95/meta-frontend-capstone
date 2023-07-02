
import "./style.css"
import img from "../../assets/restaurant.jpg"
const ConfirmedBooking = () => {
    return(
        <section id="confirmed">
            <article id="confirmed-banner">
                <h1>Little Lemon</h1>
                <h2>Confirmation</h2>
            </article>

            <article className="row grid thanks-container">
                <img src={img} />
                <article>
                    <h1>Thank You!</h1>
                    <h2>Your booking has been succesful!</h2>
                    <p>Nunc mattis erat nec augue volutpat viverra ac ac felis. Praesent id luctus sapien. </p>
                </article>
            </article>
        </section>
    )
}

export default ConfirmedBooking;