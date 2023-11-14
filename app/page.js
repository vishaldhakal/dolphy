import Link from "next/link";
import BottomContactForm from "@/components/BottomContactForm";
import ListingCardHome from "@/components/ListingCardHome";
import { notFound } from "next/navigation";

async function getData() {
  const res = await fetch(
    "https://api.dolphy.ca/api/preconstructions/?page_size=10",
    {
      next: { revalidate: 10 },
    }
  );

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <div className="py-5"></div>
      <div className="pt-3">
        <div className="container-fluid">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img
              src="dolphin.png"
              alt="dolphy logo icon"
              className="img-fluid icon-img"
            />
            <div className="pb-1">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control search-bar w-mine"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label
                  htmlFor="floatingInput"
                  className="d-flex align-items-center text-lightt"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                  <span className="mx-2">Search by city or project name</span>
                </label>
              </div>
            </div>
          </div>
          <h4 className="text-center fs-2 fs-md-4 fw-bold mb-0">
            Canada’s Leading New Homes Advisor
          </h4>
          <p className="text-center fs-5 mt-2 fw-less mt-md-0">
            A platform for everyone, no matter where you come from
          </p>
          <div className="py-1 py-md-3 d-flex justify-content-center">
            <Link
              href={"/pre-construction-homes/calgary/"}
              className="fw-bold fs-top city-title position-relative mb-4 p-0"
            >
              Calgary
            </Link>
            <p className="fw-bold fs-line mx-2 mt-1 mb-0">
              <img
                src="mapleleaf.svg"
                alt="maple leaf divider"
                className="img-fluid maple-leaf"
              />
            </p>
            <Link
              href={"/"}
              className="fw-bold fs-top city-title position-relative mb-0 p-0 m-0"
            >
              Toronto
            </Link>
          </div>
          <div className="py-2"></div>
          <div className="py-2 py-md-5 my-2"></div>
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="fw-mine ccent-line fs-1">
              <Link
                href={"/pre-construction-homes/calgary"}
                className="link-black"
              >
                Calgary
              </Link>
            </h2>
            <p className="d-inline d-md-none">
              See more projects <i className="bi bi-arrow-right"></i>
            </p>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <p className="fs-5">
              Explore 20+ current & past new homes communities from Truman homes
              in Calgary
            </p>
            <Link
              href={"/pre-construction-homes/calgary"}
              className="d-none d-md-inline link-black"
            >
              More communities in Calgary{" "}
              <i class="bi bi-arrow-right-short"></i>
            </Link>
          </div>
          <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 gy-4 gx-3 gx-lg-2">
            {data.results &&
              data.results.slice(0, 5).map((item) => (
                <div className="col" key={item.id}>
                  <ListingCardHome {...item} />
                </div>
              ))}
          </div>
          <div className="pt-5 mt-5"></div>
          <div>
            <div className="text-center fw-bold fs-3 text-mine">
              Calgary Communities
            </div>
            <div className="py-3">
              <div className="row row-cols-2 row-cols-md-6 gy-5">
                <div className="col d-none d-md-block"></div>
                <div className="col">
                  <h4 className="fs-m fw-bold text-center">
                    North West, Calgary
                  </h4>
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <p className="mb-0 fs-small">West District</p>
                    <p className="mb-0 fs-small">Peaks of Aspen Woods</p>
                    <p className="mb-0 fs-small">Timberstone Ridge</p>
                  </div>
                </div>
                <div className="col">
                  <h4 className="fs-m fw-bold text-center">
                    South West, Calgary
                  </h4>
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <p className="mb-0 fs-small">West District</p>
                    <p className="mb-0 fs-small">Peaks of Aspen Woods</p>
                    <p className="mb-0 fs-small">Timberstone Ridge</p>
                  </div>
                </div>
                <div className="col">
                  <h4 className="fs-m fw-bold text-center">
                    North East,Calgary
                  </h4>
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <p className="mb-0 fs-small">West District</p>
                    <p className="mb-0 fs-small">Peaks of Aspen Woods</p>
                    <p className="mb-0 fs-small">Timberstone Ridge</p>
                  </div>
                </div>
                <div className="col">
                  <h4 className="fs-m fw-bold text-center">
                    South East, Calgary
                  </h4>
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <p className="mb-0 fs-small">West District</p>
                    <p className="mb-0 fs-small">Peaks of Aspen Woods</p>
                    <p className="mb-0 fs-small">Timberstone Ridge</p>
                  </div>
                </div>
                <div className="col d-none d-md-block"></div>
              </div>
            </div>
          </div>
          <div className="py-3">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center align-items-center">
              <img src="/Calgary.png" alt="Calgary map" className="img-fluid" />
              <img
                src="/Calgary2.png"
                alt="Calgary map"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="pt-5"></div>
          <div className="py-2"></div>
          <div className="py-5 my-2"></div>
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="fw-mine ccent-line fs-1">Toronto</h2>
            <p className="d-inline d-md-none">
              See more projects <i className="bi bi-arrow-right"></i>
            </p>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <p className="fs-5">
              Explore 100+ currently selling & upcoming pre-construction
              communities in Toronto
            </p>
            <p className="d-none d-md-inline">
              More developments in Toronto{" "}
              <i class="bi bi-arrow-right-short"></i>
            </p>
          </div>
          <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 gy-4 gx-3 gx-lg-2">
            {data.results &&
              data.results.slice(5, 10).map((item) => (
                <div className="col" key={item.id}>
                  <ListingCardHome {...item} />
                </div>
              ))}
          </div>
          <div className="pt-5"></div>
          <div>
            <div className="text-center fw-bold fs-3 text-mine">
              Greater Toronto Area Communities
            </div>
            <div className="py-3">
              <div className="row row-cols-2 row-cols-md-6 gy-3">
                <div className="col d-none d-md-block"></div>
                <div className="col">
                  <h4 className="fs-m fw-bold text-center">Toronto</h4>
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <p className="mb-0 fs-small">West District</p>
                    <p className="mb-0 fs-small">Peaks of Aspen Woods</p>
                    <p className="mb-0 fs-small">Timberstone Ridge</p>
                  </div>
                </div>
                <div className="col">
                  <h4 className="fs-m fw-bold text-center">Mississauga</h4>
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <p className="mb-0 fs-small">West District</p>
                    <p className="mb-0 fs-small">Peaks of Aspen Woods</p>
                    <p className="mb-0 fs-small">Timberstone Ridge</p>
                  </div>
                </div>
                <div className="col">
                  <h4 className="fs-m fw-bold text-center">Pickering</h4>
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <p className="mb-0 fs-small">West District</p>
                    <p className="mb-0 fs-small">Peaks of Aspen Woods</p>
                    <p className="mb-0 fs-small">Timberstone Ridge</p>
                  </div>
                </div>
                <div className="col">
                  <h4 className="fs-m fw-bold text-center">
                    Cambridge / Kitchener / Waterloo
                  </h4>
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <p className="mb-0 fs-small">West District</p>
                    <p className="mb-0 fs-small">Peaks of Aspen Woods</p>
                    <p className="mb-0 fs-small">Timberstone Ridge</p>
                  </div>
                </div>
                <div className="col d-none d-md-block"></div>
                <div className="col d-none d-md-block"></div>
                <div className="col">
                  <h4 className="fs-m fw-bold text-center">Milton</h4>
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <p className="mb-0 fs-small">West District</p>
                    <p className="mb-0 fs-small">Peaks of Aspen Woods</p>
                    <p className="mb-0 fs-small">Timberstone Ridge</p>
                  </div>
                </div>
                <div className="col">
                  <h4 className="fs-m fw-bold text-center">Burlington</h4>
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <p className="mb-0 fs-small">West District</p>
                    <p className="mb-0 fs-small">Peaks of Aspen Woods</p>
                    <p className="mb-0 fs-small">Timberstone Ridge</p>
                  </div>
                </div>
                <div className="col">
                  <h4 className="fs-m fw-bold text-center">Oakville</h4>
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <p className="mb-0 fs-small">West District</p>
                    <p className="mb-0 fs-small">Peaks of Aspen Woods</p>
                    <p className="mb-0 fs-small">Timberstone Ridge</p>
                  </div>
                </div>
                <div className="col">
                  <h4 className="fs-m fw-bold text-center">Hamilton</h4>
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <p className="mb-0 fs-small">West District</p>
                    <p className="mb-0 fs-small">Peaks of Aspen Woods</p>
                    <p className="mb-0 fs-small">Timberstone Ridge</p>
                  </div>
                </div>
                <div className="col d-none d-md-block"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3 py-md-5">
          <div className="my-5 py-5">
            <div className="position-relative bg-lightblue container-fluid">
              <div className="side-img">
                <img
                  src="/calgarypng.png"
                  alt="condo in calgary"
                  className="img-fluid"
                />
              </div>
              <div className="side-text">
                <p>
                  Dolphy has one of the largest, most updated database of new
                  construction homes, backed by industry-leading technology and
                  partners.
                </p>
                <h3 className="fw-bold">dolphy</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="py-md-5">
            <h3 className="fs-2">
              <strong>The Dolphy Advantage</strong> - Always people at heart
            </h3>
            <p>
              Working with leading home & condos developers & industry partners
            </p>
            <img src="/team.png" alt="dolphy team" className="img-fluid" />
          </div>
          <div className="py-md-5"></div>
          <div className="py-5">
            <h3 className="fs-2 text-mine fw-bold text-center mb-0">
              We bring you home from credible builders
            </h3>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <img
                src="/builders.png"
                alt="builders in dolphy"
                className="img-fluid mt-3 w-100 w-md-75"
              />
            </div>
          </div>
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
                Contact Dolphy for New Construction Homes
              </h2>
              <div className="row row-cols-1 row-cols-md-3 mt-3">
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
