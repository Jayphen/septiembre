import React, { Component } from 'react';
import Button from './Button';
import CartModal from './Modal';

class ShoppingCart extends Component {
  state = {
    modalIsOpen: false,
    itemsInCart: [
      { id: 1, size: 'S', qty: 2 },
      { id: 2, size: 'S', qty: 1 },
    ],
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

  handleDelete = (id) => {
    this.setState({
      itemsInCart: this.state.itemsInCart.filter(item => (
        item.id !== id
      )),
    });
  }

  handleChange = (id) => {
    this.setState({
      itemsInCart: this.state.itemsInCart.map((item) => {
        if (item.id !== id) return item;

        return Object.assign({}, item, {
          qty: item.qty + 1,
        });
      }),
    });
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
          itemsInCart={this.state.itemsInCart}
          handleDelete={this.handleDelete}
          handleChange={this.handleChange}
        />
      </React.Fragment>
    );
  }
}

export default ShoppingCart;
