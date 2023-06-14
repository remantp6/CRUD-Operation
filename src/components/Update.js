import axios from "axios";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [updatedData, setUpdatedData] = useState({
    name: "",
    email: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUpdatedData((currValue) => ({ ...currValue, [name]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://6485e6b1a795d24810b77455.mockapi.io/crud-operation/${id}`, {
        name: updatedData.name,
        email: updatedData.email,
        header: {
          "content-Type": "application/json",
        },
      })
      .then(() => {
        navigate("/read");
      });
  };

  useEffect(() => {
    axios
      .get(`https://6485e6b1a795d24810b77455.mockapi.io/crud-operation/${id}`)
      .then((response) => {
        //console.log(response.data)
        setUpdatedData(response.data);
      });
  }, [id]);
  return (
    <>
      <Container>
        <h2>Update Operation</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              value={updatedData.name}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={updatedData.email}
              onChange={handleInput}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Link to="/read">
            <Button variant="dark" className="ms-3">
              Back
            </Button>
          </Link>
        </Form>
      </Container>
    </>
  );
};

export default Update;
