import { useState } from "react";
import { Flag, Grid, Header, Segment } from "semantic-ui-react";
import Createform from "./Components/CreateForm";
import LanguageContext from "./Contexts/LanguageContext";

const App = () => {
  const [LanguageChange, setLanguageChange] = useState("english");

  return (
    <div>
      <Grid stretched centered>
        <Grid.Column style={{ maxWidth: 500, marginTop: 200 }}>
          <Segment raised>
            <Header>
              <h2> Translate to:</h2>
              <Header.Content>
                <Flag name="us" onClick={() => setLanguageChange("english")} />
                <Flag name="in" onClick={() => setLanguageChange("India")} />
              </Header.Content>
            </Header>
            <LanguageContext.Provider value={LanguageChange}>
              <Createform />
            </LanguageContext.Provider>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default App;
