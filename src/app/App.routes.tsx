import { RouteObject, useRoutes } from "react-router-dom";
import { routes as moduleRoutes } from "../modules";
const routes: RouteObject[] = [
  ...moduleRoutes,
  {
    path: "*",
    element: <></>,
  },
];
const AppRoutes = () => {
  const children = useRoutes(routes);
  return children;
};
export default AppRoutes;
