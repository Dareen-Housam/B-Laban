import "./LatestAdv.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function LatestAdv() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section className="latest-ad-section text-white position-relative">
      <div className="wave-decoration-top">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ height: "60px", width: "100%" }}
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5
        C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,
        69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="#ffffff"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,
        91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,
        130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,
        62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,
        116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,
        30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="#ffffff"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,
        42.57c43-7.64,84.23-20.12,127.61-26.46,
        59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,
        886,95.24,951.2,90c86.53-7,172.46-45.71,
        248.8-84.81V0Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <h2 className="display-5 fw-bold mb-4">Latest Adv.</h2>
            <p className="lead mb-4">
              Check out our latest video ad for BLaban, showcasing our delicious
              food products and brand! We're excited to share this glimpse into
              what makes BLaban special. Click the video below to see the
              mouthwatering creations and learn more about our commitment to
              quality and flavor.
            </p>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="video-container d-flex align-items-center px-4 py-4">
              <i className="fas fa-exclamation-circle fa-3x text-white me-4"></i>
              <div className="text-white">
                <h5 className="mb-2 fw-bold">Video unavailable</h5>
                <p className="mb-0">
                  This video is no longer available because the YouTube account
                  associated with this video has been terminated.
                </p>
              </div>

              <button className="btn btn-light position-absolute bottom-0 end-0 m-3">
                <i className="fab fa-youtube"></i>
              </button>
            </div>
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

export default LatestAdv;
