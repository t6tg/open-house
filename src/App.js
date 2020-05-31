import React, { Component } from "react";

const liff = window.liff;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      userLineID: "",
      pictureUrl: "",
      statusMessage: "",
    };
  }

  getProfile() {
    liff.init(async () => {
      let getProfile = await liff.getProfile();
      this.setState({
        name: getProfile.displayName,
        userLineID: getProfile.userId,
        pictureUrl: getProfile.pictureUrl,
        statusMessage: getProfile.statusMessage,
      });
    });
  }

  closeLIFF() {
    liff.closeWindow();
  }

  render() {
    return (
      <div className="App">
        {this.getProfile}
        {this.state.name}
        Hi
      </div>
    );
  }
}

export default App;
