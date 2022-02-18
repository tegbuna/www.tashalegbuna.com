import tech from "../images/Portfolio/tcd.png";


const Tech = () => {
  return (
    <div className="slide-img">
       <a href="https://tech-careers-depot.herokuapp.com" rel="noreferrer" target ="_blank"><img src={tech} alt="Tech Career Depot" /></a>
      <div className="project-description">
          <div className="card">
            <p> Tech Career Depot </p>
            <p>MongoDB -|-Express -|- Node</p>
            <p>
                Web Application that allows users to search for GIFs, as well as view a list of trending keywords and the most popular 10 GIFs of the moment populated utilizing the Giphy API.
            </p>
                  <ul>
                      <li className="buton"><a href="https://tech-careers-depot.herokuapp.com" rel="noreferrer" target="_blank">Tech Career Depot </a></li>
                       <li className="buton"><a href="https://github.com/tegbuna/tech-careers-depot" rel="noreferrer" target="_blank">Source Code</a></li>
                  </ul>
          </div>
      </div>
    </div>
  )
}

export default Tech
