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
                <p className="skills"><span className="">JavaScript (ES6) - HTML5 - CSS - Flex Box -  MongoDB -  Express - React JS -  Node JS  -  Ruby on Rails - Postgres </span></p>
                <p><span className="line"></span></p>
                <p className="skills">Github - Invision - Trello - Version Control - CL - Discord/ Slack/ Zoom (Remote Work) -  Pair Programming -  Networking & Relationship Management </p>
              </div>

            
              <div className="card">
                <div className="card-title"><h4>Experience</h4></div>
                {/* <img src="/" alt="Experience" /> */}
                <p className="exp"><span className=""> Mobile First Front-End Development & Graphic Design </span>(Freelance) | Fierce Generation, LLC 2021</p>
                <div><span className="line"></span></div>
                <p className="exp"> <span className=""> SEI - Fellowship</span> | General Assemply 2021</p>
                <p><span className="line"></span></p>
                <p className="exp"><span className=""> Tutoring</span> - Python |  (Freelance) 2019</p>
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