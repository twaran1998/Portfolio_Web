import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
const Projects = () => {
  return (
    <div>
      <Stack gap={5}>
        <Stack gap={3}>
          <Row xs={1} md={1} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
              <Stack gap={3}>
                <Row xs={12}>
                  <Col>
                    <Card>
                      <Card.Img
                        variant="top"
                        style={{ width: "auto", height: "150px" }}
                        src="https://miro.medium.com/max/800/0*E2X1G3PbGBH1xn3s.png"
                      />
                      <Card.Body>
                        <Card.Title>Expense Visual Tracker </Card.Title>
                        <Card.Text>
                          <ol>
                            <li>
                              {""}
                              Frontend built using React, a popular JavaScript
                              library for building user interfaces.
                            </li>
                            <li>
                              {""}
                              Styling and visually appealing user interface
                              achieved with React-Bootstrap, a UI library for
                              React.
                            </li>
                            <li>
                              {""}
                              Users can add expenses for each month. • Chart
                              representation of expenses for every month,
                              implemented using a charting library such as
                              Chart.js.
                            </li>
                            <li>
                              {""}
                              User-friendly and visually appealing way for
                              people to manage and understand their expenses.
                            </li>
                          </ol>
                        </Card.Text>
                        <Stack direction="horizontal" gap={3}>
                          <Badge bg="danger">React</Badge>{" "}
                          <Badge bg="danger">HTML5</Badge>{" "}
                          <Badge bg="danger">React-Bootstrap</Badge>{" "}
                          <Badge bg="danger">CSS3</Badge>{" "}
                          <Button variant="warning" size="sm">
                            <Nav.Link href="https://github.com/twaran1998/Expenses.github.io/tree/main/Monthly%20Expenses%20Tracker%20Website">
                              Visit GitHub
                            </Nav.Link>
                          </Button>
                        </Stack>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col>
                    <Card>
                      <Card.Img
                        variant="top"
                        style={{ width: "auto", height: "150px" }}
                        src="https://miro.medium.com/max/800/0*E2X1G3PbGBH1xn3s.png"
                      />
                      <Card.Body>
                        <Card.Title>City Of Gold Tour</Card.Title>
                        <Card.Text>
                          <ol>
                            <li>
                              HTML5 and CSS3 used to create visually appealing
                              interfaces.
                            </li>
                            <li>
                              {" "}
                              JavaScript and jQuery utilized to add
                              interactivity and dynamic elements.
                            </li>
                            <li>
                              CSS grid and flexbox used for a flexible and
                              responsive layout.
                            </li>
                            <li>
                              Smooth animations and visually appealing effects
                              created with transformations and transitions.
                              Strong understanding of front-end development
                              concepts demonstrated.
                            </li>
                            <li>
                              {" "}
                              Engaging and user-friendly website created as a
                              result.
                            </li>
                          </ol>
                        </Card.Text>
                        <Stack direction="horizontal" gap={3}>
                          <Badge bg="danger">HTML5</Badge>{" "}
                          <Badge bg="danger">JavaScript</Badge>{" "}
                          <Badge bg="danger">CSS3</Badge>{" "}
                          <Badge bg="danger">jQuery</Badge>{" "}
                          <Button variant="warning" size="sm">
                            <Nav.Link href="https://twaran1998.github.io/packetcodeofficial.github.io/City%20Of%20Gold%20Tour/">
                              Visit Website
                            </Nav.Link>
                          </Button>
                        </Stack>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Stack>
            ))}
          </Row>
        </Stack>
      </Stack>
    </div>
  );
};

export default Projects;
