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
          <div className="google-map">google map</div>
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
