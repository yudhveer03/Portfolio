import Skill from "../components/Skill";
import { html, css, js, mysql, react,mongodb,express,node,tailwind } from "../assets"
import "./Skills.css";
export default function Skills() {

    const card = [
        { name: "HTML", image: html, progress: 90, caption: "Semantic structure,forms,accessiblity" },
        { name: "CSS", image: css, progress: 80, caption: "Flexbox, Grid, responsive layouts" },
        { name: "Javascript", image: js, progress: 75, caption: "DOM manimulation, async APIs" },
        { name: "ReactJS", image: react, progress: 75, caption: "Reusable component, routing" },
        { name: "MySQL", image: mysql, progress: 70, caption: "Relational database ,joins, data queries" },
        { name: "MongoDB", image: mongodb, progress: 70, caption: "NoSQL database, document-oriented, collections, aggregation" },
        { name: "Express.js", image: express, progress: 70, caption: "Web framework, REST APIs, routing, middleware" },
        { name: "Node.js", image: node, progress: 70, caption: "JavaScript runtime, server-side execution, event-driven" },
        { name: "Tailwind", image: tailwind, progress: 70, caption: "Utility-first CSS, rapid styling, responsive design" },
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