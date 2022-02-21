import tech from "../images/Portfolio/tcd.png";


const Tech = () => {
  return (
    <div className="card-f">
      <div className="slide-img" id="tech">
       <img src={tech} alt="Tech Career Depot" />
      <div className="card-buttons">
         <ul>
            <li id="button"><a href="https://tech-careers-depot.herokuapp.com" rel="noreferrer" target="_blank">Tech Career Depot </a></li>
            <li id="button"><a href="https://github.com/tegbuna/tech-careers-depot" rel="noreferrer" target="_blank">Source Code</a></li>
          </ul> 
      </div>
    </div>
    </div>
  )
}

export default Tech
