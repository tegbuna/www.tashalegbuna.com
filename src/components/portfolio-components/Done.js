import done from "../images/Portfolio/done.png";
import "../CSS/Portfolio.css";

const Done = () => {
  return (
    <div className="card-f">
      <div className="slide-img" id="done">
       <img src={done} alt="Done App" />
    
          <div className="card-buttons"> 
            <ul>
                <li><a id="button" href="https://the-done-app.netlify.app" rel="noreferrer" target="_blank">Done!</a></li>
                <li><a id="button" href="https://github.com/tegbuna/done-app-front/settings" rel="noreferrer" target="_blank">Front-end</a></li>
                <li><a id="button" href="https://github.com/tegbuna/done-app-back" rel="noreferrer" target="_blank">Back-end</a></li>
            </ul>
          </div>
          
    </div>
    </div>
  )
}

export default Done