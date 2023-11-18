import "./AboutUs.scss";
import Reviews from "./Reviews";
import OurCenters from "./OurCenters";

function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-content-container">
        <div className="about-content-left">
          <h4>About us</h4>
          <h2>What We Do & Our Aim </h2>
          <p>
            YUGEN SCHOOL OF ACCOUNTING & TAXATION aims to provide world class
            training for Global Accounting and Taxation qualifications and
            develop the professional Accountant of upcoming Days. Our faculties
            are comprising of professionals and academicians with years of
            industry experienced and CA Article ship members. Our institutions
            have air-conditioned classroom with modern facilities, Wi-Fi enabled
            and ample parking space. Our flagship courses are MFTG (Master in
            Finance Taxation and GST) & GIT (GST, INCOME TAX AND TDS). Main
            objective of YUGEN is reduce the skill gap in accounting domain
            through quality skill development education. Plenty of job
            opportunities are vacant in accounting fields due to the lack of
            skilled accounting people. YUGEN tailored the courses to attain that
            objective. Who completed at the course from YUGEN can enter in to
            job directly without further repeated training. YUGEN BOARD OF
            STUDIES (BoS) is the basic constituent of the academic system of
            YUGEN. Its functions will include framing the content of various
            courses, reviewing and updating the content from time to time,
            introducing new courses according to the demand of Industry
            relevance(R&D). YUGEN having own ERP software for managing
            administration process called “YUGEN Suite”. Own quality course
            material prepared by Chattered Accountant (CA) Trainers, provides
            for students to ensure the standard of the course. The ambiance of
            Airconditioned Theory and Practical lab can make students more
            enthusiastic for successful completion of their course. Online
            Examination system is the golden feather of YUGEN for keeping
            Quality Education. All examinations are evaluated by YUGEN
            Examination System called “YES”. After the successful completion
            with appropriate GRADE, YUGEN will issue MERIT CERTIFICATE. YUGEN
            CAREER ZONE is the back born of the placement wing. Identify the
            Employers requirement and full fill with right candidate select from
            YUGEN
          </p>
        </div>
        <div className="about-content-right">
          <img
            src="https://www.yugeneducation.com/assets/img/about.jpg"
            alt="image"
          />
          <div>
            <li>Full Lifetime Support</li>
            <li>Certicate Of Completion</li>
            <li>Flexible Timings</li>
            <button className="primary-button">Join Now</button>
          </div>
        </div>
      </div>
      <Reviews />
      <OurCenters />
    </div>
  );
}

export default AboutUs;
