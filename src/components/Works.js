import "./CSS/Works.css";
import {SiFigma} from "react-icons/si";
import {SiGithub} from "react-icons/si";

const Works = ({title}) => {
  return (
    <div className="works">
        <div className="container">
            {/* <h2 className="title" >{title}</h2> */}
                 <div className="section-label">
                        <h3 className="t4s">ux | Case Studies</h3>
                        <h5 className="t2s">Coming soon...</h5>
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
        </div>
           
        </div>

    </div>
  )
}

export default Works