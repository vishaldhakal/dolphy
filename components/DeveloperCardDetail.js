import Link from "next/link";

export default function DeveloperCardDetail(props) {
  return (
    <>
      <div className="card border-0 rounded-mine my-2 my-md-0 pb-5 condocard">
        <div className="position-relative is-loading">
          {props.image ? (
            <img
              loading="lazy"
              src={`https://api.dolphy.ca${props.image}`}
              layout="responsive"
              className="img-fluid"
              alt={`${props.name} builders logo`}
            />
          ) : (
            <img
              loading="lazy"
              src="/noimage.webp"
              className="img-fluid"
              alt={`no image available for ${props.name}`}
            />
          )}
        </div>
        <div className="card-content pt-2 px-4 developer-desc">
          <h3 className="mb-1 cardd-title text-dark">{props.name}</h3>
          <h4 className="mb-2 cardd-subtitle">
            <span className="link-black">Website :</span> {props.website_link}
          </h4>
          {props.phone !== "n/a" ? (
            <Link href={"telto:" + props.phone} className="link-black">
              <i class="bi bi-telephone"></i> {props.phone}
            </Link>
          ) : (
            <>
              <i class="bi bi-telephone"></i>{" "}
              <b className="ms-1">Phone number not available</b>
            </>
          )}
          <p className="mb-0 pt-3">{props.details}</p>
        </div>
      </div>
    </>
  );
}
