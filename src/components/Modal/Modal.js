import React, { Component } from 'react';

import styles from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleEscape)
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEscape)
  }

  handleEscape = e => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  }

  closeModal = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  }

  render() {
    return (
      <div className={styles.Overlay} onClick={this.closeModal}>
        <div className={styles.Modal}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
