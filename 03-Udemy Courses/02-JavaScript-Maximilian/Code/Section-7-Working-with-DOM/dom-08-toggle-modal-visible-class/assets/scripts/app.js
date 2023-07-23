const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
// const successAddMovieButton = document.getElementsByClassName('btn');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const entryText = document.querySelector('main section');
const userInputs = addMovieModal.querySelectorAll('input');

const deleteMovieModal = document.getElementById('delete-modal');

// const userInputs = addMovieModal.getElementsByTagName('input');
const movies = [];

const updateUiHandler = () => {
  if (movies.length === 0) {
    entryText.style.display = 'block';
  } else {
    entryText.style.display = 'none';
  }
};
const closeMovieDeletionModal = () => {
  toggleBackDrop();
  deleteMovieModal.classList.remove('visible');
};

const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.removeChild(listRoot.children[movieIndex]);
  closeMovieDeletionModal();
  console.log(movies);
  updateUiHandler();
};

const deleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add('visible');
  toggleBackDrop();

  const cancelDeleteMovieButton =
    deleteMovieModal.querySelector('.btn--passive');
  let DeleteMovieButton = deleteMovieModal.querySelector('.btn--danger');

  DeleteMovieButton.replaceWith(DeleteMovieButton.cloneNode(true));

  DeleteMovieButton = deleteMovieModal.querySelector('.btn--danger');

  cancelDeleteMovieButton.removeEventListener('click', closeMovieDeletionModal);
  cancelDeleteMovieButton.addEventListener('click', closeMovieDeletionModal);
  DeleteMovieButton.addEventListener('click', deleteMovie.bind(null, movieId));
};

const renderNewMovieElement = (id, title, image, rating) => {
  const newMovieELement = document.createElement('li');
  newMovieELement.className = 'movie-element';
  newMovieELement.innerHTML = `
  <div class="movie-element__image">
  <img src="${image}" alt="${title}">
  </div>
  <div class="movie-element__info">
  <h2>${title}</h2>
  <p>${rating} / 5 Stars </p>
  </div>
  `;
  newMovieELement.addEventListener('click', deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieELement);
};

const showMovieModal = () => {
  addMovieModal.classList.add('visible');
  toggleBackDrop();
};
const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
};

const toggleBackDrop = () => {
  backdrop.classList.toggle('visible');
};

const clearAddMovieInputs = () => {
  for (const userinput of userInputs) {
    userinput.value = '';
  }
};

const backdropCLickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearAddMovieInputs();
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  toggleBackDrop();
  clearAddMovieInputs();
};
const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue.trim() < 1 ||
    +ratingValue.trim() > 5
  ) {
    alert('Please Enter a valid rating value between 1 and 5');
    return;
  }
  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  console.log(movies);
  clearAddMovieInputs();
  closeMovieModal();
  toggleBackDrop();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUiHandler();
};

startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropCLickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
