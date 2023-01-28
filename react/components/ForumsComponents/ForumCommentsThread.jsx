import React, { useState, useEffect } from "react";
import Comments from "../comments/Comments";
import debug from "sabio-debug";
import { useLocation } from "react-router-dom";
import userService from "../../services/userService";
import PropTypes, { string } from "prop-types";
import "./forum.css";
import { useNavigate } from "react-router-dom";
const _logger = debug.extend("ForumCommentThread");
function ForumCommentThread() {
  const [user, setUser] = useState({
    id: 0,
    avatarUrl: "",
  });

  const { state } = useLocation();

  useEffect(() => {
    if (state !== null && state.forumId !== null) {
      _logger(state.forumId, "Forum Id that was transported");
      userService
        .getUserById(state?.userId)
        .then(onGetUserByIdSuccess)
        .catch(onGetCurrentUserError);
    } else {
      userService
        .getCurrentUser()
        .then(onGetCurrentUserSuccess)
        .catch(onGetCurrentUserError);
    }
  }, [state]);

  const onGetCurrentUserSuccess = (response) => {
    _logger(response, "getting current User by ID AV");
    userService
      .getUserById(response.data.item.id)
      .then(onGetUserByIdSuccess)
      .catch(onGetCurrentUserError);
  };

  const onGetUserByIdSuccess = (response) => {
    _logger(response, "From Get Current User Success");
    setUser((prevState) => {
      const user = { ...prevState };
      user.id = response.data.item?.userId;
      user.avatarUrl = response.data.item?.avatarUrl;
      return user;
    });
  };

  const onGetCurrentUserError = (error) => {
    _logger(error, "From Get Current User Error");
  };

  const navigate = useNavigate();

  const onNavigateToForums = () => {
    navigate("/forums/list");
  };

  return (
    <div className="container">
      <button
        className="btn btn-primary paginated-forums-nav-btn"
        onClick={onNavigateToForums}
      >
        Back To Forms
      </button>
      <Comments
        entity={{ id: state?.forumId, typeId: 3 }}
        user={{ id: state?.userId, avatarUrl: user?.avatarUrl }}
      />
    </div>
  );
}

ForumCommentThread.propTypes = {
  currentUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    roles: PropTypes.arrayOf(string).isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    email: PropTypes.string.isRequired,
  }),
  user: PropTypes.shape({
    id: PropTypes.number?.isRequired,
    avatarUrl: PropTypes.string?.isRequired,
  }),
};

export default ForumCommentThread;
