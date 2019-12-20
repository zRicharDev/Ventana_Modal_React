import React from "react";
import "./modal.css";
import PropTypes from "prop-types";
import logo_upc from "./../../Img/upc.png"



export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      
      <div class="modal" id="modal">
          <img id="imagen" src={logo_upc}  />
        <h2>CERTIFICADO UPC</h2>
        <div class="content">{this.props.children}</div>
        <div class="actions">
          <button class="toggle-button" onClick={this.onClose}>
            close
          </button>
        </div>


      </div>

      
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};
