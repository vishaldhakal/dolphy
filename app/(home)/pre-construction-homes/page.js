import ListingCardHome from "@/components/ListingCardHome";
import BottomContactForm from "@/components/BottomContactForm";
import { notFound } from "next/navigation";
import DolphyAdvantage from "@/components/DolphyAdvantage";
import PreconSchema from "@/components/PreconSchema";
import FixedContactButton from "@/components/FixedContactButton";

async function getData() {
  const res = await fetch(
    "https://api.dolphy.ca/api/preconstructions/?page_size=40",
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
  let city = "Calgary, Alberta";
  const data = await getData();
  return {
    ...parent,
    alternates: {
      canonical: `https://dolphy.ca/pre-construction-homes/`,
    },
    title: data.count + " Preconstruction Homes in " + city,
    description:
      "Search our selection of pre construction homes for sale in " +
      city +
      ". Our ever-changing portfolio of pre constructions brings you closer to your ideal homes in the growing city of " +
      city,
  };
}

export default async function Home({ params }) {
  const data = await getData(params.city);
  let cities = await getCities();

  const filteredprojects = (value) => {
    return data.results.filter((item) => item.status == value);
  };

  return (
    <>
      <FixedContactButton></FixedContactButton>
      <div className="pt-4 position-relative">
        <div className="container-fluid">
          <div className="pb-4">
            <h1 className="main-title text-center text-md-start">
              {`New Construction Homes in Alberta ( 2023 )`}
            </h1>
            <p className="text-dark text-center text-md-start">
              {`${data.count}+ New Preconstruction Townhomes, detached & condos for
              sale in Alberta | Check out plans, pricing, availability
              for pre construction homes in Alberta`}
            </p>
          </div>
        </div>
        <div className="bg-white pt-3 pb-3 p-sticky-top ">
          <div className="container-fluid d-flex gap-2 flex-column flex-md-row justify-content-center justify-content-md-start align-items-start align-items-md-center fw-normal">
            <h4 className="fs-6 fw-bold text-mine">
              Hey Dolphy! I am looking for
            </h4>
            <h4 className="fs-6 fw-bold d-flex align-items-center mx-1 border-bottom2">
              All
              <img
                src="/dropdown.png"
                alt="dropdown icon"
                className="img-fluid dropdown-icon ms-1"
              />
            </h4>
            <h4 className="fs-6 fw-bold d-flex align-items-center mx-1 border-bottom2">
              Home Types
              <img
                src="/dropdown.png"
                alt="dropdown icon"
                className="img-fluid dropdown-icon ms-1"
              />
            </h4>
            <h4 className="fs-6 fw-bold text-mine">under</h4>
            <h4 className="fs-6 fw-bold d-flex align-items-center mx-1 border-bottom2">
              All price range
              <img
                src="/dropdown.png"
                alt="dropdown icon"
                className="img-fluid dropdown-icon ms-1"
              />
            </h4>
            <h4 className="fs-6 fw-bold text-mine">completed by</h4>
            <h4 className="fs-6 fw-bold d-flex align-items-center mx-1 border-bottom2">
              All
              <img
                src="/dropdown.png"
                alt="dropdown icon"
                className="img-fluid dropdown-icon ms-1"
              />
            </h4>
          </div>
        </div>
        <div className="container-fluid">
          <div className="py-2"></div>
          <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 gy-4 gx-3 gx-lg-2">
            {data.results &&
              filteredprojects("Selling").map((item) => (
                <div className="col" key={item.id}>
                  <script
                    key={item.slug}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify(PreconSchema(item)),
                    }}
                  />
                  <ListingCardHome {...item} />
                </div>
              ))}
          </div>
          <div className="pt-5 mt-5"></div>
          <h2 className="fw-bold fs-3 mb-4">
            Upcoming New Construction Projects
          </h2>
          <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 gy-4 gx-3 gx-lg-2">
            {data.results &&
              filteredprojects("Upcoming").map((item) => (
                <div className="col" key={item.id}>
                  <script
                    key={item.slug}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify(PreconSchema(item)),
                    }}
                  />
                  <ListingCardHome {...item} />
                </div>
              ))}
          </div>
          <div className="pt-5 mt-5"></div>
          <h2 className="fw-bold fs-3 mb-4">
            New Construction Past Communities
          </h2>
          <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 gy-4 gx-3 gx-lg-2">
            {data.results &&
              filteredprojects("Sold out").map((item) => (
                <div className="col" key={item.id}>
                  <script
                    key={item.slug}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify(PreconSchema(item)),
                    }}
                  />
                  <ListingCardHome {...item} />
                </div>
              ))}
          </div>
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
                  <BottomContactForm></BottomContactForm>
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
