import "./CSS/Resume.css";

const Resume = ({title}) => {
  return (
    <div className="resume">
        <h2>{title}</h2>
        <div className="container">
          {/* <span className="line"></span> */}
          <div className="content">
            <div className="card">

              {/* <img src="/" alt="Skills" /> */}
              <p className="heading">Skills</p>
              <p className="skills">JavaScript (ES6) -|-  HTML5 -|- CSS -|- Flex Box -|-   MongoDB -|- Mongoose-|- Express -|- React JS-|- Node JS </p>
              <p><span className="line"></span></p>
              <p className="skills">Remote WFH/ Remote Team Collaboration & Pair Programming -|- Virtual Networking & Relationship Management </p>
            </div>

            <div className="card">
              {/* <img src="/" alt="Experience" /> */}
              <p className="heading">Experience</p>
              <p className="exp"> Freelance Web Development & Graphic Desighn | Fierce Generation, LLC 2021</p>
              <p><span className="line"></span></p>
              <p className="exp">  SEI - Fellowship | General Assemply 2021</p>
              <p><span className="line"></span></p>
              <p className="edu">Freelance Tutoring - Python December 2019</p>
            </div>
            <div className="card">
              {/* <img src="/" alt="Education" /> */}
              <p className="heading">Education</p>
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