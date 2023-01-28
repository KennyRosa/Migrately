import React from "react";
import "./landing.css";
import visa from "../../assets/images/migrately/visa.jpg";

function TopSection() {
  const heading =
    "Simplifying the U.S. visa and immigration journey combining the power of community and technology";
  const bottomHeading =
    "Migrately matches and customizes the right U.S. travel, visa, and immigration process for you. Want to learn more about Migrately?";

  return (
    <React.Fragment>
      <div className="landing-banner main-landing">
        <div className="row">
          <img className="landing-img" src={visa} alt="migrately-img" />
          <div className="landing-banner-text">
            <p className="landing-p">{heading}</p>
            <p className="landing-bottom-p">{bottomHeading}</p>
            <button className="btn-success btn me-3 landing-button">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TopSection;
