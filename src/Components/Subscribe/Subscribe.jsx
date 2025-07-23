import "./Subscribe.css";
function Subscribe() {
  return (
    <section className="newsletter-section bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold mb-3">
              Subscribe to our newsletter
            </h2>
            <p className="lead text-muted">
              Sign up and stay up to date on all the latest news and sales!
            </p>
          </div>
          <div className="col-lg-6">
            <div className="newsletter-form position-relative">
              <input
                type="email"
                className="form-control custom-input"
                placeholder="you@email.com"
              />
              <button type="button" className="icon-button">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
