import React from "react";
import PropTypes from "prop-types";
import "./landing.css";

function BottomHeading({ title, subtitle }) {
  return (
    <React.Fragment>
      <div className="landing-header">
        <div className="row">
          <div className="col landing-shift-header">
            <h3 className="landing-features-title">{title}</h3>
            <h1 className="landing-features-subtitle">{subtitle}</h1>
            <button className="btn-primary landing-btn btn me-3">
              See Features
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

BottomHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default BottomHeading;
