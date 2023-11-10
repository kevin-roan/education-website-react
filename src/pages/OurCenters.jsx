import "./OurCenters.scss";
import { PageContainer } from "../components/";

const OurCenters = () => {
  return (
    <PageContainer
      title="Centers"
      component={
        <>
          <MapCard />
          <MapCard />
          <MapCard />
        </>
      }
    ></PageContainer>
  );
};

export default OurCenters;

export const MapCard = () => {
  return (
    <>
      <div className="map-card">
        <div className="map">
          <img src="https://miro.medium.com/v2/resize:fit:1400/1*qYUvh-EtES8dtgKiBRiLsA.png" />
        </div>
        <h1 className="state-text">Calicut</h1>
        <div className="card-footer">
          <h4>Calicut Town</h4>
          <button>Call Now</button>
        </div>
      </div>
    </>
  );
};
