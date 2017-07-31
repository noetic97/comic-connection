import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe('Loader.js', () => {
  const wrapper = shallow(<Loader />);

  it('should render the correct component when it mounts', () => {
    expect(wrapper.find('.loading-container').length).toBe(1);
    expect(wrapper.find('.loader-gif').length).toBe(1);
    expect(wrapper.find('.letter').length).toBe(10);
  });
});
