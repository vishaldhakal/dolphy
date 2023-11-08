"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ cities }) => {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return <></>;
  }
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white py-3">
      <div className="container-fluid">
        <Link href="/" className="logo d-flex align-items-center">
          <img src="/Logo.svg" alt="Dolphy logo" className="img-fluid" />
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Latest Projects
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active fw-bold"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Top Cities
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                {cities &&
                  cities.map((city) => (
                    <Link
                      className="dropdown-item"
                      href={`/pre-construction-homes/${city.slug}`}
                      key={city.id}
                    >
                      {city.name}
                    </Link>
                  ))}
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Builders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <Link
            href="tel:6476745958"
            className="btn btn-outline-dark my-2 my-sm-0 ms-md-3"
          >
            Call : 647 527 4970
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
