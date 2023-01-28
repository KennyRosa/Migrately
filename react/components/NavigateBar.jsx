import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./landing.css";
import logo from "../../assets/images/migrately/migrately-logo.png";
import userService from "services/userService";
import Swal from "sweetalert2";
import PropTypes, { string } from "prop-types";

function NavigateBar({ currentUser }) {
  const [defaultUser] = useState({
    id: 0,
    roles: [],
    email: "",
    isLoggedIn: false,
  });

  const navigate = useNavigate();

  const onLogOutClicked = () => {
    userService.logout().then(onLogOutSuccess).catch(onLogOutFailure);
  };
  const onLogOutSuccess = () => {
    const userForTransport = { type: "USER_CURRENT", payload: defaultUser };

    navigate("/", { state: userForTransport });
  };

  const onLogOutFailure = () => {
    Swal.fire("Oh no!", "Log Out was unsuccessful. Please try again.", "error");
    navigate("/");
  };

  return (
    <React.Fragment>
      <div className="landing-nav-body main-landing container">
        <nav className="landing-nav">
          <div className="icon-landing">
            <img className="logo-landing" src={logo} alt="banner-img" />
          </div>
          <ol className="migrately-ordered-list">
            <li className="migrately-list-item">
              <a className="migrately-links-nav" href="#">
                About
              </a>
            </li>
            <li className="migrately-list-item">
              <a className="migrately-links-nav" href="#">
                Features
              </a>
            </li>
            <li className="migrately-list-item">
              <a className="migrately-links-nav" href="#">
                Pricing
              </a>
            </li>
            {!currentUser.isLoggedIn && (
              <React.Fragment>
                <li>
                  <Link to="/login">
                    <button className="btn-info btn me-3 ">Login</button>
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <button className="btn-primary btn ">Register</button>
                  </Link>
                </li>
              </React.Fragment>
            )}
            {currentUser.isLoggedIn && (
              <React.Fragment>
                <li>
                  <button
                    onClick={onLogOutClicked}
                    className="btn-danger btn me-3 "
                  >
                    Logout
                  </button>
                </li>
              </React.Fragment>
            )}
          </ol>
        </nav>
      </div>
    </React.Fragment>
  );
}

NavigateBar.propTypes = {
  currentUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    roles: PropTypes.arrayOf(string).isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    email: PropTypes.string,
  }),
};

export default NavigateBar;
