import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home/index";
import NotFound from "pages/NotFound";
import Book from "pages/Book";
import BookTwo from "pages/BookTwo";
import BookThree from "pages/BookThree";
import AboutUs from "pages/AboutUs";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "book",
      element: <Book />,
    },
    {
      path: "booktwo",
      element: <BookTwo />,
    },
    {
      path: "bookthree",
      element: <BookThree />,
    },
    {
      path: "aboutus",
      element: <AboutUs />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
