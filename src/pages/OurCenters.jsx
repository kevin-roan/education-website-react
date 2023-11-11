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
          <div className="google-map">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.wired.com%2Fphotos%2F59269cd37034dc5f91bec0f1%2Fmaster%2Fpass%2FGoogleMapTA.jpg&f=1&nofb=1&ipt=9ff190429675066e6ea6f9197d5aa5137ef10c93425d4dbd9749a49831540bb7&ipo=images"
              alt="google map"
            />
          </div>
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
