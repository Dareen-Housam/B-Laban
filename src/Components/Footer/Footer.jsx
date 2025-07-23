import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section text-white position-relative">
      <div className="footer-wave-top">
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#4097e3"
            d="M0,60 C300,120 1140,0 1440,60 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      <div className="container">
        <div className="row justify-content-center text-center text-lg-start">
          <div className="col-12 col-lg-4 mb-4 d-flex flex-column align-items-center align-items-lg-start">
            <div className="footer-brand">
              <img
                src="https://blaban.net/data/files/blabanlogo.png"
                alt="B.Laban Logo"
                className="footer-logo mb-3"
              />
              <h4 className="fw-bold">B.Laban - بـ لبن</h4>
              <address className="footer-address">
                9 Abbas Helmy Street, Al Merghani
                <br />
                Cairo, Egypt
              </address>
            </div>
          </div>

          <div className="col-12 col-lg-8 d-flex flex-column flex-md-row justify-content-center justify-content-lg-between text-center text-md-start">
            <div className="mb-4 px-3">
              <h5 className="fw-bold mb-3">Main menu</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/menu" className="nav-link">
                    Our Menu
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-4 px-3">
              <h5 className="fw-bold mb-3">Legal</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/terms" className="nav-link">
                    Terms of use
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/privacy" className="nav-link">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-start">
              <p className="mb-0">
                Copyright ©2025 B.Laban , All rights reserved.
              </p>
              <p className="mb-0 small">
                Made with ❤️ By{" "}
                <a
                  href="https://www.xneteg.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The X Net System's
                </a>
              </p>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <div className="social-icons mb-2 mb-lg-0">
                <a
                  href="https://www.facebook.com/61554331319184"
                  className="text-white me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UC6SoOT614g7gWSrtYn3eTmw"
                  className="text-white me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube fa-lg"></i>
                </a>
                <a
                  href="https://instagram.com/b.laban.eg"
                  className="text-white me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@b.laban.egypt"
                  className="text-white me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-tiktok fa-lg"></i>
                </a>
                <a
                  href="https://linkedin.com/company/b-laban-%D8%A8%D9%80-%D9%84%D8%A8%D9%86"
                  className="text-white me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a
                  href="tel:15761"
                  className="text-white me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-phone-flip fa-lg"></i>
                </a>
                <a
                  href="mailto:info@blaban.net"
                  className="text-white me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-envelope fa-lg"></i>
                </a>
              </div>

              <p className="mb-0 mt-2 small">Hit counter 459467</p>
            </div>
          </div>
        </div>
      </div>

      <button
        className="btn btn-primary position-fixed bottom-0 end-0 m-4 rounded-circle"
        style={{ width: "50px", height: "50px", zIndex: 1000 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </footer>
  );
}

export default Footer;
