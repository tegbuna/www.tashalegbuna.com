import gifs from "../images/Portfolio/gifsfortoday.png";



const Gifs = () => {
  return (
    <div className="slide-img">
      <a href="https://gifs4today.vercel.app/" rel="noreferrer" target="_blank"><img src={gifs} alt="Gifs|4|Today" /></a>
      <div className="project-description">
        <div className="card">
          <p>GIFS 4 Today  </p>
            <p>MongoDB -|- Express -|- Node</p>
            <p> Web Application that allows users to search for GIFs, as well as view a list of trending keywords and the most popular 10 GIFs of the moment populated utilizing the Giphy API.</p>
              <ul>
                  <li className="buton"><a href="https://gifs4today.vercel.app/" rel="noreferrer" target="_blank">Gifs|4|Today</a></li>
                   <li className="buton"><a href="https://github.com/tegbuna/gifs4today"rel="noreferrer" target="_blank">Source Code</a></li>
              </ul>
        </div>
</div>

    </div>
  )
}

export default Gifs

