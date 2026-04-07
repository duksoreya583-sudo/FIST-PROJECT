import React from 'react';

const Hero = () => {
  return (
    <section className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          {/* Fixed the src to a placeholder image since Pinterest links don't work as direct sources */}
          <img
            src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-themes.png"
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">
            Design Your Future Faster
          </h1>
          <p className="lead">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
              Get Started
            </button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;