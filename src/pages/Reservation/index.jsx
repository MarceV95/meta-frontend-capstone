import "./style.css"
import ReservationForm from "./reservationForm";
import img from "../../assets/restaurant.jpg"

const Reservation = (props) =>{
    
    return(
        <section id="reservation">
            <article id="reservation-banner">
                <h1>Reservation</h1>
                <h2>Book a table</h2>
            </article>

            <div className="grid form-container row">
                <img src={img} />
                <ReservationForm times={props.times} dispatch={props.dispatch}/>
            </div>
            

        </section>
    )
}

export default Reservation;