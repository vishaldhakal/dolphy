import Link from "next/link";
import BottomContactForm from "@/components/BottomContactForm";

export default async function Home() {
  return (
    <>
      <div className="py-3"></div>
      <div className="pt-5">
        <div className="container-fluid">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img
              src="Dolphin.svg"
              alt="dolphin icon"
              className="img-fluid icon-img"
            />
            <div className="pb-1 pt-3">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control w-mine"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label
                  for="floatingInput"
                  className="d-flex align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                  <span className="mx-2"></span>
                  Type a city
                </label>
              </div>
            </div>
          </div>

          <p className="text-mine text-center">
            Search 1000+ Pre construction homes across Canada
          </p>
          <div className="py-2"></div>
          <div className="py-5 my-2"></div>
          <h2 className="fw-mine mb-5 accent-line">Popular Cities in Canada</h2>
          <div className="row">
            <div className="col-12 col-md-3 col-xl-3">
              <Link className="d-block properti_city" href="/">
                <div className="thumb">
                  <img
                    src="/cities/toronto.jpg"
                    alt="toronto"
                    className="img-fluid"
                  />
                </div>
                <div className="overlay">
                  <div className="details">
                    <h4>Toronto</h4>
                    <h4>Homes for Sale</h4>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-3 col-xl-3">
              <Link className="d-block properti_city" href="/">
                <div className="thumb">
                  <img
                    src="/cities/edmonton.jpeg"
                    alt="edmonton"
                    className="img-fluid"
                  />
                </div>
                <div className="overlay">
                  <div className="details">
                    <h4>Edmonton</h4>
                    <h4>Homes for Sale</h4>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-3 col-xl-3">
              <Link className="d-block properti_city" href="/">
                <div className="thumb">
                  <img
                    src="/cities/brampton.jpg"
                    alt="brampton"
                    className="img-fluid"
                  />
                </div>
                <div className="overlay">
                  <div className="details">
                    <h4>Brampton</h4>
                    <h4>Homes for Sale</h4>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-3 col-xl-3">
              <Link className="d-block properti_city" href="/">
                <div className="thumb">
                  <img
                    src="/cities/halifax.jpeg"
                    alt="halifax"
                    className="img-fluid"
                  />
                </div>
                <div className="overlay">
                  <div className="details">
                    <h4>Halifax</h4>
                    <h4>Homes for Sale</h4>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-3 col-xl-3">
              <Link className="d-block properti_city" href="/">
                <div className="thumb">
                  <img
                    src="/cities/calgary.jpeg"
                    alt="calgary"
                    className="img-fluid"
                  />
                </div>
                <div className="overlay">
                  <div className="details">
                    <h4>Calgary</h4>
                    <h4>Homes for Sale</h4>
                  </div>
                </div>
              </Link>
              <div>
                <ul className="mylist">
                  <li>
                    <span>Victoria Homes for Sale</span>
                  </li>
                  <li>
                    <span>Kitchener Homes for Sale</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-3 col-xl-3">
              <Link className="d-block properti_city" href="/">
                <div className="thumb">
                  <img
                    src="/cities/winnipeg.jpeg"
                    alt="winnipeg"
                    className="img-fluid"
                  />
                </div>
                <div className="overlay">
                  <div className="details">
                    <h4>Winnipeg</h4>
                    <h4>Homes for Sale</h4>
                  </div>
                </div>
              </Link>
              <div>
                <ul className="mylist">
                  <li>
                    <span>Surrey Homes for Sale</span>
                  </li>
                  <li>
                    <span>Saint John Homes for Sale</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-3 col-xl-3">
              <Link className="d-block properti_city" href="/">
                <div className="thumb">
                  <img
                    src="/cities/hamilton.jpeg"
                    alt="hamilton"
                    className="img-fluid"
                  />
                </div>
                <div className="overlay">
                  <div className="details">
                    <h4>Hamilton</h4>
                    <h4>Homes for Sale</h4>
                  </div>
                </div>
              </Link>
              <div>
                <ul className="mylist">
                  <li>
                    <span>Markham Homes for Sale</span>
                  </li>
                  <li>
                    <span>Monoton Homes for Sale</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-3 col-xl-3">
              <Link className="d-block properti_city" href="/">
                <div className="thumb">
                  <img
                    src="/cities/london.jpeg"
                    alt="london"
                    className="img-fluid"
                  />
                </div>
                <div className="overlay">
                  <div className="details">
                    <h4>London</h4>
                    <h4>Homes for Sale</h4>
                  </div>
                </div>
              </Link>
              <div>
                <ul className="mylist">
                  <li>
                    <span>Kelowna Homes for Sale</span>
                  </li>
                  <li>
                    <span>Richmond Homes for Sale</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-5 mt-5"></div>
          <div className="py-5 my-5" id="mycontact">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <img
                  src="/contact-bottom-2.png"
                  alt="dce"
                  className="img-fluid w-25 w-smm-50 mb-3"
                />
              </div>
              <h2 className="fw-mine text-center px-md-4 fs-4">
                Don't know where to start ?
              </h2>
              <h2 className="fw-mine text-center px-md-4 fs-4">
                Contact Dolphy now!
              </h2>
              <div className="row row-cols-1 row-cols-md-3 mt-5">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <BottomContactForm></BottomContactForm>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
          <div className="pt-5 mt-5"></div>
        </div>
      </div>
    </>
  );
}
