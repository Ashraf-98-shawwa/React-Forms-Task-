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

  componentDidMount() {
    this.checkStrength();
  }
  handleChangeInput = (e) => {
    const { value, id } = e.target;
    this.setState({ [id]: value });
    this.checkStrength();
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

    document.getElementById("checkbox").checked = false;
  };

  changepage = (e) => {
    e.preventDefault();
    this.props.AppThis.setState({ currentpage: "sign-in" });
  };

  checkStrength = () => {
    let password = document.querySelector("#password").value;
    let checkTest = document.querySelector(".password-check-text");
    let PasswordBar = document.querySelector(".password-strength");

    if (password.length < 5) {
      PasswordBar.style.setProperty("--widthValue", "25%");
      PasswordBar.style.setProperty("--colorValue", "red");
      checkTest.innerHTML = "Password is too short";
      checkTest.style.color = "red";
    }
    if (password.length > 5 && password.length < 10) {
      PasswordBar.style.setProperty("--widthValue", "50%");
      PasswordBar.style.setProperty("--colorValue", "#ffc107");
      checkTest.innerHTML = "Not bad but you know you can do it better";
      checkTest.style.color = "#ffc107";
    }
    if (password.length > 10 && password.length < 15) {
      PasswordBar.style.setProperty("--widthValue", "70%");
      PasswordBar.style.setProperty("--colorValue", "#ff7b07");
      checkTest.innerHTML = "Good Password ";
      checkTest.style.color = "#ff7b07";
    }
    if (password.length > 15) {
      PasswordBar.style.setProperty("--widthValue", "100%");
      PasswordBar.style.setProperty("--colorValue", "green");
      checkTest.innerHTML = "Strong Password";
      checkTest.style.color = "green";
    }
  };

  showCheck = () => {
    document.querySelector(".password-check-text").style.display = "block";
    document.querySelector(".password-strength").style.display = "block";
  };

  render() {
    return (
      <div className="The-Page">
        <LeftSide page="sign-up" />
        <div className="right-side">
          <a onClick={this.changepage} href="https">
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
                  onFocus={this.showCheck}
                />
                <div
                  style={{ display: "none" }}
                  className="password-strength"
                ></div>
                <p style={{ display: "none" }} className="password-check-text">
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
                <input
                  onClick={this.handleSubmit}
                  type="submit"
                  value="Register Account"
                />
              </div>
              <span>or</span>
              <div className="input-box">
                <button onClick={this.changepage} type="submit">
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
