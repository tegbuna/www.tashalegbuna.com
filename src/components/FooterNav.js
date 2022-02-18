import "./CSS/FooterNav.css";

// const copy = [%raw {|'\u00a9'|}]

const FooterNav = () => {

  return (
  <div className="footer-nav">
      <nav className="navbar">
        <div className="nav-menu">
            <div className="footer-link"> 
              <li><a className="nav-item" href="https://www.linkedin.com/tasha-l-egbuna/" rel="noreferrer" target="_blank">LinkedIn</a></li>
              <li><a className="nav-item" href="https://www.github.com/tegbuna" rel="noreferrer" target="_blank">Github</a></li>
            </div>

                <div className="copyright">
                  <p>Copyright  2021 | Fierce Generation, LLC - Tasha L. Egbuna | All Rights Reserved.</p>
                </div>
        </div>
      </nav>

</div>
  );
};


export default FooterNav
