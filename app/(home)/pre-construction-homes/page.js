import BottomContactForm from "@/components/BottomContactForm";
import { notFound } from "next/navigation";
import DolphyAdvantage from "@/components/DolphyAdvantage";
import PreconSchema from "@/components/PreconSchema";
import FixedContactButton from "@/components/FixedContactButton";
import Link from "next/link";
import CondoCard from "@/components/CondoCard";

async function getData(city) {
  const res = await fetch(
    "https://api.dolphy.ca/api/preconstructions-city/" + city + "?page_size=5",
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

const CapitalizeFirst = (city) => {
  return city.charAt(0).toUpperCase() + city.slice(1);
};

export async function generateMetadata({ params }, parent) {
  let city = "Canada";
  return {
    ...parent,
    alternates: {
      canonical: `https://dolphy.ca/pre-construction-homes/`,
    },
    title: " Preconstruction Homes in " + city,
    description:
      "Search our selection of pre construction homes for sale in " +
      city +
      ". Our ever-changing portfolio of pre constructions brings you closer to your ideal homes in the growing city of " +
      city,
  };
}

export default async function Home({ params }) {
  let cities = await getCities();
  let toronto_data = await getData("toronto");
  let calgary_data = await getData("calgary");
  let hamilton_data = await getData("hamilton");
  let brampton_data = await getData("brampton");
  let mississauga_data = await getData("mississauga");
  let ajax_data = await getData("ajax");
  let milton_data = await getData("milton");

  return (
    <>
      <FixedContactButton></FixedContactButton>
      <div className="pt-4 position-relative">
        {/* <div className="container-fluid">
          <div className="pb-4">
            <h1 className="main-title text-center text-md-start">
              {`New Construction Homes in Alberta ( 2023 )`}
            </h1>
            <p className="text-dark text-center text-md-start">
              {`New Preconstruction Townhomes, detached & condos for
              sale in Alberta | Check out plans, pricing, availability
              for pre construction homes in Alberta`}
            </p>
          </div>
        </div> */}
        {/* <div className="bg-white pt-3 pb-3 p-sticky-top ">
          <div className="container-fluid d-flex gap-2 flex-column flex-md-row justify-content-center justify-content-md-start align-items-start align-items-md-center fw-normal">
            <h4 className="fs-6 fw-bold text-mine">
              Hey Dolphy! I am looking for
            </h4>
            <h4 className="fs-6 fw-bold d-flex align-items-center mx-1 border-bottom2">
              All
              <img
                src="/dropdown.svg"
                alt="dropdown icon"
                className="img-fluid dropdown-icon ms-1"
              />
            </h4>
            <h4 className="fs-6 fw-bold d-flex align-items-center mx-1 border-bottom2">
              Home Types
              <img
                src="/dropdown.svg"
                alt="dropdown icon"
                className="img-fluid dropdown-icon ms-1"
              />
            </h4>
            <h4 className="fs-6 fw-bold text-mine">under</h4>
            <h4 className="fs-6 fw-bold d-flex align-items-center mx-1 border-bottom2">
              All price range
              <img
                src="/dropdown.svg"
                alt="dropdown icon"
                className="img-fluid dropdown-icon ms-1"
              />
            </h4>
            <h4 className="fs-6 fw-bold text-mine">completed by</h4>
            <h4 className="fs-6 fw-bold d-flex align-items-center mx-1 border-bottom2">
              All
              <img
                src="/dropdown.svg"
                alt="dropdown icon"
                className="img-fluid dropdown-icon ms-1"
              />
            </h4>
          </div>
        </div> */}
        <div className="container-fluid">
          <div className="mb-5">
            <div className="d-flex flex-column justify-content-center flex-column align-items-center mb-5">
              <h2 className="main-title text-center text-md-start">
                {`New Construction Homes in Toronto ( 2023 )`}
              </h2>
              <Link
                href={"/pre-construction-homes/toronto"}
                className="mt-1 text-mine"
              >
                More communities in Toronto{" "}
                <i className="bi bi-arrow-right-short"></i>
              </Link>
            </div>
            <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 gy-4 gx-3 gx-lg-2">
              {toronto_data.preconstructions &&
                toronto_data.preconstructions.map((item) => (
                  <div className="col" key={item.id}>
                    <script
                      key={item.slug}
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                        __html: JSON.stringify(PreconSchema(item)),
                      }}
                    />
                    <CondoCard {...item} />
                  </div>
                ))}
            </div>
          </div>
          <div className="mb-5">
            <div className="d-flex flex-column justify-content-center flex-column align-items-center mb-5">
              <h2 className="main-title text-center text-md-start">
                {`New Construction Homes in Calgary ( 2023 )`}
              </h2>
              <Link
                href={"/pre-construction-homes/calgary"}
                className="mt-1 text-mine"
              >
                More communities in Calgary{" "}
                <i className="bi bi-arrow-right-short"></i>
              </Link>
            </div>
            <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 gy-4 gx-3 gx-lg-2">
              {calgary_data.preconstructions &&
                calgary_data.preconstructions.map((item) => (
                  <div className="col" key={item.id}>
                    <script
                      key={item.slug}
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                        __html: JSON.stringify(PreconSchema(item)),
                      }}
                    />
                    <CondoCard {...item} />
                  </div>
                ))}
            </div>
          </div>
          <div className="mb-5">
            <div className="d-flex flex-column justify-content-center flex-column align-items-center mb-5">
              <h2 className="main-title text-center text-md-start">
                {`New Construction Homes in Milton ( 2023 )`}
              </h2>
              <Link
                href={"/pre-construction-homes/milton"}
                className="mt-1 text-mine"
              >
                More communities in Milton{" "}
                <i className="bi bi-arrow-right-short"></i>
              </Link>
            </div>
            <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 gy-4 gx-3 gx-lg-2">
              {milton_data.preconstructions &&
                milton_data.preconstructions.map((item) => (
                  <div className="col" key={item.id}>
                    <script
                      key={item.slug}
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                        __html: JSON.stringify(PreconSchema(item)),
                      }}
                    />
                    <CondoCard {...item} />
                  </div>
                ))}
            </div>
          </div>
          <div className="mb-5">
            <div className="d-flex flex-column justify-content-center flex-column align-items-center mb-5">
              <h2 className="main-title text-center text-md-start">
                {`New Construction Homes in Mississauga ( 2023 )`}
              </h2>
              <Link
                href={"/pre-construction-homes/mississauga"}
                className="mt-1 text-mine"
              >
                More communities in Mississauga{" "}
                <i className="bi bi-arrow-right-short"></i>
              </Link>
            </div>
            <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 gy-4 gx-3 gx-lg-2">
              {mississauga_data.preconstructions &&
                mississauga_data.preconstructions.map((item) => (
                  <div className="col" key={item.id}>
                    <script
                      key={item.slug}
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                        __html: JSON.stringify(PreconSchema(item)),
                      }}
                    />
                    <CondoCard {...item} />
                  </div>
                ))}
            </div>
          </div>
          <div className="mb-5">
            <div className="d-flex flex-column justify-content-center flex-column align-items-center mb-5">
              <h2 className="main-title text-center text-md-start">
                {`New Construction Homes in Brampton ( 2023 )`}
              </h2>
              <Link
                href={"/pre-construction-homes/brampton"}
                className="mt-1 text-mine"
              >
                More communities in Brampton{" "}
                <i className="bi bi-arrow-right-short"></i>
              </Link>
            </div>
            <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 gy-4 gx-3 gx-lg-2">
              {brampton_data.preconstructions &&
                brampton_data.preconstructions.map((item) => (
                  <div className="col" key={item.id}>
                    <script
                      key={item.slug}
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                        __html: JSON.stringify(PreconSchema(item)),
                      }}
                    />
                    <CondoCard {...item} />
                  </div>
                ))}
            </div>
          </div>
          <div className="mb-5">
            <div className="d-flex flex-column justify-content-center flex-column align-items-center mb-5">
              <h2 className="main-title text-center text-md-start">
                {`New Construction Homes in Hamilton ( 2023 )`}
              </h2>
              <Link
                href={"/pre-construction-homes/hamilton"}
                className="mt-1 text-mine"
              >
                More communities in Hamilton{" "}
                <i className="bi bi-arrow-right-short"></i>
              </Link>
            </div>
            <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 gy-4 gx-3 gx-lg-2">
              {hamilton_data.preconstructions &&
                hamilton_data.preconstructions.map((item) => (
                  <div className="col" key={item.id}>
                    <script
                      key={item.slug}
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                        __html: JSON.stringify(PreconSchema(item)),
                      }}
                    />
                    <CondoCard {...item} />
                  </div>
                ))}
            </div>
          </div>

          <h3 className="fs-2">
            <strong>Explore more citites </strong>
          </h3>
          <div>
            {cities &&
              cities.map((item) => (
                <Link
                  href={"/pre-construction-homes/" + item.slug}
                  className="btn btn-light link-black me-3 mb-3"
                >
                  {item.name}
                </Link>
              ))}
          </div>

          <div className="py-2"></div>
          <div className="pt-5 mt-5"></div>
          <DolphyAdvantage />
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
                  <BottomContactForm
                    proj_name="All"
                    city="Preconstruction Homes Page"
                  ></BottomContactForm>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
          <div className="pt-5 mt-5"></div>
          <div className="pt-5 mt-5"></div>
          <div className="pt-5 mt-5"></div>
        </div>
      </div>
    </>
  );
}
