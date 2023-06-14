import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Read = () => {
  const [readData, setReadData] = useState([]);
  const getData = () => {
    axios
      .get("https://6485e6b1a795d24810b77455.mockapi.io/crud-operation")
      .then((response) => {
        //console.log(response.data)
        setReadData(response.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(
        `https://6485e6b1a795d24810b77455.mockapi.io/crud-operation/${id}`
      )
      .then(() => {
        getData();
      });
  };

  return (
    <>
      <Container>
        <h2>Read Operation</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th></th>
              <th></th> 
            </tr>
          </thead>
          {readData.map((input) => {
            return (
              <tbody key={input.id}>
                <tr>
                  <td>{input.id}</td>
                  <td>{input.name}</td>
                  <td>{input.email}</td>
                  <td>
                    <Link to={`/update/${input.id}`}>
                      <Button variant="success">Edit</Button>
                    </Link>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(input.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
        <Link to="/">
          <Button variant="dark">Back</Button>
        </Link>
      </Container>
    </>
  );
};

export default Read;
