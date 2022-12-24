import React, { Component } from "react";
import "./style.css";
import GoogleIcon from "../../Images/google-icon.png";

export default class SignUpForm extends Component {
  render() {
    return (
      <div className="right-side">
        <a href="https://www.google.com/">
          <span> &lt; </span> Back
        </a>

        <div className="form-box">
          <h1>Register Individual Account!</h1>
          <p>
            For the purpose of gamers regulation, your details are required.
          </p>
          <form>
            <div className="input-box">
              <label htmlFor="email">Email address*</label>
              <input id="email" type="text" placeholder="Enter email address" />
            </div>
            <div className="input-box">
              <label htmlFor="password">Create password*</label>
              <input id="password" type="password" placeholder="Password" />
              <div className="password-strength"></div>
              <p className="password-check-text">
                Not bad but you know you can do it better
              </p>
            </div>
            <div className="input-box">
              <label htmlFor="repeat-password">Repeat password*</label>
              <input
                id="repeat-password"
                type="password"
                placeholder="Repeat password"
              />
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "5px" }}
              className="input-box"
            >
              <input
                style={{ display: "inline", marginTop: "-5px" }}
                id="terms"
                type="checkbox"
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
    );
  }
}
