import "./Abouts.css"
import bottomImage from "../assets/bottom-image.jpg"
import { ImageLoader } from "../hooks/ImageLoader";
import Loader from "./Loader/Loader";


export default function Abouts() {
    const status = ImageLoader(bottomImage);

    return (
        <>
            <section id="about">
                <h1 className="aboutPageHeading">About</h1>
                <div id="aboutInnerDiv">
                    <div className="aboutPageImage">
                        {status == "loading" && <Loader/>}
                        {status == "error" && <h1>image not found</h1>}
                        {status == "loaded" && <img src={bottomImage} alt="About me" />}
                    </div>

                    <div className="aboutPageText">
                        <p>
                            I’m a passionate MERN Stack Developer and Computer Science student who enjoys building modern and responsive web applications. I work with MongoDB, Express.js, React, and Node.js to create scalable full-stack solutions. I’m constantly learning, improving my skills, and building real-world projects.

                           
                        </p>
                    </div>
                </div>

            </section>
        </>
    )
}