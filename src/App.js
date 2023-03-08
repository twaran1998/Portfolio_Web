import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Stack from "react-bootstrap/Stack";
import Navbars from "./components/PortfolioTitle/Navbars";
import Welcome from "./components/PortfolioTitle/Welcome";
import Projects from "./components/PortfolioTitle/Projects";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TechnicalSkills from "./components/PortfolioTitle/TechnicalSkills";
import GetInTouch from "./components/PortfolioTitle/GetInTouch";
function App() {
  return (
    <div>
      <Container>
        <Stack direction="vertical" gap={3}>
          <Navbars />
          <Welcome />
          <Row xs="auto">
            <Col>
              <Projects />
            </Col>
          </Row>
          <TechnicalSkills />
          <GetInTouch />
        </Stack>
      </Container>
    </div>
  );
}

export default App;
