import React from "react";
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import About from "./components/About/About.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Contact from "./components/Contact/Contact.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import Home from "./components/Home/Home.jsx";
import Layout from "./components/Layout/Layout.jsx";

export default function App() {
const router = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/home" /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
