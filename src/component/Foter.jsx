import React from 'react';

const Footer = () => {
  return (
    <footer className="py-5 border-top bg-light">
      <div className="container">
        <div className="row">
          {/* Column 1: Brand/About */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold">BrandName</h5>
            <p className="text-muted">
              Building the future of web design with speed, style, and 
              responsive components that work everywhere.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-6 col-md-2 mb-3">
            <h6 className="fw-bold">Company</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Careers</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Brand Kit</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="col-6 col-md-2 mb-3">
            <h6 className="fw-bold">Resources</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Documentation</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Help Center</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Privacy</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="col-md-4">
            <form>
              <h6 className="fw-bold">Subscribe to our newsletter</h6>
              <p className="text-muted">Monthly digest of what's new and exciting.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2026 BrandName, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-dark" href="#"><i className="bi bi-twitter"></i></a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#"><i className="bi bi-instagram"></i></a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#"><i className="bi bi-facebook"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;