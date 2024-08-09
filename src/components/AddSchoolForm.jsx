import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const AddSchoolForm = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
    address: "",
    city: "",
    state: "",
    contact: "",
    email: "",
  });

  const [errors, setErrors] = useState({}); // To store validation errors

  const validate = () => {
    const newErrors = {};

    // Check if fields are strings
    if (!formData.schoolName.trim())
      newErrors.schoolName = "School Name is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.state.trim()) newErrors.state = "State is required.";

    // Validate contact as a number
    if (!/^\d+$/.test(formData.contact))
      newErrors.contact = "Contact must be a number.";
    if (formData.contact.trim() === "")
      newErrors.contact = "Contact is required.";

    // Validate email
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";
    if (formData.email.trim() === "") newErrors.email = "Email is required.";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await axios.post(
        "http://localhost:8080/schools/saveSchoolDetails",
        formData
      );
      alert("School added successfully");
      setFormData({
        schoolName: "",
        address: "",
        city: "",
        state: "",
        contact: "",
        email: "",
      });
      setErrors({}); // Clear errors on successful submit
      // Redirect if needed
    } catch (error) {
      console.error("Error adding school:", error);
      alert("Failed to add school");
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col
          xs={12}
          md={6}
          lg={5}
          className="my-3 border border-secondary rounded p-3"
        >
          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>School Name</Form.Label>
              <Form.Control
                type="text"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                placeholder="Enter School Name Here..."
                isInvalid={!!errors.schoolName}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.schoolName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter Address"
                isInvalid={!!errors.address}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter City"
                isInvalid={!!errors.city}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupState">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter State"
                isInvalid={!!errors.state}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupContact">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter Contact"
                isInvalid={!!errors.contact}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.contact}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                isInvalid={!!errors.email}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddSchoolForm;
