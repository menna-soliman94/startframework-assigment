import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import port1 from "../../assets/poert1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  const [selectedImage, setSelectedImage] = useState("");
  let images = [port1, port2, port3, port1, port2, port3];

  return (
    <>
      <div className="portfolio py-4 d-flex flex-column align-items-center">
        <h1 className="fw-bold">PORTFOLIO COMPONENT</h1>
        <div className="d-flex justify-content-center align-items-center my-2">
          <div className="line"></div>
          <i className="fa-solid fa-star mx-3"></i>
          <div className="line"></div>
        </div>
        <div className="container">
          <div className="row g-5 pt-2">
            {images.map((image, index) => {
              return (
                <React.Fragment>
                  <div className="col-md-4 position-relative">
                    <Card
                      img={image}
                      index={index}
                      onClick={() => setSelectedImage(image)}
                    />
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          {selectedImage && (
            <div
              className="modal fade show d-block"
              tabIndex="-1"
              onClick={() => setSelectedImage("")}
            >
              <div
                className="modal-dialog modal-dialog-centered modal-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-content border-0 bg-transparent">
                  <div className="modal-body p-0">
                    <img
                      src={selectedImage}
                      className="img-fluid rounded-3"
                      alt="selected"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
