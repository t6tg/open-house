import React, { Component } from "react";
import FormRegis from "./components/FormRegis";

class App extends Component {
  render() {
    return (
      <div
        className="container mx-auto flex justify-center"
        style={{ width: "80%" }}
      >
        <FormRegis />
      </div>
    );
  }
}

export default App;
