import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <div className="about text-white vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="fw-bold">ABOUT COMPONENT</h1>
        <div className="d-flex justify-content-center align-items-center my-2">
          <div className="line bg-white"></div>
          <i className="fa-solid fa-star mx-3"></i>
          <div className="line bg-white"></div>
        </div>
        <div className="container w-75">
          <div className="row pt-2">
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
