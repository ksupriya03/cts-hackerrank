import React, { Component } from "react";
import Form from "./components/Form";
import Message from "./components/Message";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormValid: false,
    };

    this.validateAndSubmit = this.validateAndSubmit.bind(this);
  }

  validateAndSubmit(isFormValid) {
    console.log("Called with :", isFormValid);
    this.setState({ isFormValid });
  }

  render() {
    return (
      <div>
        <Form isFormValid={this.validateAndSubmit}></Form>
        <Message isValid={this.state.isFormValid}></Message>
      </div>
    );
  }
}

export default App;
