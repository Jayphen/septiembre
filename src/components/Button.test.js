import React from 'react';
import Button from './Button';

describe('<Button />', () => {
  it('has a default label', () => {
    const button = shallow(<Button
      handleClick={() => {}}
      handleKeyDown={() => {}}
    />);
    expect(button.contains('Submit')).toEqual(true);
  });

  it('uses the label passed to it', () => {
    const button = shallow(<Button
      text="I love lamp"
      handleClick={() => {}}
      handleKeyDown={() => {}}
    />);
    expect(button.contains('I love lamp')).toEqual(true);
  });

  it('handles events passed to it on click', () => {
    const mockFn = jest.fn();
    const button = shallow(<Button
      handleClick={mockFn}
      handleKeyDown={mockFn}
    />);

    button.find('button').simulate('click');
    expect(mockFn).toBeCalled();
  });

  it('handles events passed to it on keydown', () => {
    const mockFn = jest.fn();
    const button = shallow(<Button
      handleClick={mockFn}
      handleKeyDown={mockFn}
    />);

    button.find('button').simulate('keydown');
    expect(mockFn).toBeCalled();
  });
});
