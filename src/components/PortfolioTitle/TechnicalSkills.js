import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, Stack } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
const TechnicalSkills = () => {
  return (
    <div>
      <Stack gap={4}>
        <h1> Technical Skills </h1>

        <ListGroup>
          <ListGroup.Item>
            <h3>
              <Icon.Database color="red" size={25} style={{ margin: "0.1" }} />{" "}
              Database
            </h3>
            MySQL, MongoDB
          </ListGroup.Item>

          <ListGroup.Item>
            <h3>
              <Icon.Laptop color="#111" size={25} style={{ margin: "0.1" }} />{" "}
              Laptop
            </h3>
            Windows
          </ListGroup.Item>

          <ListGroup.Item>
            <h3>
              <Icon.BarChart
                color="black"
                size={25}
                style={{ margin: "0.1" }}
              />{" "}
              Version
            </h3>
            Control Tool GitLab, GitHub, Git ,Git Bash,Git ,GitKraken
          </ListGroup.Item>

          <ListGroup.Item>
            <h3>
              <Icon.Tools color="red" size={25} style={{ margin: "0.1" }} />{" "}
              Tools
            </h3>
            <p>
              Adobe Xd, Postman, API tool, PhpMyAdmin, Chrome console, Firebase
              console, Android Studio basics.
            </p>
          </ListGroup.Item>
        </ListGroup>
      </Stack>
    </div>
  );
};

export default TechnicalSkills;
