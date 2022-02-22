import "./CSS/Works.css";
import done from "../components/images/Portfolio/done.png";
import gifs from "../components/images/Portfolio/gifsfortoday.png";
import read from "../components/images/Portfolio/readit.png";
import tech from "../components/images/Portfolio/tcd.png";
import fierce from "../components/images/Portfolio/fgllc.png";
import sanna from "../components/images/Portfolio/sanna.png"


const Works = ({title}) => {
  return (
    <div className="works" id='works'>
        <div className="container">
          <h2>{title}</h2>
          <div className="content">
          <h2 className="mobile-h2">{title}</h2>
          <div className="card">
            <img src={done} alt="Done App" />
            <div className="card-buttons">
              <ul>
                <li><a className="button" href="https://the-done-app.netlify.app" rel="noreferrer" target="_blank">Done!</a></li>
                <li><a className="button" href="https://github.com/tegbuna/done-app-front/settings" rel="noreferrer" target="_blank">Front-end</a></li>
                <li><a className="button" href="https://github.com/tegbuna/done-app-back" rel="noreferrer" target="_blank">Back-end</a></li>
              </ul>
            </div>
              <p className="p-stack">ReactJS -|- MongoDB -|- Firebase Authentication</p>
              <p className="p-details">Full Stack Web Application that allows users to login to their google account using Firebase authentication and create lists of chores they need completed."</p>        
          </div>

          <div className="card">
            <img src={gifs} alt="Gifs|4|Today" />
            <div className="card-buttons">
              <ul>
                <li className="button"><a href="https://gifs4today.vercel.app/" rel="noreferrer" target="_blank">Gifs|4|Today</a></li>
                <li className="button"><a href="https://github.com/tegbuna/gifs4today"rel="noreferrer" target="_blank">Source Code</a></li>
               </ul>
            </div>
              <p className="p-stack">MongoDB -|- Express -|- Node -|- Giphy API</p>
              <p className="p-details"> Web Application that allows users to search for GIFs, as well as view a list of trending keywords and the most popular 10 GIFs of the moment populated utilizing the Giphy API.</p>       
          </div>

          <div className="card">
            <img src={tech} alt="Tech Career Depot" />
            <div className="card-buttons">
              <ul>
                  <li className="button"><a href="https://tech-careers-depot.herokuapp.com" rel="noreferrer" target="_blank">Tech Career Depot </a></li>
                  <li className="button"><a href="https://github.com/tegbuna/tech-careers-depot" rel="noreferrer" target="_blank">Source Code</a></li>
              </ul> 
            </div>
              <p className="p-stack">MongoDB -|-Express -|- Node</p>
              <p className="p-details"> Web Application that allows users to search for GIFs, as well as view a list of trending keywords and the most popular 10 GIFs of the moment populated utilizing the Giphy API.</p>        
          </div>

           <div className="card">
              <img src={read} alt="Read It" />
              <div className="card-buttons">
                <ul>
                  <li className="button"><a href="https://we-read-it.herokuapp.com/" rel="noreferrer" target="_blank">Read It</a></li>
                  <li className="button"><a href="https://github.com/tegbuna/read-it-front-end" rel="noreferrer" target="_blank">Front-end</a></li>
                  <li className="button"><a href="https://github.com/tegbuna/read-it-back-end" rel="noreferrer" target="_blank">Back-end</a></li>
                </ul>
              </div>
                <p className="p-stack">ReactJS, Ruby on Rails, PostgreSQL </p>
                <p className="p-details">Full Stack  Web Application that allows users to search for books they would like to read as well as create, read, upate and delete lists of books they have already read, JSON data populated utilizing the google books API.</p>       
            </div>

          <div className="card">
            <img src ={sanna} alt="SANNA" />
            <p>Coming soon...</p>
            <div className="card-buttons">
              <ul>
                <li className="button"><a href="https://www.sa-nna.com" rel="noreferrer" target="_blank">SANNA</a></li>
                <li className="button"><a href="https://github.com/tegbuna/sanna" rel="noreferrer" target="_blank">Code</a></li>
              </ul>
            </div>
              <p className="p-stack">ReactJS </p>
              <p className="p-details">Landing site for San Antonio Nigerian Nurses Association (SANNA).  This page will allow SANNA to set themselves apart from the National Nurses Association main site with a  modern and attractive initial UI for potential members to engage with.</p>        
          </div>

          <div className="card">
            <img src={fierce} alt="Fierce Generation, LLC" />
            <div className="card-buttons">
              <ul>
                <li className="button"><a href="https://www.fierce-generation.com" rel="noreferrer" target="_blank">Button</a></li>
                <li className="button"><a href="/" rel="noreferrer" target="_blank">Button</a></li>
                <li className="button"><a href="/" rel="noreferrer" target="_blank">Button</a></li>
              </ul>
            </div>
              <p className="p-stack">ReactJS -|- MongoDB -|- Firebase Authentication</p>
              <p className="p-details">Check out my freelance business website.</p>        
            </div>

            

              
          </div>
        </div>
    </div>
  )
}

export default Works;