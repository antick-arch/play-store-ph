import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import router from './router/Router.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: RootLayout,
//     children: [
//       {
//         // path: "/",
//         index: true,
//         Component: HomePage,
//       },
//       {
//         path: "apps",
//         Component: Apps,
//       },
//       {
//         path: "installedApps",
//         Component: InstallApps,
//       },
//       {
//         path: "/apps/:id",
//         Component: DetailsPage,
//       },
//     ],
//     errorElement: <FunnyErrorPage></FunnyErrorPage>
//   }
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
