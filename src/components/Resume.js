import "./CSS/Resume.css";

const Resume = ({title}) => {
  return (
    <div className="resume" id='resume'>
       {/* <h2 className="title">Resume</h2>  */}
       <div className="container">

          <div className="boxes">

              <div className="card">

                <div className="heading">
                 <div className="t4s">Skills</div> 
                </div>
                
                <div className="cardText"> 
                  <p className="skills"> Adobe XD <br />   Figma <br />  Research <br />   Design Thinking <br />  Relationship Management <br />  Project Management <br />  Networking <br />  Remote Work <br />  Pair Programming <br /> React JS <br />  HTML5 <br />  CSS - Flexbox & Grid <br />  Javascript <br />  MongoDB <br />  Express <br />  Node <br />  Github <br />  Command Line  (CLI) </p>
                </div>

              </div>

            
              <div className="card">

                <div className="heading">
                  <div className="t4s">Experience</div>                  
                </div>

                <div className="cardText">
                  <p className="exp">2021 |<span className="bold"> Freelance UX Design & Responsive Software Development </span>  Fierce Generation, LLC</p>
                  <br />
                  <p className="exp">2019 |<span className="bold"> Freelance Tutoring  (Python)</span> </p>
               </div>

              </div>

            
              <div className="card">

                <div className="heading">
                  <div className="t4s">Education</div>                  
                </div>

                 <div className="cardText">
                  <p className="edu"><span className="bold"> Google UX Design Certification</span> | Coursera - Google </p><br />
                  <p className="edu"><span className="bold"> MongoDB Database Certification</span> | MongoDB University </p><br />
                  <p className="edu"><span className="bold"> Software Engineering Immersive Certification</span> | General Assembly </p><br />
                  <p className="edu"><span className="bold">2022 Scholarship Recipient</span> | The Mom Project</p>
                  <p><span className="line"></span></p>

                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Resume;