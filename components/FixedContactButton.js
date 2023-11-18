import Link from "next/link";

export default function FixedContactButton() {
  return (
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
  );
}
