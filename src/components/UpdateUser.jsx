import { Alert, Button, Form } from "react-bootstrap";
import { validateFormInputs } from "./valid";
const React = require("react");
const { useState } = React;

function UpdateUser() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateFormInputs({
      fullName,
      email,
      phoneNumber,
      password,
    });

    if (Object.keys(errors).length !== 0) {
      setErrors(errors);
      return;
    }

    // Gọi API để cập nhật thông tin người dùng

    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
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
            Update User Profile{" "}
          </h3>

          <Form.Group
            className="mb-3"
            controlId="formFullName"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Form.Label
              style={{
                width: "150px",
                marginRight: "-33px",
                textAlign: "revert-layer",
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
              style={{ width: "calc(58% - 20px)" }}
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
                marginRight: "-33px",
                textAlign: "revert-layer",
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
              style={{ width: "calc(58% - 20px)" }}
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
              style={{ width: "calc(53% - 17px)" }}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formPassword"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Form.Label
              style={{
                width: "150px",
                marginRight: "-33px",
                textAlign: "revert-layer",
                marginBottom: 0,
              }}
            >
              Password
            </Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "calc(58% - 20px)" }}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            size="lg"
            style={{ marginTop: "20px" }}
          >
            Save Changes
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default UpdateUser;
