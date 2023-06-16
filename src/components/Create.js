import axios from "axios";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((currValue) => ({ ...currValue, [name]: value }));
  };

  const navigate = useNavigate(); //initializing the navigate variable using the useNavigate hook from React Router

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://6485e6b1a795d24810b77455.mockapi.io/crud-operation", {
        name: formData.name,
        email: formData.email,
        header: {
          "content-Type": "application/json",
        },
      })
      .then(() => {
        navigate("/read"); //After the POST request is sent successfully, this line calls the
        //navigate function, instructing it to navigate to the '/read' route
      });
  };
  
  return (
    <>
      <Container>
        <h2>Create Operation</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleInput}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Create;
