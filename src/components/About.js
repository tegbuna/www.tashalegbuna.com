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
                  
                      <p className="para-1"></p>  I'm a full stack software engineer with a huge passion for front-end  development.  A few years ago I became curious about coding and that led me to General Assembly's Software Engineering Immersive Program. 
                      <br /><br />
                      <p>I  had a diverse background prior to software development but I've always excelled at connecting with people of all levels.  I  developed a successful portfolio, substantial peer and client networks, and a strong record of advancement and leadership. </p> 
                      <br />
                      <p className="para-2">   As a developer I am eager to collaborate on innovative teams solving unique programming and design challenges  where I can add value for the greater good.  In this endevor - as in all endevors, I am committed to continual learning, growth and success.</p>  
                      
                      <br /><p>I look forward to connecting with you.</p>
                     
              </div>

          </div>
      </div>
  )
}

export default About