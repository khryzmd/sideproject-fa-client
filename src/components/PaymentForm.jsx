import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const PaymentForm = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    // bookingId: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch(`${import.meta.env.VITE_API_URL}/payments/makePayment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.paymentIntentId) {
          Swal.fire("Success", "Payment successful!", "success").then(() =>
            navigate("/")
          );
        } else {
          Swal.fire("Error", "Payment unsuccessful!", "error");
        }
      })
      .catch((error) => Swal.fire("Error", "Payment unsuccessful!", "error"));
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Make Payment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="payment-form__input-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            <div className="payment-form__input-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="payment-form__input-group">
              <label htmlFor="cvc">CVC</label>
              <input
                type="text"
                id="cvc"
                value={formData.cvc}
                onChange={handleChange}
                placeholder="123"
                required
              />
            </div>
            <Button type="submit" className="payment-form__submit-btn">
              Pay Now
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PaymentForm;
