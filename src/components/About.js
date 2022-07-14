import "./CSS/About.css";


const About = ({title}) => {
  
  return (
      <div className="about" id="about">
          <h2 className="title">{title}</h2>
          <div className="container">
              <div className="content">
                    <div>
                      {/* <p id="quotation-mobile">"A huge passion for front-end development and design... eager to collaborate... add value... committed to continual learning, growth and success."</p> */}
                    </div>
                    <div>
                      <div className="paragraphs">
                        <div className="about-me"> 
                          <p> I'm Tasha!
                          <br />
                          <br />
                          A recent Google UX design grad with software development experience. I have a huge passion for all things front-end and I am eager to join an awesome team where I can collaborate and contribute to solving unique  and innovative design challenges. 
                          <br />
                          <br />
                          As a new ux professional I am committed to continual learning growth and achievements and I look forward to connecting with you soon.</p> 
                          </div>  
                        </div> 
              </div> 
          </div>

      </div>
    </div>
  )
}

export default About