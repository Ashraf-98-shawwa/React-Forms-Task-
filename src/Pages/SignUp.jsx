import React, { Component } from "react";
import LeftSide from "../Components/LeftSide";
import GoogleIcon from "../Images/google-icon.png";
import * as yup from "yup";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const regularExpression =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

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

  schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).matches(regularExpression).required(),
    passwordRepeat: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
    checkbox: yup
      .boolean()
      .oneOf([true], "You should check the checkbox")
      .required(),
  });

  handleChangeInput = (e) => {
    const { value, id } = e.target;
    console.log(id)
    this.setState({ [id]: value });
  };

  handleChangeCheckbox = (e) => {
    const { checked } = e.target;
    this.setState({ checkbox: checked });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.schema
      .validate({
        email: this.state.email,
        password: this.state.password,
        passwordRepeat: this.state.passwordRepeat,
        checkbox: this.state.checkbox,
      })
      .then(() => {
        console.log("valid");
        swal({
          title: "Success!",
          text: "Registed Successfully",
          icon: "success",
          timer: 2000,
          button: false,
        });
        this.setState((prevState) => ({
          dataToBeSent: {
            email: prevState.email,
            password: prevState.password,
            checkbox: prevState.checkbox,
          },
          ...defaults,
        }));
      })
      .catch((e) => {
        console.log(e.errors);
        swal({
          title: "Error!",
          text: `${e.errors}`,
          icon: "error",
          button: false,
        });
      });
  };

  render() {
    return (
      <div className="The-Page">
        <LeftSide page="sign-up" />
        <div className="right-side">
          <Link to="/Sign-in">
            <span> &lt; </span> Back
          </Link>

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
                  checked={this.state.checkbox}
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
                <Link to="/Sign-in">
                  <button type="submit">
                    <img src={GoogleIcon} alt="google-icon" />
                    login
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
