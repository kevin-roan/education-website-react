import "./Footer.scss";
function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_top">
        <div className="footer_top_text">
          <h1>Do You Have Questions ?</h1>
          <p>We'll help you to grow your career and growth.</p>
        </div>
        <button>Contact Us Today</button>
      </div>
      <div className="footer_mid">
        <div>
          <img src="https://www.yugeneducation.com/assets/img/logo-light.png" />
          <p>
            Yugen School of Accounting & Taxation aims to provide world class
            training for Global Accounting and Taxation qualifications and
            develop the professional Accountant of upcoming Days.
          </p>
          <button className="regular-button">Download Brochure</button>
        </div>
        <div>
          <h1>Company</h1>
          <li>About</li>
          <li>Courses</li>
          <li>Gallery</li>
          <li>Contact Us</li>
        </div>
        <div>
          <h1>Social</h1>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Youtube</li>
          <li>Whatsapp</li>
        </div>
        <div>
          <h1>Admin Office</h1>
          <p>
            Yugen Education, Mihraj Shopping Centre, Near Bypass Junction,
            Perumanna (PO), Kozhikode - 673019
          </p>
          <p>+91 924392872</p>
          <p>yugeneducations@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Yugen Education. Powered By The Kevin Roan.</p>
      </div>
    </div>
  );
}

export default Footer;
