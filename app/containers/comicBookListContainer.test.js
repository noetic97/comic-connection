import React from 'react';
import { mount  } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ComicBookListContainer from './ComicBookListContainer';
import ComicBookList from '../components/ComicBookList/ComicBookList';

const mockStore = configureMockStore()({
  comics: [{
    title: 'Spiderman',
    cover: 'http://somewhere.com',
    description: 'blah, blah, blah',
    id: '1',
  },
  {
    title: 'Joe\'s world',
    cover: 'http://somewhereelse.com',
    description: 'sweet, sweet, sweet',
    id: '2',
  }],
  isLoading: true,
});

const setup = () => {
  const Container = mount(<Provider store={mockStore}><ComicBookListContainer /></Provider>);
  const Component = Container.find(ComicBookList);

  return {
    Container,
    Component,
  };
};

describe.skip('ComicBookListContainer', () => {
  const { Container, Component } = setup();
  it('should pass the appropriate props from state', () => {
    expect(Object.keys(Component.props())).toContain('comics', 'isLoading', 'toggleLoading');
  });

  it('should pass down the correct action creators', () => {
    expect(Object.keys(Container.props().store)).toContain('dispatch');
  });

  it('Should have set the proper values to state', () => {
    expect(Component.props().comics[0].title).toEqual('Spiderman');
    expect(Component.props().comics[1].id).toEqual('2');
    expect(Component.props().comics[1].description).toEqual('sweet, sweet, sweet');
    expect(Component.props().isLoading).toEqual(true);
  });
});
