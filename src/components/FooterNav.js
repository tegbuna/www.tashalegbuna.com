import { FaCopyright } from "react-icons/fa";
import "./CSS/FooterNav.css";


const FooterNav = () => {

  return (
  <div className="footer-nav" id="contact">
      <nav className="navbar">
        <div className="nav-menu">
          <div className="copyright">
            <p>Copyright <FaCopyright size={12} style={{color: "white" }} />  2021 | Fierce Generation, LLC - Tasha L. Egbuna | All Rights Reserved.</p>
          </div>
        </div>
      </nav>
  </div>
  );
};


export default FooterNav
