import Link from "next/link";
import BottomContactForm from "@/components/BottomContactForm";
import ListingCardHome from "@/components/ListingCardHome";
import { notFound } from "next/navigation";
import DolphyAdvantage from "@/components/DolphyAdvantage";
import SearchBar from "@/components/SearchBar";
import PreconSchema from "@/components/PreconSchema";

async function getData() {
  const res = await fetch(
    "https://api.dolphy.ca/api/preconstructions/?page_size=20",
    {
      next: { revalidate: 10 },
    }
  );

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

async function getCities() {
  const res = await fetch("https://api.dolphy.ca/api/all-city", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata({ params }, parent) {
  let city = "Greater Toronto Area";
  return {
    ...parent,
    alternates: {
      canonical: `https://dolphy.ca/greater-toronto-area/`,
    },
    title: "Looking for a Preconstruction Homes in Greater Toronto Area ?",
    description:
      "Search our selection of pre construction homes for sale in Greater Toronto Area. Our ever-changing portfolio of pre constructions brings you closer to your ideal homes in the growing area of Toronto.",
  };
}

export default async function Home() {
  const data = await getData();
  let cities = await getCities();
  return (
    <>
      <div className="py-5"></div>
      <div className="pt-3">
        <div className="container-fluid">
          <div>
            <div className="text-center fw-bold fs-3 text-mine">
              Greater Toronto Area Communities
            </div>
            <div className="py-3">
              <div className="row row-cols-2 row-cols-md-6 gy-3">
                <div className="col d-none d-md-block"></div>
                <div className="col">
                  <Link
                    href={"/pre-construction-homes/toronto/"}
                    className="link-black"
                  >
                    <h4 className="fs-m fw-bold text-center">Toronto</h4>
                  </Link>
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <p className="mb-0 fs-small">West District</p>
                    <p className="mb-0 fs-small">Peaks of Aspen Woods</p>
                    <p className="mb-0 fs-small">Timberstone Ridge</p>
                  </div>
                </div>
                <div className="col">
                  <Link
                    href={"/pre-construction-homes/mississauga/"}
                    className="link-black"
                  >
                    <h4 className="fs-m fw-bold text-center">Mississauga</h4>
                  </Link>
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <p className="mb-0 fs-small">West District</p>
                    <p className="mb-0 fs-small">Peaks of Aspen Woods</p>
                    <p className="mb-0 fs-small">Timberstone Ridge</p>
                  </div>
                </div>
                <div className="col">
                  <Link
                    href={"/pre-construction-homes/pickering/"}
                    className="link-black"
                  >
                    <h4 className="fs-m fw-bold text-center">Pickering</h4>
                  </Link>
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <p className="mb-0 fs-small">West District</p>
                    <p className="mb-0 fs-small">Peaks of Aspen Woods</p>
                    <p className="mb-0 fs-small">Timberstone Ridge</p>
                  </div>
                </div>
                <div className="col">
                  <h4 className="fs-m fw-bold text-center">
                    <Link
                      href={"/pre-construction-homes/cambridge/"}
                      className="link-black"
                    >
                      Cambridge
                    </Link>{" "}
                    /{" "}
                    <Link
                      href={"/pre-construction-homes/kitchener/"}
                      className="link-black"
                    >
                      Kitchener
                    </Link>{" "}
                    /{" "}
                    <Link
                      href={"/pre-construction-homes/waterloo/"}
                      className="link-black"
                    >
                      Waterloo
                    </Link>
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
                  <Link
                    href={"/pre-construction-homes/milton/"}
                    className="link-black"
                  >
                    <h4 className="fs-m fw-bold text-center">Milton</h4>
                  </Link>
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <p className="mb-0 fs-small">West District</p>
                    <p className="mb-0 fs-small">Peaks of Aspen Woods</p>
                    <p className="mb-0 fs-small">Timberstone Ridge</p>
                  </div>
                </div>
                <div className="col">
                  <Link
                    href={"/pre-construction-homes/burlington/"}
                    className="link-black"
                  >
                    <h4 className="fs-m fw-bold text-center">Burlington</h4>
                  </Link>
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <p className="mb-0 fs-small">West District</p>
                    <p className="mb-0 fs-small">Peaks of Aspen Woods</p>
                    <p className="mb-0 fs-small">Timberstone Ridge</p>
                  </div>
                </div>
                <div className="col">
                  <Link
                    href={"/pre-construction-homes/oakville/"}
                    className="link-black"
                  >
                    <h4 className="fs-m fw-bold text-center">Oakville</h4>
                  </Link>
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <p className="mb-0 fs-small">West District</p>
                    <p className="mb-0 fs-small">Peaks of Aspen Woods</p>
                    <p className="mb-0 fs-small">Timberstone Ridge</p>
                  </div>
                </div>
                <div className="col">
                  <Link
                    href={"/pre-construction-homes/hamilton/"}
                    className="link-black"
                  >
                    <h4 className="fs-m fw-bold text-center">Hamilton</h4>
                  </Link>
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
          <DolphyAdvantage></DolphyAdvantage>
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
