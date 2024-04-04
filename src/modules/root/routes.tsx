import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { paths } from "../../config";
import { ComponentLoader, Header, Layout } from "../../shared/components";

const routes: RouteObject[] = [
  {
    path: paths.root,
    element: (
      <Layout Header={<Header />}>
        <ComponentLoader component={lazy(() => import("./views/Root"))} />
      </Layout>
    ),
  },
];

export default routes;
