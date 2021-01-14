import React from "react";
import LanguageContext from "../../Contexts/LanguageContext";

const ButtonForm = (props) => {
  console.log(context);
  return (
    <div>
      <div className="ui primary button"> submit</div>
    </div>
  );
};
ButtonForm.contextType = LanguageContext;

export default ButtonForm;
