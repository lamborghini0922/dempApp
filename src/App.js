import React from "react";

import ButtonAppBar from "./components/ButtonAppBar";
import Main from "./components/Main";

class App extends React.Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <Main />
      </div>
    );
  }
}

export default App;
