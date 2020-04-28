import FilmCardComponent from "./components/film-card";
import FilmDetailComponent from "./components/film-detail";
import FilmsComponent from "./components/films";
import FooterStatsComponent from "./components/footer-stats";
import HeaderProfileComponent from "./components/header-profile";
import LoadMoreButtonComponent from "./components/load-more-button";
import MenuComponent from "./components/menu";
import SortComponent from "./components/sort";

import {render, RenderPosition} from "./utils.js";
import {generateFilms} from "./mock/film.js";


const FILMS_COUNT = 20;
const CARD_EXTRA_COUNT = 2;
const SHOWING_FILMS_COUNT_ON_START = 5;
const SHOWING_FILMS_COUNT_BY_BUTTON = 5;

const renderFilm = (container, film) => {
  const siteBodyElement = document.querySelector(`body`);

  const filmCard = new FilmCardComponent(film);
  const onFilmPosterClick = (evt) => {
    if (!(evt.target.className === `film-card__title`) &&
      !(evt.target.className === `film-card__poster`) &&
      !(evt.target.className === `film-card__comments`)) {
      return;
    }
    const filmDetail = new FilmDetailComponent(film);
    const onPopupCloseClick = () => {
      filmDetail.getElement().remove();
      filmDetail.removeElement();
    };

    filmDetail.getElement().querySelector(`button.film-details__close-btn`).addEventListener(`click`, onPopupCloseClick);

    render(siteBodyElement, filmDetail.getElement(), RenderPosition.BEFOREEND);
  };

  filmCard.getElement().addEventListener(`click`, onFilmPosterClick);

  render(container, filmCard.getElement(), RenderPosition.BEFOREEND);
};

const renderFilmsList = (container, filmsList) => {
  filmsList.forEach((film) => {
    renderFilm(container, film);
  });
};


const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);
const footerStatsElement = document.querySelector(`.footer__statistics`);

const films = generateFilms(FILMS_COUNT);

render(siteHeaderElement, new HeaderProfileComponent().getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new MenuComponent(films).getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new SortComponent().getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilmsComponent().getElement(), RenderPosition.BEFOREEND);

const filmsListContainerElements = siteMainElement.querySelectorAll(`.films-list__container`);
const [filmsListElement, filmsTopRatedElement, filmsMostCommentedElement] = filmsListContainerElements;

let showingFilmsCount = SHOWING_FILMS_COUNT_ON_START;

renderFilmsList(filmsListElement, films.slice(0, SHOWING_FILMS_COUNT_ON_START));

render(filmsListElement, new LoadMoreButtonComponent().getElement(), RenderPosition.AFTER);

const loadMoreButton = siteMainElement.querySelector(`.films-list__show-more`);

loadMoreButton.addEventListener(`click`, () => {
  const prevTasksCount = showingFilmsCount;
  showingFilmsCount = showingFilmsCount + SHOWING_FILMS_COUNT_BY_BUTTON;

  renderFilmsList(filmsListElement, films.slice(prevTasksCount, showingFilmsCount));

  if (showingFilmsCount >= films.length) {
    loadMoreButton.remove();
  }
});

renderFilmsList(filmsTopRatedElement, films.slice(0, CARD_EXTRA_COUNT));
renderFilmsList(filmsMostCommentedElement, films.slice(0, CARD_EXTRA_COUNT));

render(footerStatsElement, new FooterStatsComponent().getElement(), RenderPosition.BEFOREEND);
