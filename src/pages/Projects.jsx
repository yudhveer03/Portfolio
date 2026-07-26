import "./Project.css"
import Card from "../components/Card";
import { heavenHomes, mongodb ,bingetix ,taskflow} from "../assets";


export default function Projects(){
    let techStack = ["HTML", "CSS", "JS", "React","Express", "MongoDB","Node"]
    
    const projects = [
        {
            title: "HeavenHomes",
            image: heavenHomes,
            techStack: ["EJS", "Node.js", "Express", "MongoDB"],
            liveDemoLink: "https://heavenhomes-zsk9.onrender.com/",
        },
        {
            title: "TaskFlow",
            image: taskflow,
            techStack: ["MongoDB", "Express.js", "Node.js", "React.js"],
            liveDemoLink: "https://task-flow-frontend-ebon.vercel.app/login",
        },
        {
            title: "BingeTix",
            image: bingetix,
            techStack: ["MongoDB", "Express.js", "Node.js", "React.js"],
            liveDemoLink: "https://binge-tix-client.vercel.app"
        }
     
    ];


    
    return (<>

        <h1 className="Project-heading">Projects</h1>
                <div className="Project-container">

            <div className="Project-container">
        
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        image={project.image}
                        title={project.title}
                        techStack={project.techStack}
                        liveDemoLink={project.liveDemoLink}
                    />
                ))}
            </div>

                



            </div>
                

    </>)
}