import { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import UpdateFlight from "../components/UpdateFlight";
import AuthContext from "../AuthContext";

export default function FlightDetails() {
  const [flight, setFlight] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { flightId } = useParams();
  const { user } = useContext(AuthContext);
  // Utility function to convert ObjectId to a 6-character alphanumeric code
  function generateShortCode(objectId) {
    const shortCode = btoa(objectId.slice(0, 4) + objectId.slice(-4))
      .replace(/\+/g, "A")
      .replace(/\//g, "B")
      .substring(0, 6);
    return shortCode;
  }

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL}/flights/getFlightDetails/${flightId}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          Swal.fire("Error", data.error, "error");
        } else {
          setFlight(data);
        }
      })
      .catch((error) => {
        Swal.fire("Error", "Error Fetching flight Details", "error");
        setFlight(null);
      });
  }, [flightId]);

  const handleUpdate = (updatedFlight) => {
    fetch(`${import.meta.env.VITE_API_URL}/flights/updateFlight/${flightId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(updatedFlight),
    })
      .then((res) => res.json())
      .then((data) => {
        setFlight(data.updatedFlight);
      })
      .catch((error) => console.error("Error updating flight:", error));
  };
  return (
    <Container className="my-5 py-5">
      <Row className="p-2 justify-content-center">
        <Col lg={8}>
          {flight ? (
            <Row className="flightDetailsCard pt-5">
              {/* Flight details layout */}
              <Col
                lg={12}
                className="d-flex  align-items-center p-2 pb-4 border-bottom">
                <Container className="d-flex">
                  <Container className="airlineLogo">
                    <i className="fa-solid fa-plane-up"></i>
                  </Container>
                  <Container className="d-flex align-items-center">
                    <h5>{flight.airline}</h5>
                  </Container>
                </Container>
                <Container className="d-flex justify-content-end align-items-center">
                  <h5>Flight Info</h5>
                </Container>
              </Col>

              <Col lg={12} className="d-flex  align-items-center p-2 mt-2 ">
                <Container className="text-center">
                  <h5>
                    {new Date(flight.departureDatetime).toLocaleString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      }
                    )}
                  </h5>
                  <p>{flight.departureCity}</p>
                </Container>
                <Container className="text-center fa-plane-container">
                  <i className="fa-solid fa-plane"></i>
                </Container>
                <Container className="text-center">
                  <h5>
                    {new Date(flight.arrivalDatetime).toLocaleString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </h5>
                  <p>{flight.destinationCity}</p>
                </Container>
              </Col>

              <Col
                lg={12}
                className="d-flex justify-content-between  mt-2 codeSeats py-3">
                <Container className="p-3">
                  <p className="m-0">Flight Code</p>
                  <h5>{generateShortCode(flight._id)}</h5>
                </Container>
                <Container className="p-3 d-flex flex-column align-items-center">
                  <p className="m-0">Price</p>
                  <h5>PHP {flight.price}</h5>
                </Container>
                <Container className="d-flex flex-column align-items-end p-3">
                  <p className="m-0">Available Seats</p>
                  <h5>{flight.availableSeats}</h5>
                </Container>
              </Col>
            </Row>
          ) : (
            <p>Loading flight details...</p>
          )}
          <Container className="text-center py-4">
            {user && !user.isAdmin ? (
              <Button
                className="bookNowBtn"
                style={{ backgroundColor: "#115779" }}>
                Book Now
              </Button>
            ) : (
              <Button
                className="bookNowBtn"
                style={{ backgroundColor: "#115779" }}
                onClick={() => setShowModal(true)}>
                UPDATE FLIGHT
              </Button>
            )}
          </Container>
        </Col>
      </Row>
      {/* Update Modal */}
      <UpdateFlight
        show={showModal}
        handleClose={() => setShowModal(false)}
        flight={flight}
        onUpdate={handleUpdate}
      />
    </Container>
  );
}
