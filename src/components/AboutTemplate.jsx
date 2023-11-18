import "./AboutTemplate.scss";

function AboutTemplate({ heading, path, component }) {
  return (
    <div>
      <div className="about-template-top">
        <div className="about-template-text">
          <h1>{heading}</h1>
          <p>
            Home / <span>{path}</span>
          </p>
        </div>
      </div>
      {component}
    </div>
  );
}

export default AboutTemplate;
