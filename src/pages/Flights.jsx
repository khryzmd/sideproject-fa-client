import { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AddFlight from "../components/AddFlight";
import AuthContext from "../AuthContext";
export default function FlightView() {
  const [flights, setFlights] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Getting all flights
  const fetchFlights = () => {
    fetch(`${import.meta.env.VITE_API_URL}/flights/getAllFlights`)
      .then((res) => res.json())
      .then((data) => {
        setFlights(data);
      });
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  // Function to delete flight
  const handleDeleteFlight = (flightId) => {
    fetch(`${import.meta.env.VITE_API_URL}/flights/deleteFlight/${flightId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Flight Deleted Successfully") {
          Swal.fire("Success", data.message, "success");
          fetchFlights();
          navigate("/all-flights");
        }
      });
  };

  // Function to show and hide the modal to update the flight details
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Function to view Flight Details
  const handleFlightClick = (flightId) => {
    navigate(`/flights/${flightId}`);
  };

  return (
    <Container className="my-5 py-5">
      <Container className="d-flex justify-content-between">
        <h1 style={{ color: "#115779" }}>Flights Available</h1>
        {user && user.isAdmin && (
          <Button
            className="d-flex align-items-center gap-2 addFlightBtn"
            onClick={handleShow}>
            <i className="fa-solid fa-circle-plus d-flex align-items-center"></i>
            Add Flight
          </Button>
        )}
      </Container>
      <Container className="flightsWrapper">
        {flights.length > 0 ? (
          flights.map((flight) => (
            <Row
              key={flight._id}
              className="flightsCard flex-column flex-md-row mx-sm-2 mx-0">
              <Col className="text-center">
                <p className="departTime">
                  {new Date(flight.departureDatetime).toLocaleString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </p>
                <p className="departCity">{flight.departureCity}</p>
              </Col>

              <Col className="text-center">
                <i className="fa-solid fa-plane-departure"></i>
              </Col>

              <Col className="text-center">
                <p className="arriveTime">
                  {new Date(flight.arrivalDatetime).toLocaleString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </p>
                <p className="destinationCity">{flight.destinationCity}</p>
              </Col>

              <Col className="text-center">
                <p className="price">
                  <strong>PHP </strong>
                  {flight.price}
                </p>
              </Col>

              <Col className="text-center">
                {user && !user.isAdmin ? (
                  <Button
                    className="bookNowBtn"
                    type="submit"
                    onClick={() => handleFlightClick(flight._id)}
                    style={{ backgroundColor: "#115779" }}>
                    Select Flight
                  </Button>
                ) : (
                  <Container className="d-flex gap-3 justify-content-center">
                    <Button
                      className="bookNowBtn"
                      type="submit"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteFlight(flight._id);
                      }}
                      style={{ backgroundColor: "red" }}>
                      DELETE
                    </Button>
                    <Button
                      className="bookNowBtn"
                      type="submit"
                      onClick={() => handleFlightClick(flight._id)}
                      style={{ backgroundColor: "#115779" }}>
                      Select Flight
                    </Button>
                  </Container>
                )}
              </Col>
            </Row>
          ))
        ) : (
          <p>No Flights Available</p>
        )}
      </Container>

      <AddFlight
        show={showModal}
        handleClose={handleClose}
        fetchFlights={fetchFlights} // Pass fetchFlights function
      />
    </Container>
  );
}
