import React from 'react';
import { mount  } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
// import MockComponent from '../MockData/MockComponent';
// import fetchMock from 'fetch-mock';
// import { RANDOM_COMIC_URL, PROXY_URL } from '../helpers/constants';
import ComicSelectorContainer from './ComicSelectorContainer';
import ComicSelector from '../components/ComicSelector/ComicSelector';
import thunk from 'redux-thunk';

const middleWare = [thunk];
const mockStore = configureMockStore(middleWare)({});

const setup = () => {
  const Container = mount(<Provider store={mockStore}><ComicSelectorContainer /></Provider>);
  const Component = Container.find(ComicSelector);

  return {
    Container,
    Component,
  };
};

describe.skip('ComicSelectorContainer', () => {
  const { Container, Component } = setup();
  it('should pass the appropriate props from state', () => {
    expect(Object.keys(Component.props())).toContain('getComicBooks');
  });

  it('should pass down the correct action creators', () => {
    expect(Object.keys(Container.props().store)).toContain('dispatch');
  });
});
