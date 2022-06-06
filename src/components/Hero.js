import './CSS/Hero.css';
import tashalogo from "./images/tashalogo.png";



const hero = () => {
  // const mainHero = new URL("./images/macverydark.jpg", import.meta.url)
  // const mobileHero = new URL('./images/macverydark.jpg', import.meta.url)
  return (
    <div className='hero' id='home'>
      <div className="main-hero">
        <div className="content">
          <div className="tasha-logo">
            <img src={tashalogo} alt="logo" />
          </div>  
          <div className="tasha-mobile-logo">
            <img src={tashalogo} alt="logo" />
          </div> 
          <div className="title-row">
            <p className='fs'>ux/ui designer  | </p>
            <p className='se'> | software engineer</p> 
          </div>
          <div className="quotation">
              {/* <p>I design and develop experiences that make people's lives <span className='bolden'>simple.</span></p>  */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default hero