// import {DropdownSelectorStyled} from "./styled"
import React from 'react'
import { Select } from 'semantic-ui-react'

const DropdownSelector = props => (
  <Select placeholder={props.placeholder} selection options={props.options} compact/>
);

export default DropdownSelector;
