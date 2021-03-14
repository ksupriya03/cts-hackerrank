import React, { Component } from "react";
import { PropTypes } from "prop-types";
import {
  VALID_EMAIL,
  VALID_NAME,
  VALID_PHONE,
  VALID_URL,
} from "../utils/regexp";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailValid: false,
      isNameValid: false,
      isPhoneValid: false,
      isUrlValid: false,
    };

    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitForm(event) {
    event.preventDefault();

    this.props.isFormValid &&
      this.props.isFormValid(
        this.state.isEmailValid &&
          this.state.isNameValid &&
          this.state.isPhoneValid &&
          this.state.isUrlValid
      );
  }

  handleChange(event) {
    const value = event.target.value;

    switch (event.currentTarget.name) {
      case "name":
        this.setState({ isNameValid: VALID_NAME.test(value) });
        break;
      case "email":
        this.setState({ isEmailValid: VALID_EMAIL.test(value) });
        break;
      case "phone":
        this.setState({ isPhoneValid: VALID_PHONE.test(value) });
        break;
      case "url":
        this.setState({ isUrlValid: VALID_URL.test(value) });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="row">
        <h1 className="text-center">Form Validation</h1>
        <form onSubmit={this.submitForm} noValidate>
          <h3>Name:</h3>
          <input
            type="text"
            id="name"
            name="name"
            className="name"
            placeholder="Enter your name"
            onChange={this.handleChange}
            minLength={3}
            maxLength={30}
          />
          <h3>Email:</h3>
          <input
            type="email"
            id="email"
            name="email"
            className="email"
            placeholder="Enter your email"
            onChange={this.handleChange}
          />
          <h3>Phone:</h3>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="phone"
            placeholder="Enter your phone number"
            onChange={this.handleChange}
            minLength={10}
            maxLength={10}
          />
          <h3>Blog URL:</h3>
          <input
            type="url"
            id="url"
            name="url"
            className="url"
            placeholder="Enter your blog URL"
            onChange={this.handleChange}
          />
          <div className="small-6 small-centered text-center columns">
            <button
              type="submit"
              onClick={this.submitForm}
              className="button success expand round text-center"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  isFormValid: PropTypes.func,
};

export default Form;
