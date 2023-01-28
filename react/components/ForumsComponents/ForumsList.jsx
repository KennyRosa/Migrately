import React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "react-bootstrap";
import { Edit3, MoreVertical, Trash2 } from "react-feather";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import debug from "sabio-debug";
import Swal from "sweetalert2";
import "./forum.css";
const _logger = debug.extend("ForumsList");
function ForumsList(props) {
  const aForum = props.forum;
  const navigate = useNavigate();

  const navigateToCommentThread = () => {
    const stateOfForums = {
      type: "FORUMS_COMMENT",
      forumId: aForum?.id,
      userId: props?.currentUserId,
    };
    _logger(stateOfForums, "payload being sent");
    navigate(`/forums/${aForum.id}/comments`, { state: stateOfForums });
  };

  const upperCaseIsPrivate = aForum.isPrivate
    .toString()
    .charAt(0)
    .toUpperCase();

  const sliceIsPrivate = aForum.isPrivate.toString().slice(1);

  const concatIsPrivate = upperCaseIsPrivate.concat(sliceIsPrivate);

  const upperCaseIsClosed = aForum.isClosed.toString().charAt(0).toUpperCase();

  const sliceIsClosed = aForum.isClosed.toString().slice(1);

  const concatIsClosed = upperCaseIsClosed.concat(sliceIsClosed);

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      to=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </Link>
  ));

  const ActionMenu = () => {
    const handleEditStatus = () => {
      const stateOfForums = { type: "FORUMS_EDIT", payload: aForum };
      _logger(stateOfForums, "from state");
      navigate(`/forums/${aForum.id}/edit`, {
        state: stateOfForums,
      });
    };

    const onDeleteHandler = (e) => {
      _logger(e, "On Delete Handler");
      navigate("/forums/list");
      if (e.target.id === "delete") {
        Swal.fire({
          title: "Are You Sure?",
          text: "You are about to delete this forum!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            return props.delete(aForum.id);
          }
        });
      }
    };

    return (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle}>
          <MoreVertical size="15px" className="text-secondary" />
        </Dropdown.Toggle>
        <Dropdown.Menu align="end">
          <Dropdown.Header>ACTION</Dropdown.Header>
          <Dropdown.Item eventKey="edit" id="edit" onClick={handleEditStatus}>
            <Edit3 size="18px" color="green" className="dropdown-item-icon" />
            Edit
          </Dropdown.Item>
          <Dropdown.Item
            eventKey="delete"
            id="delete"
            onClick={onDeleteHandler}
          >
            <Trash2 size="18px" color="red" className="dropdown-item-icon" />
            Delete
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  return (
    <React.Fragment>
      <tr className="paginated-forum-odd-color" role="row">
        <td
          className="paginated-forums-cursor mb-1 text-primary-hover"
          row="cell"
        >
          <a>
            <h5
              onClick={navigateToCommentThread}
              className="mb-1 text-primary-hover forums-table-header"
            >
              {aForum.name}
            </h5>
          </a>
        </td>

        <td row="cell">{aForum.description}</td>
        <td row="cell">{aForum.forumCategory.name}</td>
        <td className="forums-boolean-bold" row="cell">
          {concatIsPrivate}
        </td>
        <td className="forums-boolean-bold" row="cell">
          {concatIsClosed}
        </td>
        <td row="cell">
          <ActionMenu />
        </td>
      </tr>
    </React.Fragment>
  );
}

ForumsList.propTypes = {
  forum: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    forumCategory: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
    isPrivate: PropTypes.bool.isRequired,
    isClosed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  values: PropTypes.objectOf(PropTypes.string.isRequired),
  delete: PropTypes.func.isRequired,
  currentUserId: PropTypes.number.isRequired,
};

export default ForumsList;
