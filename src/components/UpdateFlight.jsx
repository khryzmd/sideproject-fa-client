import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

export default function UpdateFlight({ show, handleClose, flight, onUpdate }) {
  const [updatedFlight, setUpdatedFlight] = useState({
    airline: "",
    departureCity: "",
    destinationCity: "",
    price: "",
    availableSeats: "",
    departureDatetime: "",
    arrivalDatetime: "",
  });

  // Populate the state with flight details when the flight prop changes
  useEffect(() => {
    if (flight) {
      setUpdatedFlight({
        airline: flight.airline,
        departureCity: flight.departureCity,
        destinationCity: flight.destinationCity,
        price: flight.price,
        availableSeats: flight.availableSeats,
        departureDatetime: flight.departureDatetime
          ? new Date(flight.departureDatetime).toISOString().substring(0, 16) // Format date for input
          : "",
        arrivalDatetime: flight.arrivalDatetime
          ? new Date(flight.arrivalDatetime).toISOString().substring(0, 16) // Format date for input
          : "",
      });
    }
  }, [flight]);

  const handleChange = (e) => {
    setUpdatedFlight({
      ...updatedFlight,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedFlight);
    Swal.fire("Success!", "Flight Updated Successfully.", "success");
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="updateFlightTitle">Update Flight</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="updateFlight-form">
          <Form.Group controlId="formAirline">
            <Form.Label>Airline</Form.Label>
            <Form.Control
              type="text"
              name="airline"
              value={updatedFlight.airline}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formDepartureCity">
            <Form.Label>Departure City</Form.Label>
            <Form.Control
              type="text"
              name="departureCity"
              value={updatedFlight.departureCity}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formDestinationCity">
            <Form.Label>Destination City</Form.Label>
            <Form.Control
              type="text"
              name="destinationCity"
              value={updatedFlight.destinationCity}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={updatedFlight.price}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formAvailableSeats">
            <Form.Label>Available Seats</Form.Label>
            <Form.Control
              type="number"
              name="availableSeats"
              value={updatedFlight.availableSeats}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formDepartureDatetime">
            <Form.Label>Departure Datetime</Form.Label>
            <Form.Control
              type="datetime-local"
              name="departureDatetime"
              value={updatedFlight.departureDatetime}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formArrivalDatetime">
            <Form.Label>Arrival Datetime</Form.Label>
            <Form.Control
              type="datetime-local"
              name="arrivalDatetime"
              value={updatedFlight.arrivalDatetime}
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="updateFlightBtn"
            style={{
              backgroundColor: "#1b709b",
              borderRadius: "99px",
              width: "100%",
              marginTop: "20px",
            }}>
            Update Flight
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
