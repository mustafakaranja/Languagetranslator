import React, { useState } from "react";
import { Flag, Header } from "semantic-ui-react";
import ButtonForm from "../Button";
import Fieldform from "../Fields";

const Createform = () => {
  const [LanguageChange, setLanguageChange] = useState("english");
  return (
    <div>
      <Header as="h3">
        {" "}
        translate to:
        <Header.Content>
          <Flag name="us" onClick={(e) => setLanguageChange("english")} />
          <Flag name="eg" onClick={(e) => setLanguageChange("Egypt")} />
          <Flag name="fr" onClick={(e) => setLanguageChange("France")} />
          <Flag name="in" onClick={(e) => setLanguageChange("India")} />
        </Header.Content>
      </Header>

      <Fieldform />
      <ButtonForm />
      {LanguageChange}
    </div>
  );
};

export default Createform;
