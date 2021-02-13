import React from "react";
import Navbar from "../Routing/Navbar";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";

const Personnel = () => {
  return (
    <div>
      <Navbar />
      <p1 style={{ color: "white", marginLeft: "30px", fontSize: "40px" }}>
        Add Personnel
      </p1>
      <div style={{ padding: "5%", width: "50%" }} className="ui container">
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="first and last name"
            aria-label="Name"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">EIN #</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="EIN number"
            aria-label="Ein"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Form>
          <Form.Group>
            <Form.File id="exampleFormControlFile1" />
          </Form.Group>
        </Form>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Personnel;
