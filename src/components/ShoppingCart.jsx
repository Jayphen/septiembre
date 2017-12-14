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

  render() {
    return (
      <React.Fragment>
        <Button
          text="Added! View shopping bag"
          handleClick={this.openModal}
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
