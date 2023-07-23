const addMovieModal = document.getElementById('add-modal');
// const addMovieModel = document.querySelector('#add-modal');
// const addMovieModel = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;

const toggleMovieModal = () => {
  addMovieModal.classlist.toggle('visible');
};

startAddMovieButton.addEventListener('click');
