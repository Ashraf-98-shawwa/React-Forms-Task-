import React, { Component } from "react";
import LeftSide from "../Components/LeftSide";
import SignInForm from "../Components/SignInForm";

export default class SignIn extends Component {
  render() {
    return (
      <div className="The-Page">
        <LeftSide page="sign-in" />
        <SignInForm />
      </div>
    );
  }
}
