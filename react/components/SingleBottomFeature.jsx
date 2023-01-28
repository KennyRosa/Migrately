import React from "react";
import PropTypes from "prop-types";
import "./landing.css";
import travel from "../../assets/images/migrately/travel.jpg";
function SingleBottomFeature({ item }) {
  return (
    <div className="blog-post-landing">
      <div className="blog-post-img-landing">
        <img src={travel} alt="landing-card" />
      </div>
      <div className="blog-post-info-landing">
        <div className="blog-post-title-landing">
          <h2 className="blog-post-title-landing">{item.title}</h2>
        </div>
        <div className="blog-post-desc-landing">
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}

SingleBottomFeature.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
};

export default SingleBottomFeature;
