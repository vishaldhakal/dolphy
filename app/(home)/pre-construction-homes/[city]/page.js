import CondoCard from "@/components/CondoCard";
import BottomContactForm from "@/components/BottomContactForm";
import { notFound } from "next/navigation";
import Link from "next/link";
import DolphyAdvantage from "@/components/DolphyAdvantage";
import PreconSchema from "@/components/PreconSchema";

async function getData(city) {
  const res = await fetch(
    "https://api.dolphy.ca/api/preconstructions-city/" + city,
    {
      next: { revalidate: 10 },
    }
  );

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

const CapitalizeFirst = (city) => {
  return city.charAt(0).toUpperCase() + city.slice(1);
};

export async function generateMetadata({ params }, parent) {
  let city = CapitalizeFirst(params.city);
  const data = await getData(params.city);
  return {
    ...parent,
    alternates: {
      canonical: `https://dolphy.ca/pre-construction-homes/${params.city}/`,
    },
    title: data.preconstructions.length + " Preconstruction Homes in " + city,
    description:
      "Search our selection of pre construction homes for sale in " +
      city +
      ". Our ever-changing portfolio of pre constructions brings you closer to your ideal homes in the growing city of " +
      city,
  };
}

export default async function Home({ params }) {
  const data = await getData(params.city);

  const filteredprojects = (value) => {
    return data.preconstructions.filter((item) => item.status == value);
  };

  return (
    <>
      <div class="floating fixcontact">
        <div className="bg-white text-dark shadow-lg rounded-mine d-flex flex-column">
          <Link
            href="#mycontact"
            className="btn my-sm-0 ms-md-3 d-flex text-dark link-black align-items-center gap-2"
          >
            <img
              src="/COA-agent-pic.jpg"
              alt="agent pic"
              className="img-fluid img-call-height"
            />
            <span className="d-flex flex-column justify-content-start">
              <b id="text-dark">Send a message</b>
            </span>
          </Link>
        </div>
      </div>
      <div className="pt-2 position-relative">
        <div className="container-fluid">
          <div className="pb-1">
            <h1 className="main-title">
              {`New Construction Homes in ${CapitalizeFirst(
                params.city
              )} ( 2023 )`}
            </h1>
            <p className="text-dark">
              {`${data.preconstructions.length} New Pre construction Detached,
              Townhomes and Condos for sale in ${CapitalizeFirst(params.city)} |
              Check out plans, pricing, availability for preconstruction homes
              in ${CapitalizeFirst(params.city)}`}
            </p>
          </div>
        </div>
        <div className="bg-white pt-3 pb-3 p-sticky-top">
          <div className="container-fluid d-flex gap-2 flex-column align-items-center flex-md-row justify-content-md-start align-items-md-center fw-normal">
            <div className="d-flex">
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
            </div>
            <div className="d-flex">
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
            </div>
            <div className="d-flex">
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
        </div>
        <div className="container-fluid">
          <div className="py-2"></div>
          <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 gy-4 gx-3 gx-lg-2">
            {data.preconstructions &&
              filteredprojects("Selling").map((item) => (
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
          <div className="pt-5 mt-5"></div>
          <h2 className="fw-bold fs-3 mb-4">
            Upcoming New Construction Projects in{" "}
            {CapitalizeFirst(data.city.name)}
          </h2>
          <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 gy-4 gx-3 gx-lg-2">
            {data.preconstructions &&
              filteredprojects("Upcoming").map((item) => (
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
          <div className="pt-5 mt-5"></div>
          <h2 className="fw-bold fs-3 mb-4">
            New Construction Past Communities in{" "}
            {CapitalizeFirst(data.city.name)}
          </h2>
          <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 gy-4 gx-3 gx-lg-2">
            {data.preconstructions &&
              filteredprojects("Sold out").map((item) => (
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
          <div className="pt-5 mt-5"></div>
          <div className="pt-5 mt-5"></div>
          <DolphyAdvantage></DolphyAdvantage>
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
          <div className="py-5">
            {data.city && (
              <div className="container" id="make-img-responsive">
                <div className="row row-cols-1">
                  <div
                    className="col-12 mt-mine px-3"
                    dangerouslySetInnerHTML={{
                      __html: data.city.details,
                    }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
