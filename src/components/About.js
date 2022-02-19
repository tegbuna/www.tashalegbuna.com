import "./CSS/About.css";


const About = ({title}) => {
  return (
    <div className="about" id="about">

          <div className="container">
              {/* <img className="for-mobile" src={Tasha} alt="Tasha L. Egbuna" /> */}

              <div className="content">
                <h2>{title}</h2> 
                    {/* <img className="about-photo" src={Tasha} alt="Tasha L. Egbuna" /> */}
                    
                    <div className="two-columns">
                      <div className="paragraphs">
                        <div className="one"> <p> I'm a full stack software engineer with a huge passion for front-end development and design.  A few years ago I became curious about coding and that eventually led me to <span className="bold">General Assembly's Software Engineering Immersive Program. </span></p></div> 
                          <br />
                        <div><p className="quotation">"A huge passion for front-end development and design... eager to collaborate... add value... committed to continual learning, growth and success."</p></div>
                          <br />
                          <div className="two"> <p>In every career prior to software development I have  excelled at connecting with people of all levels.  I  developed a successful portfolio, substantial peer and client networks, and a strong record of advancement and leadership. </p> </div> 
                           <br /> 
                          <div className="three"> <p> As a developer I am eager to collaborate on innovative teams solving unique programming and design challenges  where I can add value for the greater good.  In this endevor - as in all endevors, I am committed to continual learning, growth and success.</p> </div>  
                           <br />
                          <div> <p className="centered">I look forward to connecting with you.</p></div> 
                          <div className="email">tasha@tashalegbuna.com</div>
                        </div> 
                        
                    
                    </div> 
              </div>

          </div>
      </div>
  )
}

export default About