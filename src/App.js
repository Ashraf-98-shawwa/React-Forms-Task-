import React, { Component } from "react";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";

export default class App extends Component {
  state = {
    currentpage: "sign-in",
  };

  changePage = (target) => {
    this.setState({ currentpage: target });
  }

  render() {
    if (this.state.currentpage === "sign-in") {
      return (
        <div className="App">
          <SignIn changePage={this.changePage} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <SignUp changePage={this.changePage} />
        </div>
      );
    }
  }
}
