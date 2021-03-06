import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ModalClose from './ModalClose';
import CartItems from './CartItems';
import CartTotal from './CartTotal';
import CartDiscount from './CartDiscount';
import Button from './Button';

const CartModal = ({
  isOpen,
  onRequestClose,
  itemsInCart,
  handleDelete,
  handleChange,
  products,
  discount,
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
    <div className="shopping-cart--contents">
      <header className="shopping-cart--header">
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
        {/* Show the discount panel if there is a discount applied and items in cart */}
        {itemsInCart.length > 0 &&
          discount > 0 && (
            <CartDiscount percent={discount} itemsInCart={itemsInCart} products={products} />
          )}
        {itemsInCart.length > 0 && (
          <CartTotal itemsInCart={itemsInCart} products={products} discount={discount} />
        )}
      </React.Fragment>

      {/* Fade in the empty cart notice after a delay equal to the exit animation of the cart items */}
      <ReactCSSTransitionGroup
        transitionName="empty-cart"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {itemsInCart.length === 0 && (
          <div className="empty-cart">
            <span>There's nothing in your bag!</span>
            <button className="btn btn--secondary" onClick={onRequestClose}>
              <span className="btn--secondary-underline">Continue shopping</span>
            </button>
          </div>
        )}
      </ReactCSSTransitionGroup>
    </div>
    {itemsInCart.length !== 0 && (
      <div className="cart--actions">
        <Button text="Continue shopping" type="tertiary" handleClick={onRequestClose} />
        <Button text="Go to checkout" />
      </div>
    )}
  </Modal>
);

CartModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func,
  itemsInCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDelete: PropTypes.func,
  handleChange: PropTypes.func,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  discount: PropTypes.number,
};

CartModal.defaultProps = {
  onRequestClose: () => {},
  handleDelete: () => {},
  handleChange: () => {},
  discount: 0,
};

Modal.setAppElement('.add-to-bag');

export default CartModal;
