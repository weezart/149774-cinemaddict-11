import {createElement} from "../utils.js";

const createMenuTemplate = (films) => {
  const countWatchList = films.filter((it) => it.isAtWatchlist).length;
  const countWatchedFilms = films.filter((it) => it.isWatched).length;
  const countFavoriteFilms = films.filter((it) => it.isFavorite).length;

  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${countWatchList}</span></a>
        <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${countWatchedFilms}</span></a>
        <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${countFavoriteFilms}</span></a>
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};

export default class Menu {
  constructor(films) {
    this._films = films;
    this._element = null;
  }

  getTemplate() {
    return createMenuTemplate(this._films);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
