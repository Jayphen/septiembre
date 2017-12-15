import getItem from './getItem';

// Takes an array of store products, items in cart, and discount
// Returns a calculated total price

const getTotal = (products, items, discount) => {
  const beforeDiscount = items.reduce((total, item) => {
    const { id, qty } = item;
    const current = getItem(products, id);
    const linePrice = qty * current.price;

    return total + linePrice;
  }, 0);
  return beforeDiscount - beforeDiscount * (discount / 100);
};

export default getTotal;
