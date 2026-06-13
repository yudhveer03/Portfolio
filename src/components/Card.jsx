import "./Card.css"
import { Link } from "react-router"
import Loader from "../components/Loader/Loader"
import {ImageLoader} from "../hooks/ImageLoader";

export default function Card({ image, title, techStack, liveDemoLink, GithubLink }) {

    const status = ImageLoader(image);

    return (

        <div id="card">
            <div className="cardImage">
                {status == "loading" && <Loader />}
                {status == "error" && <h1>image not found</h1>}
                {status == "loaded" && <img src={image} alt="image" />}
            </div>

            <div className="cardInfo">
              
        
                <h1>{title}</h1>

                <div className="TechStack">
                    {techStack.map((item,index) =>
                        <li key={index}>{item}</li>
                    )}
                
                </div>
                
                <div className="cardBtns">
                    <Link className="cardBtn" to={liveDemoLink}>Live Demo</Link>
                    <Link className="cardBtn" to={GithubLink}>Git Hub</Link>

                </div>

            

            </div>
        </div>
    )
};
    
