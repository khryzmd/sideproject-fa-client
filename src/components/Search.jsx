import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";
import SearchResult from "./SearchResult";

export default function SearchView() {
  const [formData, setFormData] = useState({
    departureCity: "",
    destinationCity: "",
    arrivalDatetime: "",
    availableSeats: "",
  });
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchData = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        searchData[key] = formData[key];
      }
    });

    fetch(`${import.meta.env.VITE_API_URL}/flights/search-flights`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setSearchResults(data);
        } else {
          Swal.fire({
            title: "No results found!",
            icon: "info",
            text: "No flights match your search criteria.",
          });
          setSearchResults([]);
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: "Error fetching search results!",
        });
      });
  };

  return (
    <Container className="my-5 py-5" id="searchContainer">
      <Row>
        <Col className="search-flight p-3 mx-3">
          <Form className="search-form d-flex row my-4" onSubmit={handleSubmit}>
            {/* Form fields */}
            <Form.Group className="col-12 col-lg-3">
              <Form.Label>From</Form.Label>
              <Form.Control
                required
                name="departureCity"
                value={formData.departureCity}
                onChange={handleChange}
                placeholder="Departure"
              />
            </Form.Group>
            <Form.Group className="col-12 col-lg-3">
              <Form.Label>To</Form.Label>
              <Form.Control
                required
                name="destinationCity"
                value={formData.destinationCity}
                onChange={handleChange}
                placeholder="Destination"
              />
            </Form.Group>
            <Form.Group className="col-12 col-lg-3">
              <Form.Label>Depart</Form.Label>
              <Form.Control
                required
                type="date"
                name="arrivalDatetime"
                value={formData.arrivalDatetime}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="col-12 col-lg-3">
              <Form.Label>Seats</Form.Label>
              <Form.Select
                required
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

          {/* Render Search Results component */}
          <SearchResult searchResults={searchResults} />
        </Col>
      </Row>
    </Container>
  );
}
