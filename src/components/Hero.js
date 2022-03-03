import './CSS/Hero.css';
import tashalogo from "./images/tashalogo.png";



const hero = () => {
  // const mainHero = new URL("./images/macverydark.jpg", import.meta.url)
  // const mobileHero = new URL('./images/macverydark.jpg', import.meta.url)
  return (
    <div className='hero' id='home'>
      <div className="main-hero">
      {/* <img className="main-hero" src={mainHero} alt="Hero" />
      <img className="mobile-hero" src={mobileHero} alt="Mobile Hero" />
             */}
      <div className="content">
        <div className="tasha-logo">
          <img src={tashalogo} alt="logo" />
        </div>  
        <div className="tasha-mobile-logo">
          <img src={tashalogo} alt="logo" />
        </div> 
        <div className="title-row">
          <p className='fs'>Full Stack |</p>
          <p className='se'> Software Engineer</p> 
        </div>

        <div className="quotation">
            <p>I design and develop experiences that make people's lives <span className='bolden'>simple.</span></p> 
        </div>
      </div>
      </div>

    </div>
  )
}

export default hero