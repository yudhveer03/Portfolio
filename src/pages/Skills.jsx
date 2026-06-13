import Skill from "../components/Skill";
import { html, css, js, mysql, react } from "../assets"
import "./Skills.css";
export default function Skills() {

    const card = [{name:"HTML",image:html,progress:90,caption:"Semantic structure,forms,accessiblity"},
        { name: "CSS", image: css, progress: 80, caption: "Flexbox, Grid, responsive layouts" },
        { name: "Javascript", image: js, progress: 75, caption: "DOM manimulation, async APIs" },
        { name: "ReactJS", image: react, progress: 75, caption: "Reusable component, routing" },
        { name: "MySQL", image: mysql, progress: 70, caption: "Relational database ,joins, data queries" },
        ]
    return (

        <>
        <h1 className="Skill-heading">Skills</h1>
        <div className="skill-container">


            <Skill data={card}/>

        </div>
        </>
    )
}