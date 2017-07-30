import React from 'react';
import { mount  } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import MockComponent from '../MockData/MockComponent';
import fetchMock from 'fetch-mock';
import { RANDOM_COMIC_URL, PROXY_URL } from '../helpers/constants';
import ComicSelectorContainer from './ComicSelectorContainer';
import ComicSelector from '../components/ComicSelector/ComicSelector';
import thunk from 'redux-thunk';

const middleWare = [thunk];
const mockStore = configureMockStore(middleWare)({});
const resolveAfter2Seconds = () => new Promise(resolve => setTimeout(() => resolve(), 2000));

// const setup = () => {
//
//   // console.log(PROXY_URL + RANDOM_COMIC_URL);
//   //
//   // fetchMock.get(PROXY_URL + RANDOM_COMIC_URL, 200, {
//   //   method: 'GET',
//   //   body: { results: {title: 'Spiderman'} },
//   // });
//
//   const Container = mount(<Provider store={mockStore}><ComicSelectorContainer /></Provider>);
//
//   const Component = Container.find(ComicSelector);
//
//   console.log(Component.debug());
//   console.log(Container.debug());
//
//   return {
//     Container,
//     Component,
//   };
// };

describe('ComicSelectorContainer', () => {
  // afterEach(() => {
  //   expect(fetchMock.calls().unmatched).toEqual([]);
  //   fetchMock.restore();
  // });

  // const { Container, Component } = setup();
  it.skip('should pass the appropriate props from state', () => {
    expect(Object.keys(Component.props())).toContain('getComicBooks');
  });

  it.skip('should pass down the correct action creators', () => {
    expect(Object.keys(Container.props().store)).toContain('dispatch');
  });
});
