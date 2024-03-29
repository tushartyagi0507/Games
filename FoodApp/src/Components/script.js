import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.js"
import Body from "./Body.js"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./About.js";
import Contact from "./Contact.js";
import Error from "./Error.js";
import RestaurantMenu from "./RestaurantMenu.js";

const root = ReactDOM.createRoot(document.querySelector(".root"));

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Body/>, 
      },
      
      {
        path: "/About",
        element: <About/>, 
      },
      {
        path: "/Contact",
        element: <Contact/>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>,
      },
    ],
    errorElement: <Error/>
  },

])

root.render(<RouterProvider router={appRouter} />);
