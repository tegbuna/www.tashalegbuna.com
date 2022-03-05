import "./CSS/Footer.css";
import LetsConnect from "./LetsConnect";
// import {SiLinkedin, SiGithub, SiGmail} from "react-icons/si";

const Footer = () => {
  return (
    <div className='footer'>
          <div className="container">
              <div className="content">
                <div className="connect-container">

                   <h1 className="connect">
                      Let's connect!
                   </h1>
                   <LetsConnect/>
                </div>
              </div>
          </div>
    </div>
  )
}

export default Footer

