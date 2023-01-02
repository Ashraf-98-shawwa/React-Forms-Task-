import React, { Component } from "react";

export default class Input extends Component {
  render() {
    if (this.props.passwordMessage) {
      return (
        <div className="input-box">
          <label htmlFor={this.props.id}>{this.props.label}</label>
          <input
            id={this.props.id}
            type={this.props.type}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.onChange}
          />
          <div style={{ display: "none" }} className="password-strength"></div>
          <p style={{ display: "none" }} className="password-check-text">
            Not bad but you know you can do it better
          </p>
        </div>
      );
    } else
      return (
        <div className="input-box">
          <label htmlFor={this.props.id}>{this.props.label}</label>
          <input
            id={this.props.id}
            type={this.props.type}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.onChange}
          />
        </div>
      );
  }
}
