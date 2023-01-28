import React from "react";
import PropTypes from "prop-types";
import "./landing.css";

function SingleFeature({ item }) {
  return (
    <React.Fragment>
      <div className="flex-row-landing">
        <div className="card-landing">
          <div className="card-top-landing">
            <img src={item.image} alt="" />
          </div>
          <div className="card-body-landing card-info-landing">
            <h2 className="landing-card-heading">{item.title}</h2>
            <p className="landing-card-para">{item.description}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

SingleFeature.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default SingleFeature;
