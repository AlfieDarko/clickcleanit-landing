import React from "react";
import { Form } from "semantic-ui-react";

const UserForm = () => (
  <Form size={"huge"}>
    <Form.Group widths="equal">
      <Form.Input
        fluid
        id="form-subcomponent-shorthand-input-first-name"
        label="First Name"
        placeholder="First name"
      />
      <Form.Input
        fluid
        id="form-subcomponent-shorthand-input-last-name"
        label="Last name"
        placeholder="Last name"
      />
      <Form.Input
        fluid
        id="form-subcomponent-shorthand-input-email"
        label="Email"
        placeholder="Email"
      />
    </Form.Group>
  </Form>
);

export default UserForm;
