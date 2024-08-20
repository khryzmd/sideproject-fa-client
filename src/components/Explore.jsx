export default function Explore() {
  return (
    <>
      {/* <!-- Explore Section --> */}
      <section id="explore" className="container">
        <p className="popular text-center my-5 pt-5">
          <strong>Popular Destination</strong>
        </p>
        <div className="popular-grid row row-cols-2 row-cols-lg-3 g-4 pb-5">
          <div className="col">
            <div className="card text-bg-dark rounded-4">
              <img
                src="/dubai.jpg"
                className="card-img rounded-4"
                alt="dubai"
              />
              <div className="card-img-overlay">
                <h5 className="card-title">Dubai</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-dark rounded-4">
              <img src="/bali.jpg" className="card-img rounded-4" alt="bali" />
              <div className="card-img-overlay">
                <h5 className="card-title">Bali</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-dark rounded-4">
              <img
                src="/paris.jpg"
                className="card-img rounded-4"
                alt="paris"
              />
              <div className="card-img-overlay">
                <h5 className="card-title">Paris</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-dark rounded-4">
              <img src="/rome.jpg" className="card-img rounded-4" alt="rome" />
              <div className="card-img-overlay">
                <h5 className="card-title">Rome</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-dark rounded-4">
              <img
                src="/london.jpg"
                className="card-img rounded-4"
                alt="London"
              />
              <div className="card-img-overlay">
                <h5 className="card-title">London</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-dark rounded-4">
              <img
                src="/istanbul.jpg"
                className="card-img rounded-4"
                alt="Istanbul"
              />
              <div className="card-img-overlay">
                <h5 className="card-title">Istanbul</h5>
              </div>
            </div>
          </div>
        </div>
        <p className="travel-guide text-center mt-5">
          <strong>Travel Guide</strong>
        </p>
        <p className="guide-p mb-5 text-center mx-auto">
          Explore a vast array of destinations worldwide, from vibrant cities to
          tranquil beaches. Discover your ideal getaway with ease using our
          intuitive filters. Tailor your search based on budget, activities,
          climate, and more to find the perfect destination for your next
          adventure.
        </p>
        <div className="travel-guide-grid row row-cols-1 row-cols-lg-3 g-4">
          <div className="col-lg col-md-8 col-9 mx-auto">
            <div className="card">
              <img
                src="/newyork.jpg"
                className="card-img rounded-4"
                alt="newyork"
              />
              <div className="card-img-overlay">
                <h5 className="card-title text-light">New York</h5>
              </div>
              <div className="card-body px-0">
                <p className="card-text">
                  Immerse yourself in the energy of the Big Apple, where iconic
                  landmarks like Times Square, Central Park, and the Statue of
                  Liberty await. Explore world-className museums, catch a
                  Broadway show, and savor diverse culinary delights in
                  neighborhoods from SoHo to Harlem. New York offers endless
                  opportunities for adventure, shopping, and cultural
                  enrichment.
                </p>
                <a href="#">Learn more</a>
              </div>
            </div>
          </div>
          <div className="col-lg col-md-8 col-9 mx-auto">
            <div className="card">
              <img
                src="/maldives.jpg"
                className="card-img rounded-4"
                alt="maldives"
              />
              <div className="card-img-overlay">
                <h5 className="card-title text-light">Maldives</h5>
              </div>
              <div className="card-body px-0">
                <p className="card-text">
                  Escape to the Maldives, a tropical paradise renowned for its
                  crystal-clear waters, white sandy beaches, and overwater
                  bungalows. Perfect for a romantic getaway or a serene retreat,
                  the Maldives offers unparalleled snorkeling, diving, and
                  relaxation amidst stunning natural beauty. Discover vibrant
                  marine life and bask in the tranquility of your private island
                  haven.
                </p>
                <a href="#">Learn more</a>
              </div>
            </div>
          </div>
          <div className="col-lg col-md-8 col-9 mx-auto">
            <div className="card">
              <img
                src="/switzerland.jpeg"
                className="card-img rounded-4"
                alt="switzerland"
              />
              <div className="card-img-overlay">
                <h5 className="card-title text-light">Switzerland</h5>
              </div>
              <div className="card-body px-0">
                <p className="card-text">
                  Experience the charm of Switzerland, where picturesque
                  landscapes meet vibrant cities. From the alpine wonders of
                  Zermatt and Lucerne to the cosmopolitan flair of Zurich and
                  Geneva, Switzerland offers a blend of outdoor adventure,
                  historic sites, and sophisticated culture. Enjoy breathtaking
                  mountain vistas, pristine lakes, and world-renowned Swiss
                  hospitality.
                </p>
                <a href="#">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End of Explore Section --> */}
    </>
  );
}
