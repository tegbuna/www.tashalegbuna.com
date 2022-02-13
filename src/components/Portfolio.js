import "./CSS/Portfolio.css";
import Done from "../components/portfolio-components/Done";
import Gifs from "../components/portfolio-components/Gifs";
import Mgbidi from "../components/portfolio-components/Mgbidi";
import Readit from "../components/portfolio-components/Readit";
import Tech from "../components/portfolio-components/Tech";

const Portfolio = ({title}) => {
  return (
    <div className="portfolio">
        <h2>{title}</h2>
      <div className="container">
        <Done />
        <Gifs />
        <Mgbidi />
        <Readit />
        <Tech />
      </div>
    </div>
  )
}

export default Portfolio
