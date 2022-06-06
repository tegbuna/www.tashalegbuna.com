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
                    <div className="bio">
                      <div className="paragraphs">
                        <div className="one"> 
                          <p> H, I'm <span className="name">Tasha! </span>
                          <br />
                          <br />
                          A <span className="pink">ux/ui designer</span> and <span className="blue">software engineer</span> with a huge passion for <span className="blue"> front-end development</span> and <span className="pink">design</span>.  A few years ago I became curious about coding and that led me to <span className="green">General Assembly's Software Engineering Immersive Bootcamp.</span></p>
                          <br />
                        </div> 
                        <div className="two"> 
                          <p> Soon after I discovered that in order to really take my skills to the <span className="pink">next level</span> I had to learn how to truly <span className="pink">serve the user</span>. (Enter <span className="green">Google UX Design Certificate</span>.)</p>
                         <br />
                          <p> As both a <span className="pink">designer</span> and <span className="blue">developer</span> I am eager to <span className="blue">collaborate</span> on innovative teams solving unique challenges  where I can <span className="pink">add value </span>for the greater good. I am <span className="pink">committed</span> to continual <span className="green">learning</span>, <span className="blue">growth</span> and <span className="pink">success</span> and I look forward to <span className="blue">connecting</span> with you.</p> </div>  
                           <br />
                        </div> 
                      {/* <div className="email">~tasha </div> */}
              </div> 
          </div>

      </div>
    </div>
  )
}

export default About