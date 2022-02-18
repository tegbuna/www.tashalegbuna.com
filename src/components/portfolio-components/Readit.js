import readit from "../images/Portfolio/readit.png";


const Readit = () => {
  return (
    <div className="slide-img">
     <a href="https://we-read-it.herokuapp.com/" rel="noreferrer" target="_blank"><img src={readit} alt="Read It" /></a> 
      <div className="project-description">
        <div className="card">
          <p>Read It </p>
          <p>ReactJS, Ruby on Rails, PostgreSQL </p>
          <p>
            Full Stack  Web Application that allows users to search for books they would like to read as well as create, read, upate and delete lists of books they have already read, JSON data populated utilizing the google books API.
          </p>
                <ul>
                    
                    <li className="buton"><a href="https://we-read-it.herokuapp.com/" rel="noreferrer" target="_blank">Read It</a></li>
                    <li className="buton"><a href="https://github.com/tegbuna/read-it-front-end" rel="noreferrer" target="_blank">Front-end</a></li>
                    <li className="buton"><a href="https://github.com/tegbuna/read-it-back-end" rel="noreferrer" target="_blank">Back-end</a></li>
                </ul>
        </div>
      </div>
    </div>
  )
}

export default Readit
