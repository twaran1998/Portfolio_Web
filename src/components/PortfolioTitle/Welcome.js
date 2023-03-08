import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "react-bootstrap/Nav";

import * as Icon from "react-bootstrap-icons";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import { Row, Col } from "react-bootstrap";
const Welcome = () => {
  return (
    <div>
      <Stack gap={3}>
        {""}

        <Card>
          <Card.Header as="h2">TWARAN SAHAI </Card.Header>

          <Card.Img
            variant="top"
            style={{ width: "18rem" }}
            src="https://media.licdn.com/dms/image/C5603AQGYRAZzs7NC5w/profile-displayphoto-shrink_800_800/0/1655573291578?e=1680134400&v=beta&t=VLCLgdOUUfAepbJKVr9nt1rLumPZQx72weN0HXF5MY0"
          />

          <Card.Body>
            <Card.Title>
              <h3>Full Stack Software Developer</h3>
            </Card.Title>
            <Card.Text>
              <h5>
                I create a seamless experience for users from front-end to
                back-end.
              </h5>
            </Card.Text>

            <Row xs="auto">
              <Col>
                {" "}
                <Nav.Link href="https://github.com/twaran1998">
                  <Icon.Github
                    color="gray"
                    size={25}
                    style={{ margin: "0.1" }}
                  />
                </Nav.Link>{" "}
              </Col>
              <Col>
                <Nav.Link href="https://www.linkedin.com/in/twaran-sahai-1232ab16b/">
                  <Icon.Linkedin
                    color="gray"
                    size={25}
                    style={{ margin: "0.1" }}
                  />
                </Nav.Link>{" "}
              </Col>
              <Col>
                <Nav.Link href="https://www.instagram.com/sahaitwaran/">
                  <Icon.Instagram
                    color="gray"
                    size={25}
                    style={{ margin: "0" }}
                  />
                </Nav.Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Stack>
    </div>
  );
};

export default Welcome;
