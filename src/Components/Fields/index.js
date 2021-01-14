import React from "react";
import { Divider, Form, Input, Label } from "semantic-ui-react";
import LanguageContext from "../../Contexts/LanguageContext";

const Fieldform = () => {
  return (
    <div>
      <Form fluid>
        <Divider horizontal>Fields</Divider>
        <Form.Field>
          <label>
            <LanguageContext.Consumer>
              {(value) =>
                value === "english" ? "Enter the text" : "Likho kuch"
              }
            </LanguageContext.Consumer>
          </label>
          <Input type="text" />
        </Form.Field>
      </Form>
    </div>
  );
};

export default Fieldform;
