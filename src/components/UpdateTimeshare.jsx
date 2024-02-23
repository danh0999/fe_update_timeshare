import { Alert, Button, Form, InputGroup } from "react-bootstrap";
import { validateFormInputs } from "./valid";
const React = require("react");
const { useState } = React;

function UpdateTimeshare() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [timeshareResales, setTimeshareResales] = useState("");
  const [timeshareRentals, setTimeshareRentals] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateFormInputs({
      fullName,
      email,
      phoneNumber,
      timeshareResales,
      timeshareRentals,
      propertyDescription,
      imageFile,
    });

    if (Object.keys(errors).length !== 0) {
      setErrors(errors);
      return;
    }

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("timeshareResales", timeshareResales);
    formData.append("timeshareRentals", timeshareRentals);
    formData.append("propertyDescription", propertyDescription);
    formData.append("imageFile", imageFile);

    // Gọi API để cập nhật hồ sơ timeshare

    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setTimeshareResales("");
    setTimeshareRentals("");
    setPropertyDescription("");
    setImageFile("");
    setErrors({});
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{ backgroundColor: "#80808026" }}
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
            }}
          >
            Update Timeshare Profile{" "}
          </h3>

          <Form.Group
            className="mb-3"
            controlId="formFullName"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Form.Label
              style={{
                width: "150px",
                marginRight: "10px",
                textAlign: "right",
                marginBottom: 0,
              }}
            >
              Full Name
            </Form.Label>
            <Form.Control
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              size="xs"
              className="form-control-sm"
              style={{ width: "calc(50% - 20px)" }}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formFullName"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Form.Label
              style={{
                width: "150px",
                marginRight: "10px",
                textAlign: "right",
                marginBottom: 0,
              }}
            >
              Name vacation
            </Form.Label>
            <Form.Control
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              size="xs"
              className="form-control-sm"
              style={{ width: "calc(50% - 20px)" }}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formEmail"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Form.Label
              style={{
                width: "150px",
                marginRight: "10px",
                textAlign: "right",
                marginBottom: 0,
              }}
            >
              Email
            </Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              size="xs"
              className="form-control-sm"
              style={{ width: "calc(50% - 20px)" }}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formPhoneNumber"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Form.Label
              style={{
                width: "150px",
                marginRight: "10px",
                textAlign: "right",
                marginBottom: 0,
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center" }}>
                Phone Number
                <img
                  src="https://seeklogo.com/images/V/viet-nam-logo-3D78D597F9-seeklogo.com.png"
                  alt="Vietnam Flag"
                  style={{ width: "28px", height: "auto", marginLeft: "5px" }}
                />
              </span>
            </Form.Label>

            <Form.Control
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+84"
              required
              size="xs"
              className="form-control-sm"
              style={{ width: "calc(50% - 20px)" }}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formTimeshareResales"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Form.Label
              style={{
                width: "150px",
                marginRight: "10px",
                textAlign: "right",
                marginBottom: 0,
              }}
            >
              Timeshare Resales
            </Form.Label>
            <InputGroup style={{ width: "50%" }}>
              <Form.Control
                type="text"
                value={timeshareResales}
                onChange={(e) => setTimeshareResales(e.target.value)}
                required
                size="xs"
              />
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formTimeshareRentals"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Form.Label
              style={{
                width: "150px",
                marginRight: "10px",
                textAlign: "right",
                marginBottom: 0,
              }}
            >
              Timeshare Rentals{" "}
            </Form.Label>
            <InputGroup style={{ width: "50%" }}>
              <Form.Control
                type="text"
                value={timeshareRentals}
                onChange={(e) => setTimeshareRentals(e.target.value)}
                required
                size="xs"
              />
              <InputGroup.Text>$/Night</InputGroup.Text>
            </InputGroup>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formPropertyDescription"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Form.Label
              style={{
                width: "150px",
                marginRight: "10px",
                textAlign: "right",
                marginBottom: 0,
              }}
            >
              Timeshare Description
            </Form.Label>
            <Form.Control
              as="textarea"
              value={propertyDescription}
              onChange={(e) => setPropertyDescription(e.target.value)}
              required
              rows={5}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formImageFile"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Form.Label
              style={{
                width: "150px",
                marginRight: "10px",
                textAlign: "right",
                marginBottom: 0,
              }}
            >
              Timeshare Property Image
            </Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              required
              size="xs"
              className="form-control-sm"
              style={{ width: "calc(50% - 20px)" }}
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

export default UpdateTimeshare;
