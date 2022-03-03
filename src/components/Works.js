import "./CSS/Works.css";
import {SiGithub} from "react-icons/si";
import done from "../components/images/Portfolio/done.png";
import gifs from "../components/images/Portfolio/gifsfortoday.png";
import read from "../components/images/Portfolio/readit.png";
import tech from "../components/images/Portfolio/tcd.png";
import fierce from "../components/images/Portfolio/fgllc.png";
import sanna from "../components/images/Portfolio/sanna.png"

const Cards = ({title}) => {
  return (
    <div className="cards">
        <div className=".container">
            <h2>{title}</h2>
           <div className="card-page-body">
                <div className="done-app">
                        <div className="my-card">
                            <div className="card-content">
                                <h3 className="card-title">Done!</h3>
                                <div className="card-body">
                                    <p >Full Stack Web Application that allows users to login to their google account using Firebase authentication and create lists of chores they need completed.</p> 
                                    <p >ReactJS -|- MongoDB -|- Firebase Authentication</p>
                                </div>
                                <div className="button-div">
                                    <a href="https://the-done-app.netlify.app" rel="noreferrer" target="_blank" className="card-button">Visit</a>
                                    <a href="https://github.com/tegbuna/done-app-front/settings" rel="noreferrer" target="_blank" className="card-button"><SiGithub/> Front</a>
                                    <a href="https://github.com/tegbuna/done-app-back" rel="noreferrer" target="_blank" className="card-button"><SiGithub/> Back</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="gifs-app">
                        <div className="my-card">
                            <div className="card-content">
                                <h3 className="card-title">Gifs|4|Today</h3>
                                <div className="card-body">
                                    <p >Web Application that allows users to search for GIFs, as well as view a list of trending keywords and the most popular 10 GIFs of the moment populated utilizing the Giphy API.</p> 
                                    <p >MongoDB -|- Express -|- Node -|- Giphy API</p>
                                </div>
                                <div className="button-div">
                                    <a href="https://gifs4today.vercel.app/" rel="noreferrer" target="_blank" className="card-button">Visit</a>
                                    <a href="https://github.com/tegbuna/gifs4today"rel="noreferrer" target="_blank" className="card-button"><SiGithub/> Code</a>
                                </div>
                            </div>
                        </div>
                    
                    </div>

                    <div className="tech-app">
                        <div className="my-card">
                            <div className="card-content">
                                <h3 className="card-title">Tech Career Depot</h3>
                                <div className="card-body">
                                    <p > Full Stack Application that allows users to learn about different types of career paths that can be followed in the Information Technology field.</p> 
                                    <p >MongoDB -|- Express -|- Node </p>
                                </div>
                                <div className="button-div">
                                    <a href="https://tech-careers-depot.herokuapp.com" rel="noreferrer" target="_blank"className="card-button">Visit</a>
                                    <a href="https://github.com/tegbuna/tech-careers-depot" rel="noreferrer" target="_blank" className="card-button"><SiGithub/> Code</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="read-it">
                        <div className="my-card">
                            <div className="card-content">
                                <h3 className="card-title">Read It</h3>
                                <div className="card-body">
                                    <p >Web Application that allows users to search for GIFs, as well as view a list of trending keywords and the most popular 10 GIFs of the moment populated utilizing the Giphy API.</p> 
                                    <p >MongoDB -|-Express -|- Node</p>
                                </div>
                                <div className="button-div">
                                    <a href="https://we-read-it.herokuapp.com/" rel="noreferrer" target="_blank"className="card-button">Visit</a>
                                    <a href="https://github.com/tegbuna/read-it-front-end" rel="noreferrer" target="_blank" className="card-button"><SiGithub/> Front</a>
                                    <a href="https://github.com/tegbuna/read-it-back-end" rel="noreferrer" target="_blank" className="card-button"><SiGithub/> Back</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sanna">
                        <div className="my-card">
                            <div className="card-content">
                                <h3 className="card-title">SANNA</h3>
                                <div className="card-body">
                                    <p >Landing site for San Antonio Nigerian Nurses Association (SANNA).  This page will allow SANNA to set themselves apart from the National Nurses Association main site with a  modern and attractive initial UI for potential members to engage with."</p> 
                                    <p >ReactJS -|- Firebase Authentication</p>
                                </div>
                                <div className="button-div">
                                    <a href="/" rel="noreferrer" target="_blank" className="card-button">Visit</a>
                                    <a href="/" rel="noreferrer" target="_blank" className="card-button"><SiGithub/> Code</a>
                                    {/* <a href="/" rel="noreferrer" target="_blank" className="card-button"><SiGithub/> Back</a> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fgllc">
                        <div className="my-card">
                            <div className="card-content">
                                <h3 className="card-title">Fierce Generation, LLC</h3>
                                <div className="card-body">
                                    <p >Check out my freelancing website.</p> 
                                    <p >ReactJS</p>
                                </div>
                                <div className="button-div">
                                    <a href="https://www.fierce-generation.com" target="_blank" className="card-button">Visit</a>
                                    <a href="/" rel="noreferrer" target="_blank" className="card-button"><SiGithub/> Code</a>
                                    {/* <a href="/" rel="noreferrer" target="_blank" className="card-button"><SiGithub/> Back</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
           </div>
        

        </div>

    </div>
  )
}

export default Cards