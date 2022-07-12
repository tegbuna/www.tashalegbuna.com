import "./CSS/Footer.css";
import FooterNav from "./FooterNav";
import LetsConnect from "./LetsConnect";
// import {SiLinkedin, SiGithub, SiGmail} from "react-icons/si";

const Footer = () => {
  return (
    <div className='footer'>
          <div className="container">
              <div className="content">
                <div className="connect-container">
              </div>
              <FooterNav />
              </div>
          </div>
    </div>
  )
}

export default Footer

