import { lazy } from "react";

const PaginatedForums = lazy(() =>
  import("../components/forums/PaginatedForums")
);

const ForumCommentThread = lazy(() =>
  import("../components/forums/ForumCommentThread")
);

const ForumRoute = [
  {
    path: "/forums/add",
    name: "A Secured Form",
    exact: true,
    element: FormBasic,
    roles: ["Admin"],
    isAnonymous: false,
  },
  {
    path: "/forums/:id/edit",
    name: "Editing Paginated Forum",
    exact: true,
    element: FormBasic,
    roles: ["Admin"],
    isAnonymous: false,
  },
  {
    path: "/forums/list",
    name: "Paginated Forums",
    exact: true,
    element: PaginatedForums,
    roles: ["Admin"],
    isAnonymous: false,
  },
  {
    path: "/forums/:id/comments",
    name: "Forums Comments",
    exact: true,
    element: ForumCommentThread,
    roles: ["Admin"],
    isAnonymous: false,
  },
];

const allRoutes = [
  ...ForumRoute,
];

export default allRoutes;
