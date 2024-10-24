import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./screens/Landing Page/LandingPage";
import UserAuthLandingPage from "./screens/User Authentication/UserAuthLandingPage/UserAuthLandingPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/auth",
      element: <UserAuthLandingPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
