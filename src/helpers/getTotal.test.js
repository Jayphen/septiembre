import getTotal from './getTotal';

describe('getTotal()', () => {
  it('calculates the correct total', () => {
    const products = [
      {
        id: 1,
        price: 10,
      },
      {
        id: 2,
        price: 10,
      },
    ];
    const itemsInCart = [
      {
        id: 1,
        qty: 5,
      },
      { id: 2, qty: 5 },
    ];
    const discount = 10;

    expect(getTotal(products, itemsInCart, discount)).toEqual(90);
  });
});
