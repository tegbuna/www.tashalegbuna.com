import "./CSS/About.css";
import Tasha from "./images/ItsMe.png";


const About = ({title}) => {
  return (
    <div className="about">

          <div className="container">
              {/* <img className="for-mobile" src={Tasha} alt="Tasha L. Egbuna" /> */}

              <div className="bio">
                <h2>{title}</h2> 
                    {/* <img className="about-photo" src={Tasha} alt="Tasha L. Egbuna" /> */}
                  
                      <p className="para-1"></p>  I'm a full stack software engineer with a huge passion for front-end  development.  I have a diverse background but where I have always exeled is connecting with people of all levels, solving problems and adding value for the greater good. A few years ago I became curious about coding and that led me to General Assembly's Software Engineering Immersive Program. 
                      <br /><br />
                      <p className="para-2"></p>   As a developer I am eager to collaborate on innovative teams and I find great satisfaction in solving unique design  and programming challenges. As an engaging and skilled communicator in my previous profession, I  developed a successful portfolio, substantial peer and client networks, and a strong record of advancement and leadership.  
           
                      <br /><br />

                      <p> In this endevor - as in all endevors, I am committed to continual learning, growth and success.`` I look forward to the opportunity to connect with you.</p>
                     
              </div>

          </div>
      </div>
  )
}

export default About