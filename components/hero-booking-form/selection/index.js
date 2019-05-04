// import {DropdownSelectorStyled} from "./styled"
import React from "react";
import { Select } from "semantic-ui-react";

const DropdownSelector = props => {
  return (
    <Select
      placeholder={props.placeholder}
      selection
      options={props.options}
      onChange={props.onChange}
      compact
    />
  );
};

export default DropdownSelector;
