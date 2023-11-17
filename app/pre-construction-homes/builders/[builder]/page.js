import CondoCard from "@/components/CondoCard";
import BottomContactForm from "@/components/BottomContactForm";
import { notFound } from "next/navigation";
import Link from "next/link";
import DeveloperCardDetail from "@/components/DeveloperCardDetail";
import PreconSchema from "@/components/PreconSchema";

async function getData(developer) {
  const res = await fetch(
    "https://api.dolphy.ca/api/preconstructions-developer/" + developer,
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
  let repp = city.replace(/-/g, " ");
  return repp.charAt(0).toUpperCase() + repp.slice(1);
};

export async function generateMetadata({ params }, parent) {
  let city = CapitalizeFirst(params.builder);
  return {
    ...parent,
    alternates: {
      canonical: `https://dolphy.ca/pre-construction-homes/builders/${params.builder}/`,
    },
    title:
      city + "- New home developer and builder | Communities & Developments",
    description:
      "Search our selection of pre construction homes for sale by " +
      city +
      ". " +
      city +
      "'s ever-changing portfolio of pre constructions brings you closer to your ideal homes",
  };
}

export default async function BuilderSingle({ params }) {
  const all_data = await getData(params.builder);
  const data = all_data.precons;
  const developer = all_data.developer;

  return (
    <>
      <div class="floating fixcontact">
        <div className="bg-white text-dark shadow-lg rounded-mine d-flex flex-column">
          <Link
            href="#mycontact"
            className="btn my-2 my-sm-0 ms-md-3 d-flex text-dark link-black align-items-center gap-2"
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
      <div className="pt-4 position-relative">
        <div className="container-fluid">
          <div className="pb-4">
            <h1 className="main-title">
              New Construction Homes by {CapitalizeFirst(params.builder)} ( 2023
              )
            </h1>
            <p className="text-dark">
              {data.length} New Pre construction Detached, Townhomes, or Condos
              for sale in {CapitalizeFirst(params.builder)} | Check out plans,
              pricing, availability for preconstruction homes by{" "}
              {CapitalizeFirst(params.builder)}
            </p>
          </div>
        </div>
        {/* <div className="container-fluid">
          <img src={data.image} alt="developer image" className="img-fluid" />
        </div> */}
        <div className="container-fluid">
          <div className="row rowcols-1 row-cols-md-2 position-relative">
            <div className="col-md-5 order-2 order-md-1">
              <DeveloperCardDetail {...developer} />
            </div>
            <div className="col-md-7">
              <div className="py-2"></div>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4 gx-3 gx-lg-2">
                {data &&
                  data.map((item) => (
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
