import gifs from "../images/Portfolio/gifsfortoday.png";



const Gifs = () => {
  return (
   <div className="card-f">
      <div className="slide-img" id="gifs">
      <img src={gifs} alt="Gifs|4|Today" />
      
      <div className="card-buttons">
        <ul>
            <li id="button"><a href="https://gifs4today.vercel.app/" rel="noreferrer" target="_blank">Gifs|4|Today</a></li>
            <li id="button"><a href="https://github.com/tegbuna/gifs4today"rel="noreferrer" target="_blank">Source Code</a></li>
        </ul>
      </div>

    </div>
   </div>
  )
}

export default Gifs

