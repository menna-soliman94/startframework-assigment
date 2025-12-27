import React from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import About from "./components/About/About.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Contact from "./components/Contact/Contact.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import Home from "./components/Home/Home.jsx";
import Layout from "./components/Layout/Layout.jsx";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to={"/home"} /> },
        { path: "/startframework-assigment/home", element: <Home /> },
        { path: "/startframework-assigment/about", element: <About /> },
        { path: "/startframework-assigment/portfolio", element: <Portfolio /> },
        { path: "/startframework-assigment/contact", element: <Contact /> },
        { path: "/startframework-assigment/*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
