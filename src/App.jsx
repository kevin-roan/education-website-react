import "./App.css";
import { Footer, NavPages } from "./components";
import AboutTemplate from "./components/AboutTemplate";
import AppBar from "./components/AppBar";
import { Reviews, TopCourses } from "./pages";
import Home from "./pages/Home";
import OurCenters from "./pages/OurCenters";
import { TopCoursesIncludes } from "./pages/TopCourses";
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
        <Route path="/about" element={<AboutTemplate />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
