import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start text-white">
        <section className="py-5">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto text-center">
                <h3 className="text-uppercase mb-3">LOCATION</h3>
                <p className="mb-3">2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>

              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4 d-flex flex-column justify-content-center align-items-center">
                <h3 className="text-uppercase mb-4">AROUND THE WEB</h3>
                <div>
                  <a
                    href=""
                    className="me-2 text-reset rounded-circle border p-2"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    href=""
                    className="me-2 text-reset rounded-circle border p-2"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    href=""
                    className="me-2 text-reset rounded-circle border p-2"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a
                    href=""
                    className="me-2 text-reset rounded-circle border p-2"
                  >
                    <i className="fa-solid fa-globe"></i>
                  </a>
                </div>
              </div>

              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto text-center">
                <h3 className="text-uppercase mb-3">ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="colorChange text-center p-4">Copyright © Your Website 2021</div>
      </footer>
    </>
  );
}
