import React from "react";

export default function Card({ img, onClick }) {
  return (
    <>
      <div className="card position-relative" onClick={onClick}>
        <img src={img} className="card-img-top" alt="portfolio" />
        <div className="layer position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
          <i className="fa-solid fa-plus fa-6x text-white"></i>
        </div>
      </div>
    </>
  );
}
