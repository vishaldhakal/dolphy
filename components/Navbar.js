"use client";
import Link from "next/link";
import { useState } from "react";
import SearchBar from "./SearchBar";

const Navbar = ({ cities }) => {
  const [cityname, setCityname] = useState("");

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white py-3">
      <div className="container-fluid justify-content-start">
        <Link href="/" className="logo">
          <img src="/logo2.svg" alt="Dolphy logo" className="img-fluid" />
        </Link>
        <div className="input-group input-group-search me-2 me-md-0">
          <SearchBar changeCity={setCityname} cities={cities} />
          <Link
            href={"/pre-construction-homes/" + cityname.toLowerCase()}
            className="d-none d-md-inline"
          >
            <button
              className="input-group-text btn bg-light2 bg-lh mybtn d-block py-search"
              type="button"
              aria-label="Search Button"
            >
              <svg
                aria-hidden="true"
                className="svg"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
                height="25"
                width="25"
              >
                <path
                  d="M20.756 18.876l6.155 6.154-1.88 1.881-6.155-6.155A9.269 9.269 0 0 1 13.3 22.61a9.31 9.31 0 1 1 9.31-9.31c0 2.091-.69 4.021-1.854 5.576zM13.3 19.95a6.65 6.65 0 1 0 0-13.3 6.65 6.65 0 0 0 0 13.3z"
                  fill="#000000"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img
            loading="lazy"
            src="https://img.icons8.com/material-two-tone/24/000000/menu.png"
            width="24px"
            height="24px"
            alt="Navbar toggler icon"
          />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0 align-items-start align-items-md-center">
            <li className="nav-item dropdown dropdown-fullwidth">
              <button
                className="nav-link dropdown-toggle align-items-center d-flex"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                New Projects
                <img
                  src="/dropdown.png"
                  alt="dropdown icon"
                  className="img-fluid dropdown-nav-icon ms-1"
                />
              </button>
              <div
                className="dropdown-menu dropdown-menu-end border-0 show"
                data-bs-popper="static"
              >
                <div className="row p-3 pt-2 dopp">
                  <div className="col-12 col-sm-6 col-md-3 mb-3">
                    <Link
                      className="link-black"
                      href={"/pre-construction-homes/toronto/"}
                    >
                      <h5 className="mb-2 fw-mine fs-4">Toronto</h5>
                    </Link>
                    <ul className="list-unstyled">
                      <li>
                        <a className="dropdown-item" href="#">
                          Alfie Condos
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Temple Condos
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Temple Condos
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Maison Wellesley Condos
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          400 Front Street Condos
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-sm-6 col-md-3 mb-3">
                    <Link
                      className="link-black"
                      href={"/pre-construction-homes/calgary/"}
                    >
                      <h5 className="mb-2 fw-mine fs-4">Calgary</h5>
                    </Link>
                    <ul className="list-unstyled">
                      <li>
                        <a className="dropdown-item" href="#">
                          Myne Condos
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Cornerview Towns
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Novella 2 Townhomes
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Highgate Condos
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-sm-6 col-md-3 mb-3">
                    <Link
                      className="link-black"
                      href={"/pre-construction-homes/brampton/"}
                    >
                      <h5 className="mb-2 fw-mine fs-4">Brampton</h5>
                    </Link>
                    <ul className="list-unstyled">
                      <li>
                        <a className="dropdown-item" href="#">
                          Honeystone House
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Bramalea Square Condos
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Bodhi Towns
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Arbor West Homes
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Boutin Tower
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-sm-6 col-md-3 mb-3">
                    <Link
                      className="link-black"
                      href={"/pre-construction-homes/mississauga/"}
                    >
                      <h5 className="mb-2 fw-mine fs-4">Mississauga</h5>
                    </Link>
                    <ul className="list-unstyled">
                      <li>
                        <a className="dropdown-item" href="#">
                          Whitehorn Wood Towns
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          M6 Condos
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The Southland Condos
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          MW Condos
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Canopy Towers 2
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <div
                      className="alert alert-success bg-lightyellow alert-dismissible fade show mt-2 mb-0 rounded-3 d-flex justify-content-sm-between align-items-sm-center flex-column flex-sm-row justify-content-start align-items-start gap-3"
                      role="alert"
                    >
                      <div>
                        <div className="my-2 my-sm-0 d-flex text-dark align-items-center gap-2">
                          <img
                            src="/COA-agent-pic.jpg"
                            alt="agent pic"
                            className="img-fluid img-call-height-dropdown"
                          />
                          <div className="d-flex flex-column justify-content-start align-items-start">
                            <p className="mb-0 fw-bold">
                              Looking for New Construction Homes in Calgary ?
                            </p>
                            <p className="fs-small mb-0">
                              Call us at
                              <Link
                                href={"telto:(587) 887-2572"}
                                className="me-2 ms-1"
                              >
                                (587) 887-2572
                              </Link>
                              to speak with our friendly new homes advisor.
                            </p>
                          </div>
                        </div>
                      </div>
                      <Link
                        className="btn btn-white link-black"
                        href={"/pre-construction-homes/"}
                      >
                        Explore all projects
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link
                href={"/pre-construction-homes/builders/"}
                className="nav-link"
              >
                Builders
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <Link href="#mycontact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item d-flex flex-column">
              <Link
                href="tel:6476745958"
                className="btn my-2 my-sm-0 ms-md-3 d-flex text-dark gap-1"
              >
                <img
                  src="/COA-agent-pic.jpg"
                  alt="agent pic"
                  className="img-fluid img-call-height"
                />
                <span
                  className="d-flex flex-column justify-content-start utility__phone-msg"
                  id="utility__phone-msg"
                >
                  <b id="utility__phone-number text-dark">(587) 887-2572</b>
                  <span className="d-block travel__expert fs-vsmall">
                    Speak to a home expert
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
