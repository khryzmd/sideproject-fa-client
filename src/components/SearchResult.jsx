import { Container, Row, Col, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export default function SearchResult({ searchResults: propSearchResults }) {
  const location = useLocation();
  const searchResults =
    propSearchResults || location.state?.searchResults || [];

  const navigate = useNavigate();

  function generateShortCode(objectId) {
    const shortCode = btoa(objectId.slice(0, 4) + objectId.slice(-4))
      .replace(/\+/g, "A")
      .replace(/\//g, "B")
      .substring(0, 6);
    return shortCode;
  }

  // Function to view Flight Details
  const handleFlightClick = (flightId) => {
    navigate(`/flights/${flightId}`);
  };
  return (
    <>
      <Container className="my-5 py-5">
        <Container className="resultsContainer" id="resultsContainer">
          {searchResults.length > 0 ? (
            searchResults.map((flight) => (
              <Container key={flight._id} className="border pt-2">
                <Row className="flightCardFooter mt-3">
                  <Col className="text-center">
                    <p className="m-0">Flight Code</p>
                    <p className="m-0">
                      <strong>{generateShortCode(flight._id)}</strong>
                    </p>
                  </Col>

                  <Col className="text-center">
                    <p className="m-0">Airline</p>
                    <p className="m-0">
                      <strong>{flight.airline}</strong>
                    </p>
                  </Col>

                  <Col className="text-center">
                    <p className="m-0">Available Seats</p>
                    <p className="m-0">
                      <strong>{flight.availableSeats}</strong>
                    </p>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col className="d-flex flex-column align-items-center justify-content-center">
                    <p>
                      <strong>
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
                      </strong>
                    </p>
                    <p> {flight.departureCity}</p>
                  </Col>

                  <Col className="d-flex flex-column align-items-center justify-content-center">
                    <i className="fa-solid fa-plane-departure"></i>
                  </Col>

                  <Col className="d-flex flex-column align-items-center justify-content-center">
                    <p>
                      <strong>
                        {new Date(flight.arrivalDatetime).toLocaleString(
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
                      </strong>
                    </p>
                    <p>{flight.destinationCity}</p>
                  </Col>

                  <Col className="d-flex flex-column align-items-center justify-content-center">
                    <p>
                      <strong>PHP {flight.price}</strong>
                    </p>
                  </Col>

                  <Col className="d-flex flex-column align-items-center justify-content-center">
                    <Button
                      className="selectFlightBtn"
                      style={{ backgroundColor: "#115779" }}
                      onClick={() => handleFlightClick(flight._id)}
                    >
                      Select Flight
                    </Button>
                  </Col>
                </Row>
              </Container>
            ))
          ) : (
            <p>No search results found.</p>
          )}
        </Container>
      </Container>
    </>
  );
}
