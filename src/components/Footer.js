import "./CSS/Footer.css";

const Footer = () => {
  const mainHero = new URL("./images/BlackGeo.jpg", import.meta.url)
  const mobileHero = new URL('./images/BlackGeo.jpg', import.meta.url)
  return (
    <div className='footer'>
          <div className="container">
            {/* [Insert place holder card from portfolio if needed.] */}
              <div className="content">
                <div className="quotation">
                   <h1 className="connect">
                      Let's connect!
                   </h1>
                      <div className="social">
                        <ul className="social-list">
                          <li><a className="linkedin" href="https://www.linkedin.com/tasha-l-egbuna/" rel="noreferrer" target="_blank">LinkedIn Icon</a></li>
                          <li><a className="github" href="https://www.github.com/tegbuna" rel="noreferrer" target="_blank">Github Icon</a></li>
                        </ul>
                      </div>
                      <p className="email">tasha@tashalegbuna.com</p>
                </div>
              </div>
          </div>
    </div>
  )
}

export default Footer

