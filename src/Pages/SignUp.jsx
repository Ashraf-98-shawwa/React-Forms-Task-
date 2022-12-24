import React, { Component } from 'react'
import LeftSide from "../Components/LeftSide"
import SignUpForm from "../Components/SignUpForm";

export default class SignUp extends Component {
  render() {
    return (
        <div className="The-Page">
        <LeftSide page="sign-up" />
        <SignUpForm />
        
      </div>
    )
  }
}
