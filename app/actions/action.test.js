import * as actions from '../actions';
import fetchMock from 'fetch-mock';
import React from 'react';
import { mount  } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import APIkey from '../APIkey';

describe('actions', () => {

  it.skip('fetchMovieData should return a successful fetch', async () => {
    const movieUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    const resolveAfter2Seconds = () => new Promise(resolve => setTimeout(() => resolve(), 2000))

    fetchMock.get(movieUrl, { status: 200, body: {successMsg: 'YAY' }})

    await resolveAfter2Seconds()

    expect(fetchMock.called()).toBe(true)
  })

  it('fetchHasErrored should return a boolean', () => {
    const fetchError = true;
    const expectedState =  {
      type: 'FETCH_HAS_ERRORED',
      hasErrored: true
    };

    expect(actions.fetchHasErrored(fetchError)).toEqual(expectedState)
  })

  it('fetchIsLoading should return a boolean', () => {
    const fetchLoading = true;
    const expectedState =  {
      type: 'FETCH_IS_LOADING',
      isLoading: true
    };

    expect(actions.fetchIsLoading(fetchLoading)).toEqual(expectedState)
  })

  it('moviesFetchDataSuccess should return an object', () => {
    const movieObject = {};
    const expectedState =  {
      type: 'MOVIES_FETCH_DATA_SUCCESS',
      movies: {}
    };

    expect(actions.moviesFetchDataSuccess(movieObject)).toEqual(expectedState)
  })

  it('createUser should return an object', () => {
    const createUserCreds = {
      name: 'joe',
      email: 'joe@joe.joe',
      password: 'joeeojjoeeoj'
    };

    const expectedState =  {
      type: 'CREATE_USER',
      userCreds: createUserCreds
    };

    expect(actions.createUser(createUserCreds)).toEqual(expectedState)
  })

  it('loginUser should return an object', () => {
    const logInCreds = {
      email: 'suhdude@itslit.com',
      password: 'whytho'
    };
    const expectedState =  {
      type: 'LOGIN_USER',
      userCreds: logInCreds
    };

    expect(actions.loginUser(logInCreds)).toEqual(expectedState)
  })

  it('logOutUser should dispatch an action', () => {
    const expectedState =  {
      type: 'LOGGED_OUT_USER',
    };

    expect(actions.logOutUser()).toEqual(expectedState)
  })

  it('userFavorites should return an objject', () => {
    const data = {
      status: 'success',
      data: [
        {
        id: 5,
        movie_id: 324852,
        overview: "Gru and his wife Lucy .",
        poster_path: "https://image.tmdb.org/t/p/w500/5qcUGqWoWhEsoQwNUrtf3y3fcWn.jpg",
        release_date: "2017-06-29",
        title: "Despicable Me 3",
        user_id: 1,
        vote_average: "6.1"}
      ]
    };
    const expectedState =  {
      type: 'USER_FAVORITES',
      userFavorites: data
    };
    expect(actions.userFavorites(data)).toEqual(expectedState)
  })

})
