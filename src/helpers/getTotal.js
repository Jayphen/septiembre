import getSubtotal from './getSubtotal';

// Takes an array of store products, items in cart, and discount
// Returns a calculated total price
const getTotal = (products, items, discount) => {
  const subtotal = getSubtotal(products, items);
  return subtotal - subtotal * (discount / 100);
};

export default getTotal;
