import React from "react";
import { Button, AltButton } from "./styled";

const LearnMore = props => {
  return <AltButton>{props.children}</AltButton>;
};

export default LearnMore;
