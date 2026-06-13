
import Abouts from "../components/Abouts"
import Button from "../components/Button"
import Personal from "../components/Personal"
import "./Home.css"
export default function Home(){

    return ( 

        <>
       
        <Personal/>
        <Abouts/>
        <Button title={"View Projects"}/>
        </>
    )
}