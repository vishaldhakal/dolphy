import DeveloperCard from "@/components/DeveloperCard";
import BottomContactForm from "@/components/BottomContactForm";
import { notFound } from "next/navigation";

async function getData() {
  const res = await fetch(
    "https://api.dolphy.ca/api/developers/?page_size=20",
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
  let city = "Calgary, Alberta";
  const data = await getData();
  return {
    ...parent,
    alternates: {
      canonical: `https://dolphy.ca/pre-construction-homes/builders/`,
    },
    title: data.count + " Preconstruction Homes Builders in Dolphy",
    description: "Preconstruction Homes Builders in Dlphy",
    description:
      "Search our selection of pre construction home builders in Dolphy. Our ever-changing portfolio of pre constructions brings you closer to your ideal homes",
  };
}

export default async function Builders() {
  const data = await getData();
  return (
    <>
      <div className="pt-4 position-relative">
        <div className="container-fluid">
          <div className="py-4 pt-5 text-center">
            <h1 className="main-title">New Construction Builders at Dolphy</h1>
          </div>
        </div>
        <div className="container-fluid">
          <div className="py-2"></div>
          <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 gy-4 gx-3 gx-lg-2">
            {data.results &&
              data.results.map((item) => (
                <div className="col" key={item.id}>
                  <DeveloperCard {...item} />
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
        </div>
      </div>
    </>
  );
}