import { APIkey } from '../../apiKey';
import { genre } from './genreSelector';

const BASE_URL = 'https://comicvine.gamespot.com/api/';
const COMIC_URL = `${BASE_URL}${genre}/?api_key=${APIkey}&format=json`;

export default COMIC_URL;
