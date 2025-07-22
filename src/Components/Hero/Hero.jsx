import "./Hero.css";
function Hero() {
  return (
    <section className="hero-section position-relative">
      <div className="container">
        <div className="row align-items-center py-5">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="hero-heading mb-4">
              Discover a world of creamy dairy products and luscious confections
              with our brand.
            </h1>
            <p className="hero-description mb-4">
              Indulge in the finest dairy products, made with love and fresh
              ingredients
            </p>
            <div className="d-flex justify-content-lg-start justify-content-center">
              <button className="custom-btn">
                See Our Products
                <span className="btn-icon ms-2">
                  <i className="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <div className="hero-image-container">
              <img
                src="https://blaban.net/data/files//ice-1.jpg"
                alt="B.Laban Ice Cream Products"
                className="img-fluid hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
