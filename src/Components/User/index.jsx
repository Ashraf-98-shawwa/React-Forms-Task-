import React, { Component } from "react";
import "./style.css";
import user from "../../Images/user.png";
export default class User extends Component {
  render() {
    return (
      <div className="user">
        <h2>
          Welcome back,<span>Jenny!</span>
        </h2>
        <img src={user} alt="user-pic" />
      </div>
    );
  }
}
