import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

export default function AddFlight({ show, handleClose, fetchFlights }) {
  const [formData, setFormData] = useState({
    airline: "",
    departureCity: "",
    destinationCity: "",
    price: "",
    availableSeats: "",
    departureDatetime: "",
    arrivalDatetime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${import.meta.env.VITE_API_URL}/flights/addFlight`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          Swal.fire("Success", data.message, "success");
          fetchFlights();
          handleClose();
        } else {
          Swal.fire("Error!", data.error, "error");
        }
      })
      .catch((error) => {
        console.error("Error adding flight:", error);
        Swal.fire("Error", "An error occurred. Please try again.", "error");
      });
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="addFlightTitle">Add New Flight</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="addFlightForm">
          <Form.Group controlId="formAirline">
            <Form.Label>Airline</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter airline"
              name="airline"
              value={formData.airline}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formDepartureCity">
            <Form.Label>Departure City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter departure city"
              name="departureCity"
              value={formData.departureCity}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formDestinationCity">
            <Form.Label>Destination City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter destination city"
              name="destinationCity"
              value={formData.destinationCity}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formAvailableSeats">
            <Form.Label>Available Seats</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter available seats"
              name="availableSeats"
              value={formData.availableSeats}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formDepartureDatetime">
            <Form.Label>Departure Datetime</Form.Label>
            <Form.Control
              type="datetime-local"
              name="departureDatetime"
              value={formData.departureDatetime}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formArrivalDatetime">
            <Form.Label>Arrival Datetime</Form.Label>
            <Form.Control
              type="datetime-local"
              name="arrivalDatetime"
              value={formData.arrivalDatetime}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="mt-3 bookNowBtn"
            style={{
              backgroundColor: "#1b709b",
              borderRadius: "99px",
              width: "100%",
            }}>
            Add Flight
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
