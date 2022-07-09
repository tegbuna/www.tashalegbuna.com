import "./CSS/Works.css";
import {SiFigma} from "react-icons/si";
import {SiGithub} from "react-icons/si";
import bellissima from "../components/images/Portfolio/bellissima.png";
import done from "../components/images/Portfolio/done.png";
import gifs from "../components/images/Portfolio/gifsfortoday.png";
import read from "../components/images/Portfolio/readit.png";
import tech from "../components/images/Portfolio/tcd.png";
import fierce from "../components/images/Portfolio/fgllc.png";
import sanna from "../components/images/Portfolio/sanna.png"

const Works = () => {
  return (
    <div className="works">
        <div className="container">
            {/* <h2 className="title" >{title}</h2> */}
                 <div>
                        <h3 className="ux-title">UX Case Studies</h3>
                        <h5>Coming soon...</h5>
                </div> 
                <div className="card-page-body">

                <div className="bellissima-app">
                                <div className="my-card">
                                    <div className="card-content">
                                        <h3 className="card-title">Bellissima</h3>
                                <p>Coming soon...</p>

                                        <div className="card-body">
                                            <p >UX Mobile App Design / Frontend Development</p> 
                                        </div>
                                        <div className="button-div">
                                            <a href="https://www.figma.com/proto/zNE31iOxDrLC2IZKiVTfWg/Bellissima-Restaurant-App?node-id=2%3A9&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A1616" rel="noreferrer" target="_blank" className="card-button"><SiFigma/>  Low-Fidelity Prototype</a>
                                            <a href="/" rel="noreferrer" target="_blank" className="card-button"> Case Study</a>
                                            <a href="/" rel="noreferrer" target="_blank" className="card-button"><SiGithub/> Front</a>
                                        </div>
                                    </div>
                                </div>
                 </div>
                 <div className="sanna">
                        <div className="my-card">
                            <div className="card-content" id="sanna">
                                <h3 className="card-title">SANNA</h3>
                                <p>Coming soon...</p>
                                <div className="card-body">
                                    <p >UX Casestudy & Frontend UI portal for SA Nigerian Nurses Association.</p> 

                                </div>
                                <div className="button-div">
                                <a href="/" rel="noreferrer" target="_blank" className="card-button"><SiFigma/>  Low-Fidelity Prototype</a>
                                            <a href="/" rel="noreferrer" target="_blank" className="card-button"> Case Study</a>
                                            <a href="/" rel="noreferrer" target="_blank" className="card-button"><SiGithub/> Front</a>
                                </div>
                            </div>
                        </div>
             </div>

                <div>
                <h3 className="ux-title">Engineering Projects</h3>
                 <h5>Software Development Apps</h5>

                </div>
                     
                <div className="done-app">
                        <div className="my-card">
                            <div className="card-content">
                                <h3 className="card-title">Done!</h3>
                                <div className="card-body">
                                    <p >Full Stack - Firebase, CRUD operations.</p> 
                                    <br />
                                    <p >ReactJS  -  MongoDB  -  Firebase </p>
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
                                    <p >Full Stack -  Utilizes Giphy API to  search  GIFs, view list of top 25 trending and view top 10 in real-time.</p> 
                                    <br />
                                    <p > HTML5 - JQuery  -  Bootstrap  -  Giphy API</p>
                                </div>
                                <div className="button-div">
                                    <a href="https://gifs4today.vercel.app/" rel="noreferrer" target="_blank" className="card-button">Visit</a>
                                    <a href="https://github.com/tegbuna/gifs4today"rel="noreferrer" target="_blank" className="card-button"><SiGithub/> Code</a>
                                </div>
                            </div>
                        </div>
                    
                    </div>

                    {/* <div className="tech-app">
                        <div className="my-card">
                            <div className="card-content">
                                <h3 className="card-title">TCD</h3>
                                <div className="card-body">
                                    <p > Full Stack - Lists tech careers and their roadmaps.</p> 
                                    <br />
                                    <p >MongoDB  -  Express  -  Node </p>
                                </div>
                                <div className="button-div">
                                    <a href="https://tech-careers-depot.herokuapp.com" rel="noreferrer" target="_blank"className="card-button">Visit</a>
                                    <a href="https://github.com/tegbuna/tech-careers-depot" rel="noreferrer" target="_blank" className="card-button"><SiGithub/> Code</a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="read-it">
                        <div className="my-card">
                            <div className="card-content">
                                <h3 className="card-title">Read It</h3>
                                <div className="card-body">
                                    <p >Full Stack - Searches library API & performs CRUD on two lists .</p> 
                                    <br />
                                    <p >ReactJS - RoR - Google  API</p>
                                </div>
                                <div className="button-div">
                                    <a href="https://we-read-it.herokuapp.com/" rel="noreferrer" target="_blank"className="card-button">Visit</a>
                                    <a href="https://github.com/tegbuna/read-it-front-end" rel="noreferrer" target="_blank" className="card-button"><SiGithub/> Front</a>
                                    <a href="https://github.com/tegbuna/read-it-back-end" rel="noreferrer" target="_blank" className="card-button"><SiGithub/> Back</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="tle">
                        <div className="my-card">
                            <div className="card-content">
                                <h3 className="card-title" id="tle">Portfolio</h3>
                                <div className="card-body">
                                    <p > This portfolio website.  See the code.</p> 
                                    <br />
                                    <p >ReactJS</p>
                                </div>
                                <div className="button-div">
                                    <a href="https://www.tashalegbuna.com" target="_blank" className="card-button">Visit</a>
                                    <a href="https://github.com/tegbuna/www.tashalegbuna.com" rel="noreferrer" target="_blank" className="card-button"><SiGithub/> Code</a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="fgllc">
                        <div className="my-card">
                            <div className="card-content">
                                <h3 className="card-title" id="fgllc">F-G, LLC</h3>
                                <div className="card-body">
                                    <p >Coming soon... www.fierce-generation.com.  This is my freelancing website.</p> 
                                    <br />
                                    <p >ReactJS - MongoDB</p>
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

export default Works