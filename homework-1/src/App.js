import React, { Component } from "react";

import Header from "./components/Header";
import Modal1 from "./components/Modals/Modal1";
import Modal2 from "./components/Modals/Modal2";

import "./App.css";

class App extends Component {
  state = {
    first: false,
    second: false,
  };

  modal1 = () => {
    this.setState({ first: true });
  };
  modal2 = () => {
    this.setState({ second: true });
  };
  hideModalFirst = () => {
    this.setState({ first: false });
  };
  hideModalSecond = () => {
    this.setState({ second: false });
  };
  render() {
    let firstModal = null;
    let secondModal = null;
    if (this.state.first) {
      firstModal = (
        <Modal1 show={this.state.first} handleClose={this.hideModalFirst} />
      );
    }
    if (this.state.second) {
      firstModal = (
        <Modal2 show={this.state.second} handleClose={this.hideModalSecond} />
      );
    }
    return (
      <div>
        <Header openModal1={this.modal1} openModal2={this.modal2} />
        {firstModal}
        {secondModal}
      </div>
    );
  }
}

export default App;
