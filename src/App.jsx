// import { useState, useEffect } from "react";
// import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { UserProvider } from "./context/UserContext";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Flights from "./pages/Flights";
import Footer from "./components/Footer";
import Logout from "./components/Logout";
import SearchResult from "./components/SearchResult";
import Search from "./components/Search";
import FlightDetails from "./pages/FlightDetails";

function App() {
  return (
    <>
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/all-flights" element={<Flights />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search-results" element={<SearchResult />} />
          <Route path="/flights/:flightId" element={<FlightDetails />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
