import {getRandomArrayItem, getRandomizedReducedArray, getRandomIntegerNumber} from "../utils.js";

const FILM_NAMES = [
  `Made for Each Other`,
  `Popeye the Sailor Meets Sindbad the Sailor`,
  `Sagebrush Trail`,
  `Santa Claus Conquers the Martians`,
  `The Dance of Life`,
  `The Great Flamarion`,
  `The Man with the Golden Arm`,
];

const POSTERS = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`,
];

const DIRECTOR_NAMES = [
  `Anthony Mann`,
  `John Dighton`,
  `William Wyler`,
  `Neil Burger`,
  `Brendon Boyea`,
  `Luca Bucura`,
];

const WRITERS = [
  `Anne Wigton`,
  `Heinz Herald`,
  `Richard Weil`,
  `Dalton Trumbo`,
  `Ian McLellan Hunter`,
  `John Dighton`,
  `Henri Alekan`,
  `Franz Planer`,
  `Georges Auric`,
  `Hal Pereira`,
  `Walter H. Tyler`,
];

const ACTORS = [
  `Erich von Stroheim`,
  `Mary Beth Hughes`,
  `Dan Duryea`,
  `Gregory Peck`,
  `Audrey Hepburn`,
  `Eddie Albert`,
  `Hartley Power`,
  `Harcourt Williams`,
  `Margaret Rawlings`,
  `Tullio Carminati`,
  `Paolo Carlini`,
  `Claudio Ermelli`,
  `Paola Borboni`,
];

const EMOJI = [
  'angry.png',
  'puke.png',
  'sleeping.png',
  'smile.png',
];

const DESCRIPTIONS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`,
];

const GENRES = [
  `Musical`,
  `Western`,
  `Drama`,
  `Comedy`,
  `Cartoon`,
  `Mystery`,
  `Film-Noir`,
];

const COUNTRIES = [
  `USA`,
  `India`,
  `France`,
  `Canada`,
  `Russia`,
  `UK`
];

const COMMENT_EMOTIONS = [`angry`, `puke`, `sleeping`, `smile`];
const MILLISECONDS_IN_YEAR = 1000 * 60 * 60 * 24 * 30 * 12;

const generateRandomComment = () => {
  return {
    message: getRandomArrayItem(DESCRIPTIONS),
    emotion: getRandomArrayItem(COMMENT_EMOTIONS),
    author: getRandomArrayItem(ACTORS),
    commentDate: Date.now() - Math.round(Math.random() * MILLISECONDS_IN_YEAR)
  };
};

const generateComments = (count) => {
  const comments = [];
  for (let i = 0; i < count; i++) {
    comments.push(generateRandomComment());
  }
  return comments;
};

const generateFilm = () => {
  const filmName = getRandomArrayItem(FILM_NAMES);
  return {
    name: filmName,
    posterImage: getRandomArrayItem(POSTERS),
    rating: getRandomIntegerNumber(10, 100) / 10,
    originalName: filmName,
    director: getRandomArrayItem(DIRECTOR_NAMES),
    writers: getRandomizedReducedArray(WRITERS, getRandomIntegerNumber(0, 3)),
    actors: getRandomizedReducedArray(ACTORS, getRandomIntegerNumber(5, 10)),
    releaseDate: Date.now() - getRandomIntegerNumber(0, 25) * MILLISECONDS_IN_YEAR,
    runtime: `${getRandomIntegerNumber(0, 3)}h ${getRandomIntegerNumber(0, 59)}m`,
    country: getRandomArrayItem(COUNTRIES),
    genres: getRandomizedReducedArray(GENRES, getRandomIntegerNumber(0, 3)),
    description: getRandomizedReducedArray(DESCRIPTIONS, getRandomIntegerNumber(1, 5)).join(` `),
    ageRating: getRandomIntegerNumber(0, 18),
    comments: generateComments(getRandomIntegerNumber(0, 5)),
    isFavorite: Boolean(Math.round(Math.random())),
    isAtWatchlist: Boolean(Math.round(Math.random())),
    isWatched: Boolean(Math.round(Math.random()))
  };
};

const generateFilms = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateFilm);
};


export {generateFilm, generateFilms};
