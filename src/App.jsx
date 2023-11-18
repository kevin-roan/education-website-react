import "./App.css";
import { Footer, NavPages } from "./components";
import AboutTemplate from "./components/AboutTemplate";
import AppBar from "./components/AppBar";
import {
  Home,
  OurCenters,
  AboutUs,
  TopCourses,
  Gallery,
  Reviews,
  TopCoursesIncludes,
} from "./pages/";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/topcourses"
          element={<NavPages component={<TopCourses />} />}
        />
        <Route path="/ourcenters" element={<OurCenters />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/TopCoursesIncludes" element={<TopCoursesIncludes />} />
        <Route
          path="/about"
          element={
            <AboutTemplate
              heading="Who are We ?"
              path="AboutUs"
              component={<AboutUs />}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <AboutTemplate
              heading="Get In Touch"
              path="Contact"
              component={<OurCenters />}
            />
          }
        />

        <Route
          path="/gallery"
          element={
            <AboutTemplate
              heading="Our Gallery"
              path="Gallery"
              component={<Gallery />}
            />
          }
        />
        <Route
          path="/courses"
          element={
            <AboutTemplate
              heading="MFTG (Master in finance taxation and GST)"
              path="Course / MFTG course"
              component={<TopCoursesIncludes />}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
