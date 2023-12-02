import Link from "next/link";

const Footer = ({ cities }) => {
  return (
    <footer className="footer mt-5 shadow-lg">
      <div className="container-fluid footer-top">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-about">
            <Link href="/" className="footer-logo d-flex align-items-center">
              <img src="/logo2.svg" alt="Dolphy logo" className="img-fluid" />
            </Link>
            <p></p>
            <p>
              Dolphy.ca, your top destination for pre construction
              detached,semi-detached, towmhomes and condos in Canada. 1000+ Pre
              construction townhomes, detached & condos available at Dolphy.ca.
              The content of the pages of this website is for your general
              information, reference only. We are not liable for the use or
              misuse of the site's information. Prices, sizes, specifications,
              and promotions of the projects are subject to change by the
              builder without notice.
            </p>
            <div className="social-links d-flex mt-4">
              <Link href="#" className="me-2" target="_blank">
                <i className="bi bi-twitter"></i>
              </Link>
              <Link href="#" className="me-2" target="_blank">
                <i className="bi bi-facebook"></i>
              </Link>
              <Link
                href="https://www.instagram.com/dolphy_ca/"
                className="me-2"
                target="_blank"
              >
                <i className="bi bi-instagram"></i>
              </Link>
              <Link
                href="https://www.tiktok.com/@dolphy.ca"
                className="me-2"
                target="_blank"
              >
                <i className="bi bi-tiktok"></i>
              </Link>
            </div>
          </div>

          <div className="col-12 col-lg-4 col-6 footer-links">
            <h4>New Construction Homes in Calgary</h4>
            <ul>
              {cities &&
                cities.map((city) => (
                  <li key={city.id} className="footerlinks">
                    <Link href={`/pre-construction-homes/${city.slug}`}>
                      <span>New construction homes in {city.name}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-start text-md-start">
            <h4>Contact Dolphy</h4>
            <p className="mb-1">Dolphy Inc.</p>
            <p className="mb-1">
              8300 Woodbine Ave ste 500,Markham, ON L3R 9Y7
            </p>
            <p className="mb-1">Office Hours ⋅ 9AM - 6 PM</p>
            <p className="mt-1 mb-1">
              <strong>Phone: </strong>
              <Link href="tel:(587) 887-2572" className="text-dark">
                (587) 887-2572
              </Link>
            </p>
            <p>
              <strong>Email: </strong>
              <Link href="mailto:hello@dolphy.ca" className="text-dark">
                hello@dolphy.ca
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="container copyright text-start text-md-center mt-4">
        <p>
          ©2023 <span>Copyright</span>{" "}
          <strong className="px-1">Dolphy Inc.</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
