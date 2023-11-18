import { useState } from "react";
import { Link } from "react-router-dom";
import "./AppBar.scss";

const navItems = [
  {
    name: "Home",
    icon: "fa-solid fa-house-user",
    url: "/",
    cName: "nav-links",
  },
  {
    name: "About",
    icon: "fa-solid fa-circle-info",
    url: "/about",
    cName: "nav-links",
  },
  {
    name: "Courses",
    icon: "fa-solid fa-briefcase",
    url: "/courses",
    cName: "nav-links",
  },
  {
    name: "Contact",
    icon: "fa-solid fa-address-book",
    url: "/contact",
    cName: "nav-links",
  },
  {
    name: "Gallery",
    icon: "fa-solid fa-image",
    url: "/gallery",
    cName: "nav-links",
  },

  {
    name: "SignUp",
    url: "/about",
    cName: "nav-link-mobile",
  },
];

export default function AppBar() {
  const [isToggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar-items">
      <img
        src="https://www.yugeneducation.com/assets/img/logo.png"
        className="navbar-logo"
      />
      <div className="menu-icons">
        <li
          className={`fas ${isToggleMenu ? "fa-times" : "fa-bars"}`}
          onClick={() => setToggleMenu(!isToggleMenu)}
        ></li>
      </div>
      <ul className={`${isToggleMenu ? "nav-menu active" : "nav-menu"}`}>
        {navItems.map((item, index) => (
          <li key={index} className={item.cName}>
            <Link
              to={item.url}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <i className={item.icon}></i>
              {item.name}
            </Link>
          </li>
        ))}
        <button className="call-button">Call Now</button>
      </ul>
    </nav>
  );
}
