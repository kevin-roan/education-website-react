import "./App.css";
import { Footer } from "./components";
import { Reviews, TopCourses } from "./pages";
import Home from "./pages/Home";
import OurCenters from "./pages/OurCenters";
import { TopCoursesIncludes } from "./pages/TopCourses";

const App = () => {
  return (
    <div>
      <Home />
      <TopCourses />
      <OurCenters />
      <Reviews />
      <TopCoursesIncludes />
      <Footer />
    </div>
  );
};

export default App;
