import { PageContainer } from "../components";
import { AiFillStar } from "react-icons/ai";
import "./Reviews.scss";
const Reviews = () => {
  return (
    <div>
      <PageContainer
        title="Reviews"
        component={
          <>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </>
        }
      ></PageContainer>
    </div>
  );
};
export default Reviews;

const ReviewCard = () => {
  return (
    <div className="user_card_header">
      <div className="userinfo">
        <img src="https://www.yugeneducation.com/assets/img/user.jpg" />
        <div>
          <h3>Kevin Roan</h3>
          <p>Calicut</p>
          <button className="rating">
            <AiFillStar /> 4.7
          </button>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa
        et culpa duis.
      </p>
    </div>
  );
};
