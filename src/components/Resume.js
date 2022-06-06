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
                <p className="skills"><span id="skillz">Adobe XD . Figma . JavaScript (ES6) . HTML5 . CSS . Flex Box . MongoDB . Express . React . Node . Github . Invision . Trello . Command Line  </span></p>
                <p><span className="line"></span></p>
                <p className="skills"> Remote Work . Pair Programming .  Networking . Research . Design Thinking . Project Management . Relationship Management </p>
              </div>

            
              <div className="card">
                <div className="card-title"><h4>Experience</h4></div>
                {/* <img src="/" alt="Experience" /> */}
                <p className="exp"><span id="skillz"> Software Development / Graphic Design </span> - Freelance | Fierce Generation, LLC 2021</p>
                <div><span className="line"></span></div>
                <p className="exp"> <span className=".bold"> SEI - Fellowship</span> | General Assemply 2021</p>
                <p><span className="line"></span></p>
                <p className="exp"><span className=".bold"> Tutoring</span> - Python |  (Freelance) 2019</p>
              </div>

            
              <div className="card">
                <div className="card-title"><h4>Education</h4></div>
                {/* <img src="/" alt="Education" /> */}
                <p className="edu">Coursera | Google UX Design Certification </p>
                <p className="edu">MongoDB University | MongoDB Basics Certification </p>
                <p className="edu">General Assembly | Software Engineering Immersive Certification </p>
                <p><span className="line"></span></p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Resume;