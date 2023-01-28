import React from "react";
import Icon from "@mdi/react";
import { mdiCheck } from "@mdi/js";
import PropTypes from "prop-types";
import "./landing.css";

function FeatureBulletList({ item }) {
  return (
    <div>
      <div className="landing-icon-spacing">
        <span className="icon-shape-landing icon-sizing-landing icon-color-landing icon-margin-landing">
          <Icon path={mdiCheck} size={0.7} className="icon-landing" />
        </span>
        <span className="align-middle landing-icon-title">{item.title}</span>
      </div>
    </div>
  );
}

FeatureBulletList.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
};

export default FeatureBulletList;
