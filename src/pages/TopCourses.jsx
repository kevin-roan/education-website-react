import { PageContainer } from "../components";
import "./TopCourses.scss";

const TopCourses = () => {
  return (
    <div className="top-course-container">
      <div className="left-course-pane">
        <h1>
          Explore Top <span>Courses</span>
        </h1>
        <p>
          Yugen Education has specialized courses for students, working People &
          other professionals in Accounting, Taxation & GST.
        </p>
        <button>Explore More Courses</button>
        <div className="course-card">
          <CourseCard title="സ്വയം തൊഴിലധിഷ്ഠിത പദ്ധതി 2022" />
          <CourseCard title="കമ്പ്യൂട്ടർ ശാസ്ത്ര സാങ്കേതിക പരിശീലന  പദ്ധതി" />
        </div>
      </div>
    </div>
  );
};
export default TopCourses;

const CourseCard = ({ title, link }) => {
  return (
    <div className="course-card-container">
      <h1>{title}</h1>
      <button className="apply-button">Apply Now</button>
    </div>
  );
};

export const TopCoursesIncludes = () => {
  return (
    <div>
      <PageContainer
        title="Courses Includes"
        component={
          <div className="courses-list-contiainer">
            <div>
              <h4>CourseName</h4>
              <button>View</button>
            </div>
            <div>
              <h4>CourseName</h4>
              <button>View</button>
            </div>
            <div>
              <h4>CourseName</h4>
              <button>View</button>
            </div>
            <div>
              <h4>CourseName</h4>
              <button>View</button>
            </div>
            <div>
              <h4>CourseName</h4>
              <button>View</button>
            </div>
          </div>
        }
      />
    </div>
  );
};
