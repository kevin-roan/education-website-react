import "./PageContainer.scss";

const PageContainer = ({ component, title }) => {
  return (
    <div className="page_container">
      <div className="heading">
        <h1>
          Our <span>{title}</span>
        </h1>
      </div>
      <div className="card_container">{component}</div>
      <button className="regular-button">Know More</button>
    </div>
  );
};
export default PageContainer;
