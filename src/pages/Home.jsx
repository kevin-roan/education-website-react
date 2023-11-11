import "./Home.scss";
import { NavbarSimple } from "../components/Header";

function Home() {
  return (
    <>
      <NavbarSimple />
      <div className="home-container">
        <h1>Let Your Dreams Take Flight</h1>
        <p style={{ maxWidth: "40vmax" }}>
          Yugen School of Accounting & Taxation aims to provide world class
          training for Global Accounting and Taxation qualifications and develop
          the professional Accountant of upcoming Days.
        </p>
        <button className="home-button">Know More</button>
        <button className="home-button">Download Brochure</button>
      </div>
    </>
  );
}

export default Home;
