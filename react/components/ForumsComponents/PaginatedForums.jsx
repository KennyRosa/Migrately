import React, { useState, useEffect, useCallback } from "react";
import debug from "sabio-debug";
import forumsService from "../../services/forumsService";
import toastr from "toastr";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import locale from "rc-pagination/lib/locale/en_US";
import ForumsList from "./ForumsList";
import "./forum.css";
import { useNavigate } from "react-router-dom";
import PropTypes, { string } from "prop-types";

const _logger = debug.extend("PaginatedForums");

const PaginatedForums = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [forumData, setForumData] = useState({
    forumsArray: [],
    forumsMapComponents: [],
    dataToDisplay: "all",
  });

  const [paginate, setPaginate] = useState({
    pageIndex: 0,
    pageSize: 10,
    totalCount: 0,
    totalPages: 0,
  });

  useEffect(() => {
    if (searchQuery) {
      forumsService
        .searchAllForumsByQuery(
          paginate.pageIndex,
          paginate.pageSize,
          searchQuery
        )
        .then(onPaginateSuccess)
        .catch(onPaginateError);
    } else {
      getAllForumsCall();
    }
  }, [searchQuery]);

  useEffect(() => {
    if (
      forumData.dataToDisplay === "all" ||
      forumData.dataToDisplay === "update"
    ) {
      getAllForumsCall();
    }
  }, [paginate.pageIndex, forumData.dataToDisplay]);

  const onSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const getAllForumsCall = () => {
    forumsService
      .getAllForums(paginate.pageIndex, paginate.pageSize)
      .then(onPaginateSuccess)
      .catch(onPaginateError);
  };

  const onPaginateSuccess = (response) => {
    _logger(response, "PAGINATED RESPONSE");
    const pageData = response.data.item.pagedItems;

    const data = response.data.item;

    _logger(data, "pagination data");

    setForumData((prevState) => {
      const newForumData = { ...prevState };
      newForumData.forumsArray = pageData;
      newForumData.forumsMapComponents = pageData.map(mapForum);
      newForumData.dataToDisplay = "all";
      return newForumData;
    });

    setPaginate((prevState) => {
      const newPaginate = { ...prevState };
      newPaginate.pageIndex = data.pageIndex;
      newPaginate.pageSize = data.pageSize;
      newPaginate.totalCount = data.totalCount;
      newPaginate.totalPages = data.totalPages;

      return newPaginate;
    });
  };

  const onPaginateError = (error) => {
    _logger(error, "PAGINATED ERROR");
  };

  const mapForum = (aForum, index) => {
    return (
      <ForumsList
        currentUserId={props.currentUser.id}
        forum={aForum}
        key={index}
        delete={onDeleteRequested}
      />
    );
  };

  const navigate = useNavigate();

  const onAddForumsClick = () => {
    navigate("/forums/add");
  };

  const onDeleteRequested = useCallback((values) => {
    _logger("Deleting from Forums table", values);

    forumsService
      .deleteForums(values)
      .then(onDeleteSuccess)
      .catch(onDeleteError);
  }, []);

  const onDeleteSuccess = (response) => {
    _logger(response, "On Delete Success");

    toastr.success("Forum Deleted Successfully");

    setForumData((prevState) => {
      const pageData = { ...prevState };
      pageData.dataToDisplay = "update";
      return pageData;
    });
  };

  const onDeleteError = (error) => {
    _logger(error, "Delete Failed");
    toastr.error("Failed delete");
  };

  const onChange = (page) => {
    _logger(page);
    setPaginate((prevState) => {
      const newPaginate = { ...prevState };

      newPaginate.pageIndex = page - 1;

      return newPaginate;
    });
  };

  return (
    <React.Fragment>
      <div className="tab-content">
        <div className="mb-5 card">
          <div className="p-0 card-body">
            <div className="overflow-hidden">
              <div className="row">
                <div className="mb-lg-0 mb-2 px-5 py-4 col-lg-12 col-md-12 col-sm-12">
                  <input
                    type="search"
                    onChange={onSearchQueryChange}
                    className="form-control forums-search-width"
                    placeholder="Search Form Name..."
                  />
                </div>
              </div>
            </div>
            <div className="paginated-forum-button-align">
              <button
                className="btn-primary btn me-3 paginated-forum-btn"
                onClick={onAddForumsClick}
              >
                Add Form
              </button>
            </div>

            <div className="forums-table-padding">
              <table
                role="table"
                className="text-nowrap table paginated-forum-table-color"
              >
                <thead className="table-light">
                  <tr role="row">
                    <th
                      className="forums-table-header"
                      colSpan="1"
                      role="columnheader"
                    >
                      NAME
                    </th>
                    <th colSpan="1" role="columnheader">
                      DESCRIPTION
                    </th>
                    <th colSpan="1" role="columnheader">
                      CATEGORY
                    </th>
                    <th colSpan="1" role="columnheader">
                      PRIVATE
                    </th>
                    <th colSpan="1" role="columnheader">
                      CLOSED
                    </th>
                    <th colSpan="1" role="columnheader">
                      UPDATE
                    </th>
                  </tr>
                </thead>
                <tbody>{forumData.forumsMapComponents}</tbody>
              </table>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <Pagination
                  className="forums-pagination-center"
                  current={paginate.pageIndex + 1}
                  total={paginate.totalCount}
                  pageSize={paginate.pageSize}
                  locale={locale}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaginatedForums;

PaginatedForums.propTypes = {
  currentUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    roles: PropTypes.arrayOf(string).isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    email: PropTypes.string,
  }),
};
