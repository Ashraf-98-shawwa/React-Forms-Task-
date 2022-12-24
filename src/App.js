import React, { Component } from "react";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";

export default class App extends Component {
  state = {
    currentpage: "sign-up",
  };
  render() {
    if (this.state.currentpage === "sign-in") {
      return (
        <div className="App">
          <SignIn AppThis={this} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <SignUp AppThis={this} />
        </div>
      );
    }
  }
}
