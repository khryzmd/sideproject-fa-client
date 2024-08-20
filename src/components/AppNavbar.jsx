import React, { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext";
import ProfileDetails from "./ProfileDetails";

export default function AppNavbar() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { isLoggedIn, login, logout, user } = useContext(AuthContext);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [suffix, setSuffix] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Function to show and hide the modal profile
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.access) {
          login(data.access);
          Swal.fire("Success", "Logged in successfully!", "success").then(() =>
            navigate("/")
          );
        } else if (data.error) {
          Swal.fire("Error", data.error, "error");
        }
      })
      .catch((error) => Swal.fire("Error", "Login failed!", "error"));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    // Initialize an empty array to hold validation error messages
    const errors = [];

    // Validate required fields
    if (!firstName) errors.push("First name is required.");
    if (!lastName) errors.push("Last name is required.");
    if (!mobileNo) errors.push("Mobile number is required.");
    if (!email) errors.push("Email is required.");
    if (!password) errors.push("Password is required.");
    if (!birthdate) errors.push("Birthdate is required.");
    if (!termsAccepted)
      errors.push("You must accept the terms and conditions.");

    // Validate password confirmation
    if (password !== confirmPassword) errors.push("Passwords do not match.");

    // Check if there are any validation errors
    if (errors.length > 0) {
      // Display all validation errors as a single alert
      Swal.fire("Error", errors.join(" "), "error");
      return;
    }

    // Prepare data for submission
    let dataValues = {
      firstName,
      lastName,
      mobileNo,
      password,
      email,
      birthdate,
      suffix,
    };

    if (suffix === "") {
      // Remove suffix if it's not provided
      dataValues = {
        firstName,
        lastName,
        mobileNo,
        password,
        email,
        birthdate,
      };
    }

    // Update URL for fetching
    fetch(`${import.meta.env.VITE_API_URL}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataValues),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          // Reset form fields on success
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setFirstName("");
          setLastName("");
          setMobileNo("");
          setSuffix("");
          setBirthdate("");
          setTermsAccepted(false);
          Swal.fire("Success", data.message, "success");
        } else if (data.error) {
          Swal.fire("Error", data.error.message || data.error, "error");
        }
      })
      .catch((error) => Swal.fire("Error", "Registration failed!", "error"));
  };

  return (
    <>
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a href="/#" className="navbar-brand">
              Airlines
            </a>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item px-xl-4 dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="/#departureCity"
                >
                  Flights
                </a>
                <ul
                  className="dropdown-menu dropdownFlight"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="/search">
                      Search Flights
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/all-flights">
                      All Flights
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item px-xl-4">
                <a className="nav-link" href="/#manage-booking">
                  Manage Booking
                </a>
              </li>
              <li className="nav-item px-xl-4">
                <a className="nav-link" href="/#deals">
                  Deals
                </a>
              </li>
              <li className="nav-item px-xl-4">
                <a className="nav-link" href="/#explore">
                  Explore
                </a>
              </li>
              <li className="nav-item px-xl-4">
                <a className="nav-link" href="./about">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex gap-3">
            {isLoggedIn ? (
              <div className="d-flex gap-3 align-items-center ">
                <ul className="list-unstyled m-0">
                  <li className="nav-item px-xl-4 ">
                    <a className="nav-link profileName" onClick={handleShow}>
                      {user && user.firstName}
                    </a>
                  </li>
                </ul>

                <button
                  className={`logoutBtn ${isLoggedIn ? "visible" : ""}`}
                  style={{ display: isLoggedIn ? "block" : "none" }}
                  onClick={() => {
                    Swal.fire({
                      title: "Are you sure?",
                      text: "You will be logged out of your account.",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#115779",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Logout",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        logout();
                        Swal.fire(
                          "Logged out",
                          "You have been logged out successfully.",
                          "success"
                        ).then(() => navigate("/"));
                      }
                    });
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <button
                  className="signUpBtn"
                  data-bs-toggle="modal"
                  data-bs-target="#signUpModal"
                >
                  <img
                    src="/signUpIcon.png"
                    alt="sign up icon"
                    width="24"
                    height="24"
                    className="me-1"
                  />
                  Sign up
                </button>

                {/* Login Dropdown */}
                <div className="dropdown">
                  <button
                    className="loginBtn dropdown-toggle no-arrow"
                    id="loginDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <img
                      src="/loginIcon.png"
                      alt="Login Icon"
                      width="24"
                      height="24"
                      className="loginIcon me-1"
                    />
                    Log in
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-end p-4 mt-3"
                    aria-labelledby="loginDropdown"
                  >
                    <form onSubmit={handleLoginSubmit}>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Member ID or Email Address"
                          aria-label="Member ID or Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter your password"
                          aria-label="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <a
                          href="#"
                          className="d-block text-end mt-2 forgotPassword"
                        >
                          Forgot password
                        </a>
                      </div>
                      <button
                        type="submit"
                        className="btn logInSubmitBtn w-100 rounded-5"
                      >
                        Login
                      </button>
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
      {/* End of Navbar Section */}

      {/* Sign Up Modal Section */}
      <div
        className="modal fade"
        id="signUpModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content p-3 p-md-5">
            <h2>Registration Form</h2>
            <p>
              All fields are required unless specified. Please enter your first
              name, last name, date of birth as they appear on your passport.
            </p>
            <h6 className="mb-3">Personal information</h6>
            <form>
              <div className="row mb-3">
                <div className="col-12 col-md-6 mb-3 mb-md-0">
                  <input
                    type="text"
                    placeholder="First name"
                    className="form-control"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    placeholder="Last name"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12 col-md-6 mb-3 mb-md-0 suffixGroup">
                  <label htmlFor="suffix" className="form-label suffixLabel">
                    Suffix
                  </label>
                  <select
                    name="suffix"
                    id="suffix"
                    className="form-select"
                    value={suffix}
                    onChange={(e) => setSuffix(e.target.value)}
                  >
                    <option value="none">None</option>
                    <option value="Jr.">Jr.</option>
                    <option value="Sr.">Sr.</option>
                    <option value="III">III</option>
                    <option value="Ma.">Ma.</option>
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Date of Birth"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12 col-md-6 mb-3 mb-md-0">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    className="form-control"
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12 col-md-6 mb-3 mb-md-0">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-check mb-4">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="termsCheck"
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                  required
                />
                <label className="form-check-label" htmlFor="termsCheck">
                  I have read and understood the
                  <a href="#"> Terms and Conditions</a> of Flight Booking and
                  the
                  <a href="#"> Data Privacy Policy </a>
                  of Flight Booking Airlines
                </label>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="submit"
                  className="signupSubmit"
                  onClick={handleRegisterSubmit}
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End of Sign Up Modal Section */}

      {/* Profile Modal */}
      <ProfileDetails show={showModal} handleClose={handleClose} />
      {/*End Profile Modal */}
    </>
  );
}
