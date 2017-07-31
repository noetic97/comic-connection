import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header.js', () => {
  const wrapper = shallow(<Header />);

  it('should render the correct component when it mounts', () => {
    expect(wrapper.find('header').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('NavLink').length).toBe(4);
  });
});
