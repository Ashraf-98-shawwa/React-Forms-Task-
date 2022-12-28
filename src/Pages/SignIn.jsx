import React, { Component } from "react";
import LeftSide from "../Components/LeftSide";
import googleicon from "../Images/google-icon.png";
import github from "../Images/github.png";
import linkedin from "../Images/linkedin.png";
import twitter from "../Images/twitter.png";
import eye from "../Images/eye.png";
import * as yup from "yup";
import swal from "sweetalert"

const regularExpression =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const defaults = {
  email: "",
  password: "",
};

const Backend = {
  email: "Backend@email.com",
  password: "123321!Aa",
};


export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
    dataToBeSent: Backend,
  };

  schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8,"Password should be more than 8 characters").matches(regularExpression,'Password should be strong (numbers,capital and small letters ,sympol').required(),
  });

  componentDidMount() {
    this.setState((prevState) => ({
      email: prevState.dataToBeSent.email,
      password: prevState.dataToBeSent.password,
    }));


  }

  handleChangeInput = (e) => {
    const { value, id } = e.target;
    this.setState({ [id]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.schema
      .validate(
        {
          email: this.state.email,
          password: this.state.password,
        },
        { abortEarly: true }
      )
      .then(() => {
        console.log("valid");
        swal({
          title: "Success!",
          text: "logged In",
          icon: "success",
          timer: 2000,
          button: false,
        });
        this.setState((prevState) => ({
          dataToBeSent: {
            email: prevState.email,
            password: prevState.password,
          },
          ...defaults,
        }));
      })
      .catch((e) => 
      {
        console.log(e.errors)
 swal({
   title: "Error!",
   text: `${e.errors}`,
   icon: "error",
   button: false,
 });
      }
        
      
      );
  };

  showpassword = () => {
    let password = document.getElementById("password");

    if (password.type === "password") {
      password.setAttribute("type", "text");
    } else {
      password.setAttribute("type", "password");
    }
  };

  changepage = (e) => {
    e.preventDefault();
    this.props.AppThis.setState({ currentpage: "sign-up" });
  };

  render() {
    return (
      <div className="The-Page">
        <LeftSide page="sign-in" />
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
            <form onSubmit={this.handleSubmit}>
              <div className="input-box">
                <label htmlFor="email">Your email</label>
                <input
                  value={this.state.email}
                  onChange={this.handleChangeInput}
                  id="email"
                  type="text"
                  placeholder="Write your email"
                />
              </div>
              <div style={{ position: "relative" }} className="input-box">
                <img
                  style={{
                    position: "absolute",
                    top: "50px",
                    right: "20px",
                    cursor: "pointer",
                  }}
                  src={eye}
                  alt="eye"
                  onClick={this.showpassword}
                />
                <label htmlFor="password">Enter your password</label>
                <input
                  value={this.state.password}
                  onChange={this.handleChangeInput}
                  id="password"
                  type="password"
                  placeholder="•••••••••"
                />
              </div>

              <div className="input-box">
                <input type="submit" value="Login" />
              </div>

              <a href="http" onClick={this.changepage}>
                Don’t have an account?
                <span style={{ color: "blue" }}> Register</span>
              </a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
