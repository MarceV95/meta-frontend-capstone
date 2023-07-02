import {FaStar, FaRegStar} from "react-icons/fa6"

const Card = (props) =>{
    return(
        <article>
            <div>
                <img src={props.avatar} className="card-image"/>
                <div>
                    <h3 className="card-name">{props.name}</h3>
                    <div className="card-rating">
                        {Array.from(Array(5), (e, i) => {
                            if(i < Number(props.rating)){
                                return(
                                    <FaStar className="" key={i}/>
                                )
                            }else{
                                return(
                                    <FaRegStar key={i}/>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
            <p className="card-review">{props.children}</p>
        </article>
    )
}

const Testimonials = () =>{
    return(
        <section id="testimonials">
            <h2>Testimonials</h2>
            <article className="testimonials-container grid row">
                <Card name="Ronald Ford" rating="4" avatar="https://i.pravatar.cc/150?img=65">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium ex diam, nec laoreet ex vehicula egestas. Phasellus at enim eu neque feugiat consectetur vitae eu nibh."</Card>
                <Card name="Carmi Sandip" rating="5" avatar="https://i.pravatar.cc/150?img=48">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium ex diam, nec laoreet ex vehicula egestas. Phasellus at enim eu neque feugiat consectetur vitae eu nibh."</Card>
                <Card name="Gabriel Tatius" rating="4" avatar="https://i.pravatar.cc/150?img=68">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium ex diam, nec laoreet ex vehicula egestas. Phasellus at enim eu neque feugiat consectetur vitae eu nibh."  </Card>
                <Card name="Lin Jeremiah" rating="3" avatar="https://i.pravatar.cc/150?img=69">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium ex diam, nec laoreet ex vehicula egestas. Phasellus at enim eu neque feugiat consectetur vitae eu nibh. "</Card>
            </article>
        </section>
    )
}

export default Testimonials;