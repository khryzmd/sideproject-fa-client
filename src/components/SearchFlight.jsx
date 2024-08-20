import { Container, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchFlight() {
  const [flights, setFlights] = useState([]);
  const [formData, setFormData] = useState({
    departureCity: "",
    destinationCity: "",
    arrivalDatetime: "",
    availableSeats: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/flights/getAllFlights`)
      .then((res) => res.json())
      .then((data) => {
        setFlights(data);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "arrivalDatetime") {
      const date = new Date(value);

      // Convert to ISO format (YYYY-MM-DDTHH:mm:ss.sssZ)
      const isoString = date.toISOString();

      setFormData({
        ...formData,
        [name]: isoString,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the search data by removing empty fields
    const searchData = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        searchData[key] = formData[key];
      }
    });
    console.log(searchData);

    fetch(`${import.meta.env.VITE_API_URL}/flights/search-flights`, {
      method: "POST", // Use POST instead of GET
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchData), // Send JSON payload
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        navigate("/search-results", { state: { searchResults: data } });
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    <>
      {/* <!-- Search Flights Section--> */}
      <section
        id="search-flights"
        className="d-flex flex-column align-items-center">
        <div id="search-flights-btn" className="p-3 pb-1 rounded-top">
          <ul>
            <li className="menu--item__one">
              <a className="link">
                <i className="fa-solid fa-plane-departure"></i> Flight
              </a>
            </li>
            <li className="menu--item__two">
              <a className="link1">
                <i className="fa-solid fa-tree-city"></i> Tour
              </a>
            </li>
            <li className="bottom__line"></li>
          </ul>
        </div>

        <div
          id="search-flights-form"
          className="d-flex flex-column align-items-center justify-content-evenly rounded">
          <div className="my-sm-5 mb-md-0 mt-4 mb-3">
            <div className="form-check form-check-inline d-block d-sm-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                defaultValue="option1"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                One way
              </label>
            </div>
            <div className="form-check form-check-inline d-block d-sm-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                defaultValue="option2"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Round trip
              </label>
            </div>
            <div className="form-check form-check-inline d-block d-sm-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                defaultValue="option3"
              />
              <label className="form-check-label" htmlFor="inlineRadio3">
                Multicity
              </label>
            </div>
          </div>
          <Form className="search-form d-flex row my-4" onSubmit={handleSubmit}>
            <Form.Group className="col-12 col-lg-3">
              <Form.Label>From</Form.Label>
              <Form.Control
                id="departureCity"
                name="departureCity"
                value={formData.departureCity}
                onChange={handleChange}
                placeholder="Departure"
              />
            </Form.Group>

            <Form.Group className="col-12 col-lg-3">
              <Form.Label>To</Form.Label>
              <Form.Control
                name="destinationCity"
                value={formData.destinationCity}
                onChange={handleChange}
                placeholder="Destination"
              />
            </Form.Group>

            <Form.Group className="col-12 col-lg-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="arrivalDatetime"
                value={formData.arrivalDatetime.split("T")[0]} // Display only YYYY-MM-DD in the input field
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="col-12 col-lg-3">
              <Form.Label>Seats</Form.Label>
              <Form.Select
                name="availableSeats"
                value={formData.availableSeats}
                onChange={handleChange}>
                <option value="">Select Seats</option>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Container className="text-center">
              <Button type="submit" className="my-4 searchFlightBtn">
                Search Flight
              </Button>
            </Container>
          </Form>
        </div>
      </section>
      {/* <!-- End of Search Flights Section --> */}
    </>
  );
}
