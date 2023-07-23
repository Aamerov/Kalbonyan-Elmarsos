const addMovie`Modal = document.getElementById('add-modal');
const header = document.querySelector('header');
const addbtn = header.querySelector('button');
addbtn.addEventListener('click', () => {
  addModal.classList.add('visible');
});
