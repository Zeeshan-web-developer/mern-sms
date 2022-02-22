
import React from "react";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.MIDDLE,
};
function Routes() {
  return <Provider template={AlertTemplate} {...options}></Provider>;
}

export default Routes;
