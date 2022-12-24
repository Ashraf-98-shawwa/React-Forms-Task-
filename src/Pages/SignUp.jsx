import React, { Component } from "react";
import LeftSide from "../Components/LeftSide";
import GoogleIcon from "../Images/google-icon.png";

const defaults = {
  email: "",
  password: "",
  passwordRepeat: "",
  checkbox: false,
};

const Backend = {
  email: "",
  password: "",
  checkbox: false,
};

export default class SignUp extends Component {
  state = {
    email: "",
    password: "",
    passwordRepeat: "",
    checkbox: false,
    dataToBeSent: Backend,
  };

  handleChangeInput = (e) => {
    const { value, id } = e.target;
    this.setState({ [id]: value });
  };


  handleChangeCheckbox = (e) => {
    const { checked } = e.target;
    this.setState({ checkbox: checked });
  };


  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      dataToBeSent: {
        email: prevState.email,
        password: prevState.password,
        checkbox: prevState.checkbox,
      },
      ...defaults,
    }));
  };
  render() {
    return (
      <div className="The-Page">
        <LeftSide page="sign-up" />
        <div className="right-side">
          <a href="https://www.google.com/">
            <span> &lt; </span> Back
          </a>

          <div className="form-box">
            <h1>Register Individual Account!</h1>
            <p>
              For the purpose of gamers regulation, your details are required.
            </p>
            <form onSubmit={this.handleSubmit}>
              <div className="input-box">
                <label htmlFor="email">Email address*</label>
                <input
                  id="email"
                  type="text"
                  placeholder="Enter email address"
                  value={this.state.email}
                  onChange={this.handleChangeInput}
                />
              </div>
              <div className="input-box">
                <label htmlFor="password">Create password*</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChangeInput}
                />
                <div className="password-strength"></div>
                <p className="password-check-text">
                  Not bad but you know you can do it better
                </p>
              </div>
              <div className="input-box">
                <label htmlFor="repeat-password">Repeat password*</label>
                <input
                  id="passwordRepeat"
                  type="password"
                  placeholder="Repeat password"
                  value={this.state.passwordRepeat}
                  onChange={this.handleChangeInput}
                />
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
                className="input-box"
              >
                <input
                  style={{ display: "inline", marginTop: "-5px" }}
                  id="checkbox"
                  type="checkbox"
                  onChange={this.handleChangeCheckbox}
                />
                <label style={{ display: "inline" }} htmlFor="terms">
                  I agree to terms & conditions
                </label>
              </div>
              <div className="input-box">
                <input type="submit" value="Register Account" />
              </div>
              <span>or</span>
              <div className="input-box">
                <button type="submit">
                  <img src={GoogleIcon} alt="google-icon" />
                  login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
