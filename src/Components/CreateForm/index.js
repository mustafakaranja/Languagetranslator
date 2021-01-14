import React, { useState } from "react";
import { Segment, Flag, Grid, Header } from "semantic-ui-react";
import ButtonForm from "../Button";
import Fieldform from "../Fields";

//

const Createform = (value) => {
  return (
    <div>
      <Fieldform />
      <ButtonForm />
    </div>
  );
};

export default Createform;
