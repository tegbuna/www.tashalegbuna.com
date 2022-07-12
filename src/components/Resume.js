import "./CSS/Resume.css";

const Resume = ({title}) => {
  return (
    <div className="resume" id='resume'>
       {/* <h2 className="title">Resume</h2>  */}
       <div className="container">
          <div className="content">
              <div className="card">
                <div className="t4s">Skills</div>
                {/* <img src="/" alt="Skills" /> */}
                <p className="skills"><span id="skillz"> Adobe XD . Figma . Research . Design Thinking . Relationship Management.  Project Management . Networking . React JS . HTML5 . CSS - Flex Box '&' Grid . Remote Work . Pair Programming  </span></p>
                <p><span className="line"></span></p>
                <p className="skills">  Javascript (ES6) . MongoDB . Express . Node . Github . Command Line Interface (CLI) </p>
              </div>

            
              <div className="card">
                <div className="t4s">Experience</div>
                {/* <img src="/" alt="Experience" /> */}
                <p className="exp"><span id="skillz">Freelance UX Design & Responsive Software Development </span> | Fierce Generation, LLC 2021</p>
                {/* <div><span className="line"></span></div> */}
                {/* <p className="exp"> <span className=".bold"> SEI - Fellowship</span> | General Assemply 2021</p>
                <p><span className="line"></span></p> */}
                <p className="exp"><span className=".bold">Freelance Tutoring</span> - Python | 2019</p>
              </div>

            
              <div className="card">
                <div className="t4s">Education</div>
                {/* <img src="/" alt="Education" /> */}
                <p className="edu"> Google UX Design Certification | Coursera - Google </p>
                <p className="edu"> MongoDB Database Certification | MongoDB University </p>
                <p className="edu"> Software Engineering Immersive Certification | General Assembly </p>
                <p className="edu">2022 Scholarship Recipient | The Mom Project</p>
                <p><span className="line"></span></p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Resume;