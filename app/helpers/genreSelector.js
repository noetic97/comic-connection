import ComicBook from './comicBook'
const genreList = {
  'Science-Fiction': 'concept/4015-56103',
  'Romance': 'concept/4015-56132',
  'Mystery': 'concept/4015-55842',
  'Horror': 'concept/4015-55939',
  'History': 'concept/4015-55924',
  'Fantasy': 'concept/4015-56043',
  'Fantasy -2': 'concept/4015-55884',
  'Drama': 'concept/4015-56132',
  'Religion/Spirituality': 'concept/4015-56101',
  'Biography': 'concept/4015-57184',
  'Superhero': 'concept/4015-49870',
  'Dark-Comedy': 'concept/4015-56054',
  'Parody': 'concept/4015-55693',
  'Adult': 'concept/4015-56064',
};

export const curatedGenres = {
  'Science-Fiction': {
    'Fear Agent': 'volume/4050-20725',
    'Saga': 'volume/4050-46568',
    'Y the Last Man': 'volume/4050-9419',
    'We3': 'volume/4050-18010',
    'Bitch Planet': 'volume/4050-78698',
    'Lazarus': 'volume/4050-64204',
    'Mind MGMT': 'volume/4050-49191',
    'The Manhattan Projects': 'volume/4050-46365',
    'Transmetropolitan': 'volume/4050-5989',
    'Akira': 'volume/4050-4041',
  },
  'Romance': {
    'Scott Pilgrim': 'volume/4050-25478',
    'Habibi': 'volume/4050-27370',
    'Fresh Romance': 'volume/4050-82267',
    'I Killed Adolf Hitler': 'volume/4050-22364',
    'Love and Capes': 'volume/4050-32869',
    'Insexts': 'volume/4050-86537',
    'Sex Criminals': 'volume/4050-67679',
    'Alex + Ada': 'volume/4050-68903',
    'RASL': 'volume/4050-20693',
    'The Fountain': 'volume/4050-25628',
  },
  'Drama': {
    'I Kill Giants': 'volume/4050-22279',
    'daytripper': 'volume/4050-30319',
    'Black Hole': 'volume/4050-21545',
    'Noble Causes': 'volume/4050-11274',
    'One More Year': 'volume/4050-101649',
    'Vision': 'volume/4050-85793',
    '100 Bullets': 'volume/4050-6306',
    'Mother Come Home': 'volume/4050-65410',
    'Locke & Key': 'volume/4050-61779',
    'Morning Glories': 'volume/4050-39321',
  },
  'Mystery': {
    'Alias': 'volume/4050-9452',
    'Torso': 'volume/4050-6256',
    'Criminal': 'volume/4050-18454',
    'Why Are You Doing This?': 'volume/4050-33320',
    'The Black Monday Murders': 'volume/4050-92953',
    'Revival': 'volume/4050-50379',
    'The Sheriff of Babylon': 'volume/4050-86393',
    'Southern Bastards': 'volume/4050-73392',
    'The Fade Out': 'volume/4050-76442',
    'Fatale': 'volume/4050-44935',
    'Fairest': 'volume/4050-18184',
  },
  'Horror': {
    'Black Magick': 'volume/4050-85558',
    'Wytches': 'volume/4050-77403',
    'American Vampire': 'volume/4050-32051',
    'Crossed': 'volume/4050-22496',
    'The Walking Dead': 'volume/4050-18166',
    'Neonomicon': 'volume/4050-34578',
    'Tales from the Crypt': 'volume/4050-38203',
    'Harrow County': 'volume/4050-81991',
    'Clean Room': 'volume/4050-85426',
    'Nailbiter': 'volume/4050-73649',
    '30 Days of Night': 'volume/4050-11266',
  },
  'Historical': {
    'From Hell': 'volume/4050-26681',
    'Maus': 'volume/4050-18487',
    'Palestine': 'volume/4050-67486',
    'Pride of Baghdad': 'volume/4050-78545',
    'March': 'volume/4050-66338',
    'American Born Chinese': 'volume/4050-20564',
    'Buddha': 'volume/4050-39705',
    'Anne Frank': 'volume/4050-38317',
    'Trinity': 'volume/4050-62899',
    'The Carton History of the Universe': 'volume/4050-89500',
  },
  'Fantasy': {
    'Monstress': 'volume/4050-85776',
    'Fables': 'volume/4050-9723',
    'Sandman': 'volume/4050-4207',
    'The Unwritten': 'volume/4050-2626',
    'Seven to Eternity': 'volume/4050-94290',
    'Invisibles': 'volume/4050-5247',
    'Red Sonja': 'volume/4050-65387',
    'The Spire': 'volume/4050-82987',
    'Mirror': 'volume/4050-87809',
    'Deadly Class': 'volume/4050-71032',
  },
  'Religion/Spirituality': {
    'The Wicked The Divine': 'volume/4050-74863',
    'Promethea': 'volume/4050-6568',
    'The Goddamned': 'volume/4050-85946',
    'Y: The Last Man': 'volume/4050-9419',
    'Testament': 'volume/4050-18642',
    'The Contract with God Trilogy': 'volume/4050-99880',
    'Punk Rock Jesus': 'volume/4050-50385',
    'Boxers & Saints': 'volume/4050-67244',
    'Underwater Welder': 'volume/4050-50771',
    'Preacher': 'volume/4050-5516',
  },
  'Auto/Biography': {
    'Blankets': 'volume/4050-20940',
    'Nothing Lasts Forever': 'volume/4050-101949',
    'American Splendor': 'volume/4050-28361',
    'Sentences: The Life of MF Grimm': 'volume/4050-25608',
    'Persepolis': 'volume/4050-23005',
    'Fun Home': 'volume/4050-34160',
    'Stitches': 'volume/4050-39674',
    'Malcom X': 'volume/4050-68514',
    'Logicomix': 'volume/4050-36445',
    'Laika': 'volume/4050-49576',
  },
  'Comedy': {
    'I Hate Fairyland': 'volume/4050-85292',
    'Jughead': 'volume/4050-91893',
    'Chew': 'volume/4050-26611',
    'Scurvy Dogs': 'volume/4050-23974',
    'Bone': 'volume/4050-6082',
    'The Flinstones': 'volume/4050-92026',
    'Milk and Cheese': 'volume/4050-18362',
    'Futurama': 'volume/4050-18364',
    'Groo': 'volume/4050-3508',
    'Giant Days': 'volume/4050-80753',
    'Ghosts': 'volume/4050-94093',
  },
  'Children': {
    'Goldie Vance': 'volume/4050-89593',
    'Princeless': 'volume/4050-45293',
    'Donald Duck': 'volume/4050-82112',
    'Secret Coders': 'volume/4050-84993',
    'Space Battle Lunchtime': 'volume/4050-90123',
    'Adventure Time': 'volume/4050-45728',
    'Bone': 'volume/4050-6082',
    'Herobear and the Kid': 'volume/4050-66404',
    'The Muppet Show': 'volume/4050-31074',
    'Owly': 'volume/4050-32918',
    'Tiny Titans': 'volume/4050-20512',
    'Abigail and the Snowman': 'volume/4050-79161',
  },
  'Superhero': {
    'Astro City': 'volume/4050-62857',
    'Invincible': 'volume/4050-17993',
    'Watchmen': 'volume/4050-29927',
    'Planetary': 'volume/4050-7506',
    'Copra': 'volume/4050-62603',
    'Black Hammer': 'volume/4050-92354',
    'All-Star Superman': 'volume/4050-18139',
    'Marvels': 'volume/4050-5313',
    'Powers': 'volume/4050-18034',
    'Hellboy': 'volume/4050-33634',
  },
};

const randomizeGenre = (obj) => {
  const genreArray = Object.keys(obj);
  const randomNumber = Math.floor(Math.random() * genreArray.length);
  return genreArray[randomNumber];
};

const genreReturn = (obj) => {
  const key = randomizeGenre(obj);
  return obj[key] ? obj[key] : null;
};

export const randomGenre = genreReturn(genreList);

export const findGenre = (string, obj) => {
  const genreMatch = Object.keys(obj).filter((word) => {
    return word === string;
  });
  const genreObj = genreMatch.map((el) => obj[el]);
  return genreObj;
};


export const fetchSelectedGenre = (obj) => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const selectedKeys = Object.keys(obj);
  const arrayOfPromises = selectedKeys.map((comic) => {
    return fetch(proxyUrl + `https://comicvine.gamespot.com/api/${obj[comic]}/?api_key=580e163d8ac98b1ffac84a2d62f73ecda71a448e&format=json`)
    .then(res => res.json());
  });
  return Promise.all(arrayOfPromises)
  .then(comicArray => {
    // console.log(comicArray, 'in promise.all');
    return comicArray.map((comic) => {
      const name = comic.results.name;
      const description = comic.results.description;
      const comicBooks = new ComicBook(name, description);
      console.log(comicBooks, 'cb');
      return comicBooks;
    });
  } );
};


// comicArray.map((comic) => {
//   const firstComic = comic.results.issues[0].api_detail_url;
//   const firstIssueArray =  fetch(proxyUrl + firstComic + '?api_key=580e163d8ac98b1ffac84a2d62f73ecda71a448e&format=json')
//   .then(res => res.json())
//   console.log(firstIssueArray, 'fi array');
//   // .then(data = console.log(data))
//   return Promise.all(firstIssueArray)
//   .then(issue => console.log(issue.results.image.super_url))
// })
