import "./Project.css"
import Card from "../components/Card";



export default function Projects(){
    let techStack = ["HTML", "CSS", "JS", "React","Express", "MongoDB"]
    
    const projects = [
        {
            title: "Airbnb Clone",
            image: "/project1.png",
            techStack: ["EJS", "Node.js", "Express", "MongoDB"],
            liveDemoLink: "https://example.com",
            GithubLink: "https://github.com/user/airbnb-clone"
        },
     
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
                        GithubLink={project.GithubLink}
                    />
                ))}
            </div>

                



            </div>
                

    </>)
}