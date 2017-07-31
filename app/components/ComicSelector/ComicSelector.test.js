import React from 'react';
import { shallow } from 'enzyme';
import ComicSelector from './ComicSelector';

describe('ComicSelector.js', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<ComicSelector getComicBooks={mockFn} />);

  beforeEach(() => {
    mockFn.mockReset();
  });

  it('should render the correct component when it mounts', () => {
    expect(wrapper.find('.genre-selector').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('option').length).toBe(13);
  });

  it('should run a function when the option value is changed', () => {
    const selectElement = wrapper.find('select');
    const optionValue = wrapper.find('option').children().nodes;

    expect(mockFn).toHaveBeenCalledTimes(0);

    selectElement.simulate('change', {
      target: {
        value: optionValue[1],
      },
    });

    expect(mockFn).toHaveBeenCalledTimes(1);

    selectElement.simulate('change', {
      target: {
        value: optionValue[6],
      },
    });

    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('should run a function when the button is clicked', () => {
    const button = wrapper.find('button');

    expect(mockFn).toHaveBeenCalledTimes(0);

    button.simulate('click');

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
