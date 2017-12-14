import React, { Component } from 'react';
import Button from './Button';
import CartModal from './Modal';

class ShoppingCart extends Component {
  state = {
    modalIsOpen: false,
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  handleKeyDown = (evt) => {
    // Trigger modal on space or enter
    if (evt.key === ' ' || evt.key === 13) {
      evt.preventDefault();
      this.openModal();
    }
  }

  render() {
    return (
      <React.Fragment>
        <Button
          text="Added! View shopping bag"
          handleClick={this.openModal}
          handleKeyDown={this.handleKeyDown}
        />
        <CartModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
        />
      </React.Fragment>
    );
  }
}

export default ShoppingCart;
