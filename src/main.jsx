import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layout/RootLayout.jsx';
import HomePage from './pages/homePage/HomePage.jsx';
import Apps from './pages/apps/Apps.jsx';
import InstallApps from './pages/installApps/InstallApps.jsx';
import FunnyErrorPage from './pages/errorPage/ErrorPage.jsx';

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
        path: "install",
        Component: InstallApps,
      }
    ],
    errorElement: <FunnyErrorPage></FunnyErrorPage>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
