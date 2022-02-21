import "./CSS/Portfolio.css";
import Cardflip from "./Cardflip";

const Portfolio = ({title}) => {
  return (
    <div className="portfolio" id="portfolio">
        <h2>{title}</h2>
        <div className="content-grid">
          <div className="portfolio-slides">
            <Cardflip />
          </div>
       </div>
    </div>
  )
}

export default Portfolio
