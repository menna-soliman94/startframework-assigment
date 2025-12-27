import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <div className="home text-white py-4">
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <img className="w-25" src="/src/assets/avataaars.svg" alt="" />
          <h1 className="fw-bold mt-2">START FRAMEWORK</h1>
          <div className="d-flex justify-content-center align-items-center my-3">
            <div className="line bg-white"></div>
            <i className="fa-solid fa-star mx-3"></i>
            <div className="line bg-white"></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}
