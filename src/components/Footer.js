import "./CSS/Footer.css";

const Footer = () => {
const mainHero = new URL("./images/BlackGeo.jpg", import.meta.url)
const mobileHero = new URL('./images/BlackGeo.jpg', import.meta.url)

  return (
    <div className='footer'>
          <div className="container">
              <img className="main-hero" src={mainHero} alt="Hero" />
              <img className="mobile-hero" src={mobileHero} alt="Mobile Hero" />

              {/* <div className="card">
                <p>add card</p>
                <p>add card</p>
              </div> */}
              
              <div className="content">
                  <div className="quotation">
                      <h1 className="connect">
                          Let's connect!
                      </h1>
                      <p className="email">hey_tasha@tashalegbuna.com</p>
                </div>
              </div>
          </div>
    </div>
  )
}

export default Footer

