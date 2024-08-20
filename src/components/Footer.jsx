export default function Footer() {
  return (
    <>
      {/* <!-- Footer Section --> */}
      <div className="footer px-5">
        <footer className="pt-5 pb-2">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Airlines</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-light">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/about" className="nav-link p-0 text-light">
                    About Us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-light">
                    Careers
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-light">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Services</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a
                    href="/#manage-booking"
                    className="nav-link p-0 text-light"
                  >
                    Flight Booking
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="/#manage-booking"
                    className="nav-link p-0 text-light"
                  >
                    Manage Booking
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="/#manage-booking"
                    className="nav-link p-0 text-light"
                  >
                    Flight Status
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-light">
                    Travel Insurance
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Support</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-light">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-light">
                    Help Center
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-light">
                    Feedback
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-light">
                    Travel Advisories
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to Our Newsletter</h5>
                <p>Get the latest updates and offers directly to your inbox.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    required
                  />
                  <button className="btn btn-light" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="ftdiv d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2024 Airlines. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-light" href="https://x.com/">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-light" href="https://instagram.com/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-light" href="https://fb.com/">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      {/* <!-- End of Footer Section --> */}
    </>
  );
}
