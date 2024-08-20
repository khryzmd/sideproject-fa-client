import React, { useState, useEffect } from 'react';

// Component for viewing flight status as an admin
const AdminViewFlightStatus = () => {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch all flights from the API
    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const response = await fetch('/api/flights/getAllFlights', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}` 
                    }
                });
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const data = await response.json();
                setFlights(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFlights();
    }, []);

    if (loading) return <p>Loading flight status...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Admin View - Flight Status</h1>
            <table>
                <thead>
                    <tr>
                        <th>Flight ID</th>
                        <th>Airline</th>
                        <th>Departure City</th>
                        <th>Destination City</th>
                        <th>Departure Time</th>
                        <th>Arrival Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map(flight => (
                        <tr key={flight.id}>
                            <td>{flight.id}</td>
                            <td>{flight.airline}</td>
                            <td>{flight.departureCity}</td>
                            <td>{flight.destinationCity}</td>
                            <td>{new Date(flight.departureDatetime).toLocaleString()}</td>
                            <td>{new Date(flight.arrivalDatetime).toLocaleString()}</td>
                            <td>{flight.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminViewFlightStatus;
