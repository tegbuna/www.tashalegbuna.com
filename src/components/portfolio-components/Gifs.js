import gifs from "../images/Portfolio/gifsfortoday.png";



const Gifs = () => {
  return (
    <div className="slide-img">
      <a href=""><img src={gifs} alt="Gifs|4|Today" /></a>
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

export default Gifs