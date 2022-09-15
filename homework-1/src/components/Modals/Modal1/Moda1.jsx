import React, { Component } from "react";
import "./modal1.css";
import Buttons from "../../Buttons";
import { ReactComponent as CloseLogo } from "./cross.svg";

export default class Modal1 extends Component {
  state = {
    title: "Do you want to delete this file?",
  };

  render() {
    const { show, handleClose } = this.props;
    const { title, text } = this.state;
    const buttonFirst = (
      <Buttons
        backgroundColor="rgb(0 0 0 / 20%)"
        text="Oк"
        onClick={handleClose}
      />
    );
    const buttonSecond = (
      <Buttons
        backgroundColor="rgb(0 0 0 / 20%)"
        text="Cancel"
        onClick={handleClose}
      />
    );
    const buttonLogo = (
      <CloseLogo
        backgroundColor="rgb(0 0 0 / 20%)"
        text="Cancel"
        onClick={handleClose}
      />
    );
    return (
      <div className={show}>
        <div className="modal">
          <div className="modal-main">
            <header className="header-modal">
              <h2>{title}</h2>
              {buttonLogo}
            </header>
            <main className="modal-content">
              <p>
                Once you delete this file, it won’t be possible to undo this
                action. Are you sure you want to delete it?
              </p>
            </main>

            <footer className="footer-modal">
              {buttonFirst} {buttonSecond}
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
