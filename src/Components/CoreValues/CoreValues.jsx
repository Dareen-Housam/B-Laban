import "./CoreValues.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function CoreValues() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="core-values-section py-5 text-white position-relative">
      <div className="container text-center">
        <h2 className="display-4 fw-bold mb-5" data-aos="fade-up">
          CORE VALUES
        </h2>

        <div className="row mb-5" data-aos="fade-up" data-aos-delay="200">
          <div className="col-12">
            <div className="core-values-list">
              <h4 className="fw-bold mb-3">
                1. People: Employees, customers, and partners drive our success.
              </h4>
              <h4 className="fw-bold mb-3">
                2. Innovation: Redefining desserts with creativity and
                tradition.
              </h4>
              <h4 className="fw-bold mb-4">
                3. Quality: Ensuring excellence in every product.
              </h4>
            </div>
          </div>
        </div>

        <p
          className="lead mb-5 sentence-shadow"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Blaban aims to become a globally recognized leader in the dessert
          industry with branches worldwide.
        </p>

        <div className="row text-center justify-content-center">
          <div
            className="col-md-4 mb-4 d-flex flex-column align-items-center justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center mb-2">
              <h2 className="display-3 fw-bold m-0 me-md-2">140+</h2>
              <span className="lead mt-2 mt-md-0">And More Every Week</span>
            </div>
            <h5 className="fw-bold mt-2">Branch</h5>
          </div>

          <div
            className="col-md-4 mb-4 d-flex flex-column align-items-center justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <h2 className="display-3 fw-bold m-0 mb-2">160+</h2>
            <h5 className="fw-bold">Products</h5>
          </div>

          <div
            className="col-md-4 mb-4 d-flex flex-column align-items-center justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            <h2 className="display-3 fw-bold m-0 mb-2">3M+</h2>
            <h5 className="fw-bold">Customers</h5>
          </div>
        </div>
      </div>

      <div className="wave-decoration position-absolute bottom-0 w-100">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ height: "60px", width: "100%" }}
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,
              70.36-5.37,136.33-33.31,206.8-37.5C438.64,
              32.43,512.34,53.67,583,72.05c69.27,18,
              138.3,24.88,209.4,13.08,36.15-6,
              69.85-17.84,104.45-29.34C989.49,
              25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="#ffffff"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,
              72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,
              60.09-26.07,89.67-39.8,40.92-19,
              84.73-46,130.83-49.67,36.26-2.85,
              70.9,9.42,98.6,31.56,31.77,25.39,
              62.32,62,103.63,73,40.44,10.79,
              81.35-6.69,119.13-24.28s75.16-39,
              116.92-43.05c59.73-5.85,113.28,
              22.88,168.9,38.84,30.2,8.66,59,
              6.17,87.09-7.5,22.43-10.89,
              48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="#ffffff"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,
              475.83,42.57c43-7.64,84.23-20.12,
              127.61-26.46,59-8.63,112.48,
              12.24,165.56,35.4C827.93,77.22,
              886,95.24,951.2,90c86.53-7,
              172.46-45.71,248.8-84.81V0Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default CoreValues;
