import { Modal } from "react-bootstrap";
import AuthContext from "../AuthContext";
import { useContext } from "react";

export default function ProfileDetails({ show, handleClose }) {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <Modal centered show={show} onHide={handleClose} className="profileModal">
      <Modal.Header closeButton className="profileHeader">
        <Modal.Title>
          {user && !user.isAdmin ? "Profile Information" : "Admin Information"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <h1>
          {user && user.firstName} {user && user.lastName}
        </h1>
        <p>
          <i class="fa-solid fa-envelope"></i> {user && user.email}
        </p>
        <p>
          <i class="fa-solid fa-phone"></i>
          {user && user.mobileNo}
        </p>
        <p>
          <i class="fa-solid fa-cake-candles"></i>
          {user &&
            new Date(user.birthdate).toLocaleString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
        </p>
      </Modal.Body>
    </Modal>
  );
}
