import React from "react";
import { Stack } from "react-bootstrap";

const GetInTouch = () => {
  return (
    <div>
      <Stack direction="vertical" gap={4}>
        <h1>Get In Touch</h1>
        <Stack className="bg-light" direction="horizontal" gap={3}>
          <span className="square  rounded">
            <h3>Email: </h3>
            <p>twaransahai28@gmail.com</p>
          </span>
        </Stack>
        <Stack className="bg-white" direction="horizontal" gap={3}>
          <span className="square  rounded">
            <h3>Phone: </h3>
            <p>+1 647-865-3460</p>
          </span>
        </Stack>
        <Stack className="bg-light" direction="horizontal" gap={3}>
          <span className="square  rounded">
            <h3>Address: </h3>
            <p>Kitchener - Waterloo Region</p>
          </span>
        </Stack>
      </Stack>
    </div>
  );
};

export default GetInTouch;
