import { Button, colors } from "@material-ui/core";
import React from "react";

import { render } from "react-dom";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";

function Cardss() {
  return (
    <Card>
      <CardHeader style={{ color: "red" }}>
        What is Data Engineering?
      </CardHeader>
      <CardBody>Learn About the Basics of the Data Enfineering</CardBody>
      <Button>Learn Now</Button>
    </Card>
  );
}

export default Cardss;
