
import { Link } from "react-router"
import "./Button.css"

export default function Button({title}){

    return <Link className="btn" to="/projects">{title}</Link>
}