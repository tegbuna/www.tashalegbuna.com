import "./CSS/Footer.css";
import {SiLinkedin, SiGithub, SiGmail} from "react-icons/si";

const Footer = () => {
  return (
    <div className='footer'>
          <div className="container">
              <div className="content">
                <div className="quotation">
                   <h1 className="connect">
                      Let's connect!
                   </h1>
                      <div className="social">
                        <div className="social-list">
                          <a className="linkedin" href="https://www.linkedin.com/tasha-l-egbuna/" rel="noreferrer" target="_blank"><SiLinkedin/></a>
                          <a className="github" href="https://www.github.com/tegbuna" rel="noreferrer" target="_blank"><SiGithub/></a>
                          <a className="github" href="/" rel="noreferrer" target="_blank"><SiGmail/></a>

                        </div>
                      </div>
                      {/* <p className="email">tasha@tashalegbuna.com</p> */}
                </div>
              </div>
          </div>
    </div>
  )
}

export default Footer

