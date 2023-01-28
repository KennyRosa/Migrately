import React from "react";
import MigratelyFeatures from "./MigratelyFeatures";
import WhyMigratelyColumns from "./WhyMigratelyColumns";
import Footer from "./Footer";
import NavigateBar from "./NavigateBar";
import BottomStatement from "./BottomStatement";
import PropTypes, { string } from "prop-types";
import TopSection from "./TopSection";
import Checklist from "./Checklist";

function Landing(props) {
  return (
    <React.Fragment>
      <NavigateBar currentUser={props.currentUser} />
      <TopSection />
      <Checklist />
      <WhyMigratelyColumns />
      <MigratelyFeatures />
      <BottomStatement />
      <Footer />
    </React.Fragment>
  );
}
Landing.propTypes = {
  currentUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    roles: PropTypes.arrayOf(string).isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    email: PropTypes.string,
  }),
};
export default Landing;
