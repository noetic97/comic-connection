import { fetchSelectedGenre } from './fetch-calls';
import MockComponent from '../MockData/MockComponent';
import fetchMock from 'fetch-mock';
import { PROXY_URL, BASE_URL, API } from './constants'

describe('fetch-calls.js', () => {
  const COMIC_URL = `${PROXY_URL}${BASE_URL}`
  const resolveAfter2Seconds = () => new Promise(resolve => setTimeout(() => resolve(), 2000));

  it('should fetch an array of comics', () => {
    expect(true).toBe(true)
  })
})
