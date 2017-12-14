import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ModalClose from './ModalClose';
import CartItems from './CartItems';

const CartModal = ({
  isOpen, onRequestClose, itemsInCart, handleDelete,
}) => (
  <Modal
    tabIndex={0}
    id="viewCart"
    isOpen
    onRequestClose={onRequestClose}
    aria={{
      labelledby: 'heading',
    }}
    overlayClassName={{
      base: 'shopping-cart-overlay',
      afterOpen: 'shopping-cart-overlay--after-open',
      beforeClose: 'shopping-cart-overlay--before-close',
    }}
    className={{
      base: 'shopping-cart',
      afterOpen: 'shopping-cart--after-open',
      beforeClose: 'shopping-cart--before-close',
    }}
  >
    <header>
      <h1 id="heading">Your shopping bag</h1>
      <ModalClose
        handleClick={onRequestClose}
        fill="#938F9C"
      />
    </header>
    <CartItems handleDelete={handleDelete} items={itemsInCart} />
  </Modal>
);

CartModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

Modal.setAppElement('.add-to-bag');

export default CartModal;
