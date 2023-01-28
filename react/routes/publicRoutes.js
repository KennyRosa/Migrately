import { lazy } from "react";

const Landing = lazy(() => import("../components/landing/Landing"));

const routes = [
  {
    path: "/",
    name: "Landing",
    exact: true,
    element: Landing,
    roles: [],
    isAnonymous: true,
    hasNavbar: true
  },
];

var allRoutes = [
  ...routes,
];

export default allRoutes;
