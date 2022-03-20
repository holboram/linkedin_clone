import { editContactInfo } from './editContactInfo.js';

const saveBtn = document.getElementById('save-btn');

const modal = document.querySelector('.wrapper__modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.wrapper__modal-close-btn');
const btnOpenModal = document.querySelector('.wrapper-left__contact-btn');
const phoneType = document.querySelector('#phone-type');
const month = document.querySelector('#month');
const day = document.querySelector('#day');

const openModal = () => {
  modal.classList.remove('wrapper__modal--hidden');
  overlay.classList.remove('overlay--hidden');
  phoneType.setAttribute('data-phone-type', phoneType.textContent);
  month.setAttribute('data-month', month.textContent);
  day.setAttribute('data-day', day.textContent);
};

export const closeModalContactInfo = () => {
  modal.classList.add('wrapper__modal--hidden');
  overlay.classList.add('overlay--hidden');
};

export const displayContactInfo = () => {
  btnOpenModal.addEventListener('click', openModal);

  btnCloseModal.addEventListener('click', closeModalContactInfo);
  overlay.addEventListener('click', closeModalContactInfo);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.classList.contains('wrapper__modal--hidden')) {
      closeModal();
    }
  });
};

saveBtn.addEventListener('click', editContactInfo);
