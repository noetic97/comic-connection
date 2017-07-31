import React from 'react';
import { shallow, mount } from 'enzyme';
import ComicBookList from './ComicBookList';

describe('ComicBookList.js', () => {
  const comics =  [
    {
      title: 'Spiderman',
      cover: 'http://some-image.com',
      description: 'blah, blah, blah',
      id: '1',
    },
    {
      title: 'Superman',
      cover: 'http://some-other-image.com',
      description: 'Yep, Yep, Yep',
      id: '2',
    },
  ];
  const isLoading = false;

  it('should render the correct component when it mounts', () => {
    const wrapper = shallow(<ComicBookList comics={comics}
                                           isLoading={isLoading}/>);

    expect(wrapper.find('.comic-display').length).toBe(1);
  });

  it('should render the correct components inside of it', () => {
    const wrapper = shallow(<ComicBookList comics={comics}
                                           isLoading={isLoading}/>);

    expect(wrapper.find('Connect(ComicSelector)').length).toBe(1);
    expect(wrapper.find('ComicBook').length).toBe(2);
  });

  it('should not render comics if isLoading is true', () => {
    const wrapper = shallow(<ComicBookList comics={comics}
                                           isLoading={!isLoading}/>);

    expect(wrapper.find('Connect(ComicSelector)').length).toBe(1);
    expect(wrapper.find('ComicBook').length).toBe(0);
  });
});
