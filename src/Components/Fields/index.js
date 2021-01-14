import React from "react";
import { Form, Input } from "semantic-ui-react";

const Fieldform = () => {
  return (
    <div>
      <Form fluid>
        <Form.Group>
          <Input type="text" label="Enter the Field" />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Fieldform;
