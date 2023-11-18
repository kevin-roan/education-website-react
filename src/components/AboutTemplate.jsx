import "./AboutTemplate.scss";
import AboutUs from "../pages/AboutUs";

function AboutTemplate() {
  return (
    <div>
      <div className="about-template-top">
        <div className="about-template-text">
          <h1>Who We Are ?</h1>
          <p>
            Home / <span>AboutUs</span>
          </p>
        </div>
      </div>
      <AboutUs />
    </div>
  );
}

export default AboutTemplate;
