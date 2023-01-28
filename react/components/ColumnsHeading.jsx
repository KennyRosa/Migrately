import React from "react";
import PropTypes from "prop-types";
import "./landing.css";
function ColumnsHeading({ title, subtitle }) {
  return (
    <React.Fragment>
      <div>
        <div className="row">
          <div className="col">
            <br />
            <br />
            <h3 className="landing-title">{title}</h3>
            <h3 className="landing-subtitle">{subtitle}</h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

ColumnsHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default ColumnsHeading;
