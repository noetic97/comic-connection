import { APIkey } from '../../apiKey';
import { randomGenre, selectedVolume } from './genreSelector';

const BASE_URL = 'https://comicvine.gamespot.com/api/';
export const RANDOM_COMIC_URL = `${BASE_URL}${randomGenre}/?api_key=${APIkey}&format=json`;
export const SELECTED_COMIC_URL = `${BASE_URL}${selectedVolume}/?api_key=${APIkey}&format=json`;
