import { displayUserData } from '../common/displayUserData.js';

const modal = document.querySelector('.wrapper-contact__modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.wrapper-contact__modal-close-btn');
const btnOpenModal = document.querySelector('.wrapper__modal-edit-btn');

const openModal = () => {
  modal.classList.remove('wrapper-contact__modal--hidden');
};

const closeModal = () => {
  modal.classList.add('wrapper-contact__modal--hidden');
};

export const displayEditContact = () => {
  btnOpenModal.addEventListener('click', openModal);

  btnCloseModal.addEventListener('click', closeModal, displayUserData);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.classList.contains('wrapper-contact__modal--hidden')) {
      closeModal();
    }
  });
};
