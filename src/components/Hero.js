import './CSS/Hero.css';
import tashalogo from "./images/tashalogo.png";
import tashalogobig from "./images/tashalogobig.png";



const hero = () => {
const mainHero = new URL("./images/Swoop-In.jpg", import.meta.url)
const mobileHero = new URL('./images/Swoop-In.jpg', import.meta.url)

  return (
    <div className='hero'>
            <img className="main-hero" src={mainHero} alt="Hero" />
            <img className="mobile-hero" src={mobileHero} alt="Mobile Hero" />
            
            <div className="content">
            <a href="/" className="tasha-logo"><img src={tashalogobig} alt="logo" /></a>
            <a href="/" className="tasha-logo-small"><img src={tashalogo} alt="logo" /></a>

            <div className="title-row">
              <p className='fs'>Full Stack | </p>
              <p className='se'>Software Engineer</p>
            </div>
          </div>
    </div>
  )
}

export default hero