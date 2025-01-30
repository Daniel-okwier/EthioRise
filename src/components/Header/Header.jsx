import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Images/er.jpg"; // Adjust the path to your logo
import "./Header.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logo} alt="Logo" className="logo" />
            <span>EthioRise</span>
          </NavLink>

          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? "✖" : "☰"} {/* Hamburger icon */}
          </button>

          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <li className="nav-item">
              <NavLink 
                exact 
                to="/" 
                activeClassName="active" 
                className="nav-links" 
                onClick={toggleMenu} // Close menu on link click
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                exact 
                to="/about" 
                activeClassName="active" 
                className="nav-links" 
                onClick={toggleMenu} // Close menu on link click
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                exact 
                to="/Services" 
                activeClassName="active" 
                className="nav-links" 
                onClick={toggleMenu} // Close menu on link click
              >
               Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                exact 
                to="/contact" 
                activeClassName="active" 
                className="nav-links" 
                onClick={toggleMenu} // Close menu on link click
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;