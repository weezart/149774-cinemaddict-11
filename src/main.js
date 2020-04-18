import {createFilmCardTemplate} from "./components/film-card";
import {createFilmDetailTemplate} from "./components/film-detail";
import {createFilmsTemplate} from "./components/films";
import {createFooterStatsTemplate} from "./components/footer-stats";
import {createHeaderProfileTemplate} from "./components/header-profile";
import {createLoadMoreButtonTemplate} from "./components/load-more-button";
import {createMenuTemplate} from "./components/menu";
import {generateFilms} from "./mock/film.js";

const FILMS_COUNT = 20;
const CARD_EXTRA_COUNT = 2;
const SHOWING_FILMS_COUNT_ON_START = 5;
const SHOWING_FILMS_COUNT_BY_BUTTON = 5;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteBodyElement = document.querySelector(`body`);
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);
const footerStatsElement = document.querySelector(`.footer__statistics`);

const films = generateFilms(FILMS_COUNT);

render(siteHeaderElement, createHeaderProfileTemplate());
render(siteMainElement, createMenuTemplate(films));
render(siteMainElement, createFilmsTemplate());
render(footerStatsElement, createFooterStatsTemplate());

const filmsListContainerElements = siteMainElement.querySelectorAll(`.films-list__container`);
const [filmsListElement, filmsTopRatedElement, filmsMostCommentedElement] = filmsListContainerElements;

render(filmsListElement, createLoadMoreButtonTemplate(), `afterend`);

let showingFilmsCount = SHOWING_FILMS_COUNT_ON_START;

films.slice(0, SHOWING_FILMS_COUNT_ON_START)
  .forEach((film) => render(filmsListElement, createFilmCardTemplate(film)));

const loadMoreButton = siteMainElement.querySelector(`.films-list__show-more`);

loadMoreButton.addEventListener(`click`, () => {
  const prevTasksCount = showingFilmsCount;
  showingFilmsCount = showingFilmsCount + SHOWING_FILMS_COUNT_BY_BUTTON;

  films.slice(prevTasksCount, showingFilmsCount)
    .forEach((film) => render(filmsListElement, createFilmCardTemplate(film)));

  if (showingFilmsCount >= films.length) {
    loadMoreButton.remove();
  }
});

for (let i = 0; i < CARD_EXTRA_COUNT; i++) {
  render(filmsTopRatedElement, createFilmCardTemplate(films[i]));
  render(filmsMostCommentedElement, createFilmCardTemplate(films[i]));
}

render(siteBodyElement, createFilmDetailTemplate(films[0]));
