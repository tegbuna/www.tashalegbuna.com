import './CSS/Hero.css';
import tashalogo from "./images/tashalogo.png";



const hero = () => {
  const mainHero = new URL("./images/Swoop-In-two.jpg", import.meta.url)
  const mobileHero = new URL('./images/Swoop-In.jpg', import.meta.url)
  return (
    <div className='hero' id='home'>

      <img className="main-hero" src={mainHero} alt="Hero" />
      <img className="mobile-hero" src={mobileHero} alt="Mobile Hero" />
            
      <div className="content">
        <div className="tasha-logo">
          <img src={tashalogo} alt="logo" />
        </div>  
        <div className="title-row">
          <p className='fs'>Full Stack |</p>
          <p className='se'> Software Engineer</p> 
        </div>

        <div className="quotation">
            <p>"I design and develop unique experiences that make people's lives simple(r)."</p> 
        </div>
      </div>

    </div>
  )
}

export default hero