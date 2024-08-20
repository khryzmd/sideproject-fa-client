import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    console.log("About page loaded");

    return () => {
      console.log("About page unloaded");
    };
  }, []);

  return (
    <div id="about" className="container my-5 pb-5">
      <div className="text-center my-5 pt-5">
        <h1>Airline Booking System</h1>
        <p className="version">Version: 1.0 | Date: July 17, 2024</p>
      </div>

      <section className="intro">
        <div className="row">
          <div className="col-md-6">
            <h3>About Us</h3>
            <p>
              Welcome to our innovative airline booking platform, where your
              travel experience is redefined with ease and efficiency. Our
              platform is designed to simplify the booking process, allowing you
              to effortlessly search for flights, select your preferred seats,
              and complete transactions securely. Whether you're planning a
              relaxing vacation or an important business trip, we prioritize
              your convenience and peace of mind throughout the journey. At
              Airline Booking System, we offer a diverse range of options to
              meet every travel need. From economical flights to premium cabin
              experiences, and from short domestic trips to long international
              journeys, our system ensures you find the best flights at
              competitive rates. We collaborate with trusted airline partners to
              provide an extensive network of routes and destinations,
              guaranteeing that your travel is not only convenient but also
              enjoyable. Discover a new level of ease in online flight
              reservations with us.
            </p>
          </div>
          <div className="col-md-6">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://imgs.search.brave.com/c_owsQ_ToTzpnGfCSzvQHLZTjcbNr--VENzutsdDybo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjIy/NTA0MjI4L3Bob3Rv/L2Nsb3NlLXVwLWFp/cnBsYW5lLXdpbmRv/dy13aXRoLWFpcnBs/YW5lLXdpbmcuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVpH/SlBELVBaUjlBYy1U/R1ZBRGJFOGxMU001/Z0F3Z2RkWlZsTld3/SmZNZnc9"
                    className="d-block w-100"
                    alt="Image 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://imgs.search.brave.com/9OKkjljP4m3X2ynhbAXHDrgtJY5yw8CeCyPlCjwVwkM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDk4/ODMxMDY3L3Bob3Rv/L2hhcHB5LWZsaWdo/dC1hdHRlbmRhbnQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXNXLUQzNmlvSWIx/RXhsTlVCT0xVVFdD/a3REVXc4LWJzTUhN/TlpWdnlaQ3c9"
                    className="d-block w-100"
                    alt="Image 2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://imgs.search.brave.com/KIlHJvuO8J3oI-XJb2C0qTmRInZSyRj1b3pQfoqUpbI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDkx/MTQ0NjY5L3Bob3Rv/L2FpcnBsYW5lLWlu/dGVyaW9yLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1EMUJ4/WTRIdl9GOXN5Nl9I/WktDMnJLVVVaMkJq/alBfcnE5OWQzbGhV/ZFl3PQ"
                    className="d-block w-100"
                    alt="Image 3"
                  />
                </div>
              </div>
              <div className="carousel-controls">
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
