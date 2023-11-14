import CondoCard from "@/components/CondoCard";
import BottomContactForm from "@/components/BottomContactForm";
import { notFound } from "next/navigation";

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
    description: "Preconstruction Homes in " + city,
    description:
      "Search our selection of pre construction homes for sale in " +
      city +
      ". Our ever-changing portfolio of pre constructions brings you closer to your ideal homes in the growing city of " +
      city,
  };
}

export default async function Home({ params }) {
  const data = await getData(params.city);

  return (
    <>
      <div className="pt-4 position-relative">
        <div className="container-fluid">
          <div className="pb-5 d-flex justify-content-start">
            <h1 className="main-title">
              New Construction Homes in {CapitalizeFirst(params.city)} ( 2023 )
            </h1>
          </div>
        </div>
        <div className="bg-white py-2 pb-3 p-sticky-top ">
          <div className="container-fluid d-flex gap-2 flex-column flex-md-row justify-content-center justify-content-md-start align-items-start align-items-md-center fw-normal">
            <span className="fs-4 fw-bold text-mine">
              Hey Dolphy! I am looking for
            </span>
            <div className="d-flex">
              <select className="form-select form-select-sm bg-lightyellow p-2 rounded-3">
                <option>All</option>
                <option>Upcoming</option>
                <option>Selling</option>
                <option>Sold out</option>
              </select>
              <select className="form-select form-select-sm bg-lightyellow p-2 rounded-3 ms-1">
                <option>Home Types</option>
                <option>Duplex</option>
                <option>Townhomes</option>
                <option>Condos</option>
              </select>
            </div>
            <div className="d-flex align-items-center">
              <span className="mx-2">under</span>
              <select className="form-select form-select-sm bg-lightyellow p-2 rounded-3">
                <option>All price range</option>
                <option>$400k</option>
                <option>$500k</option>
                <option>$700k</option>
                <option>$900k</option>
                <option>$1M</option>
                <option>$2M</option>
                <option>$3M</option>
              </select>
              <span className="ms-2">expected to be</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="me-2">completed by</span>
              <select className="form-select form-select-sm bg-lightyellow p-2 rounded-3">
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
              </select>
            </div>
          </div>
          <p className="text-dark container-fluid mt-3">
            {data.preconstructions.length} New Pre construction Detached,
            Townhomes, or Condos for sale in {CapitalizeFirst(params.city)} |
            Check out plans, pricing, availability for preconstruction homes in{" "}
            {CapitalizeFirst(params.city)}
          </p>
        </div>
        <div className="container-fluid">
          <div className="py-2"></div>
          <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 gy-4 gx-3 gx-lg-2">
            {data.preconstructions &&
              data.preconstructions.map((item) => (
                <div className="col" key={item.id}>
                  <CondoCard {...item} />
                </div>
              ))}
          </div>
          <div className="pt-5 mt-5"></div>
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
