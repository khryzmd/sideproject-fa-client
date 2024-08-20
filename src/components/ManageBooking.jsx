export default function ManageBooking() {
  return (
    <>
      {/* <!-- Manage Booking Section --> */}
      <section
        id="manage-booking"
        className="container d-flex flex-column align-items-stretch px-0"
      >
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active px-0"
              id="checkin-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              <i className="fa-regular fa-square-check d-none d-sm-inline"></i>
              Check-In
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link px-0"
              id="manage-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="#home-tab-pane"
              aria-selected="false"
            >
              <i className="fa-solid fa-list-check d-none d-sm-inline"></i> Manage
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link px-0"
              id="status-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="#home-tab-pane"
              aria-selected="false"
            >
              <i className="fa-regular fa-clock d-none d-sm-inline"></i> Flight
              Status
            </button>
          </li>
        </ul>
        <div className="tab-content m-5" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabIndex="0"
          >
            <div className="my-3">
              <div className="form-check form-check-inline p-0">
                <input
                  className="form-check-input"
                  type="radio"
                  name="manage-radio"
                  id="manage-radio1"
                  value="manage-option1"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="manage-radio1">
                  Booking Reference
                </label>
              </div>
              <div className="form-check form-check-inline p-0">
                <input
                  className="form-check-input"
                  type="radio"
                  name="manage-radio"
                  id="manage-radio2"
                  value="manage-option2"
                />
                <label className="form-check-label" htmlFor="manage-radio2">
                  eTicket Number
                </label>
              </div>
            </div>
            <div className="row g-2">
              <div className="col-md">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput1"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Booking Reference</label>
                </div>
              </div>
              <div className="col-md">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput2"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Last Name</label>
                </div>
              </div>
            </div>
            <p>You might find it in the confirmation email or receipt</p>
            <div className="form-check form-check-inline p-0 mt-5 d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between">
              <input
                className="form-check-input"
                type="checkbox"
                id="termsAndConditions"
                value="check-in"
              />
              <label className="form-check-label" htmlFor="termsAndConditions">
                I have read and understood the Terms and Conditions and FAQs
              </label>
              <button type="submit" className="btn btn-primary mt-3 mt-lg-0">
                Check In
              </button>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabIndex="0"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="contact-tab-pane"
            role="tabpanel"
            aria-labelledby="contact-tab"
            tabIndex="0"
          >
            ...
          </div>
        </div>
      </section>
      {/* <!-- End of Manage Booking Section --> */}
    </>
  );
}
