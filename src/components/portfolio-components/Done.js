import done from "../images/Portfolio/done.png";
import "../CSS/Portfolio.css";

const Done = () => {
  return (
    <div className="slide-img">
      <a href="https://the-done-app.netlify.app" rel="noreferrer" target="_blank"><img src={done} alt="Done App" /></a>
      <div className="project-description">
        <div className="card">
         <div className="heading"> <p>Done!</p></div>
              <p>ReactJS -|- MongoDB -|- Firebase Authentication</p>
              <p>Full Stack Web Application that allows users to login to their google account using Firebase authentication and create lists of chores they need completed."</p>
                    <ul>
                        <li><a classID="button" href="https://the-done-app.netlify.app" rel="noreferrer" target="_blank">Done!</a></li>
                        <li><a classID="button" href="https://github.com/tegbuna/done-app-front/settings" rel="noreferrer" target="_blank">Front-end</a></li>
                        <li><a clasID="button" href="https://github.com/tegbuna/done-app-back" rel="noreferrer" target="_blank">Back-end</a></li>
                    </ul>
        </div>
      </div>
    </div>
  )
}

export default Done