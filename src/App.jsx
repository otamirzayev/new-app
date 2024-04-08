import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import PageNotFound from "./layout/PageNotFound";

import MainLayout from "./layout/MainLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return (
    <div className="container">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
