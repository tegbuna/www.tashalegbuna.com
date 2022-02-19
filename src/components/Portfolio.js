import "./CSS/Portfolio.css";
import Done from "../components/portfolio-components/Done";
import Gifs from "../components/portfolio-components/Gifs";
import Readit from "./portfolio-components/Readit";
import Tech from "../components/portfolio-components/Tech";

const Portfolio = ({title}) => {
  return (
    <div className="portfolio" id="portfolio">
        <h2>{title}</h2>
      <div className="portfolio-slides">
        <Done />
        <Gifs />
        <Readit />
        <Tech />
      </div>
    </div>
  )
}

export default Portfolio
