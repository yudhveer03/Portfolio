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
                            I’m a passionate Frontend developer and a computer science student who enjoys building modern, responsive web applications. I’m currently focused on improving my frontend skills with React and exploring backend development with Node.js and MongoDB.

                            I’m always eager to learn, grow, and work on real-world projects.
                        </p>
                    </div>
                </div>

            </section>
        </>
    )
}