import { FaBarsStaggered,FaHouseMedical} from "react-icons/fa6";
import "./Nav.css"
import { VscDebugAll } from "react-icons/vsc";
import { Link } from "react-router"
export default function Nav() {

    function handleNav(){
        const sidebar = document.getElementById("sidebar");
        const menuBtn = document.querySelector(".menuBtn");

        if(sidebar.style.height === "250px") {
            sidebar.style.height = "0px";
            menuBtn.classList.remove("closeBtn");
        } else {
            sidebar.style.height = "250px";
            menuBtn.classList.add("closeBtn");
        }
    }
    return (

        <>

            <nav id="nav" >
                <Link id="logo" className="navAnimation" to="/"> Yudhveer<VscDebugAll/></Link>
               
                
                <div id="links">

                    
                    <Link className={`link navAnimation`} to="/">Home</Link>
                    {/* <Link className={`link navAnimation`} to="#aboutSection">About</Link> */}

                    <Link className={`link navAnimation`} to="/contact">Contact</Link>
                    <Link className={`link navAnimation`} to="/skills">Skills</Link>
                    <Link className={`link navAnimation`} to="/projects">Projects</Link>


                </div>

                 <FaBarsStaggered onClick={handleNav} className="menuBtn"></FaBarsStaggered>

                
                
            </nav>

            <div id="sidebar" style={{height: "0px"}}>

                    <Link onClick={handleNav} className={`sidebarlink `} to="/">Home</Link>
                    <Link onClick={handleNav} className={`sidebarlink `} to="/contact">Contact</Link>
                    <Link onClick={handleNav} className={`sidebarlink `} to="/skills">Skills</Link>
                    <Link onClick={handleNav} className={`sidebarlink `} to="/projects">Projects</Link>
                </div>

        </>
    )
}