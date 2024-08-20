export default function Deals() {
  return (
    <>
      {/* <!-- Deals Section --> */}
      <section id="deals" className="container mb-5">
        <p className="tour-package text-center mb-5">
          <strong>Our Tour Package</strong>
        </p>
        <div className="row row-cols-1 row-cols-lg-3 g-4">
          <div className="col-lg col-8 mx-auto">
            <div className="card">
              <img
                src="/deal1.jpg"
                className="card-img-top"
                alt="coron palawan"
              />
              <div className="card-body">
                <p className="star card-text">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i> 5(123)
                </p>
                <h5 className="card-title">Coron Palawan</h5>
                <p className="days card-text">
                  <i className="fa-regular fa-clock"></i> 2 Days, 2 Nights
                </p>
                <p className="price card-text">Price: ₱1,300.00</p>
                <button type="submit">Book this tour</button>
              </div>
            </div>
          </div>
          <div className="col-lg col-8 mx-auto">
            <div className="card">
              <img
                src="/deal2.jpg"
                className="card-img-top"
                alt="itsukushima shrine, japan"
              />
              <div className="card-body">
                <p className="star card-text">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i> 5(123)
                </p>
                <h5 className="card-title">Itsukushima Shrine, Japan</h5>
                <p className="days card-text">
                  <i className="fa-regular fa-clock"></i> 3 Days, 2 Nights
                </p>
                <p className="price card-text">Price: ₱25,000.00</p>
                <button type="submit">Book this tour</button>
              </div>
            </div>
          </div>
          <div className="col-lg col-8 mx-auto">
            <div className="card">
              <img
                src="/deal3.jpg"
                className="card-img-top"
                alt="great wall of china"
              />
              <div className="card-body">
                <p className="star card-text">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i> 5(123)
                </p>
                <h5 className="card-title">Great Wall of China</h5>
                <p className="days card-text">
                  <i className="fa-regular fa-clock"></i> 3 Days, 2 Nights
                </p>
                <p className="price card-text">Price: ₱10,000.00</p>
                <button type="submit">Book this tour</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End of Deals Section --> */}
    </>
  );
}
