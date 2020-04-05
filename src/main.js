import {createFilmCardTemplate} from "./components/film-card";
import {createFilmDetailTemplate} from "./components/film-detail";
import {createFilmsTemplate} from "./components/films";
import {createFooterStatsTemplate} from "./components/footer-stats";
import {createHeaderProfileTemplate} from "./components/header-profile";
import {createLoadMoreButtonTemplate} from "./components/load-more-button";
import {createMenuTemplate} from "./components/menu";

const CARD_COUNT = 5;
const CARD_EXTRA_COUNT = 2;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteBodyElement = document.querySelector(`body`);
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);
const footerStatsElement = document.querySelector(`.footer__statistics`);

render(siteHeaderElement, createHeaderProfileTemplate());
render(siteMainElement, createMenuTemplate());
render(siteMainElement, createFilmsTemplate());
render(footerStatsElement, createFooterStatsTemplate());

const filmsListContainerElements = siteMainElement.querySelectorAll(`.films-list__container`);
const [filmsListElement, filmsTopRatedElement, filmsMostCommentedElement] = filmsListContainerElements;

render(filmsListElement, createLoadMoreButtonTemplate(), `afterend`);

for (let i = 0; i < CARD_COUNT; i++) {
  render(filmsListElement, createFilmCardTemplate());
}

for (let i = 0; i < CARD_EXTRA_COUNT; i++) {
  render(filmsTopRatedElement, createFilmCardTemplate());
  render(filmsMostCommentedElement, createFilmCardTemplate());
}

render(siteBodyElement, createFilmDetailTemplate());
