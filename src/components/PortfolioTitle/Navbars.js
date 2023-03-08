import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Stack } from "react-bootstrap";
const Navbars = () => {
  return (
    <div>
      <Navbar bg="black" variant="dark">
        <Nav className="me-auto">
          <Stack direction="horizontal" gap={12}>
            <Nav.Link href="#home">Welcome</Nav.Link>
            <Nav.Link href="#features">Projects</Nav.Link>
            <Nav.Link href="#pricing">Technical Skills</Nav.Link>
            <Nav.Link href="#pricing">Get In Touch</Nav.Link>
          </Stack>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navbars;
