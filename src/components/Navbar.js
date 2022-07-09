import {useState} from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import "./CSS/Navbar.css";
import { Link } from 'react-scroll';



const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

  return (
  <div className="header">
      <nav className="navbar">
            <div className="logo">
                <p className='myname'>Tasha L. Egbuna | UX Designer </p>
            </div>

            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={18} style={{color: "white" }} />) : (<FaBars size={30} style={{color: "white"}}/>)}
            </div>

            {/*replace className of ul on menu for click event*/}
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item"><Link to="hero
                " spy={true} smooth={true} offset={-55} duration={500} onClick={closeMenu} className="nav-item" >Home</Link>
                </li>

                <li className="nav-item"><Link to="works
                " spy={true} smooth={true} offset={-55} duration={500} className="nav-item" onClick={closeMenu}>Works</Link>
                </li>

                <li className="nav-item"><Link to="about
                " spy={true} smooth={true} offset={-55} duration={500} className="nav-item" onClick={closeMenu}>About</Link>
                </li>

                <li className="nav-item"><Link to="resume
                " spy={true} smooth={true} offset={-55} duration={500} className="nav-item" onClick={closeMenu}>Resume</Link>
                </li>

                <li className="nav-item"><Link to="footer
                " spy={true} smooth={true} offset={-55} duration={500} className="nav-item" onClick={closeMenu}>Contact</Link>
                </li>

            </ul>
        </nav>

  </div>
  );
};


export default Navbar