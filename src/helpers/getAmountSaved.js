import getSubtotal from './getSubtotal';

// Takes an array of store products, items in cart, and discount
// Returns the amount saved off subtotal
const getAmountSaved = (products, items, discount) => {
  const subtotal = getSubtotal(products, items);
  return discount / 100 * subtotal;
};

export default getAmountSaved;
