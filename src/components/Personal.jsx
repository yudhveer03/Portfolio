import profile from "../assets/profile.jpeg"
import "./Personal.css"
import { Resume } from "../assets/index"
import { ImageLoader } from "../hooks/ImageLoader";
import Loader from "./Loader/Loader";

export default function Personal() {

    const status = ImageLoader(profile);

    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = Resume;
        link.download = "YUDHVEER SONI.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };





    <button onClick={downloadResume}>Download Resume</button>


    return (

        <div id="Personal">
            
            <div className="info">

                <div id="title">
                    <h2>Hi i'm</h2>
                    <h1>YUDHVEER SONI</h1>

                </div>
                <div id="fieldInfoTag">
                    <p>MERN Stack Developer</p>

                </div>

                <div className="about" >

                    <span> I’m a MERN Stack Developer who builds scalable, responsive, and user-focused web applications using modern technologies and clean development practices.</span>
                </div>


                <div className="btns">

                    <button>Hire Me!</button>
                    <button onClick={downloadResume}>Resume</button>
                </div>


            </div>

            <div className="image">
                
                {status == "loading" && <Loader/>}
                {status == "error" && <h1>image not found</h1>}
                {status == "loaded" && <img src={profile} alt="" />}
            </div>


        </div>
    )
}