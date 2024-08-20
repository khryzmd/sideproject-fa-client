import SearchFlight from "../components/SearchFlight";
import ManageBooking from "../components/ManageBooking";
import Deals from "../components/Deals";
import Explore from "../components/Explore";
import ValueProposition from "../components/ValueProposition";


export default function Home() {
  return (
    <>
      {/* <!-- Carousel Section --> */}
      <div
        id="myCarousel"
        className="carousel slide carousel-fade mb-6"
        data-bs-ride="carousel"
        data-bs-pause="false"
        data-bs-touch="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item" data-bs-interval="6000">
            <img src="/carousel1.jpg" alt="Pyramids of Giza" />
          </div>
          <div className="carousel-item active" data-bs-interval="6000">
            <img src="/carousel2.jpg" alt="Itsukushima Shrine" />
          </div>
          <div className="carousel-item" data-bs-interval="6000">
            <img src="/carousel3.jpg" alt="Singapore" />
          </div>
        </div>
      </div>
      {/* <!-- End of Carousel Section--> */}

      <SearchFlight />
      <ManageBooking />
      <Deals />
      <Explore />
      <ValueProposition />
    </>
  );
}
