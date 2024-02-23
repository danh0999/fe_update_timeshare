import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { validateFormInputs } from "./valid";

function UpdateRoom() {
  const [roomId, setRoomId] = useState("");
  const [status, setStatus] = useState("");
  const [amenities, setAmenities] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [capacity, setCapacity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateFormInputs({
      roomId,
      status,
      amenities,
      contactInfo,
      capacity,
      price,
      description,
      images,
    });

    if (Object.keys(errors).length !== 0) {
      setErrors(errors);
      return;
    }

    // Call API to update room information
    // ...

    // Clear form inputs and hide alert
    setRoomId("");
    setStatus("");
    setAmenities("");
    setContactInfo("");
    setCapacity("");
    setPrice("");
    setDescription("");
    setImages([]);
    setErrors({});
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{ backgroundColor: "rgba(128, 128, 128, 0.15)" }}
    >
      <div
        className="w-50"
        style={{
          backgroundColor: "white",
          borderRadius: "30px",
          border: "1px solid #ccc",
          padding: "18px",
        }}
      >
        <Form onSubmit={handleSubmit}>
          {Object.keys(errors).length !== 0 && (
            <Alert variant="danger">
              {Object.values(errors).map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </Alert>
          )}
          <h3
            className="mb-4"
            style={{
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#007bff",
              textTransform: "uppercase",
              letterSpacing: "1px",
              animation: "pulse 1s infinite",
              marginBottom: "20px",
            }}
          >
            Update Room Information
          </h3>

          <Form.Group
            className="mb-3"
            controlId="formRoomId"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Form.Label
              style={{
                width: "120px",
                marginRight: "10px",
                textAlign: "right",
                marginBottom: 0,
              }}
            >
              Room ID
            </Form.Label>
            <Form.Control
              type="text"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              required
              className="form-control-sm"
              style={{ width: "60%" }}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formStatus"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Form.Label
              style={{
                width: "120px",
                marginRight: "10px",
                textAlign: "right",
                marginBottom: 0,
              }}
            >
              Status
            </Form.Label>
            <Form.Control
              as="select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
              className="form-control-sm"
              style={{ width: "60%" }}
            >
              <option value="">Select Status</option>
              <option value="available">Available</option>
              <option value="booked">Booked</option>
              <option value="maintenance">Under Maintenance</option>
            </Form.Control>
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formAmenities"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Form.Label
              style={{
                width: "120px",
                marginRight: "10px",
                textAlign: "right",
                marginBottom: 0,
              }}
            >
              Amenities
            </Form.Label>
            <Form.Control
              as="textarea"
              value={amenities}
              onChange={(e) => setAmenities(e.target.value)}
              required
              className="form-control-sm"
              style={{ width: "60%" }}
              rows={5}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formContactInfo"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Form.Label
              style={{
                width: "120px",
                marginRight: "10px",
                textAlign: "right",
                marginBottom: 0,
              }}
            >
              Contact Information
            </Form.Label>
            <Form.Control
              type="text"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              required
              className="form-control-sm"
              style={{ width: "60%" }}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formCapacity"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Form.Label
              style={{
                width: "120px",
                marginRight: "10px",
                textAlign: "right",
                marginBottom: 0,
              }}
            >
              Capacity
            </Form.Label>
            <Form.Control
              type="number"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              required
              className="form-control-sm"
              style={{ width: "60%" }}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formPrice"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Form.Label
              style={{
                width: "120px",
                marginRight: "10px",
                textAlign: "right",
                marginBottom: 0,
              }}
            >
              Price per Night
            </Form.Label>
            <Form.Control
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="form-control-sm"
              style={{ width: "60%" }}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formDescription"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Form.Label
              style={{
                width: "120px",
                marginRight: "10px",
                textAlign: "right",
                marginBottom: 0,
              }}
            >
              Description
            </Form.Label>
            <Form.Control
              as="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="form-control-sm"
              style={{ width: "60%" }}
              rows={5}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formImages"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Form.Label
              style={{
                width: "120px",
                marginRight: "10px",
                textAlign: "right",
                marginBottom: 0,
              }}
            >
              Images
            </Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setImages(e.target.files)}
              required
              className="form-control-sm"
              style={{ width: "60%" }}
            />
          </Form.Group>

          <Button variant="primary" type="submit" size="lg">
            Save Changes
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default UpdateRoom;
