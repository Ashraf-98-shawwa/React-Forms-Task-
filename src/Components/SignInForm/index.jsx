import React, { Component } from "react";
import "./style.css";
import googleicon from "../../Images/google-icon.png";
import github from "../../Images/github.png";
import linkedin from "../../Images/linkedin.png";
import twitter from "../../Images/twitter.png";
import eye from "../../Images/eye.png";

export default class SignInForm extends Component {
  render() {
    return (
      <div className="right-side-signin">
        <div className="form-box">
          <h1>Join the game!</h1>
          <p>Go inside the best gamers social network! </p>
          <ul>
            <li>
              <a href="https">
                <img src={googleicon} alt="googleicon" />
              </a>
            </li>

            <li>
              <a href="https">
                <img src={twitter} alt="twitter" />
              </a>
            </li>
            <li>
              <a href="https">
                <img src={linkedin} alt="linkedin" />
              </a>
            </li>
            <li>
              <a href="https">
                <img src={github} alt="github" />
              </a>
            </li>
          </ul>
          <div className="or">Or</div>
          <form>
            <div className="input-box">
              <label htmlFor="email">Your email</label>
              <input id="email" type="text" placeholder="Write your email" />
            </div>
            <div style={{ position: "relative" }} className="input-box">
              <img style={{ position: "absolute",top:"50px",right:"20px",cursor:"pointer" }} src={eye} alt="eye" />
              <label htmlFor="password">Enter your password</label>
              <input id="password" type="password" placeholder="•••••••••" />
            </div>

            <div className="input-box">
              <input type="submit" value="Login" />
            </div>

            <a href="https/google.com">
              Don’t have an account?{" "}
              <span style={{ color: "blue" }}> Register</span>{" "}
            </a>
          </form>
        </div>
      </div>
    );
  }
}
