import img1 from "../../assets/Mario and Adrian A.jpg"
import img2 from "../../assets/Mario and Adrian b.jpg"

const About = () =>{
    return(
        <section id="about" className="grid row">
            <article>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Nulla facilisi. Cras gravida ipsum quis ipsum mollis, et sodales nulla mattis. Duis id sapien rutrum ex feugiat semper vitae nec dui. Ut euismod sed eros et egestas. Nunc mattis erat nec augue volutpat viverra ac ac felis. Praesent id luctus sapien. Nam viverra tempor nibh vitae fermentum. Morbi convallis id ex vel porttitor.</p>
            </article>
            <div className="photo">
                <img src={img1} className="image1"/>
                <img src={img2} className="image2" />
            </div>
        </section>
    )
}

export default About;