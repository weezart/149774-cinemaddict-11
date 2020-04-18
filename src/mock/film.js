import {getRandomArrayItem, getRandomizedReducedArray, getRandomIntegerNumber} from "../utils.js";
import {DESCRIPTIONS, COMMENT_EMOTIONS, ACTORS, GENRES, COUNTRIES, WRITERS, DIRECTOR_NAMES, FILM_NAMES, POSTERS, MILLISECONDS_IN_YEAR} from "../const.js";


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
    poster: getRandomArrayItem(POSTERS),
    rating: getRandomIntegerNumber(10, 100) / 10,
    originalName: filmName,
    director: getRandomArrayItem(DIRECTOR_NAMES),
    writers: getRandomizedReducedArray(WRITERS, getRandomIntegerNumber(0, 3)),
    actors: getRandomizedReducedArray(ACTORS, getRandomIntegerNumber(1, 5)),
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
