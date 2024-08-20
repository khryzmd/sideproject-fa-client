export default function ValueProposition() {
  return (
    <>
      {/* <!-- Value Proposition Section --> */}
      <section id="feature" className="container">
        <p className="feature-us text-center">
          <strong>Why Choose Us</strong>
        </p>
        <div className="container px-4 pb-5" id="hanging-icons">
          <div className="row g-4 pb-5 pt-4 row-cols-1 row-cols-lg-3">
            <div className="col d-flex flex-lg-column align-items-center py-5">
              <img src="/airplane.png" alt="airline icon" height="100px" />
              <div>
                <h3 className="fs-2 text-body-emphasis">Easy & Quick Booking</h3>
                <p>
                  With us, not only is your money protected, but we also ensure
                  your flight is secured until you board the plane.
                </p>
              </div>
            </div>
            <div className="col d-flex flex-lg-column align-items-center py-5">
              <img
                src="/best-price.png"
                alt="best price icon"
                height="100px"
              />

              <div>
                <h3 className="fs-2 text-body-emphasis">Best Price Guarantee</h3>
                <p>
                  We strive to keep your travel within your budget by working
                  closely with our suppliers to secure and offer you the best
                  prices available.
                </p>
              </div>
            </div>
            <div className="col d-flex flex-lg-column align-items-center py-5">
              <img
                src="/customer-care.png"
                alt="customer-care icon"
                height="100px"
              />

              <div>
                <h3 className="fs-2 text-body-emphasis">Customer Care 24/7</h3>
                <p>
                  If you need assistance booking your trip or finding the best
                  travel options, call our travel specialists for help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End of Value Proposition Section --> */}
    </>
  );
}
