import "./CSS/LetsConnect.css";
import {SiLinkedin, SiGithub, SiGmail} from "react-icons/si";


const LetsConnect = () => {
  return (
    <div>
        <div className="connect-form">
            <div className="form-container">
               <form action="/">
                   <label htmlFor="name">Name</label>
                   <input type="text" name="Name" />

                   <label htmlFor="email">E-mail</label>
                   <input type="email" name="user-email" />

                   <label htmlFor="name">Message</label>
                   <textarea type="text" name="Message" rows="4" />
                   <button type="submit">Send</button>
                   <div className="social">
                        <div className="social-list">
                          <a className="linkedin" href="https://www.linkedin.com/in/tasha-l-egbuna/" rel="noreferrer" target="_blank"><SiLinkedin/></a>
                          <a className="github" href="https://www.github.com/tegbuna" rel="noreferrer" target="_blank"><SiGithub/></a>
                          {/* <a className="github" href="/" rel="noreferrer" target="_blank"><SiGmail/></a> */}
                        </div>
                    </div>
                   
               </form>
            </div>
        </div>
    </div>
  )
}

export default LetsConnect