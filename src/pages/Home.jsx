import "./Home.scss";

function Home() {
  return (
    <div className="home-container">
      <div className="leftpane">
        <h1>Let Your Dreams Take Flight</h1>
        <p>
          Yugen School of Accounting & Taxation aims to provide world class
          training for Global Accounting and Taxation qualifications and develop
          the professional Accountant of upcoming Days.
        </p>
        <button>Know More</button>
        <button>Download Brochure</button>
      </div>
      <div className="rightpane">
        <img src="https://www.yugeneducation.com/assets/img/posters/17.jpeg" />
      </div>
    </div>
  );
}

export default Home;
