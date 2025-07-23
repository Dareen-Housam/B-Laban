import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar-custom text-white py-3">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="https://blaban.net/data/files/blabanlogo.png"
              alt="B.Laban Logo"
              style={{ width: "40px", height: "40px" }}
              className="me-2"
            />
            <span className="fw-bold fs-5">B.Laban - بـ لبن</span>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {[
                { label: "HOME", to: "/" },
                { label: "ABOUT", to: "/about" },
                { label: "OUR MENU", to: "/menu" },
                { label: "CONTACT", to: "/contact" },
              ].map(({ label, to }) => (
                <li className="nav-item" key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `nav-link fw-bold nav-link-custom ${
                        isActive ? "active-link" : "inactive-link"
                      }`
                    }
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="d-flex align-items-center ms-lg-3 mt-2 mt-lg-0">
              <div className="social-icons me-3">
                <a
                  href="https://www.facebook.com/61554331319184"
                  className="icon-link me-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook icon"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UC6SoOT614g7gWSrtYn3eTmw"
                  className="icon-link me-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube icon"></i>
                </a>
                <a
                  href="https://instagram.com/b.laban.eg"
                  className="icon-link me-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram icon"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@b.laban.egypt"
                  className="icon-link me-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-tiktok icon"></i>
                </a>
                <a
                  href="https://linkedin.com/company/b-laban-%D8%A8%D9%80-%D9%84%D8%A8%D9%86"
                  className="icon-link me-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin icon"></i>
                </a>
                <a
                  href="tel:15761"
                  className="icon-link me-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-phone-flip icon"></i>
                </a>
                <a
                  href="mailto:info@blaban.net"
                  className="icon-link me-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-envelope icon"></i>
                </a>
              </div>

              <div className="language-selector">
                <button className="btn btn-light btn-sm px-3 py-2 fw-bold">
                  <i className="fas fa-globe me-1"></i> EN{" "}
                  <i className="fas fa-chevron-down"></i>
                </button>
              </div>
              <button className="btn btn-outline-light btn-sm ms-2 px-3 py-2 fw-bold">
                <i className="fas fa-search fs-5"></i>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
