import {useState} from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import "./CSS/Navbar.css";
import { click } from "@testing-library/user-event/dist/click";



const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)
const closeMenu = () => setClick(false)

  return (
  <div className="header">
      <nav className="navbar">
        
            <div className="logo">
            <p className='react-text'><i className="fab fa-react"></i>  React Focused Developer </p>
            </div>

            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={18} style={{color: "white" }} />) : (<FaBars size={30} style={{color: "white"}}/>)}
            </div>

            {/*replace className on ul with menu*/}
             <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item"><a href="/
                " onClick={closeMenu} className="nav-item">Home</a>
                </li>

                <li className="nav-item"><a href="#about
                " className="nav-item" onClick={closeMenu}>About</a>
                </li>

                <li className="nav-item"><a href="#resume
                " className="nav-item" onClick={closeMenu}>Resume</a>
                </li>

                <li className="nav-item"><a href="#portfolio
                " className="nav-item" onClick={closeMenu}>Portfolio</a>
                </li>

                <li className="nav-item"><a href="#contact
                " className="nav-item" onClick={closeMenu}>Contact</a>
                </li>

            </ul>

      </nav>

  </div>
  );
};


export default Navbar