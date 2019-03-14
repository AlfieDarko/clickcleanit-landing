import { Dropdown } from "semantic-ui-react";

const DropdownSelector = props => (
  <Dropdown placeholder={props.placeholder} selection options={props.options} />
);

export default DropdownSelector;
