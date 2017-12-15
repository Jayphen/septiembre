// Takes an array of products and a product id
// Returns the matching product

const getItem = (products, id) => products.find(product => product.id === id);

export default getItem;
