import React from 'react';
import { shallow } from 'enzyme';
import ComicBook from './ComicBook';

describe('ComicBook.js', () => {
  it('should render the correct component when it mounts', () => {
    const comic =  {
      title: 'Spiderman',
      cover: 'http://some-image.com',
      description: 'blah, blah, blah',
    };
    const wrapper = shallow(<ComicBook comic={comic}/>);

    expect(wrapper.find('.comic-book-card').length).toBe(1);
    expect(wrapper.find('.comic-description').length).toBe(1);
  });

  it('should render the correct labels', () => {
    const comic =  {
      title: 'Spiderman',
      cover: 'http://some-image.com',
      description: 'blah, blah, blah',
    };
    const wrapper = shallow(<ComicBook comic={comic}/>);

    const title = wrapper.find('.comic-title').props().children;
    const cover = wrapper.find('.comic-cover').props().src;
    const description = wrapper.find('.comic-description').props().children;

    expect(title).toBe(comic.title);
    expect(cover).toBe(comic.cover);
    expect(description).toBe(comic.description);
  });
});
