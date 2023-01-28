import React from "react";
import SingleFeature from "./SingleFeature";
import ColumnsHeading from "./ColumnsHeading";
import "./landing.css";
import application from "../../assets/images/migrately/application.jpg";
import guidance from "../../assets/images/migrately/guidance.jpg";
import approved from "../../assets/images/migrately/approved.jpg";

function WhyMigratelyColumns() {
  const title = "WHY MIGRATELY";
  const subtitle = "Migrately creates a personalized flight path";

  const features = [
    {
      id: 1,
      image: application,
      title: "Migrately Flight Dashboard",
      description: `With over 14 million nonimmigrant visa applications a year, Migrately creates and tracks your process.`,
    },
    {
      id: 2,
      image: approved,
      title: "Step-by-Step Process",
      description: `Every year, the U.S. denies approximately 35% of visas. Migrately helps prevent automatic denials.`,
    },
    {
      id: 3,
      image: guidance,
      title: "Saves Time, Reduces Errors",
      description: `Migrately provides expert guidance with the most up-to-date information, saving users countless hours of research.`,
    },
  ];

  const mappingAFeature = (item, index) => {
    return <SingleFeature item={item} key={index}></SingleFeature>;
  };

  return (
    <React.Fragment>
      <div className="main-landing container">
        <div className="row">
          <div className="flexing-landing landing-content">
            <ColumnsHeading title={title} subtitle={subtitle} />
          </div>

          <div className="flexing-landing-card">
            <div className="skewbox-landing box-landing">
              <div className="landing-box-margin">
                {features.map(mappingAFeature)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default WhyMigratelyColumns;
