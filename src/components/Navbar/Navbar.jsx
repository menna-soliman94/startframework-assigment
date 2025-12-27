import React from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg py-4 navbar-dark fw-bold fixed-top">
        <div className="container">
          <NavLink className="navbar-brand fs-2" to="/home">
            START FRAMEWORK
          </NavLink>
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-3">
                <NavLink
                  className="nav-link text-white"
                  aria-current="page"
                  to="/about"
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink
                  className="nav-link text-white"
                  aria-current="page"
                  to="/portfolio"
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink
                  className="nav-link text-white"
                  aria-current="page"
                  to="/contact"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
