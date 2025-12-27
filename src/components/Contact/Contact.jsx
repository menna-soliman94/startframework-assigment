import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <>
      <div className="contact py-4 d-flex flex-column align-items-center">
        <h1 className="fw-bold">CONATCT SECTION</h1>
        <div className="d-flex justify-content-center align-items-center my-2 pb-4">
          <div className="line"></div>
          <i className="fa-solid fa-star mx-3"></i>
          <div className="line"></div>
        </div>
        <div className="container w-50 py-4">
          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control border-0 border-bottom"
              id="floatingInput"
              placeholder="User Name"
            />
            <label for="floatingInput">User Name</label>
          </div>
          <div className="form-floating mb-4">
            <input
              type="number"
              className="form-control border-0 border-bottom"
              id="floatingInput"
              placeholder="User Age"
            />
            <label for="floatingInput">User Age</label>
          </div>
          <div className="form-floating mb-4">
            <input
              type="email"
              className="form-control border-0 border-bottom"
              id="floatingInput"
              placeholder="User Email"
            />
            <label for="floatingInput">User Email</label>
          </div>
          <div className="form-floating mb-4">
            <input
              type="password"
              className="form-control border-0 border-bottom"
              id="floatingInput"
              placeholder="User Password"
            />
            <label for="floatingInput">User Password</label>
          </div>
          <button type="button" className="btn text-white">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
}
