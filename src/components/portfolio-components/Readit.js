import readit from "../images/Portfolio/readit.png";


const Readit = () => {
  return (
    <div className="card-f">
      <div className="slide-img" id="readit">
      <img src={readit} alt="Read It" />
      <div className="card-buttons">
         <ul>
            <li id="button"><a href="https://we-read-it.herokuapp.com/" rel="noreferrer" target="_blank">Read It</a></li>
            <li id="button"><a href="https://github.com/tegbuna/read-it-front-end" rel="noreferrer" target="_blank">Front-end</a></li>
            <li id="button"><a href="https://github.com/tegbuna/read-it-back-end" rel="noreferrer" target="_blank">Back-end</a></li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Readit
