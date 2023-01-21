import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container mt-5">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Welcome To Moffa Clothing</h1>
          <p style={{ textAlign: "justify" }}>
            We are direct manufacturers in womens cothing. we provide you with
            latest and best quality clothing in budget price. Our online journey
            started 2 years back through our Facebook and Instagram. Due to the
            overwhelming response from customers all over India, we plan for an
            online store for our customers to know the stock availability and
            easy purchase through online. Our unit is located in Ernakulam,
            Kerala.
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default SectionTitleWithText;
