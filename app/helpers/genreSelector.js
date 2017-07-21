const genreList = {
  'Science-Fiction': 'concept/4015-56103',
  'Romance': 'concept/4015-56132',
  'Mystery': 'concept/4015-56288',
  'Horror': 'concept/4015-55939',
  'History': 'concept/4015-55924',
  'Fantasy': 'concept/4015-56043',
  'War': 'concept/4015-56133',
  'Religion/Spirituality': 'concept/4015-56101',
  'Biography': 'concept/4015-57184',
  'Superhero': 'concept/4015-49870',
};

const randomizeGenre = (obj) => {
  const genreArray = Object.keys(obj);
  const randomNumber = Math.floor(Math.random() * genreArray.length);
  return genreArray[randomNumber];
};

const genreReturn = (obj) => {
  const key = randomizeGenre(obj);
  return genreList[key] ? genreList[key] : null;
};

export const genre = genreReturn(genreList);
