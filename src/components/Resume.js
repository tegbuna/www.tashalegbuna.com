import "./CSS/Resume.css";

const Resume = ({title}) => {
  return (
    <div className="resume" id='resume'>
        <div className="container">
          <h2>{title}</h2>
          <div className="content">
          <h2 className="mobile-h2">{title}</h2>
            
              <div className="category">Skills</div>
              <div className="category">Experience</div>
              <div className="category">Education</div>
              
            <div className="heading">Skills</div>
            <div className="card">
              {/* <img src="/" alt="Skills" /> */}
              <p className="skills">JavaScript (ES6) -|-  HTML5 -|- CSS -|- Flex Box -|-   MongoDB -|- Mongoose-|- Express -|- React JS-|- Node JS </p>
              <p><span className="line"></span></p>
              <p className="skills">Remote WFH/ Remote Team Collaboration & Pair Programming -|-  Networking & Relationship Management </p>
            </div>

              

             <div className="heading">Experience</div>
             <div className="card">
              {/* <img src="/" alt="Experience" /> */}
              <p className="exp"> Mobile First (Freelance) Web Development & Graphic Desighn | Fierce Generation, LLC 2021</p>
              <div><span className="line"></span></div>
              <p className="exp">  SEI - Fellowship | General Assemply 2021</p>
              <p><span className="line"></span></p>
              <p className="edu">Freelance Tutoring - Python December 2019</p>
            </div>

            <div className="heading">Education</div>
            <div className="card">
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