import "./App.css";
import { Header } from "./components";
import { Reviews, TopCourses } from "./pages";
import Home from "./pages/Home";
import OurCenters from "./pages/OurCenters";
import { TopCoursesIncludes } from "./pages/TopCourses";

const App = () => {
  return (
    <div className="greeting-container">
      <Header />
      <Home />
      <TopCourses />
      <OurCenters />
      <Reviews />
      <TopCoursesIncludes />
    </div>
  );
};

export default App;
