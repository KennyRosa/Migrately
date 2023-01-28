import React from "react";
import SingleBottomFeature from "./SingleBottomFeature";
import BottomHeading from "./BottomHeading";
import platform1 from "../../assets/images/migrately/platform1.jpg";
import endpoints2 from "../../assets/images/migrately/endpoints2.jpeg";
import phone4 from "../../assets/images/migrately/phone4.jpeg";
import bar5 from "../../assets/images/migrately/bar5.jpeg";
import "./landing.css";
import travel from "../../assets/images/migrately/travel.jpg";

function MigratelyFeatures() {
  const title = "MIGRATELY FEATURES";
  const subtitle = "Personalized U.S. Visa Application and Journey.";

  const features = [
    {
      id: 1,
      icon: platform1,
      title: "ONE PLATFORM",
      description: `Interactive dashboard and document storage with up-to-date immigration and application statuses.`,
    },
    {
      id: 2,
      icon: endpoints2,
      title: "GUIDED VISA JOURNEY",
      description: `Personalized step-by-step U.S. visa journey based on visa type and immigration criteria.`,
    },
    {
      id: 3,
      title: "VISA PREDICT™",
      description:
        "Leverage technology and aggregated data to predict U.S. visa approval and probability.",
    },
    {
      id: 4,
      icon: phone4,
      title: "LIVE IMMIGRATION SPECIALIST",
      description: `Experienced immigration support via phone or chat to support your U.S. visa journey.`,
    },
    {
      id: 5,
      icon: bar5,
      title: "REDUCED COST",
      description: `Proprietary algorithm matches your profile with best/most fitting U.S. visa for your journey.`,
    },
  ];

  const mappingAFeature = (item, index) => {
    return (
      <div className="landing-cards-wrap" key={index}>
        <SingleBottomFeature item={item}></SingleBottomFeature>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="main-landing container">
        <div className="row">
          <div className="col px-0">
            <BottomHeading title={title} subtitle={subtitle} />
            <img
              className="landing-img-bottom"
              src={travel}
              alt="migrately-img"
            />
          </div>
          <div className="col flexing-landing-features">
            {features.map(mappingAFeature)}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MigratelyFeatures;
