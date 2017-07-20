import { APIkey } from '../../apiKey';
import { genre } from './genreSelector';

export const COMIC_URL = `https://comicvine.gamespot.com/api/${genre}/?api_key=${APIkey}&format=json`;
