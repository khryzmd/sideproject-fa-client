import React, { useState } from 'react';

// Component to display flight details
const FlightDetails = ({ flight }) => (
    <div>
        <h2>Flight Status</h2>
        <p><strong>Flight ID:</strong> {flight.id}</p>
        <p><strong>Airline:</strong> {flight.airline}</p>
        <p><strong>Departure City:</strong> {flight.departureCity}</p>
        <p><strong>Destination City:</strong> {flight.destinationCity}</p>
        <p><strong>Departure Time:</strong> {new Date(flight.departureTime).toLocaleString()}</p>
        <p><strong>Arrival Time:</strong> {new Date(flight.arrivalTime).toLocaleString()}</p>
        <p><strong>Status:</strong> {flight.status}</p>
    </div>
);

const UserViewFlightStatus = () => {
    const [flightId, setFlightId] = useState('');
    const [flight, setFlight] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = () => {
        if (!flightId) {
            setError('Please enter a Flight ID');
            return;
        }

        setLoading(true);
        fetch(`/api/user/flight/${flightId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Flight not found or network error');
                }
                return response.json();
            })
            .then(data => {
                setFlight(data);
                setError(null);
            })
            .catch(error => {
                setError(error.message);
                setFlight(null);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div>
            <h1>User View - Flight Status</h1>
            <input
                type="text"
                value={flightId}
                onChange={(e) => setFlightId(e.target.value)}
                placeholder="Enter Flight ID"
                aria-label="Flight ID"
            />
            <button onClick={handleSearch}>Search Flight</button>

            {loading && <p>Loading flight status...</p>}
            {error && <p>Error: {error}</p>}
            {flight && <FlightDetails flight={flight} />}
        </div>
    );
};

export default UserViewFlightStatus;
