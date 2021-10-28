import { Button, colors } from "@material-ui/core";
import React from "react";

import { render } from "react-dom";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";

function Cardss() {
  return (
    <Card>
      <CardHeader className="card-head">What is Data Engineering?</CardHeader>
      <CardBody className="card-body">
        Learn About the Basics of the Data Enfineering
      </CardBody>
      <Button class="card-btn">Learn Now</Button>
    </Card>
  );
}

export default Cardss;
