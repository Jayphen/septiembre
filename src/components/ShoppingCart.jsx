import React, { Component } from 'react';
import Button from './Button';
import CartModal from './Modal';
import products from '../data/products';

class ShoppingCart extends Component {
  state = {
    modalIsOpen: false,
    itemsInCart: [{ id: 1, size: 'S', qty: 2 }, { id: 2, size: 'S', qty: 1 }],
    products: [],
    discount: 0,
    productsLoading: true,
  };

  componentDidMount = () => {
    // This would normally be an http request
    this.getProducts().then((prods) => {
      this.setState({
        products: prods,
        productsLoading: false,
      });
    });
  };

  getProducts = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(products), 2000);
    });

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleKeyDown = (evt) => {
    // Trigger modal on space or enter
    if (evt.key === ' ' || evt.key === 13) {
      evt.preventDefault();
      this.openModal();
    }
  };

  handleDelete = (id) => {
    this.setState({
      itemsInCart: this.state.itemsInCart.filter(item => item.id !== id),
    });
  };

  handleChange = (id) => {
    this.setState({
      itemsInCart: this.state.itemsInCart.map((item) => {
        if (item.id !== id) return item;

        return Object.assign({}, item, {
          qty: item.qty + 1,
        });
      }),
    });
  };

  render() {
    return this.state.productsLoading ? (
      <Button text="Adding to shopping bag..." />
    ) : (
      <div>
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
          products={this.state.products}
          discount={this.state.discount}
        />
      </div>
    );
  }
}

export default ShoppingCart;
