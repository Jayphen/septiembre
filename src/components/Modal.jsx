import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ModalClose from './ModalClose';
import CartItems from './CartItems';
import CartTotal from './CartTotal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const CartModal = ({
  isOpen,
  onRequestClose,
  itemsInCart,
  handleDelete,
  handleChange,
  products,
}) => (
  <Modal
    tabIndex={0}
    id="viewCart"
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    closeTimeoutMS={300}
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
      <ModalClose handleClick={onRequestClose} fill="#938F9C" />
    </header>
    <React.Fragment>
      <CartItems
        handleDelete={handleDelete}
        handleChange={handleChange}
        items={itemsInCart}
        products={products}
      />
      {itemsInCart.length > 0 && <CartTotal itemsInCart={itemsInCart} products={products} />}
    </React.Fragment>

    <ReactCSSTransitionGroup
      transitionName="empty-cart"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
      {itemsInCart.length === 0 && <div className="empty-cart">Cart is empty</div>}
    </ReactCSSTransitionGroup>
  </Modal>
);

CartModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  itemsInCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Modal.setAppElement('.add-to-bag');

export default CartModal;
