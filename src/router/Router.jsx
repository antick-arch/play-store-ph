import { createBrowserRouter } from "react-router";
import HomePage from "../pages/homePage/HomePage";
import Apps from "../pages/apps/Apps";
import InstallApps from "../pages/installApps/InstallApps";
import DetailsPage from "../component/ui/DetailsPage";
import FunnyErrorPage from "../pages/errorPage/ErrorPage";
import RootLayout from "../layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        // path: "/",
        index: true,
        Component: HomePage,
      },
      {
        path: "apps",
        Component: Apps,
      },
      {
        path: "installedApps",
        Component: InstallApps,
      },
      {
        path: "/apps/:id",
        Component: DetailsPage,
      },
    ],
    errorElement: <FunnyErrorPage></FunnyErrorPage>,
  },
]);

export default router;
