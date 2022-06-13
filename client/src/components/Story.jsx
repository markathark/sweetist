import "./story.css";
import {
  IoBagCheckSharp,
  IoAccessibilityOutline,
  IoRibbonOutline,
} from "react-icons/io5";

const Story = () => {
  return (
    <div className="story-wrapper">
      <span className="story-title">
        We have spent love and care in honing our skills to create these sweet
        creations to share
      </span>
      <div className="story-desc">
        <div className="story-desc__recipe">
          <IoBagCheckSharp className="story-logo" /> <b>Guaranteed Quality</b>
          <span className="story-point">
            We make sure that each step from making the products up until it
            gets in your hands happens in a smooth and high quality manner.
          </span>
        </div>
        <div className="story-desc__recipe">
          <IoAccessibilityOutline className="story-logo" />
          <b>Made For You</b>{" "}
          <span className="story-point">
            Every recipe and product is made with feedback as a main factor and
            the customer is always in mind.
          </span>
        </div>
        <div className="story-desc__recipe">
          <IoRibbonOutline className="story-logo" />
          <b>Sourced With Care</b>{" "}
          <span className="story-point">
            Sources on ingredients and materials are always thought with regards
            to environmentally friendly options.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Story;
