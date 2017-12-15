import getItem from './getItem';

export default (products, items) =>
  items.reduce((total, item) => {
    const { id, qty } = item;
    const current = getItem(products, id);
    const linePrice = qty * current.price;

    return total + linePrice;
  }, 0);
