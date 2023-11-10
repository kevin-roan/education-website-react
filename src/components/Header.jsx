import "./Header.scss";

const links = ["Home", "About", "Courses", "Gallery", "Blog", "Contact Us"];

function Header() {
  return (
    <div className="container">
      <div className="logocontainer">
        <img
          src="https://www.yugeneducation.com/assets/img/logo-light.png"
          className="logo-icon"
        />
      </div>
      <div className="link-container">
        {links.map((link, index) => (
          <a key={index}>
            <li className="link-item">{link}</li>
          </a>
        ))}
      </div>
      <button className="call_button">Call Now</button>
    </div>
  );
}

export default Header;
