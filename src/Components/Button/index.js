import React from "react";
import LanguageContext from "../../Contexts/LanguageContext";

class ButtonForm extends React.Component {
  render() {
    console.log(this.context);
    return (
      <div>
        <div className="ui primary button">
          <LanguageContext.Consumer>
            {(value) => (value === "english" ? "submit" : "Dabaado")}
          </LanguageContext.Consumer>
        </div>
      </div>
    );
  }
}
ButtonForm.contextType = LanguageContext;

export default ButtonForm;
