import "./CSS/Resume.css";

const Resume = ({title}) => {
  return (
    <div className="resume" id='resume'>
       <h2 className="title">{title}</h2> 
       <div className="container">
          <div className="content">
              <div className="card">
                <div className="card-title"><h4>Skills</h4></div>
                {/* <img src="/" alt="Skills" /> */}
                <p className="skills">JavaScript (ES6) -|-  HTML5 -|- CSS -|- Flex Box -|-   MongoDB -|- Mongoose-|- Express -|- React JS-|- Node JS  -|- Github </p>
                <p><span className="line"></span></p>
                <p className="skills">Remote WFH/ Remote Team Collaboration & Pair Programming -|-  Networking & Relationship Management -|- Version Control -|- Command Line </p>
              </div>

            
              <div className="card">
                <div className="card-title"><h4>Experience</h4></div>
                {/* <img src="/" alt="Experience" /> */}
                <p className="exp"> Mobile First (Freelance) Web Development & Graphic Design | Fierce Generation, LLC 2021</p>
                <div><span className="line"></span></div>
                <p className="exp">  SEI - Fellowship | General Assemply 2021</p>
                <p><span className="line"></span></p>
                <p className="edu">Freelance Tutoring - Python December 2019</p>
              </div>

            
              <div className="card">
                <div className="card-title"><h4>Education</h4></div>
                {/* <img src="/" alt="Education" /> */}
                <p className="edu">General Assembly | Software Engineering Immersive </p>
                <p><span className="line"></span></p>
                <p className="edu">Harvard University | CS50</p>
                <p><span className="line"></span></p>
                <p className="edu">MongoDB University | MongoDB Basics Certification </p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Resume;