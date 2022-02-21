import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import Done from "../components/portfolio-components/Done.js";
import DoneInfo from "../components/portfolio-components/DoneInfo.js";
import Gifs from "../components/portfolio-components/Gifs.js";
import GifsInfo from "./portfolio-components/GifsInfo.js";
import Readit from "../components/portfolio-components/Readit.js";
import ReaditInfo from "./portfolio-components/ReaditInfo.js";
import Tech from "../components/portfolio-components/Tech.js";
import TechInfo from "./portfolio-components/TechInfo.js";

import "./CSS/Cardflip.css";

const Cardflip = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => setIsFlipped(!isFlipped);
  
  return (
  <div className="card-grid">
      {/* <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
    <div> 
      <div>
     <Done title={Done} onMouseEnter={() => setIsFlipped(true)}/>
     <Gifs title={Gifs} onMouseEnter={() => setIsFlipped(true)} />
     <Readit title={Readit} onMouseEnter={() => setIsFlipped(true)} />
     <Tech title={Tech} onMouseEnter={() => setIsFlipped(true)} />
      </div>

      <div>
      <DoneInfo onMouseLeave={() => setIsFlipped(false)} />
      <GifsInfo onMouseLeave={() => setIsFlipped(false)} />
      <ReaditInfo onMouseLeave={() => setIsFlipped(false)} />
      <TechInfo onMouseLeave={() => setIsFlipped(false)}/>
      </div>
    </div>
  </ReactCardFlip> */}
  </div>
  
  )
}

export default Cardflip