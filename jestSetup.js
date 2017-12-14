import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// Makes Enzyme functions available in all test
global.shallow = shallow;
global.render  = render;
global.mount   = mount;
