import done from "../images/Portfolio/done.png";

const Done = () => {
  return (
    <div className="slide-img">
      <a href=""><img src={done} alt="Done App" /></a>
    <div className="project-description">
        <p>
          text.
        </p>
        <ul className="git-live">
          <li><a href="/"></a>Github</li>
          <li><a href="/"></a>Live</li>
        </ul>
      </div>
    </div>
  )
}

export default Done