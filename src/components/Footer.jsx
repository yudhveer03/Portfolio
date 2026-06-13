import { Link } from "react-router"
import "./Footer.css"
export default function Footer(){

    return(

        <footer className="footer">
  <p>© 2026 Yudhveer. All rights reserved.</p>

  <div className="footer-links">
            <a href="https://github.com/yudhveer03" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/yudhveer-soni-941336348/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://x.com/Yudhveer_S3" target="_blank" rel="noopener noreferrer">Twitter</a>
    
    <Link to={"/contact"}>Contact</Link>
  </div>
</footer>

    )
}