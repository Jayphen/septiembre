import turtleneck from '../../static/cashmere-turtleneck.jpg';
import denim from '../../static/denim-jacket.jpg';

const data = [
  {
    id: 1,
    price: 160,
    name: 'Destroyed Denim Jacket',
    sizes: [
      { long: 'Small', short: 'S' },
      { long: 'Medium', short: 'M' },
      { long: 'Large', short: 'L' },
    ],
    image: denim,
  },
  {
    id: 2,
    price: 360,
    name: 'Cashmere Turtleneck',
    sizes: [
      { long: 'Small', short: 'S' },
      { long: 'Medium', short: 'M' },
      { long: 'Large', short: 'L' },
    ],
    image: turtleneck,
  },
];

export default data;
